import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: normalize(20),
    marginHorizontal: normalize(20),
    marginBottom: normalize(10),
  },
  scrollWrapper: {width: '100%'},
});
