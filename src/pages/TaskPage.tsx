import { SideBar } from '../components/SideBar';
import { AddTask } from '../components/AddTask';
import { TaskList } from '../components/TaskList';

export function TaskPage() {

  return (
    <>
      {/* Tela cheia */}
      <div className="bg-gray-200 w-full h-screen hidden lg:flex gap-4 items-center justify-between">
        <SideBar />
        <AddTask />
        <TaskList />
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        <SideBar />
        <AddTask />
      </div>
    </>
  );
};
