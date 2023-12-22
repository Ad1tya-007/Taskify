import HomeIcon from '../../assets/icons/home.png';
import TodayIcon from '../../assets/icons/date.png';
import CircleInsideCircle from './CircleInsideCircle';
import { useAppSelector } from '../../hooks';
import { PlusIcon } from '@heroicons/react/20/solid';

function Sidebar() {
  const lists = useAppSelector((state) => state.list);

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
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-1.5">
            <PlusIcon className="h-6 w-6" />
            <div className="text-md">Create new list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
