import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import CircleInsideCircle from './CircleInsideCircle';
import { ColorResult, GithubPicker } from 'react-color';

function ColorSelect() {
  const [circleColor, setCircleColor] = useState('black');

  const handleColorChange = (color: ColorResult) => {
    setCircleColor(color?.hex);
  };

  return (
    <Menu as="div">
      <div>
        <Menu.Button className="inline-flex w-full justify-center h-full ">
          <CircleInsideCircle color={circleColor} isTitle={false} />
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
        <Menu.Items className="absolute z-10 mt-1 w-0 bg-white shadow-lg focus:outline-none">
          <GithubPicker onChange={handleColorChange} />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ColorSelect;
