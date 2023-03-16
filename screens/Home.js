import { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

import {
  DayChart,
  FocusedStatusBar,
  HomeHeader,
  IndexCard,
  Temperature,
} from '../components';
import { AntDesign } from '@expo/vector-icons';

import { AirData } from '../constants/dump';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  const data = AirData.data[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <HomeHeader />

          <Temperature />

          {/* <DayChart /> */}

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
          </View>
          <IndexCard
            title={'AQI'}
            subtitle="(Air quality index)"
            value={Object.values(data)[0]}
            colors={['#4b4b4b', '#439e5a']}
          />
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

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: '100%', backgroundColor: COLORS.primary }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
