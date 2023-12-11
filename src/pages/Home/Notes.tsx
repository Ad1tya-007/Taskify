import React, { useState } from 'react';
import CircleInsideCircle from './CircleInsideCircle';

function Notes() {
  const [text, setText] = useState('');
  const [isList, setIsList] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [squareClicked, setSquareClicked] = useState(false);

  const handleSquareClick = () => {
    setSquareClicked(!squareClicked);
  };

  const handleTextChange = (e: string) => {
    setText(e);
    if (e.length > 0) {
      setIsList(true);
    } else {
      setIsList(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      setText((prevValue) => prevValue + event.key);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <div className="h-full px-20 py-10 flex flex-col">
      <div className="flex flex-row space-x-2 items-center">
        <CircleInsideCircle color={'red'} isTitle={true} />
        <div className="text-4xl py-5">Home</div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="bg-slate-200 rounded-full  mt-5 w-[70%] shadow-md border-slate-300 border">
          <div className="flex flex-row items-center justify-between px-10 py-2 ">
            <div className="flex flex-row space-x-2 flex-1 items-center">
              {isClicked && (
                <div
                  className="bg-gray-300 rounded-sm cursor-pointer h-5 w-5 animate-square"
                  onClick={handleSquareClick}
                />
              )}
              <input
                type="text"
                placeholder="Write a new Task"
                className={`outline-none bg-transparent flex flex-1 border-none text-gray-600 custom-input ${
                  isClicked ? 'input-slid-in' : 'input-slid-out'
                }`}
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                onClick={handleClick}
                onBlur={handleBlur}
              />
            </div>

            {isList && <h1>Dropdown</h1>}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-center w-full">
          <div className="bg-white shadow-xl rounded-xl mt-5 border w-[70%] px-10 py-4 flex flex-row items-center justify-between">
            <div className="">
              <div className="flex flex-row space-x-3 items-center ">
                <div
                  className={`${
                    squareClicked
                      ? 'bg-green-300 hover:bg-gray-300'
                      : 'bg-gray-300 hover:bg-green-300'
                  } rounded-sm cursor-pointer h-5 w-5`}
                  onClick={handleSquareClick}
                />
                <div className=""></div>
                Notes here
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-gray-100 px-2 py-1 rounded-xl text-gray-500">
                15 March
              </div>
              <CircleInsideCircle color={'red'} isTitle={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
