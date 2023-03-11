import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../Redux/store';
import Rockets from './Rockets';

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
