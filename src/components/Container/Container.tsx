import React, {ReactElement, ReactNode} from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}

export const Container = ({children, style}: Props): ReactElement => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
  );
};
