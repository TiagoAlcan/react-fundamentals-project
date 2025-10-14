import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  //props = propriedades = atributos que eu passo para o componente
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md my-6">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(tasks.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              tasks.isCompleted && "line-through"
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(tasks.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
