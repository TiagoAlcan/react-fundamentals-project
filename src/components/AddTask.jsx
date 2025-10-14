import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md my-6 flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da terefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da terefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o título e a descrição não estão vazios
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
