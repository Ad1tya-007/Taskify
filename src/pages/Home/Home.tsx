import { useEffect } from 'react';
import Notes from './Notes';
import Sidebar from './Sidebar';
import { useAppSelector } from '../../hooks';
import { ITask } from '../../utils';

function Home() {
  // redux
  const lists = useAppSelector((state) => state.list);
  const tasks = useAppSelector((state) => state.task);
  const theme = useAppSelector((state) => state.theme);

  // side effects
  useEffect(() => {
    const handleBeforeUnload = () => {
      const newTasks = tasks.filter((task: ITask) => task.completed == false);
      localStorage.setItem('lists', JSON.stringify(lists));
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      localStorage.setItem('theme', theme);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [lists, tasks, theme]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <div className="h-screen bg-gray-100 dark:bg-slate-800 px-5 py-10 flex">
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
