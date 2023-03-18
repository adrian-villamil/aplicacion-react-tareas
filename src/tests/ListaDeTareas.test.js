import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import ListaDeTareas from "../components/ListaDeTareas";

describe('Pruebas para el componente ListaDeTareas', () => {
  test('Se renderiza correctamente el componente ListaDeTareas dentro del documento html.', () => {
    const listaDeTareas = render(<ListaDeTareas />);

    expect(listaDeTareas.container).toBeInTheDocument();
  });
});