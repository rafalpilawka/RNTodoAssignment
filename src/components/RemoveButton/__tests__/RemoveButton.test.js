import React from 'react';
import 'react-native';
import {Pressable} from 'react-native';
import {shallow} from 'enzyme';
import {RemoveButton} from 'src/components/RemoveButton/RemoveButton';
import renderer from 'react-test-renderer';

const props = {
  onPress: jest.fn(),
};

describe('RemoveButton', () => {
  let component;
  beforeEach(() => {
    component = shallow(<RemoveButton {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<RemoveButton {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should call action', () => {
    const button = component.find(Pressable);
    button.simulate('press');
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
