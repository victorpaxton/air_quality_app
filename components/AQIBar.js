import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

const AQIBar = ({ value }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'blue',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue',
        }}
      ></View>
    </View>
  );
};

export default AQIBar;
