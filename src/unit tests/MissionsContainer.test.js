// import { Provider } from 'react-redux';
// import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
// import MissionsContainer from '../components/MissionsContainer';
// import store from '../Redux/store';

// it('render', () => {
//   const tree = renderer
//     .create(
//       <Provider store={store}>
//         <MissionsContainer />
//       </Provider>,
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('renders content', () => {
//   const component = render(
//     <Provider store={store}>
//       <MissionsContainer />
//     </Provider>,
//   );
//   expect(component.container).toHaveTextContent('Mission');
//   expect(component.container).toHaveTextContent('Description');
//   expect(component.container).toHaveTextContent('Status');
// });

import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsContainer from '../components/MissionsContainer';

// Mock the useSelector and useDispatch hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('MissionsContainer', () => {
  test('renders missions table', () => {
    // Set up the mock state and dispatch function
    const mockMissions = [
      {
        mission_id: 'mission1', mission_name: 'Mission 1', description: 'Mission 1 description', reserved: true,
      },
      {
        mission_id: 'mission2', mission_name: 'Mission 2', description: 'Mission 2 description', reserved: false,
      },
    ];
    const mockDispatch = jest.fn();

    // Mock the useSelector hook to return the mock state
    useSelector.mockReturnValue({ missions: mockMissions });

    // Mock the useDispatch hook to return the mock dispatch function
    useDispatch.mockReturnValue(mockDispatch);

    // Render the component and assert that the table rows are rendered correctly
    const { getByText } = render(<MissionsContainer />);
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 1 description')).toBeInTheDocument();
    expect(getByText('Reserved')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Mission 2 description')).toBeInTheDocument();
    expect(getByText('Not reserved')).toBeInTheDocument();

    // Assert that the dispatch function is called when the component mounts
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
