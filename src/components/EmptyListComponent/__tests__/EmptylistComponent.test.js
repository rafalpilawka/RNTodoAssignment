import React from 'react';
import 'react-native';
import {shallow} from 'enzyme';
import {EmptyListComponent} from 'src/components/EmptyListComponent/EmptyListComponent';
import renderer from 'react-test-renderer';

const props = {
  variant: 'LISTS',
};

describe('Empty Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<EmptyListComponent {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer
      .create(<EmptyListComponent {...props} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    const MESSAGE = `DONT HESITATE TO ADD\nSOME ${props.variant}`;
    const variantRender = component.find({children: MESSAGE});
    expect(variantRender).toHaveLength(1);
  });
});
