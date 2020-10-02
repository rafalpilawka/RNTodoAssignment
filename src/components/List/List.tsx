import React, {ReactElement} from 'react';
import {Pressable, Text} from 'react-native';
import {RemoveButton} from 'src/components/RemoveButton/RemoveButton';
import {onShare} from 'src/services/shareList';

import {ListType} from 'src/store/todos/todos.types';
import {styles} from 'src/components/List/styles';

type PropsT = {
  item: ListType;
  navigate(id: string): void;
  removeHandler(id: string): void;
};

export const List = ({
  item: {id, name},
  navigate,
  removeHandler,
}: PropsT): ReactElement => {
  const _removeList = () => {
    removeHandler(id);
  };

  return (
    <Pressable
      style={styles.list}
      onPress={() => navigate(id)}
      onLongPress={() => onShare(id, name)}>
      <Text style={styles.text}>{name}</Text>
      <RemoveButton onPress={_removeList} />
    </Pressable>
  );
};
