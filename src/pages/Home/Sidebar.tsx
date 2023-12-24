import HomeIcon from '../../assets/icons/home.png';
import TodayIcon from '../../assets/icons/date.png';
import CircleInsideCircle from './CircleInsideCircle';
import { useAppSelector } from '../../hooks';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import ColorSelect from './ColorSelect';

function Sidebar() {
  const lists = useAppSelector((state) => state.list);
  const [isNewList, setIsNewList] = useState<boolean>(false);
  const [text, setText] = useState('');

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
  };

  const renderIcon = (color: string) => {
    switch (color) {
      case 'ALL':
        return <img src={HomeIcon} className="h-5 w-5" />;
      case 'TODAY':
        return <img src={TodayIcon} className="h-5 w-5" />;
      default:
        return <CircleInsideCircle color={color} isTitle={false} />;
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
          <div className="hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
            <div className="flex flex-row items-center space-x-3 ml-2">
              <ColorSelect />
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
