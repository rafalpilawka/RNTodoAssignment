import {ListsIndexT, TodosListT} from 'src/store/todos/todos.types';
import {RootState} from 'src/store/rootStore';

export const selectIndex = (state: RootState): ListsIndexT => state.index;
export const selectList = (state: RootState): TodosListT => state.todos;
export const selectLoading = (state: RootState) => state.loading;
export const selectIdLoader = (state: RootState) => state.idLoader;
