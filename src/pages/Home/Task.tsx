import { useEffect, useState } from 'react';
import Ring from './Ring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTasks } from '../../store/tasksSlice';

interface TaskProps {
  note: string;
  type: string;
}

function Task({ note, type }: TaskProps) {
  const [squareClicked, setSquareClicked] = useState(false);
  const [color, setColor] = useState<string>('');

  const lists = useAppSelector((state) => state.list);
  const tasks = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const handleSquareClick = () => {
    setSquareClicked(true);
    setTimeout(() => {
      const newTasks = tasks.filter((task) => task.name !== note);
      dispatch(setTasks(newTasks));
    }, 700);
  };

  const renderIcon = (color: string) => {
    switch (color) {
      case 'ALL':
        return;
      case 'TODAY':
        return;
      default:
        return <Ring color={color} isTitle={false} />;
    }
  };

  useEffect(() => {
    const selectedList = lists.find((item) => item.name === type);
    if (selectedList?.color) {
      setColor(selectedList?.color);
    }
  }, []);

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
            {renderIcon(color)}
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
