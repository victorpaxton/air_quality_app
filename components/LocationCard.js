import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

import AirStatus from './AirStatus.js';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherFetch, currentAirFetch } from '../hook/useFetch';
import { Swipeable } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';
import { useStateContext } from '../context/StateContext';
import { useNavigation } from '@react-navigation/native';

const bgColor = (value) => {
  if (value >= 0 && value <= 50) return 'rgba(118, 211, 80, 0.8)';
  else if (value > 50 && value <= 100) return 'rgba(255, 224, 48, 0.8)';
  else if (value > 100 && value <= 150) return 'rgba(252, 125, 39, 0.8)';
  else if (value > 150 && value <= 200) return 'rgba(234, 27, 27, 0.8)';
  else if (value > 200 && value <= 300) return 'rgba(178, 70, 145, 0.8)';
  else return 'rgba(153, 68, 68, 0.8)';
};

const LocationCard = ({ location, pin, handleDelete }) => {
  const navigation = useNavigation();

  const { changeDefaultLocation } = useStateContext();

  const { weatherData, isWeatherLoading, weatherError } = weatherFetch(
    pin.lat + ',' + pin.lon
  );

  const { airData, isAirLoading, airError } = currentAirFetch(pin.lon, pin.lat);

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            <AntDesign name="delete" size={32} color="white" />
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

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
    <Swipeable renderLeftActions={leftSwipe}>
      <TouchableOpacity
        style={{
          backgroundColor: bgColor(airData.aqi),
          borderRadius: SIZES.font,
          flexDirection: 'row',
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.extraLarge,
          margin: SIZES.medium,
          ...SHADOWS.dark,
          height: 170,
        }}
        onPress={() => {
          changeDefaultLocation(location, pin);
          navigation.navigate('Home');
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
              {location.city.substring(0, 12)}
              {location.city.length > 12 ? '...' : ''}
            </Text>
            <Text
              style={{
                fontSize: SIZES.large,
                textTransform: 'capitalize',
                fontFamily: FONTS.regular,
              }}
            >
              {location.country.substring(0, 12)}
              {location.country.length > 12 ? '...' : ''}
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
            width: '50%',
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.white,
              width: 100,
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
              fontSize: 25,
              fontFamily: FONTS.bold,
              textShadowColor: 'rgba(0, 0, 0, 0.8)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 5,
            }}
          >
            <AirStatus value={airData.aqi} />
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteBox: {
    margin: SIZES.medium,
    borderTopLeftRadius: SIZES.font,
    borderBottomLeftRadius: SIZES.font,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '120%',
    height: 170,
  },
});

export default LocationCard;
