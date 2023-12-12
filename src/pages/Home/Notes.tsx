import React, { Fragment, useState } from 'react';
import CircleInsideCircle from './CircleInsideCircle';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import Task from './Task';

function Notes() {
  const [text, setText] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const handleTextChange = (e: string) => {
    setText(e);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]$/.test(event.key)) {
      event.preventDefault();
      setText((prev) => prev + event.key);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
    setIsDropdownClicked(false);
  };

  const items = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    },
    {
      id: 4,
      name: 'test4',
    },
  ];

  const tasks = [
    {
      id: 1,
      note: 'Homework',
      color: 'red',
    },
    {
      id: 2,
      note: 'Gym',
      color: 'green',
    },
    {
      id: 3,
      note: 'Advent of Code',
      color: 'blue',
    },
    {
      id: 4,
      note: 'Finals Preparation',
      color: 'purple',
    },
    {
      id: 5,
      note: 'Project Deadline',
      color: 'orange',
    },
    // Add more tasks as needed
  ];

  return (
    <div className="h-full px-20 py-10 flex flex-col">
      <div className="flex flex-row space-x-2 items-center">
        <CircleInsideCircle color={'red'} isTitle={true} />
        <div className="text-4xl py-5">Home</div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div
          className={`${
            isClicked ? 'bg-white' : 'bg-slate-200'
          } task-bar shadow-xl rounded-xl w-[70%] px-8 py-4 flex flex-row items-center h-full`}
        >
          <div className="flex flex-row items-center justify-between py-1 w-full h-full">
            <div className="flex flex-row space-x-3 flex-1 items-center">
              {isClicked && (
                <div className="bg-gray-300 rounded-sm cursor-pointer h-5 w-5 animate-square" />
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

            <Menu
              as="div"
              className={`${
                text.length > 0 ? 'inline-block' : 'hidden'
              } text-left h-full`}
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center px-5 py-1 text-sm h-full font-medium text-gray-500 shadow-sm border border-gray-400">
                  <div>Test</div>
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
                <Menu.Items className="absolute z-10 mt-2 max-h-[700px] w-56 origin-top-right overflow-y-auto bg-white text-gray-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" data-cy="locations-dropdown">
                    {items?.map((item) => (
                      <Menu.Item key={item.id} data-id={item.id}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${
                              active ? 'bg-gray-100 text-gray-900' : ''
                            }`}
                          >
                            {item.name}
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

      {tasks?.map((task) => (
        <div className="mt-3 " key={task.id}>
          <Task note={task.note} color={task.color} />
        </div>
      ))}
    </div>
  );
}

export default Notes;
