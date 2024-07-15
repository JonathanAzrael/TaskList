import { useState } from 'react';
import { Task } from '../types';
import { useTasks } from './TaskContext';
import Logo from '../assets/logo.png';

export function AddTask() {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    addTask(newTaskObj);
    setNewTask('');
  };

  return (
    <div className='w-[700px] h-[400px] bg-greenLogo rounded-xl flex flex-col items-center justify-start p-10'>
      <img alt='logo' src={Logo} className='w-[120px] mb-10' />
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-semibold text-white">Adicionar nova Tarefa</h1>
        <input
          type="text"
          className="border p-2 w-[500px] rounded-lg"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Informe a nova tarefa"
        />
        <button
          className="bg-gray-200 hover:bg-gray-500 font-semibold rounded-lg text-greenLogo h-[40px] my-2 w-[500px]"
          onClick={handleAddTask}
        >
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}
