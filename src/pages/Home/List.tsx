import { useState } from 'react';
import Ring from './Ring';
import { IList } from '../../utils';
import { MinusIcon } from '@heroicons/react/20/solid';
import { setTasks } from '../../store/tasksSlice';
import { setLists } from '../../store/listSlice';
import { setChosenList } from '../../store/chosenListSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showToastSuccess } from '../../utils/toast';

interface ListProps {
  list: IList;
}

function List({ list }: ListProps) {
  const [isHovered, setIsHovered] = useState(false);
  const tasks = useAppSelector((state) => state.task);
  const chosenList = useAppSelector((state) => state.chosenList);
  const theme = useAppSelector((state) => state.theme);
  const lists = useAppSelector((state) => state.list);

  const dispatch = useAppDispatch();

  const handleDeleteList = (list: IList) => {
    const newTasks = tasks.filter(
      (task: { type: string }) => task.type != list.name
    );
    const newList = lists.filter(
      (obj: { name: string }) => obj.name != list.name
    );
    dispatch(setTasks(newTasks));
    dispatch(setLists(newList));
    if (chosenList == list.name) {
      dispatch(setChosenList('Home'));
    }
    showToastSuccess('Successfully deleted list', theme);
  };

  return (
    <div
      className="hover:bg-gray-100 dark:hover:bg-slate-600 hover:rounded-2xl px-2 py-4 hover:cursor-pointer flex flex-row items-center justify-between"
      onClick={() => dispatch(setChosenList(list.name))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center space-x-3 ml-2.5">
        <Ring color={list.color} />
        <div className="text-md">{list.name}</div>
      </div>
      {isHovered && (
        <MinusIcon
          className="h-5 w-5 rotate-on-hover"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteList(list);
          }}
        />
      )}
    </div>
  );
}

export default List;
