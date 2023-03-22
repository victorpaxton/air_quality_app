import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { ActivityIndicator } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import AQICard from './AQICard';

import { AirData } from '../constants/dump';
import PollutantCard from './PollutantCard';

const AirIndex = () => {
  const data = AirData.data[0];

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

        <TouchableOpacity
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
      </View>

      <AQICard />

      {showFull ? (
        <View>
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
              image={assets.pm25}
              title="Particles &lt; 2.5 &#181;m"
              value={data.pm25}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.pm10}
              title="Particles &lt; 10 &#181;m"
              value={data.pm10}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.co}
              title="Carbon Dioxide"
              value={data.co}
              unit="ppm"
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
              value={data.so2}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.no2}
              title="Nitrogen Dioxide"
              value={data.no2}
              unit="&#181;g/m3"
            />
            <PollutantCard
              image={assets.o3}
              title="Ozone"
              value={data.o3}
              unit="&#181;g/m3"
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AirIndex;
