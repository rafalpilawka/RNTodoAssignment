import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    height: normalize(80),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text: {fontSize: normalize(16), flex: 1, paddingHorizontal: normalize(20)},
});
