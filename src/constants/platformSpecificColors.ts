import {OpaqueColorValue, Platform, PlatformColor} from 'react-native';

export const colors:
  | {color: typeof OpaqueColorValue}
  | undefined = Platform.select({
  ios: {color: PlatformColor('systemBlue')},
  android: {
    color: PlatformColor('?attr/colorAccent'),
  },
});
