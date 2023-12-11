interface CircleInsideCircleProps {
  color: string;
  isTitle: boolean;
}

function CircleInsideCircle({
  color,
  isTitle = false,
}: CircleInsideCircleProps) {
  return (
    <div
      className={`bg-${color.toLowerCase()}-500 rounded-full flex items-center justify-center ${
        isTitle ? 'h-6 w-6' : 'h-4 w-4'
      }`}
    >
      <div
        className={`bg-white rounded-full  ${isTitle ? 'h-4 w-4' : 'h-3 w-3'}`}
      ></div>
    </div>
  );
}

export default CircleInsideCircle;
