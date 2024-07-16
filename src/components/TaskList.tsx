import { useTasks } from './TaskContext';

import Trash from '../assets/trash.png';
import Edit from '../assets/edit.png';
import { SideBar } from './SideBar';

export function TaskList() {
  const { tasks, toggleTaskCompletion, editTask, deleteTask } = useTasks();

  const sortedTasks = [...tasks].sort((a, b) => Number(b.completed) - Number(a.completed));

  return (
    <div className="bg-greenLogo w-full h-screen lg:w-[500px] p-8 mr-4 justify-start items-center flex flex-col">
      <h1 className="text-2xl font-semibold text-white">Lista de Tarefas</h1>
      <div className='flex justify-between w-full text-white font-semibold text-sm pb-6 pt-8'>
        <h1>Tarefas</h1>
        <div className='flex justify-between gap-2'>
          <h1>Concluir</h1>
          <h2>Editar</h2>
          <h3>Deletar</h3>
        </div>
      </div>
      {sortedTasks.length > 0 ? (
        sortedTasks.map(task => (
          <div key={task.id} className="flex justify-between w-full items-center mb-2">
            <div className="flex items-center">
              <span
                className={`flex-1 text-white font-light cursor-pointer ${task.completed ? '' : ''}`}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.title}
              </span>
            </div>
            <div className='flex gap-6'>
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
                className="bg-red-800 hover:bg-red-900 w-[30px] flex items-center text-white font-semibold p-1 rounded-lg"
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
