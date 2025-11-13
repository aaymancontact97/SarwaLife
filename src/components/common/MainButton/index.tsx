import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { MainText } from '../MainText';
import { MAIN_COLOR } from '../../../styles/common';

type props = {
  title: string;
  type: 'Bold' | 'Light';
  icon?: React.ReactNode;
  style?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
};

export const MainButton = ({
  title,
  type,
  disabled,
  icon,
  style,
  onPress,
}: props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        style,
        {
          width: style?.width ? style.width : '90%',
          backgroundColor: type === 'Bold' ? MAIN_COLOR : 'white',
          borderColor: type === 'Bold' ? 'transparent' : MAIN_COLOR,
        },
        buttonStyle.container,
      ]}
    >
      <MainText
        style={{
          fontSize: 16,
          color: type !== 'Bold' ? MAIN_COLOR : 'white',
        }}
        fontWeight={'700'}
      >
        {title}
      </MainText>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 56,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
