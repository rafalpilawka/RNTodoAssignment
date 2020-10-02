import React from 'react';
import 'react-native';
import {Pressable} from 'react-native';
import {shallow} from 'enzyme';
import {Header} from 'src/components/Header/Header';
import renderer from 'react-test-renderer';

const props = {
  back: jest.fn(),
  listId: 'Testing list id',
};

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<Header {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    const nameLabel = component.find({children: props.listId.toUpperCase()});
    expect(nameLabel).toHaveLength(1);
  });

  it(`shouldn't render back button`, () => {
    component = shallow(<Header back={false} />);
    const button = component.find(Pressable);
    expect(button).toHaveLength(0);
  });

  it('should call back button', () => {
    const button = component.find(Pressable);
    button.simulate('press');
    expect(props.back).toHaveBeenCalledTimes(1);
  });
});
