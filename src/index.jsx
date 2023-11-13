import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp hola={'hola mundo'} />
  </React.StrictMode>
);
