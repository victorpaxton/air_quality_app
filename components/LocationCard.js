import { View, Text, ActivityIndicator } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

import AirStatus from './AirStatus.js';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherFetch, currentAirFetch } from '../hook/useFetch';

const bgColor = (value) => {
  if (value >= 0 && value <= 50) return 'rgba(118, 211, 80, 0.8)';
  else if (value > 50 && value <= 100) return 'rgba(255, 224, 48, 0.8)';
  else if (value > 100 && value <= 150) return 'rgba(252, 125, 39, 0.8)';
  else if (value > 150 && value <= 200) return 'rgba(234, 27, 27, 0.8)';
  else if (value > 200 && value <= 300) return 'rgba(178, 70, 145, 0.8)';
  else return 'rgba(153, 68, 68, 0.8)';
};

const LocationCard = ({ city, country, lon, lat }) => {
  const { weatherData, isWeatherLoading, weatherError } = weatherFetch(
    lat + ',' + lon
  );

  const { airData, isAirLoading, airError } = currentAirFetch(lon, lat);

  return isWeatherLoading || isAirLoading ? (
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
  ) : weatherError || airError ? (
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
    <View
      style={{
        margin: SIZES.medium,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          backgroundColor: bgColor(airData.aqi),
          borderRadius: SIZES.font,
          flexDirection: 'row',
          paddingBottom: 14,
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.extraLarge,
        }}
      >
        <View
          style={{
            width: '50%',
            gap: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: SIZES.extraLarge,
                textTransform: 'capitalize',
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {city.substring(0, 12)} {city.length > 12 ? '...' : ''}
            </Text>
            <Text
              style={{
                fontSize: SIZES.large,
                textTransform: 'capitalize',
                fontFamily: FONTS.regular,
              }}
            >
              {country}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'col',
              justifyContent: 'flex-end',
              gap: 2,
            }}
          >
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

            <Text style={{ fontSize: SIZES.large, color: COLORS.primary }}>
              {weatherData.condition ? weatherData.condition.text : '__'}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'col',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 15,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '70%',
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
                color: bgColor(airData.aqi),
                textShadowColor: 'rgba(0, 0, 0, 0.8)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              {airData.aqi}{' '}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.regular,
                  color: bgColor(airData.aqi),
                }}
              >
                US
              </Text>
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.regular,
                  color: bgColor(airData.aqi),
                }}
              >
                AQI
              </Text>
            </View>
          </View>

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
            <AirStatus value={airData.aqi} />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LocationCard;
