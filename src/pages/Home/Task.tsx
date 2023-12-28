import { useEffect, useState } from 'react';
import Ring from './Ring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTasks } from '../../store/tasksSlice';
import toast from 'react-hot-toast';

interface TaskProps {
  id: string;
  note: string;
  type: string;
}

function Task({ id, note, type }: TaskProps) {
  const [squareClicked, setSquareClicked] = useState(false);
  const [color, setColor] = useState<string>('');

  const lists = useAppSelector((state) => state.list);
  const tasks = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const handleSquareClick = () => {
    setSquareClicked(true);
    setTimeout(() => {
      const newTasks = tasks.filter((task) => task.id !== id);
      toast.success('Successfully deleted task');
      dispatch(setTasks(newTasks));
    }, 1200);
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
      <div className="relative flex items-center justify-center w-full h-full">
        <div
          className={`${
            squareClicked ? 'bg-opacity task ' : 'bg-white'
          }  shadow-xl rounded-xl mt-5  w-[70%] px-8 py-4 flex flex-row items-center justify-between relative`}
        >
          <div>
            <div className="flex flex-row space-x-3 items-center">
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
          {renderIcon(color)}
        </div>
        {squareClicked && (
          <div className="absolute top-12 h-0.5 w-[45%] bg-gray-400 transform -translate-y-0.5 animate-strikethrough" />
        )}
      </div>
    </div>
  );
}

export default Task;
