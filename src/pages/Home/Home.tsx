import { useEffect } from 'react';
import Notes from './Notes';
import Sidebar from './Sidebar';
import { useAppSelector } from '../../hooks';

function Home() {
  // redux
  const lists = useAppSelector((state) => state.list);
  const tasks = useAppSelector((state) => state.task);

  // side effects
  useEffect(() => {
    const handleBeforeUnload = () => {
      const newTasks = tasks.filter((task) => task.completed == false);
      localStorage.setItem('lists', JSON.stringify(lists));
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [lists, tasks]);

  return (
    <div className="h-screen bg-gray-100 px-5 py-10 flex">
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
