import React, {ReactElement} from 'react';
import {styles} from 'src/components/EmptyListComponent/styles';
import {Text, View} from 'react-native';

type PropsT = {
  variant: 'LISTS' | 'TODOS';
};
export const EmptyListComponent = ({variant}: PropsT): ReactElement => (
  <View style={styles.container}>
    <Text style={styles.text}>OH NO! EMPTY LIST</Text>
    <Text style={styles.text}>{`DONT HESITATE TO ADD\nSOME ${variant}`}</Text>
  </View>
);
