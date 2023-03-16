import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Missions from '../components/pages/Missions';

const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 'mission1',
            mission_name: 'Mission 1',
            description: 'Description 1',
            joined: false,
          },
          {
            mission_id: 'mission2',
            mission_name: 'Mission 2',
            description: 'Description 2',
            joined: true,
          },
        ],
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
