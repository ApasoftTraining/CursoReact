import logo from './logo.svg';
import './App.css';
import Coche from './Componentes/Coche';

function App() {
  return (
    <div className="App">
      <Coche matricula="Matri1" precio={ 1000 }  />
    </div>
  );
}

export default App;
