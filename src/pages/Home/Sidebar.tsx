import Ring from './Ring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  MinusIcon,
  PlusIcon,
  HomeIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ColorResult, GithubPicker } from 'react-color';
import uuid from 'react-uuid';
import { setLists } from '../../store/listSlice';
import { setChosenList } from '../../store/chosenListSlice';
import { IList, getInitialTheme } from '../../utils';

import toast from 'react-hot-toast';
import { ToggleSlider } from 'react-toggle-slider';
import { setTheme } from '../../store/themeSlice';
import List from './List';

function Sidebar() {
  const lists = useAppSelector((state) => state.list);
  const theme = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const initialTheme = getInitialTheme();

  const [isNewList, setIsNewList] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [ring, setRing] = useState('black');

  const handleColorChange = (color: ColorResult) => {
    setRing(color?.hex);
  };

  const handleTextChange = (e: string) => {
    setText(e);
  };

  const handleToggle = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else if (theme === 'dark') {
      dispatch(setTheme('light'));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      event.preventDefault();
      setText((prev) => {
        return prev + event.key;
      });
    }
    if (event.key == 'Enter') {
      const check = lists.filter((list) => list.name === text);
      console.log('🚀 ~ file: Sidebar.tsx:59 ~ handleKeyDown ~ check:', check);
      if (check.length == 0) {
        const updatedList = [
          ...lists,
          {
            id: uuid(),
            name: text,
            color: ring,
          },
        ];
        dispatch(setLists(updatedList));
        setText('');
        setRing('black');
        setIsNewList(false);
        toast.success('Succesfully created new list');
      } else {
        setRing('black');
        setIsNewList(false);
        toast.error('List already exists');
        return;
      }
    }
  };

  const handleNewList = () => [setIsNewList(!isNewList)];

  return (
    <div className="bg-white dark:bg-slate-700 px-10 py-10 rounded-3xl shadow-2xl h-full">
      <div className="w-full flex justify-center items-center">
        <ToggleSlider
          draggable={false}
          handleBackgroundColor={
            initialTheme === 'light' ? '#D1D5DB' : '#334155'
          }
          handleBackgroundColorActive={
            initialTheme === 'light' ? '#334155' : '#D1D5DB'
          }
          barBackgroundColor={initialTheme === 'light' ? '#1e293b' : '#D1D5DB'}
          barBackgroundColorActive={
            initialTheme === 'light' ? '#D1D5DB' : '#1e293b'
          }
          handleTransitionDuration="500"
          onToggle={handleToggle}
          barTransitionType="fade"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-2 dark:text-gray-400">
        <div
          className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer dark:hover:bg-slate-600"
          onClick={() => dispatch(setChosenList('Home'))}
        >
          <div className="flex flex-row items-center space-x-3 ml-2">
            <HomeIcon className="h-6 w-6" />
            <div className="text-md">Home</div>
          </div>
        </div>
        <div
          className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer dark:hover:bg-slate-600"
          onClick={() => dispatch(setChosenList('Completed'))}
        >
          <div className="flex flex-row items-center space-x-3 ml-2">
            <CheckCircleIcon className="h-6 w-6" />
            <div className="text-md">Completed</div>
          </div>
        </div>
        {lists?.map((list: IList) => (
          <div key={list.id}>
            <List list={list} />
          </div>
        ))}
        {isNewList && (
          <div className="px-2 py-4">
            <div className="flex flex-row items-center space-x-3 ml-2">
              <Menu as="div">
                <div>
                  <Menu.Button className="flex w-full items-center h-full ">
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
                  <Menu.Items className="absolute z-10 mt-1 w-0 bg-white dark:bg-slate-600 shadow-lg focus:outline-none">
                    <GithubPicker onChange={handleColorChange} />
                  </Menu.Items>
                </Transition>
              </Menu>

              <input
                className="outline-none dark:bg-slate-700"
                placeholder="Enter name of list"
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
          </div>
        )}
        <div className="hover:bg-gray-100 dark:hover:bg-slate-600 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
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
