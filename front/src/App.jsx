import 'bootstrap';
import './App.css';
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home /> 
      <MisTurnos />
      <Register />
    </div>
  );
}

export default App;

