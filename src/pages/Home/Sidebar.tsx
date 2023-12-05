import React from 'react';
import HomeIcon from '../../assets/icons/home.png';
import TodayIcon from '../../assets/icons/date.png';
import PlusIcon from '../../assets/icons/plus.png';
import CircleInsideCircle from './CircleInsideCircle';

function Sidebar() {
  return (
    <div className="bg-white px-10 py-10 rounded-3xl shadow-2xl h-full">
      <div className="flex flex-col space-y-2">
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <img src={HomeIcon} className="h-5 w-5" />
            <div className="text-md">Home</div>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <img src={TodayIcon} className="h-5 w-5" />
            <div className="text-md">Today</div>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <CircleInsideCircle color="red" />
            <div className="text-md">Gym</div>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <CircleInsideCircle color="blue" />
            <div className="text-md">Class</div>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <CircleInsideCircle color="green" />
            <div className="text-md">Test</div>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4 hover:cursor-pointer">
          <div className="flex flex-row items-center space-x-3 ml-2">
            <img src={PlusIcon} className="h-4 w-4" />
            <div className="text-md">Create new list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
