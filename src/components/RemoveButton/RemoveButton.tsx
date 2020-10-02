import React, {ReactElement} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from 'src/components/RemoveButton/styles';

export type PropsT = {
  onPress(): void;
};

export const RemoveButton = ({onPress}: PropsT): ReactElement => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>x</Text>
    </Pressable>
  );
};
