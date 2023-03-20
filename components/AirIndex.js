import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AirData } from '../constants/dump';
import { COLORS, FONTS, SIZES } from '../constants';

import IndexCard from './IndexCard';

import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

const AirIndex = () => {
  const isLoading = false;
  const [showFull, setShowFull] = useState('false');

  const data = AirData.data[0];

  return isLoading ? (
    <ActivityIndicator size="large" color="gray" />
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

      <IndexCard
        title={'AQI'}
        subtitle="(Air quality index)"
        value={Object.values(data)[0]}
        colors={['#4b4b4b', '#439e5a']}
      />

      {showFull ? (
        <View>
          <IndexCard
            title={'CO'}
            subtitle="(Carbon monoxide)"
            value={Object.values(data)[1]}
            colors={['#4b4b4b', '#e9685c']}
          />
          <IndexCard
            title={'NO2'}
            subtitle="(Nitrogen dioxide)"
            value={Object.values(data)[3]}
            colors={['#4b4b4b', '#e1bd4e']}
          />
          <IndexCard
            title={'O3'}
            subtitle="(ozone)"
            value={Object.values(data)[4]}
            colors={['#4b4b4b', '#e9685c']}
          />
          <IndexCard
            title={'PM10'}
            subtitle="(Particles &lt; 10&#181;m)"
            value={Object.values(data)[5]}
            colors={['#4b4b4b', '#439e5a']}
          />
          <IndexCard
            title={'PM2.5'}
            subtitle="(Particles &lt; 2.5&#181;m)"
            value={Object.values(data)[6]}
            colors={['#4b4b4b', '#e1bd4e']}
          />
          <IndexCard
            title={'SO2'}
            subtitle="(sulfur dioxide)"
            value={Object.values(data)[7]}
            colors={['#4b4b4b', '#e9685c']}
          />
        </View>
      ) : null}
    </View>
  );
};

export default AirIndex;
