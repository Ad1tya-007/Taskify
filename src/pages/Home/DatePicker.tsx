import { useState } from 'react';

function DatePicker() {
  const [date, setDate] = useState('');
  return (
    <div className="w-full h-full">
      <input
        type="date"
        className={`${
          date.length < 1 ? '' : ''
        } px-2 py-1 bg-gray-100  rounded-xl text-gray-500 hover:bg-gray-400 hover:text-gray-100`}
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
