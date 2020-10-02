import {StyleSheet} from 'react-native';
import {colors} from 'src/constants/platformSpecificColors';
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  safeArea: {
    justifyContent: 'flex-end',
    backgroundColor: colors!.color,
  },
  secondContainer: {
    backgroundColor: colors!.color,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: normalize(25),
    height: normalize(200),
  },
  itemsContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
});
