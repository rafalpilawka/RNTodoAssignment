import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from 'src/constants/platformSpecificColors';

export const styles = StyleSheet.create({
  headerContainer: {
    height: normalize(50),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: colors!.color,
    marginBottom: normalize(15),
    paddingHorizontal: normalize(20)
  },
  row: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    fontFamily: 'Damascus',
    color: 'white',
  },
  lifter:{paddingBottom: normalize(6),}
});
