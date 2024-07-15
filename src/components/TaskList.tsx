import React from 'react';
import { useTasks } from './TaskContext';

import Trash from '../assets/trash.png';
import Edit from '../assets/edit.png';

export function TaskList() {
  const { tasks, toggleTaskCompletion, editTask, deleteTask } = useTasks();

  const sortedTasks = [...tasks].sort((a, b) => Number(b.completed) - Number(a.completed));

  return (
    <div className="bg-greenLogo h-[500px] w-[700px] rounded-2xl p-4 overflow-y-auto">
      {sortedTasks.length > 0 ? (
        sortedTasks.map(task => (
          <div key={task.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span
                className={`flex-1 text-white cursor-pointer ${task.completed ? '' : ''}`}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.title}
              </span>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="w-[30px]"
              />
              <button
                className="bg-yellow-400 hover:bg-yellow-600 w-[30px] text-black font-semibold p-1 rounded-lg"
                onClick={() => editTask(task.id, prompt('Editar Tarefa', task.title) || task.title)}
              >
                <img 
                    alt='Editar'
                    src={Edit}
                    className='w-[20px]'
                />
              </button>
              <button
                className="bg-red-800 hover:bg-red-900 w-[30px] text-white font-semibold p-1 rounded-lg"
                onClick={() => deleteTask(task.id)}
              >
                <img 
                    alt='Excluir'
                    src={Trash}
                    className='w-[20px]'
                />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
