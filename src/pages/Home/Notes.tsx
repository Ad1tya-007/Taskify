import React from 'react';
import SearchIcon from '../../assets/icons/search-interface-symbol.png';

function Notes() {
  return (
    <div className="border h-full px-10 py-20 flex flex-col items-center">
      <div className="">Title</div>
      <div className="bg-gray-300 rounded-full w-[60%] py-2">
        <div className="flex flex-row space-x-2 items-center ml-6">
          <img src={SearchIcon} className="h-5 w-5" alt="Search Icon" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent border-none"
          />
        </div>
      </div>

      <div>Notes here</div>
    </div>
  );
}

export default Notes;
