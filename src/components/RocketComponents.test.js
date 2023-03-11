import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../Redux/store';
import Rockets from './Rockets';
import Navbar from './Navbar';
import Rocket from './Rocket';
import Joined from './RocketProfile';

const obj = {
  rocket_name: 'Falcon 1',
  rocket_id: 'falcon1',
};

test('Rockets rendered correctly', () => {
  const configureStore = store;
  const component = renderer.create(
    <Provider store={configureStore}>
      <MemoryRouter>
        <Rockets />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navbar renders correctly', () => {
  const configureStore = store;
  const component = renderer.create(
    <Provider store={configureStore}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rocket reserved displayed in profile', () => {
  const configureStore = store;
  const component = renderer.create(
    <Provider store={configureStore}>
      <MemoryRouter>
        <Joined />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rocket renders as expected', () => {
  const configureStore = store;
  const component = renderer.create(
    <Provider store={configureStore}>
      <MemoryRouter>
        <Rocket key={obj.rocket_id} rocket={obj} />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
