import React from 'react';

interface CircleInsideCircleProps {
  color: string;
}

function CircleInsideCircle({ color }: CircleInsideCircleProps) {
  return (
    <div
      className={`bg-${color.toLocaleLowerCase()}-500 rounded-full flex items-center justify-center h-4 w-4`}
    >
      <div className="bg-white rounded-full h-3 w-3"></div>
    </div>
  );
}

export default CircleInsideCircle;
