import logo from './logo.svg';
import './App.css';
import react from './components';
import principal from './components';
import BemVindos from './components/BemVindos';
import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const [count, setCount] = useState(0);

<Route path=”/home” component={HomeComponente} />

const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors');

const app = express();
const porta = 3000;

app.use(cors());

app.get('/book',(req,res)=>{
red.send("Olá express")
});

app.list(porta, () => {console.log("servidor rodando na porta 8080')})






function BemVindos(props) {
return (
  <div>
    <p>Fala aí {props.nome}, bem vindo!</p>
  </div>
)
}
export default BemVindos;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BemVindos/>
        <React/>
        <Principal/>
        <p>
          Agência <code>Libertix</code> Francisco José Dantas Neto
        </p>
        <a
          className="App-link"
          href="https://www.libertix.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar para o time
        </a>
      </header>

    </div>
    
  );
}

export default App;
