import Notes from './Notes';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div className="h-screen border px-5 py-10 flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Notes />
      </div>
    </div>
  );
}

export default Home;
