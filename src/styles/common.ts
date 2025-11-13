import { ViewStyle } from 'react-native';

export const containerStyle = (backgroundColor = 'white'): ViewStyle => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor,
});
