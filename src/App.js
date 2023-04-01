// import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar/> 
        <ItemListContainer greeting="Hola Mundo!"/>
        
      </header>
    </div>
  );
}

export default App;
