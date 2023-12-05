import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl shadow-2xl h-full">
      <div className="flex flex-col space-y-2">
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4">
          <div className="ml-3 text-lg">Home</div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4">
          <div className="ml-3 text-lg">Work</div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4">
          <div className="ml-3 text-lg">Personal</div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4">
          <div className="ml-3 text-lg">Gym</div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-2xl px-2 py-4">
          <div className="ml-3 text-lg">Create new list</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
