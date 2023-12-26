import HomeIcon from '../../assets/icons/home.png';
import TodayIcon from '../../assets/icons/date.png';
import Ring from './Ring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ColorResult, GithubPicker } from 'react-color';
import uuid from 'react-uuid';
import { setLists } from '../../store/listSlice';

function Sidebar() {
  const lists = useAppSelector((state) => state.list);
  const chosenList = useAppSelector((state) => state.chosenList);
  console.log(chosenList);

  const dispatch = useAppDispatch();

  const [isNewList, setIsNewList] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [ring, setRing] = useState('black');

  const handleColorChange = (color: ColorResult) => {
    setRing(color?.hex);
  };

  const handleTextChange = (e: string) => {
    setText(e);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      event.preventDefault();
      setText((prev) => {
        return prev + event.key;
      });
    }
    if (event.key == 'Enter') {
      const updatedList = [
        ...lists,
        {
          id: uuid(),
          name: text.toUpperCase(),
          color: ring,
        },
      ];
      dispatch(setLists(updatedList));
      setText('');
      setRing('black');
      setIsNewList(false);
    }
  };

  const renderIcon = (color: string) => {
    switch (color) {
      case 'ALL':
        return <img src={HomeIcon} className="h-5 w-5" />;
      case 'TODAY':
        return <img src={TodayIcon} className="h-5 w-5" />;
      default:
        return <Ring color={color} isTitle={false} />;
    }
  };

  const handleNewList = () => [setIsNewList(!isNewList)];

  return (
    <div className="bg-white px-10 py-10 rounded-3xl shadow-2xl h-full">
      <div className="flex flex-col space-y-2">
        {lists?.map((list) => (
          <div
            key={list.id}
            className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer"
          >
            <div className="flex flex-row items-center space-x-3 ml-2">
              {renderIcon(list.color)}
              <div className="text-md">{list.name}</div>
            </div>
          </div>
        ))}
        {isNewList && (
          <div className="px-2 py-4">
            <div className="flex flex-row items-center space-x-3 ml-2">
              <div>
                <Menu as="div">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center h-full ">
                      <Ring color={ring} isTitle={false} />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 mt-1 w-0 bg-white shadow-lg focus:outline-none">
                      <GithubPicker onChange={handleColorChange} />
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <input
                className="outline-none "
                placeholder="Enter name of list"
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
          </div>
        )}
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div
            className="flex flex-row items-center space-x-3 ml-1.5"
            onClick={handleNewList}
          >
            {isNewList ? (
              <>
                <MinusIcon className="h-6 w-6" />
                <div className="text-md">Remove list</div>
              </>
            ) : (
              <>
                <PlusIcon className="h-6 w-6" />
                <div className="text-md">Create new list</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
