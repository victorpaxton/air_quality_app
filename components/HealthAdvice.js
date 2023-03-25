import { View, Text } from 'react-native';
import React from 'react';
import { SIZES, FONTS, COLORS } from '../constants';

const HealthAdvice = () => {
  return (
    <View style={{ margin: SIZES.large }}>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: 28,
          color: COLORS.white,
        }}
      >
        Health Advice
      </Text>
    </View>
  );
};

export default HealthAdvice;
