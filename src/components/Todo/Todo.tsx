import React, {ReactElement} from 'react';
import {Pressable, Text} from 'react-native';
import {RemoveButton} from 'src/components/RemoveButton/RemoveButton';
import {TodoType} from 'src/store/todos/todos.types';
import CheckBox from '@react-native-community/checkbox';
import {styles} from 'src/components/Todo/styles';

type PropsT = {
  item: TodoType;
  removeHandler: (id: string) => void;
  toggleHandler: (id: string) => void;
};

export const Todo = ({
  removeHandler,
  toggleHandler,
  item: {id, title, completed},
}: PropsT): ReactElement => {
  const _removeTodo = () => {
    removeHandler(id);
  };

  const _toggleCheckBox = () => {
    toggleHandler(id);
  };

  return (
    <Pressable style={styles.todo} onLongPress={() => console.log('longPress')}>
      <CheckBox value={completed} onValueChange={_toggleCheckBox} />
      <Text style={styles.text}>{title}</Text>
      <RemoveButton onPress={_removeTodo} />
    </Pressable>
  );
};
