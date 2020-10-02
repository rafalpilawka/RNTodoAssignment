import React from 'react';
import 'react-native';
import {shallow} from 'enzyme';
import {Todo} from 'src/components/Todo/Todo';
import renderer from 'react-test-renderer';
import {mockTodos} from 'src/store/_mock';
import {RemoveButton} from 'src/components/RemoveButton/RemoveButton';
import CheckBox from '@react-native-community/checkbox';

const props = {
  item: mockTodos[1],
  removeHandler: jest.fn(),
  toggleHandler: jest.fn(),
};

describe('Todo item', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<Todo {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    const titleLabel = component.find({children: 'Delete second'});
    const completeStatus = component.props().children[0].props.value;
    expect(titleLabel).toHaveLength(1);
    expect(completeStatus).toBeFalsy();
  });

  it('should call removeHandler', () => {
    const removeButton = component.find(RemoveButton);
    removeButton.simulate('press');
    expect(props.removeHandler).toHaveBeenCalledTimes(1);
  });
  it('should call toggleHandler', () => {
    const toggleHandler = component.find(CheckBox);
    toggleHandler.simulate('valueChange');
    expect(props.toggleHandler).toHaveBeenCalledTimes(1);
  });
});
