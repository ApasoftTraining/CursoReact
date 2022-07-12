import logo from './logo.svg';
import './App.css';
import Eventos from './Componentes/Eventos';

function App() {
  return (
    <div className="App">
       <Eventos salario_neto={1000} impuesto={15} />
    </div>
  );
}

export default App;
