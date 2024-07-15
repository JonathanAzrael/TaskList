import { useState } from 'react';
import { Task } from '../types';

import Logo from '../assets/logo.png'

export function AddTask() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') return;
        const newTaskObj: Task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id: number, title: string) => {
        setTasks(tasks.map(task =>
        task.id === id ? { ...task, title } : task
        ));
    };
    return(
        <div className='w-[700px] h-[400px] bg-gray-950 rounded-xl flex flex-col items-center justify-start p-10'>
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
              className="bg-bluePrimary hover:bg-blue-900 font-semibold rounded-lg text-white h-[40px] my-2 w-[500px]"
              onClick={addTask}
            >
              Adicionar Tarefa
            </button>
          </div>
          <ul>
            {tasks.map(task => (
              <li key={task.id} className="flex w-[500px] justify-between items-center p-2">
                <div className='flex gap-2'>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold p-1 rounded-lg"
                    onClick={() => editTask(task.id, prompt('Editar Tarefa', task.title) || task.title)}
                  >
                    Editar Tarefa
                  </button>

                  <button
                    className="bg-red-800 hover:bg-red-900 text-white font-semibold p-1 rounded-lg"
                    onClick={() => deleteTask(task.id)}
                  >
                    Excluir Tarefa
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
}