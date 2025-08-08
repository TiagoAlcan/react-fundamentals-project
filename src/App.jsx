import { useState } from "react";

function App() {
  //STATE (estado) - usar em alguma interação do usuário para mudar algo na tela
  const [message, setMessage] = useState("Olá, mundo!");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
