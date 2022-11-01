import logo from './logo.svg';
import './App.css';
import react from './components';
import principal from './components';
import BemVindos from './components/BemVindos';

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
