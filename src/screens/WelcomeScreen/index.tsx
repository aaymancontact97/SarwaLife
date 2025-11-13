import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { containerStyle } from '../../styles/common';

export const WelcomeScreen = () => {
  return (
    <View style={containerStyle()}>
      <Image
        source={require('../../assets/images/SarwaLifeLogo.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 144,
    height: 144,
    resizeMode: 'contain',
  },
});
