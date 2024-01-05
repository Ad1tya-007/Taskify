import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
} from '@heroicons/react/20/solid';
import Task from './Task';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Ring from './Ring';
import uuid from 'react-uuid';
import { setTasks } from '../../store/tasksSlice';
import toast from 'react-hot-toast';
import { AnimatedList } from 'react-animated-list';
import TaskIcon from '../../assets/icons/taskIcon.png';
import { IList, ITask } from '../../utils';

function Notes() {
  const [text, setText] = useState<string>('');
  const [type, setType] = useState<string>('Home');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState<boolean>(false);

  const tasks = useAppSelector((state) => state.task);
  const lists = useAppSelector((state) => state.list);
  const chosenList = useAppSelector((state) => state.chosenList);

  const dispatch = useAppDispatch();

  const handleTextChange = (e: string) => {
    setText(e);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      event.preventDefault();
      setText((prev) => prev + event.key);
    }
    if (event.key == 'Enter') {
      const updatedTasks = [
        {
          id: uuid(),
          name: text,
          type: type,
          completed: false,
        },
        ...tasks,
      ];
      dispatch(setTasks(updatedTasks));
      setText('');
      setType('Home');
      setIsClicked(false);
      toast.success('Successfully created new task');
    }
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
    setIsDropdownClicked(false);
  };

  const handleDropdownClicked = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };

  const renderIcon = (selectedList: string) => {
    if (selectedList == 'Home') {
      return <HomeIcon className="h-8 w-8" />;
    } else if (selectedList == 'Completed') {
      return <CheckCircleIcon className="h-8 w-8" />;
    } else {
      const selected = lists.find(
        (list: { name: string }) => list.name == selectedList
      );
      return <Ring color={selected!.color} isTitle={true} />;
    }
  };

  const getInitalState = (type: string) => {
    if (type == 'Home') {
      return tasks.filter((task: ITask) => task.completed == false);
    } else if (type == 'Completed') {
      return tasks.filter((task: ITask) => task.completed == true);
    } else {
      return tasks.filter(
        (task: ITask) => task.type == type && task.completed == false
      );
    }
  };

  const filteredTasks = getInitalState(chosenList);

  return (
    <div className="h-full px-20 py-10 flex flex-col">
      <div className="flex flex-row space-x-2 items-center text-black dark:text-gray-400">
        {renderIcon(chosenList)}
        <div className="text-4xl py-5">{chosenList}</div>
      </div>

      {chosenList !== 'Completed' && (
        <div className="flex items-center justify-center w-full">
          <div
            className={`${
              isClicked
                ? 'bg-white dark:bg-slate-700'
                : 'bg-slate-200 dark:bg-gray-700'
            } task-bar shadow-xl rounded-xl w-[70%] px-8 py-4 flex flex-row items-center h-full`}
          >
            <div className="flex flex-row items-center justify-between py-1 w-full h-full ">
              <div className="flex flex-row space-x-3 flex-1 items-center ">
                {isClicked && (
                  <div className="bg-gray-300 rounded-sm cursor-pointer h-5 w-5 animate-square" />
                )}
                <input
                  type="text"
                  placeholder="Write a new Task"
                  className={`outline-none bg-transparent flex flex-1 border-none text-gray-600 dark:text-gray-400  ${
                    isClicked ? 'input-slid-in' : 'input-slid-out'
                  }`}
                  value={text}
                  onChange={(e) => handleTextChange(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onClick={handleClick}
                  onBlur={handleBlur}
                />
              </div>

              <Menu
                as="div"
                className={`${
                  text.length > 0 && lists.length != 0
                    ? 'inline-block'
                    : 'hidden'
                } text-left h-full`}
              >
                <div>
                  <Menu.Button
                    className="inline-flex w-full justify-center px-5 py-1 text-sm h-full font-medium text-gray-500 shadow-sm border border-gray-400"
                    onClick={() => handleDropdownClicked()}
                  >
                    <div>{type}</div>
                    {isDropdownClicked ? (
                      <ChevronUpIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 max-h-[700px] w-56 origin-top-right overflow-y-auto bg-white dark:bg-slate-700 text-gray-500 shadow-lg ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {lists?.map((list: IList) => (
                        <Menu.Item key={list.id} data-id={list.id}>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`block px-4 py-2 text-sm ${
                                active
                                  ? 'bg-gray-100 text-gray-900 dark:bg-slate-600 dark:text-gray-400'
                                  : ''
                              }`}
                              onClick={() => setType(list.name)}
                            >
                              {list.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}

      <div className="h-full overflow-y-auto">
        {filteredTasks.length > 0 ? (
          <AnimatedList animation={'grow'}>
            {filteredTasks?.map((task: ITask) => (
              <div className="mt-3 " key={task.id}>
                <Task
                  id={task.id}
                  name={task.name}
                  type={task.type}
                  completed={task.completed}
                />
              </div>
            ))}
          </AnimatedList>
        ) : (
          <div className="h-full flex flex-col items-center justify-center w-full">
            <img src={TaskIcon} className="h-40 w-40 mb-20" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
