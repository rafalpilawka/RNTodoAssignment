import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';
import {Modal} from 'src/components/Modal/Modal';
import renderer from 'react-test-renderer';

const props = {
  visible: true,
  onClose: jest.fn(),
  onDismiss: jest.fn(),
};

describe('Modal', () => {
  let component;
  const testLabel = 'test123';
  beforeEach(() => {
    component = shallow(
      <Modal {...props}>
        {' '}
        <Text>{testLabel}</Text>
      </Modal>,
    );
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<Modal {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should be visible', () => {
    const modalVisibleProp = component.dive().props().visible;
    expect(modalVisibleProp).toEqual(props.visible);
  });
  it('should not be visible', () => {
    component = shallow(<Modal {...props} visible={false} />);
    const modalVisibleProp = component.dive().props().visible;
    expect(modalVisibleProp).toBeFalsy();
  });
  it('should close modal', () => {
    const dismissHandler = component.find({testID: 'dismissPlane'});
    dismissHandler.simulate('press');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });
  it('should render children', () => {
    const title = component.find({children: testLabel});
    expect(title).toHaveLength(1);
  });
});
