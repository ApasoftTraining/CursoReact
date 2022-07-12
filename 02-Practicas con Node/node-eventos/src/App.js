import logo from './logo.svg';
import './App.css';
import Caja from './Componentes/Caja';
import Salario from './Componentes/Salario';

function App() {
  return (
    <div className="App">
       <Salario salario_total={1000} impuestos={15} />   
       <Caja />  
    </div>
  );
}

export default App;
