import React from 'react';
import { useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../components/pages/MyProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile', () => {
  it('should render correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      missions: {
        missions: [
          { mission_name: 'Mission 1', joined: true },
          { mission_name: 'Mission 2', joined: false },
          { mission_name: 'Mission 3', joined: true },
        ],
      },
      rockets: {
        rockets: [
          { name: 'Rocket 1', reserved: false },
          { name: 'Rocket 2', reserved: true },
          { name: 'Rocket 3', reserved: true },
        ],
      },
    }));

    const tree = renderer.create(<MyProfile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
