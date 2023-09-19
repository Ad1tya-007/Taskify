function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col space-y-3">
        <div className="text-black font-semibold h-9 flex items-center">
          TODAY&apos;S TASKS
        </div>
        <div className="flex flex-row h-[300px] space-x-5">
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 1 Clicked')}
          >
            <div className="w-full text-center">NOTE 1</div>
          </div>
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 2 Clicked')}
          >
            <div className="w-full text-center">NOTE 2</div>
          </div>
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 3 Clicked')}
          >
            <div className="w-full text-center">NOTE 3</div>
          </div>
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 4 Clicked')}
          >
            <div className="w-full text-center">NOTE 4</div>
          </div>
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 5 Clicked')}
          >
            <div className="w-full text-center">NOTE 5</div>
          </div>
          <div
            className="w-[300px] bg-red-400 flex items-center hover:bg-red-500 rounded-xl"
            onClick={() => alert('Note 6 Clicked')}
          >
            <div className="w-full text-center">NOTE 6</div>
          </div>
        </div>
        <div className="text-black font-semibold h-9 flex items-center">
          UPCOMING TASKS
        </div>
        <div className="flex flex-row h-[300px] space-x-5">
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 1 Clicked')}
          >
            <div className="w-full text-center">NOTE 1</div>
          </div>
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 2 Clicked')}
          >
            <div className="w-full text-center">NOTE 2</div>
          </div>
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 3 Clicked')}
          >
            <div className="w-full text-center">NOTE 3</div>
          </div>
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 4 Clicked')}
          >
            <div className="w-full text-center">NOTE 4</div>
          </div>
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 5 Clicked')}
          >
            <div className="w-full text-center">NOTE 5</div>
          </div>
          <div
            className="w-[300px] bg-blue-400 flex items-center hover:bg-blue-500 rounded-xl"
            onClick={() => alert('Note 6 Clicked')}
          >
            <div className="w-full text-center">NOTE 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
