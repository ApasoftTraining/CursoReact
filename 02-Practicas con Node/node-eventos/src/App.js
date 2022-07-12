import logo from './logo.svg';
import './App.css';
import Eventos from './Componentes/Eventos';
import Caja from './Componentes/Caja';

function App() {
  return (
    <div className="App">
       <Eventos salario_total={1000} impuestos={15} />     
    </div>
  );
}

export default App;
