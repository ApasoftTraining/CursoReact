import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RutaPrincipal from './rutas/RutaPrincipal';

function App() {
  return (
   <BrowserRouter>
     <div>
       <RutaPrincipal />
     </div>
   </BrowserRouter>
  );
}

export default App;
