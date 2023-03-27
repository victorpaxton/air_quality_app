import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { ActivityIndicator } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import AQICard from './AQICard';

import PollutantCard from './PollutantCard';
import { currentAirFetch } from '../hook/useFetch';

const AirIndex = () => {
  const { airData, isAirLoading, airError } = currentAirFetch(
    '106.6297',
    '10.8231'
  );

  const [showFull, setShowFull] = useState(false);

  return isAirLoading ? (
    <>
      <ActivityIndicator
        size="large"
        color="white"
        style={{ paddingTop: '20%' }}
      />
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: 10,
          paddingBottom: '20%',
          fontSize: SIZES.large,
        }}
      >
        Loading...
      </Text>
    </>
  ) : airError ? (
    <Text
      style={{
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: '20%',
        fontSize: SIZES.large,
      }}
    >
      Oops, something went wrong!
    </Text>
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
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
      </View>

      <Text style={{ color: 'white', textAlign: 'center' }}>
        Last Updated at {airData.timestamp_local.substring(11, 16)} -{' '}
        {airData.timestamp_local.substring(8, 10)}/
        {airData.timestamp_local.substring(5, 7)}/
        {airData.timestamp_local.substring(0, 4)}.
      </Text>

      <AQICard value={airData.aqi} />

      <TouchableOpacity
        style={{
          paddingBottom: 24,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
        onPress={() => {
          setShowFull(!showFull);
        }}
      >
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

      {showFull ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.large,
              marginBottom: 20,
            }}
          >
            <PollutantCard
              image={assets.pm25}
              title="Particles &lt; 2.5 &#181;m"
              value={airData.pm25}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.pm10}
              title="Particles &lt; 10 &#181;m"
              value={airData.pm10}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.co}
              title="Carbon Dioxide"
              value={airData.co}
              unit="&#181;g/m3"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // width: '100%',
              marginHorizontal: SIZES.large,
              marginBottom: 20,
            }}
          >
            <PollutantCard
              image={assets.so2}
              title="Sulfur Dioxide"
              value={airData.so2}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.no2}
              title="Nitrogen Dioxide"
              value={airData.no2}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.o3}
              title="Ozone"
              value={airData.o3}
              unit="&#181;g/m3"
            />
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default AirIndex;
