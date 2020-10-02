import {all, call} from 'redux-saga/effects';
import {applyMiddleware, combineReducers, createStore, Reducer} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import todosReducer from 'src/store/todos/todos.reducer';
import {watchTodosSaga} from 'src/store/todos/todos.saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    call(watchTodosSaga),
    //OTHER WATCHERS GOES HERE
  ]);
}

// const store: Reducer<RootState> = combineReducers<RootState>({
//   todos: todosReducer,
// });

const rootStore = (state: any, action: any) => {
  return todosReducer(state, action);
};

// export interface RootState {
//   todos: ReduxState;
// }

export type RootState = ReturnType<typeof todosReducer>;

export default createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
