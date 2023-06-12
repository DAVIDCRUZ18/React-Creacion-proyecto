import logo from './logo.svg';
import './App.css';
import { primercomponente } from './components/primercomponente';
import { segundocomponente } from './components/segundocomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          iniciando con react
        </p>
        <primercomponente/>
        <segundocomponente/>
      </header>
    </div>
  );
}

export default App;
