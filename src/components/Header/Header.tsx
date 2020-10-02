import React, {ReactElement} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';

interface Props {
  back?(): void;
  listId?: string;
}
export const Header = ({back, listId}: Props): ReactElement => {
  return (
    <View style={[styles.row, styles.headerContainer]}>
      {back ? (
        <Pressable onPress={back}>
          <Text style={[styles.titleText, styles.lifter]}>{'<'}</Text>
        </Pressable>
      ) : (
        <View />
      )}
      <Text style={styles.titleText}>
        {listId ? listId.toUpperCase() : 'INDEX OF TODOS'}
      </Text>
      <View />
    </View>
  );
};
