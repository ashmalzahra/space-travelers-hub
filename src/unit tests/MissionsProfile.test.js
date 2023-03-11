import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MissionsProfile from '../components/MissionsProfile';
import store from '../Redux/store';

it('render', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionsProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders content', () => {
  const component = render(
    <Provider store={store}>
      <MissionsProfile />
    </Provider>,
  );
  expect(component.container).toHaveTextContent('My Missions');
});
