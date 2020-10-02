import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  text: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  button: {
    backgroundColor: 'red',
    borderRadius: normalize(50),
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
