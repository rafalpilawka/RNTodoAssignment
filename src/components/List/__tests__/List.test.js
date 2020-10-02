import React from 'react';
import 'react-native';
import {shallow} from 'enzyme';
import { List } from 'src/components/List/List';
import renderer from 'react-test-renderer';
import { mockLists} from 'src/store/_mock';
import {RemoveButton} from 'src/components/RemoveButton/RemoveButton';

const props = {
  item: mockLists[1],
  navigate: jest.fn(),
  removeHandler: jest.fn(),
};

describe('List item', () => {
  let component;
  beforeEach(() => {
    component = shallow(<List {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<List {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    const nameLabel = component.find({children: 'list 2'});
    expect(nameLabel).toHaveLength(1);
  });

  it('should call removeHandler', () => {
    const removeButton = component.find(RemoveButton);
    removeButton.simulate('press');
    expect(props.removeHandler).toHaveBeenCalledTimes(1);
  });
});
