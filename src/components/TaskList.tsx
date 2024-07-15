import { Task } from '../types';
import { useState } from 'react';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    // Adicione algumas tarefas iniciais para testes
    { id: 1, title: 'Tarefa 1', completed: false },
    { id: 2, title: 'Tarefa 2', completed: true },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-gray-950 h-[500px] w-[700px] rounded-2xl p-4 overflow-y-auto">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center mb-2">
            <span
              className={`flex-1 text-white cursor-pointer ${task.completed ? 'line-through' : ''}`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.title}
            </span>
          </div>
        ))
      ) : (
        <p className="text-white">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
