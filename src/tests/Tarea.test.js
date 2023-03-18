import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Tarea from '../components/Tarea';

describe('Pruebas para el componente Tarea:', () => {
  test('Se renderiza correctamente el componente Tarea dentro del documento html.', () => {
    const mockCompletarTarea = jest.fn();
    const mockEliminarTarea = jest.fn();

    const tarea = render(<Tarea id={0} texto='Levantarme mañana' completada={false} completarTarea={mockCompletarTarea} eliminarTarea={mockEliminarTarea} />);
    expect(tarea.container).toBeInTheDocument();
  });

  test('Se comprueba que la tarea está completada', () => {
    const mockCompletarTarea = jest.fn();
    const mockEliminarTarea = jest.fn();

    render(<Tarea id={0} texto='Dormir bien' completada={true} completarTarea={mockCompletarTarea} eliminarTarea={mockEliminarTarea} />);

    const tarea = document.getElementsByClassName('tarea-contenedor')[0];
    expect(tarea.classList[1]).toMatch(/completada/);
  });

  test('Se comprueba que el texto de la tarea sea comer "Hacer ejercicio"', () => {
    const mockCompletarTarea = jest.fn();
    const mockEliminarTarea = jest.fn();

    const tarea = render(<Tarea id={0} texto='Hacer ejercicio' completada={true} completarTarea={mockCompletarTarea} eliminarTarea={mockEliminarTarea} />);

    const divTexto = tarea.container.firstChild;
    expect(divTexto.textContent).toBe('Hacer ejercicio');
  });
});