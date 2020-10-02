import React from 'react';
import {shallow} from 'enzyme';
import {Container} from 'src/components/Container/Container';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

describe('Container', () => {
  let component;
  const text = 'Test';

  beforeEach(() => {
    component = shallow(
      <Container>
        <Text>{text}</Text>
      </Container>,
    );
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<Container />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render correct children', () => {
    const labelElement = component.find({children: text});
    expect(labelElement).toHaveLength(1);
  });
  it('not render empty children array', () => {
    const componentDive = shallow(<Container />).dive();
    const safeAreaChildren = componentDive.props().children;
    expect(safeAreaChildren).toBeUndefined();
  });
});
