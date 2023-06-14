import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './components/Primercomponente';
import { Segundocomponente } from './components/Segundocomponente';


function App() {
  return (
    
    <div className="App">
      <Primercomponente />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Iniciando con React
        </p>
        <Segundocomponente/>

      </header>
    </div>
  );
}

export default App;
