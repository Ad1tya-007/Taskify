import { useState } from 'react';
import CircleInsideCircle from './CircleInsideCircle';

interface TaskProps {
  note: string | null;
  color: string;
}

function Task({ note, color = 'red' }: TaskProps) {
  const [squareClicked, setSquareClicked] = useState(false);

  const handleSquareClick = () => {
    setSquareClicked(!squareClicked);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`${
            squareClicked ? 'bg-opacity task ' : 'bg-white'
          }  shadow-xl rounded-xl mt-5  w-[70%] px-8 py-4 flex flex-row items-center justify-between`}
        >
          <div>
            <div className="flex flex-row space-x-3 items-center ">
              <div
                className={`${
                  squareClicked
                    ? 'bg-green-300 hover:bg-gray-300'
                    : 'bg-gray-300 hover:bg-green-300'
                } rounded-sm cursor-pointer h-5 w-5`}
                onClick={handleSquareClick}
              />

              <div className="">{note}</div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <input
              type="date"
              className="px-2 py-1 bg-gray-100  rounded-xl text-gray-500 hover:bg-gray-400 hover:text-gray-100"
            />
            <CircleInsideCircle color={color} isTitle={false} />
          </div>
        </div>
        {squareClicked && (
          <div className="absolute h-0.5 w-[45%] bg-gray-400 transform -translate-y-0.5 animate-strikethrough mt-6" />
        )}
      </div>
    </div>
  );
}

export default Task;
