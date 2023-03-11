import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MissionsContainer from '../components/MissionsContainer';
import store from '../Redux/store';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{ mission_id: 48, mission_name: 'Elom', description: 'this is a test' },
    { mission_id: 55, mission_name: 'Tori', description: 'this is a test also' }]),
}));

afterEach(() => {
  fetch.mockClear();
});

test('renders content', () => {
  const component = render(
    <Provider store={store}>
      <MissionsContainer />
    </Provider>,
  );
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(component).toBeDefined();
});
