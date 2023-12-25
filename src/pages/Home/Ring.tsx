interface RingProps {
  color: string;
  isTitle: boolean;
}

function Ring({ color, isTitle = false }: RingProps) {
  const sizeClass = isTitle ? 'h-6 w-6' : 'h-4 w-4';
  const subClass = isTitle ? 'h-4 w-4' : 'h-3 w-3';

  return (
    <div
      className={` rounded-full flex items-center justify-center ${sizeClass}`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className={`bg-white rounded-full ${subClass}`}></div>
    </div>
  );
}

export default Ring;
