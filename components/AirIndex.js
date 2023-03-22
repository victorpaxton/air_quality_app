import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AirData } from '../constants/dump';
import { COLORS, FONTS, SIZES } from '../constants';

import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

import AQICard from './AQICard';

const AirIndex = () => {
  const isLoading = false;
  const [showFull, setShowFull] = useState(false);

  return isLoading ? (
    <ActivityIndicator
      size="large"
      color="gray"
      style={{ paddingTop: '40%' }}
    />
  ) : (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          margin: SIZES.large,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: 28,
            color: COLORS.white,
          }}
        >
          Air Quality
        </Text>

        <TouchableOpacity onPress={() => setShowFull(!showFull)}>
          {showFull ? (
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                color: COLORS.white,
              }}
            >
              Hide all pollutants{'  '}
              <AntDesign name="upcircleo" size={16} color="white" />
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                color: COLORS.white,
              }}
            >
              Show all pollutants{'  '}
              <AntDesign name="downcircleo" size={16} color="white" />
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <AQICard />

      {showFull ? (
        <View>
          <Text style={{ color: 'white' }}>abc</Text>
        </View>
      ) : null}
    </View>
  );
};

export default AirIndex;
