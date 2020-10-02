export type ActionType<T> = {
  type: string;
  payload: T;
};

export type TodosListT = Array<TodoType> | any[];
export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

export type ListsIndexT = Array<ListType> | [];
export type ListType = {
  id: string;
  name: string;
};

export type AddTodoParamsType = {
  title: string;
  id: string;
  listId: string;
  completed: boolean;
};

export type TodoOperationsT = {
  id: string;
  listId: string;
};


