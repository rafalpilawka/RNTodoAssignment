import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {ScrollWrapper} from 'src/components/ScrollWrapper/ScrollWrapper';
import {Todo} from 'src/components/Todo/Todo';
import {mockTodos} from 'src/store/_mock';

const props = {
  children: mockTodos.map((el, idx) => (
    <Todo
      key={el.id}
      item={el}
      removeHandler={() => jest.fn()}
      toggleHandler={() => jest.fn()}
    />
  )),
  style: {backgroundColor: 'red'},
  testId: 'scrollView',
};

describe('ScrollWrapper', () => {
  let component;
  const text = 'Test';

  beforeEach(() => {
    component = shallow(<ScrollWrapper {...props} />);
    jest.clearAllMocks();
  });
  it('should match to snapshot', () => {
    const component = renderer.create(<ScrollWrapper {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render correct children', () => {
    const children = component.props().children;
    expect(children.length).toEqual(mockTodos.length);
  });
});
