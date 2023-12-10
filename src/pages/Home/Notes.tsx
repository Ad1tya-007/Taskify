import React, { useState } from 'react';
import SearchIcon from '../../assets/icons/search-interface-symbol.png';
import SquareColorClick from './SquareColorClick';

function Notes() {
  const [text, setText] = useState('');
  const [isList, setIsList] = useState(false);

  const handleTextChange = (e: string) => {
    setText(e);
    if (e.length > 0) {
      setIsList(true);
    } else {
      setIsList(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the key is alphanumeric and update the input value
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      setText((prevValue) => prevValue + event.key);
    }
  };

  return (
    <div className="border h-full px-20 py-10 flex flex-col">
      <div className="text-4xl border py-5">Title</div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-gray-300 rounded-full mt-5 border w-[70%]">
          <div className="flex flex-row items-center justify-between px-10 py-2">
            <div className="flex flex-row space-x-2 flex-1 items-center">
              <img src={SearchIcon} className="h-5 w-5" alt="Search Icon" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent flex flex-1 border-none"
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>

            {isList && <h1>Dropdown</h1>}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-center w-full">
          <div className="bg-white shadow-xl rounded-xl mt-5 border w-[70%] px-10 py-4">
            <div className="flex flex-row space-x-3">
              <SquareColorClick />
              <div className=""></div>
              Notes here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
