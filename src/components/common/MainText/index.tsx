import React from 'react';
import { Text, TextStyle } from 'react-native';

type props = {
  children: string;
  style?: TextStyle;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'condensedBold'
    | 'condensed'
    | 'heavy'
    | 'black'
    | undefined;
};

const mapFontWeightToFontFamily = {
  // numeric string weights
  '200': 'Cairo-ExtraLight',
  '300': 'Cairo-Light',
  '400': 'Cairo-Regular',
  '500': 'Cairo-Medium',
  '600': 'Cairo-SemiBold',
  '700': 'Cairo-Bold',
  '800': 'Cairo-ExtraBold',

  // string keywords
  normal: 'Cairo-Regular',
  bold: 'Cairo-Bold',
  ultralight: 'Cairo-ExtraLight',
  thin: 'Cairo-ExtraLight',
  light: 'Cairo-Light',
  regular: 'Cairo-Regular',
  medium: 'Cairo-Medium',
  semibold: 'Cairo-SemiBold',
  heavy: 'Cairo-ExtraBold',
  black: 'Cairo-ExtraBold',
  condensed: 'Cairo-Regular', // Cairo has no condensed variant
  condensedBold: 'Cairo-Bold', // approximation

  // fallback
  undefined: 'Cairo-Regular',
};

export const MainText = ({ fontWeight, style, children }: props) => {
  return (
    <Text
      style={[
        style,
        {
          fontWeight,
          fontFamily: mapFontWeightToFontFamily[fontWeight],
          lineHeight: style?.fontSize ? style?.fontSize * 1.5 : undefined,
        },
      ]}
    >
      {children}
    </Text>
  );
};
