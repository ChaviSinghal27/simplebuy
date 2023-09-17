import logo from './logo.svg';
import './App.css';
import { Router } from './Routes/Router';
import { Navbar } from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Router/>
    </div>
  );
}

export default App;
