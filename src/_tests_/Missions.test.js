import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../components/redux/app/Store';
import Missions from '../components/pages/Missions';

describe('Missions component', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
