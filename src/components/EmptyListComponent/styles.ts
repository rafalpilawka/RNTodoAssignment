import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from 'src/constants/platformSpecificColors';

export const styles = StyleSheet.create({
  text: {
    color: colors!.color,
    fontSize: normalize(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
