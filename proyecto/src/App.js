import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './components/Primercomponente';
import { Segundocomponente } from './components/Segundocomponente';
import 'node_modules/bootstrap/dist/css/bootstrap.css';
import 'node_modules/bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Iniciando con React
        </p>

        <Primercomponente />

        <Segundocomponente/>

      </header>
    </div>
  );
}

export default App;
