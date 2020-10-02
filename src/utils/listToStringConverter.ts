import {TodoType} from 'src/store/todos/todos.types';

export default (list: string, title: string): string => {
  const parsedList = JSON.parse(list);
  const result = parsedList.reduce(
    (acc: string[], el: TodoType) => {
      acc.push(`${el.title} completed: ${el.completed}`);
      return acc
    },
    [title.toUpperCase()],
  );
  return result.join('\n');
};



