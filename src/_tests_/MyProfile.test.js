import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../components/pages/MyProfile';

describe('MyProfile', () => {
  const initialState = {
    missions: {
      missions: [
        { mission_name: 'Mission 1', joined: true },
        { mission_name: 'Mission 2', joined: false },
        { mission_name: 'Mission 3', joined: true },
      ],
    },
    rockets: {
      rockets: [
        { name: 'Rocket 1', reserved: true },
        { name: 'Rocket 2', reserved: false },
        { name: 'Rocket 3', reserved: true },
      ],
    },
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
