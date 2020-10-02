import React, {FC, ReactElement, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {EmptyListComponent} from 'src/components/EmptyListComponent/EmptyListComponent';
import {ScrollWrapper} from 'src/components/ScrollWrapper/ScrollWrapper';
import {colors} from 'src/constants/platformSpecificColors';
import {useSelector, useDispatch} from 'react-redux';
import {
  getTodoListAction,
  removeTodoAction,
  toggleTodoAction,
} from 'src/store/todos/todos.actions';
import {
  selectList,
  selectLoading,
} from 'src/store/todos/todos.selector';
import {Header} from 'src/components/Header/Header';
import {Todo} from 'src/components/Todo/Todo';
import {ListType, TodoType} from 'src/store/todos/todos.types';

export type TodoListPropsT = {
  listPointer: ListType;
  back(): void;
};

export const TodosList: FC<TodoListPropsT> = ({
  listPointer,
  back,
}): ReactElement => {
  const mainLoader = useSelector(selectLoading);
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoListAction(listPointer.id));
  }, [dispatch]);

  const _removeTodo = (id: string) => {
    dispatch(removeTodoAction({id, listId: listPointer.id}));
  };

  const _toggleTodo = (id: string) => {
    dispatch(toggleTodoAction({id, listId: listPointer.id}));
  };

  const _renderList = () =>
    list.length ? (
      (list as Array<TodoType>).map((el) => {
        return (
          <Todo
            item={el}
            key={el.id}
            removeHandler={_removeTodo}
            toggleHandler={_toggleTodo}
          />
        );
      })
    ) : (
      <EmptyListComponent variant={'TODOS'} />
    );

  return (
    <>
      <Header back={back} listId={listPointer.name} />
      {mainLoader ? (
        <View
          style={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator animating size={'large'} color={colors!.color} />
        </View>
      ) : (
        <ScrollWrapper>{_renderList()}</ScrollWrapper>
      )}
    </>
  );
};
