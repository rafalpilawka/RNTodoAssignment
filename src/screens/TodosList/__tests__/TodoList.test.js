import React from 'react';
import 'react-native';
import {TodosList} from 'src/screens/TodosList/TodosList';
import renderer from 'react-test-renderer';
import {mockStore} from 'src/store/_mock';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
  useSelector: (selector) => selector(mockStore),
}));
const back = jest.fn();
const pointer ={name: 'List 1', id: '11242342144'}

describe('ListsIndex', () => {
  describe('Render snapshot', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(<TodosList back={back} listPointer={pointer}/>)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
