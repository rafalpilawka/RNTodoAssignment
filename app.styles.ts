import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from 'src/constants/platformSpecificColors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  addButton: {
    bottom: normalize(30),
    position: 'absolute',
    borderRadius: normalize(60),
    width: normalize(60),
    height: normalize(60),
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: normalize(4),
    alignItems: 'center',
    backgroundColor: colors!.color,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
  modalInput: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: normalize(10),
    fontSize: normalize(16),
  },
  modalTitle: {
    marginVertical: normalize(10),
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
