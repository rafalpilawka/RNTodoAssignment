import {ListType} from 'src/store/todos/todos.types';
import {Action} from 'src/store/reduxAction.types';
import {put, takeLeading, select, call} from 'redux-saga/effects';
import {
  GET_TODOS_INDEX,
  getTodosIndexPending,
  getTodosIndexResolved,
  ADD_TODOS_LIST,
  actionRejected,
  addListResolved,
  addListPending,
  REMOVE_TODOS_LIST,
  removeListPending,
  removeListResolved,
  GET_TODO_LIST,
  getTodosListPending,
  getTodosListResolved,
  ADD_TODO,
  addTodoPending,
  addTodoResolved,
  REMOVE_TODO,
  removeTodoPending,
  removeTodoResolved,
  TOGGLE_TODO,
  toggleTodoResolved,
  toggleTodoPending,
} from 'src/store/todos/todos.actions';
import AsyncStorageOperations from 'src/services/asyncStorageFacade';
import {selectIndex, selectList} from 'src/store/todos/todos.selector';
import {
  AddTodoParamsType,
  TodoOperationsT,
  TodosListT,
  TodoType,
} from 'src/store/todos/todos.types';

export function* getIndexSaga(): IterableIterator<any> {
  try {
    yield put(getTodosIndexPending());
    const response: any = yield call(AsyncStorageOperations.indexList.get);
    if (!response) {
      yield AsyncStorageOperations.indexList.store(JSON.stringify([]));
      yield put(getTodosIndexResolved([]));
    } else {
      yield put(getTodosIndexResolved(JSON.parse(response)));
    }
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* addListSaga({
  payload,
}: Action<ListType>): IterableIterator<any> {
  try {
    yield put(addListPending());
    const response: any = yield select(selectIndex);
    const actualList = [...response];
    actualList.push(payload);
    yield AsyncStorageOperations.indexList.store(JSON.stringify(actualList));
    yield put(addListResolved(actualList));
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* removeListSaga({
  payload,
}: Action<string>): IterableIterator<any> {
  try {
    yield put(removeListPending(payload!));
    const response: any = yield select(selectIndex);
    const actualList = response.filter((el: ListType) => el.id !== payload);
    yield AsyncStorageOperations.indexList.store(JSON.stringify(actualList));
    yield AsyncStorageOperations.todosList.remove(payload!);
    yield put(removeListResolved(actualList));
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* getTodoListSaga({
  payload,
}: Action<string>): IterableIterator<any> {
  try {
    yield put(getTodosListPending());
    const response: any = yield AsyncStorageOperations.todosList.get(payload);
    if (!response) {
      yield AsyncStorageOperations.todosList.store(payload, JSON.stringify([]));
      yield put(getTodosListResolved([]));
    } else {
      yield put(getTodosListResolved(JSON.parse(response)));
    }
  } catch {}
}

export function* addTodoSaga({
  payload,
}: Action<AddTodoParamsType>): IterableIterator<any> {
  try {
    const {listId, ...rest} = payload!;
    yield put(addTodoPending());
    const list: any = yield select(selectList);
    const actualList = [...list];
    actualList.push(rest);
    yield AsyncStorageOperations.todosList.store(
      payload!.listId,
      JSON.stringify(actualList),
    );
    yield put(addTodoResolved(actualList));
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* toggleTodoSaga({
  payload,
}: Action<TodoOperationsT>): IterableIterator<any> {
  try {
    const {id, listId} = payload!;
    yield put(toggleTodoPending());
    const list: any = yield select(selectList);
    const result = (list as any[]).map((el: TodoType) =>
      el.id === id
        ? {id: el.id, title: el.title, completed: !el.completed}
        : el,
    );
    yield AsyncStorageOperations.todosList.store(
      listId,
      JSON.stringify(result),
    );
    yield put(toggleTodoResolved(result));
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* removeTodoSaga({
  payload,
}: Action<TodoOperationsT>): IterableIterator<any> {
  try {
    const {id, listId} = payload!;
    yield put(removeTodoPending());
    const list: any = yield select(selectList);
    const result = (list as TodosListT).filter((el) => el.id !== id);
    yield AsyncStorageOperations.todosList.store(
      listId,
      JSON.stringify(result),
    );
    yield put(removeTodoResolved(result));
  } catch (e) {
    yield put(actionRejected());
  }
}

export function* watchTodosSaga(): IterableIterator<any> {
  yield takeLeading(GET_TODOS_INDEX.saga, getIndexSaga);
  yield takeLeading(ADD_TODOS_LIST.saga, addListSaga);
  yield takeLeading(REMOVE_TODOS_LIST.saga, removeListSaga);
  yield takeLeading(GET_TODO_LIST.saga, getTodoListSaga);
  yield takeLeading(ADD_TODO.saga, addTodoSaga);
  yield takeLeading(REMOVE_TODO.saga, removeTodoSaga);
  yield takeLeading(TOGGLE_TODO.saga, toggleTodoSaga);
}
