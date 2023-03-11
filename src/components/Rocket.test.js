import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../Redux/store';
import Rocket from './Rocket';

const obj = {
  rocket_name: 'Falcon 1',
  rocket_id: 'falcon1',
};

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

// test('Missions renders correctly', () => {
//   const store = configureStore();
//   const component = renderer.create(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Missions />
//       </MemoryRouter>
//     </Provider>,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('Rockets renders correctly', () => {
//   const store = configureStore();
//   const component = renderer.create(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Rockets />
//       </MemoryRouter>
//     </Provider>,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
