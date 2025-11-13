import { ViewStyle } from 'react-native';

export const MAIN_COLOR = 'rgb(5, 133, 107)';

export const containerStyle = (backgroundColor = 'white'): ViewStyle => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor,
});
