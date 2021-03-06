import './App.css';
import logoUnillanos from './imagenes/logoUnillanos.png'
import ListaDeTareas from './componentes/ListaDeTareas'

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