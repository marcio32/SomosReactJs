import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="buttonSumar"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Sumar 1
        </button>

        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
        >
          Restar 1
        </button>
        <p>El conteo es de {count}</p>
      </div>
    </>
  );
}

export default App;
