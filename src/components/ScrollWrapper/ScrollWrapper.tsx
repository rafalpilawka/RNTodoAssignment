import React, {ReactElement, ReactNode} from 'react';
import {ScrollView, ViewStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
  testId?: string;
}

export const ScrollWrapper = ({children, testId}: Props): ReactElement => {
  return (
    <ScrollView
      style={styles.scrollWrapper}
      testID={testId}
      keyboardShouldPersistTaps="always"
      bounces
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
