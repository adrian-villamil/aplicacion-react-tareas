import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ListaDeTareas from "../components/ListaDeTareas";

describe('Pruebas para el componente ListaDeTareas', () => {
  test('Se renderiza correctamente el componente ListaDeTareas dentro del documento html.', () => {
    const listaDeTareas = render(<ListaDeTareas />);

    expect(listaDeTareas.container).toBeInTheDocument();
  });

  test('Se comprueba que la tarea agregada sea la misma tarea renderizada en la lista', () => {
    const { container } = render(<ListaDeTareas />);

    userEvent.type(screen.getByRole('textbox'), 'Comer bien');
    expect(screen.getByRole('textbox')).toHaveValue('Comer bien');
    
    userEvent.click(screen.getByRole('button'));
    const textoContenedor = container.getElementsByClassName('tarea-texto')[0];
    expect(textoContenedor.textContent.includes('Comer bien')).toBe(true);
  });
});