import {
  ACTION_REJECTED,
  ADD_TODO,
  ADD_TODOS_LIST,
  GET_TODO_LIST,
  GET_TODOS_INDEX,
  REMOVE_TODOS_LIST,
  TOGGLE_TODO,
  REMOVE_TODO,
} from 'src/store/todos/todos.actions';
import {ListsIndexT, TodosListT, Temp} from 'src/store/todos/todos.types';
import type {Action} from 'src/store/reduxAction.types';

export type ReduxState = {
  index: ListsIndexT;
  todos: TodosListT;
  loading: boolean;
  idLoader: number | undefined;
  errors: any;
};

const INITIAL_STATE: ReduxState = {
  index: [],
  todos: [],
  loading: false,
  errors: undefined,
  idLoader: undefined,
};

export default (
  state: ReduxState = INITIAL_STATE,
  action: Action<any>
): ReduxState => {
  switch (action.type) {
    case GET_TODOS_INDEX.pending: {
      return {...state, loading: true};
    }
    case GET_TODOS_INDEX.resolved: {
      return {
        ...state,
        loading: false,
        index: action.payload,
      };
    }
    case ADD_TODOS_LIST.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TODOS_LIST.resolved: {
      return {
        ...state,
        loading: false,
        index: action.payload,
      };
    }
    case REMOVE_TODOS_LIST.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case REMOVE_TODOS_LIST.resolved: {
      return {
        ...state,
        loading: false,
        index: action.payload,
      };
    }
    case GET_TODO_LIST.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_LIST.resolved: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case ADD_TODO.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TODO.resolved: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case TOGGLE_TODO.pending: {
      return {
        ...state,
        idLoader: action.payload,
      };
    }
    case TOGGLE_TODO.resolved: {
      return {
        ...state,
        todos: action.payload,
        idLoader: undefined,
      };
    }
    case REMOVE_TODO.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case REMOVE_TODO.resolved: {
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    }
    case ACTION_REJECTED: {
      return {
        ...state,
        loading: false,
        idLoader: undefined,
      };
    }
    default:
      return state;
  }
};
