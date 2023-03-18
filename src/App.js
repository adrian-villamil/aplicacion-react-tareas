import './App.css';
import logoUnillanos from './images/logoUnillanos.png'
import ListaDeTareas from './components/ListaDeTareas'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-unillanos-contenedor'>
        <img src={logoUnillanos} alt='Logo' className='logo-unillanos' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;