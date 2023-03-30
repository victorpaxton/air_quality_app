import { View, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

import AirStatus from './AirStatus.js';
import Face from './Face.js';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AQIBar from './AQIBar';

import { weatherFetch } from '../hook/useFetch';

const AQICard = ({ value, pin }) => {
  const { weatherData, isWeatherLoading, weatherError } = weatherFetch(
    pin.lat + ',' + pin.lon
  );

  const [degC, setDegC] = useState(true);

  const bgColor = () => {
    if (value >= 0 && value <= 50) return 'rgba(118, 211, 80, 0.8)';
    else if (value > 50 && value <= 100) return 'rgba(255, 224, 48, 0.8)';
    else if (value > 100 && value <= 150) return 'rgba(252, 125, 39, 0.8)';
    else if (value > 150 && value <= 200) return 'rgba(234, 27, 27, 0.8)';
    else if (value > 200 && value <= 300) return 'rgba(178, 70, 145, 0.8)';
    else return 'rgba(153, 68, 68, 0.8)';
  };

  return (
    <View
      style={{
        margin: SIZES.medium,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          backgroundColor: bgColor(),
          borderTopEndRadius: SIZES.font,
          borderTopStartRadius: SIZES.font,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 14,
          borderBottomWidth: 0.5,
          borderBottomColor: 'gray',
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.extraLarge,
        }}
      >
        <View
          style={{
            width: '60%',
            gap: 6,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.large,
              textTransform: 'uppercase',
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            AQI
            {'  '}
            <Text
              style={{
                fontSize: SIZES.large,
                textTransform: 'capitalize',
                fontFamily: FONTS.regular,
              }}
            >
              (Air Quality Index)
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: FONTS.bold,
              color: COLORS.secondary,
              textShadowColor: 'rgba(0, 0, 0, 0.8)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 5,
            }}
          >
            <AirStatus value={value} />
          </Text>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '80%',
              marginTop: 5,
              paddingVertical: 8,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: SIZES.font,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontFamily: FONTS.medium,
                color: bgColor(),
                textShadowColor: 'rgba(0, 0, 0, 0.8)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              {value}{' '}
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.regular,
                color: bgColor(),
              }}
            >
              US AQI
            </Text>
          </View>
        </View>
        <Face value={value} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 14,
          paddingHorizontal: SIZES.extraLarge,
          backgroundColor: 'white',
          borderBottomEndRadius: SIZES.font,
          borderBottomStartRadius: SIZES.font,
        }}
      >
        {isWeatherLoading ? (
          <>
            <ActivityIndicator size="small" color={COLORS.primary} />
          </>
        ) : weatherError ? (
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: '20%',
              fontSize: SIZES.large,
            }}
          >
            No data available!
          </Text>
        ) : (
          <>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={SIZES.extraLarge}
                color={COLORS.primary}
              />
              <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                {degC ? (
                  <TouchableOpacity onPress={() => setDegC(!degC)}>
                    <Text
                      style={{
                        fontSize: SIZES.extraLarge,
                        color: COLORS.primary,
                      }}
                    >
                      {weatherData.temp_c}
                      <MaterialCommunityIcons
                        name="temperature-celsius"
                        size={24}
                        color={COLORS.primary}
                      />
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDegC(!degC)}>
                    <Text
                      style={{
                        fontSize: SIZES.extraLarge,
                        color: COLORS.primary,
                      }}
                    >
                      {weatherData.temp_f}
                      <MaterialCommunityIcons
                        name="temperature-fahrenheit"
                        size={24}
                        color={COLORS.primary}
                      />
                    </Text>
                  </TouchableOpacity>
                )}
                <Text style={{ fontSize: SIZES.large, color: COLORS.primary }}>
                  {weatherData.condition ? weatherData.condition.text : '__'}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Ionicons
                name="water"
                size={SIZES.large}
                color={COLORS.primary}
              />
              <Text style={{ fontSize: SIZES.large, color: COLORS.primary }}>
                {weatherData.humidity} %
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Feather name="wind" size={SIZES.large} color={COLORS.primary} />
              <Text style={{ fontSize: SIZES.large, color: COLORS.primary }}>
                {weatherData.wind_kph} km/h
              </Text>
            </View>
          </>
        )}
      </View>
      <AQIBar value={value} color={bgColor()} />
    </View>
  );
};

export default AQICard;
