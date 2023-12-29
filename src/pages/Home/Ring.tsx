interface RingProps {
  color: string;
  isTitle: boolean;
}

function Ring({ color, isTitle = false }: RingProps) {
  const sizeClass = isTitle ? 'h-7 w-7' : 'h-5 w-5';

  return (
    <div
      className={`rounded-full ${sizeClass} border-4`}
      style={{ borderColor: color }}
    />
  );
}

export default Ring;
