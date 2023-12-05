import Sidebar from './Sidebar';

function Home() {
  return (
    <div className="h-screen border px-5 py-10 flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div>Notes Content Here</div>
      </div>
    </div>
  );
}

export default Home;
