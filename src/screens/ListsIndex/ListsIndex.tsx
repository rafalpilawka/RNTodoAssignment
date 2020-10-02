import React, {FC, ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyListComponent} from 'src/components/EmptyListComponent/EmptyListComponent';
import {List} from 'src/components/List/List';
import {Header} from 'src/components/Header/Header';
import {ScrollWrapper} from 'src/components/ScrollWrapper/ScrollWrapper';
import {removeListAction} from 'src/store/todos/todos.actions';
import {selectIndex} from 'src/store/todos/todos.selector';
import {ListsIndexT, ListType} from 'src/store/todos/todos.types';
export type ListIndexPropsT = {
  navigate(id: ListType): void;
};

export const ListsIndex: FC<ListIndexPropsT> = ({navigate}): ReactElement => {
  const index: ListsIndexT = useSelector(selectIndex);
  const dispatch = useDispatch();

  const _removeList = (id: string) => {
    dispatch(removeListAction(id));
  };

  const _renderList = () =>
    index.length ? (
      (index as Array<any>).map((el) => {
        return (
          <List
            item={el}
            removeHandler={_removeList}
            navigate={() => navigate(el)}
            key={el.id}
          />
        );
      })
    ) : (
      <EmptyListComponent variant={'LISTS'} />
    );

  return (
    <>
      <Header />
      <ScrollWrapper>{_renderList()}</ScrollWrapper>
    </>
  );
};
