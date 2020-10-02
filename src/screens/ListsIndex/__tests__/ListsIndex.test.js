import React from 'react';
import 'react-native';
import {ListsIndex} from 'src/screens/ListsIndex/ListsIndex';
import renderer from 'react-test-renderer';
import {mockStore} from 'src/store/_mock';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
  useSelector: (selector) => selector(mockStore),
}));
const navigate = jest.fn();

describe('ListsIndex', () => {
  describe('Render snapshot', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(<ListsIndex navigate={navigate} />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
