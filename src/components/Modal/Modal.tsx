import React, {ReactElement} from 'react';
import {
  Modal as RNModal,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './styles';

interface Props {
  visible: boolean;
  onClose?: () => void;
  children?: ReactElement;
  onDismiss?(): void;
}

export const Modal = ({visible, children, onDismiss}: Props): ReactElement => {
  const _render = () => {
    return (
      <TouchableOpacity
        testID={'dismissPlane'}
        style={styles.firstContainer}
        onPress={onDismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView style={[styles.safeArea]}>
            <TouchableOpacity
              style={[styles.secondContainer]}
              onPress={(e) => e.preventDefault()}>
              {children}
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    );
  };

  return (
    <RNModal
      animationType={'slide'}
      supportedOrientations={['portrait']}
      visible={visible}
      transparent
      onRequestClose={onDismiss}>
      {_render()}
    </RNModal>
  );
};
