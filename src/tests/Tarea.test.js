import renderer from 'react-test-renderer';
import Tarea from '../components/Tarea';

it('Se renderiza correctamente', () => {
  const mockCompletarTarea = jest.fn();
  const mockEliminarTarea = jest.fn();

  const tree = renderer
    .create(<Tarea id={0} texto='Levantarme mañana' completada={false} completarTarea={mockCompletarTarea} eliminarTarea={mockEliminarTarea} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});