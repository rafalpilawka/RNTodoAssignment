import {ActionCreator} from 'redux';
import {ListsIndexT, ListType} from 'src/store/listIndex/todos.types';
import {Action} from 'src/store/reduxAction.types';
import {
  AddTodoParamsType,
  TodoOperationsT,
  TodosListT,
} from 'src/store/todos/todos.types';
import {createAsyncTypes} from 'src/utils/createAsyncTypes';

export const GET_TODOS_INDEX = createAsyncTypes('GET_TODOS_INDEX');
export const getTodosIndexAction = (): Action<null> => ({
  type: GET_TODOS_INDEX.saga,
});
export const getTodosIndexPending = (): Action<null> => ({
  type: GET_TODOS_INDEX.pending,
});
export const getTodosIndexResolved = (
  list: ListsIndexT,
): Action<ListsIndexT> => ({
  type: GET_TODOS_INDEX.resolved,
  payload: list,
});

export const ADD_TODOS_LIST = createAsyncTypes('ADD_TODOS_LIST');
export const addListAction = (params: ListType): Action<ListType> => ({
  type: ADD_TODOS_LIST.saga,
  payload: params,
});
export const addListPending = (): Action<null> => ({
  type: ADD_TODOS_LIST.pending,
});

export const addListResolved = (list: ListsIndexT): Action<ListsIndexT> => ({
  type: ADD_TODOS_LIST.resolved,
  payload: list,
});

export const REMOVE_TODOS_LIST = createAsyncTypes('REMOVE_TODOS_LIST');
export const removeListAction = (id: string): Action<string> => ({
  type: REMOVE_TODOS_LIST.saga,
  payload: id,
});
export const removeListPending = (id: string): Action<string> => ({
  type: REMOVE_TODOS_LIST.pending,
  payload: id,
});
export const removeListResolved = (list: ListsIndexT): Action<ListsIndexT> => ({
  type: REMOVE_TODOS_LIST.resolved,
  payload: list,
});
//GET SPECIFIC LIST
export const GET_TODO_LIST = createAsyncTypes('GET_TODO_LIST');
export const getTodoListAction = (id: string): Action<string> => ({
  type: GET_TODO_LIST.saga,
  payload: id,
});

export const getTodosListPending = (): Action<null> => ({
  type: GET_TODO_LIST.pending,
});
export const getTodosListResolved = (list: TodosListT): Action<TodosListT> => ({
  type: GET_TODO_LIST.resolved,
  payload: list,
});

//ADD TO LIST
export const ADD_TODO = createAsyncTypes('ADD_TODO');
export const addTodoAction = (
  params: AddTodoParamsType,
): Action<AddTodoParamsType> => ({
  type: ADD_TODO.saga,
  payload: params,
});

export const addTodoPending = (): Action<null> => ({
  type: ADD_TODO.pending,
});
export const addTodoResolved = (list: TodosListT): Action<TodosListT> => ({
  type: ADD_TODO.resolved,
  payload: list,
});

//REMOVE
export const REMOVE_TODO = createAsyncTypes('REMOVE_TODO');
export const removeTodoAction = (params: TodoOperationsT): Action<TodoOperationsT> => ({
  type: REMOVE_TODO.saga,
  payload: params,
});

export const removeTodoPending = (): Action<null> => ({
  type: REMOVE_TODO.pending,
});

export const removeTodoResolved = (list: TodosListT): Action<TodosListT> => ({
  type: REMOVE_TODO.resolved,
  payload: list,
});

//TOOGLE
export const TOGGLE_TODO = createAsyncTypes('TOGGLE_TODO');
export const toggleTodoAction = (params: TodoOperationsT): Action<TodoOperationsT> => ({
  type: TOGGLE_TODO.saga,
  payload: params,
});
export const toggleTodoPending = (): Action<null> => ({
  type: TOGGLE_TODO.pending,
});

export const toggleTodoResolved = (list: TodosListT): Action<TodosListT> => ({
  type: TOGGLE_TODO.resolved,
  payload: list,
});

//REJECTED ACTION_LOADER_OFF
export const ACTION_REJECTED = 'ACTION_REJECTED';
export const actionRejected = (): Action<null> => ({
  type: ACTION_REJECTED,
});
