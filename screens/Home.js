import { View, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import { COLORS } from '../constants';

import { DayChart, HomeHeader, AirIndex, HealthAdvice } from '../components';

const Home = ({ route }) => {
  const { location, pin } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <HomeHeader location={location} />

          <AirIndex pin={pin} />

          <DayChart />

          <HealthAdvice />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
