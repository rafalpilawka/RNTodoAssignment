export const mockTodos = [
  {id: 'aaa', title: 'Add those todos', completed: false},
  {id: 'aaa2233', title: 'Delete second', completed: false},
  {id: 'bbnjhjhjhjh', title: 'Add third one', completed: true},
];

export const mockLists = [
  {name: 'List 1', id: '11242342144'},
  {name: 'list 2', id: '11242342122'},
  {name: 'list 3', id: '1124234211'},
];

export const mockStore = {
  index: mockLists,
  todos: mockTodos,
  loading: false,
  errors: undefined,
  idLoader: undefined,
};

export const mockInitialStore = {
  index: [],
  todos: [],
  loading: false,
  errors: undefined,
  idLoader: undefined,
};
