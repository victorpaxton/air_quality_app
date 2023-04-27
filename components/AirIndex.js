import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { ActivityIndicator } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import AQICard from './AQICard';
import HealthAdvice from './HealthAdvice';

import PollutantCard from './PollutantCard';
import BarChart from './BarChart';

import { currentAirFetch, air24hFetch } from '../hook/useFetch';

const bgColor = (value) => {
  if (value >= 0 && value <= 50) return COLORS.good;
  else if (value > 50 && value <= 100) return COLORS.moderate;
  else if (value > 100 && value <= 150) return COLORS.sensitive;
  else if (value > 150 && value <= 200) return COLORS.unhealthy;
  else if (value > 200 && value <= 300) return COLORS.very_unhealthy;
  else return COLORS.hazardous;
};

const pm25Color = (value) => {
  if (value >= 0 && value <= 12.0) return COLORS.good;
  else if (value > 12.1 && value <= 35.4) return COLORS.moderate;
  else if (value > 35.5 && value <= 55.4) return COLORS.sensitive;
  else if (value > 55.5 && value <= 150.4) return COLORS.unhealthy;
  else if (value > 150.5 && value <= 250.4) return COLORS.very_unhealthy;
  else return COLORS.hazardous;
};

const AirIndex = ({ pin }) => {
  const { airData, isAirLoading, airError } = currentAirFetch(pin.lon, pin.lat);
  const { air24h, isAir24hLoading, air24hError } = air24hFetch(
    pin.lon,
    pin.lat
  );

  console.log(pin, airData);
  if (air24h) {
    var data = air24h.map((dataPoint) => ({
      label: dataPoint.timestamp_local.substring(11, 13) + 'h',
      value: dataPoint.aqi,
    }));
    var pm25 = air24h.map((dataPoint) => ({
      label: dataPoint.timestamp_local.substring(11, 13) + 'h',
      value: dataPoint.pm25,
    }));
  }

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

      <AQICard value={airData.aqi} pin={pin} />

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
              url={'https://www.pranaair.com/what-is-particulate-matter-pm/'}
            />
            <PollutantCard
              image={assets.pm10}
              title="Particles &lt; 10 &#181;m"
              value={airData.pm10}
              unit="&#181;g/m3"
              url={'https://www.pranaair.com/what-is-particulate-matter-pm/'}
            />
            <PollutantCard
              image={assets.co}
              title="Carbon Dioxide"
              value={airData.co}
              unit="&#181;g/m3"
              url={'https://www.pranaair.com/what-is-carbon-monoxide-co/'}
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
              url={'https://www.pranaair.com/what-is-sulfur-dioxide-so2/'}
            />
            <PollutantCard
              image={assets.no2}
              title="Nitrogen Dioxide"
              value={airData.no2}
              unit="&#181;g/m3"
              url={'https://www.pranaair.com/what-is-nitrogen-dioxide-no2/'}
            />
            <PollutantCard
              image={assets.o3}
              title="Ozone"
              value={airData.o3}
              unit="&#181;g/m3"
              url={'https://www.pranaair.com/what-is-ozone-o3/'}
            />
          </View>
        </View>
      ) : null}

      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: 28,
          color: COLORS.white,
          margin: SIZES.large,
        }}
      >
        Last 24 hours
      </Text>

      {isAir24hLoading ? (
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
      ) : air24hError ? (
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
        <>
          <Text
            style={{
              fontFamily: FONTS.semibold,
              fontSize: 20,
              color: COLORS.white,
              marginBottom: SIZES.large,
              textAlign: 'center',
            }}
          >
            AQI
          </Text>
          <BarChart data={data} bgColor={bgColor} />

          <Text
            style={{
              fontFamily: FONTS.semibold,
              fontSize: 20,
              color: COLORS.white,
              marginVertical: SIZES.large,
              textAlign: 'center',
            }}
          >
            PM 2.5
          </Text>
          <BarChart data={pm25} bgColor={pm25Color} />
        </>
      )}

      <HealthAdvice value={airData.aqi} />
    </ScrollView>
  );
};

export default AirIndex;
