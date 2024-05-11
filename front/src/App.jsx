import 'bootstrap';
import './App.css';
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home /> 
      <MisTurnos />
    </div>
  );
}

export default App;

