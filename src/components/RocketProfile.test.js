import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../Redux/store';
import Joined from './RocketProfile';

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
