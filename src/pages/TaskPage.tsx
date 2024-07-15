import { SideBar } from '../components/SideBar';
import { AddTask } from '../components/AddTask';
import { TaskList } from '../components/TaskList';

export function TaskPage() {

  return (
    <>
      <SideBar />
      <div className="bg-bluePrimary w-full h-screen flex flex-col gap-4 items-center justify-center">
        <AddTask />
        <TaskList />
      </div>
    </>
  );
};



