import React, { useState } from 'react';

function SquareColorClick() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className={`${
        clicked
          ? 'bg-green-400 hover:bg-gray-400'
          : 'bg-gray-400 hover:bg-green-400'
      } rounded-lg px-3 py-2 cursor-pointer`}
      onClick={handleClick}
    />
  );
}

export default SquareColorClick;
