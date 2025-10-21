import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import { use } from "react";

function App() {
  //STATE (estado) - usar em alguma interação do usuário para mudar algo na tela

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //Essa função só usado uma vez quando o componente for montado
  useEffect(() => {
    async function fetchTasks() {
      //Chamar a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //Pegar os dados que ela retorna
      const data = await response.json();
      //Armazenar esses dados no estado (state do React)
      setTasks(data);
    }
    // Se quiser você pode chamar uma api diferente para pegar as tarefas iniciais
    // fetchTasks();
  }, []);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === tasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
