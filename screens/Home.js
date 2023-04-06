import { View, SafeAreaView, ScrollView } from 'react-native';

import { COLORS } from '../constants';

import { DayChart, HomeHeader, AirIndex, HealthAdvice } from '../components';

import { AirData } from '../constants/dump';

const chartData = {
  labels: AirData.data
    .slice(0, 24)
    .reverse()
    .map((item) => item.timestamp_local.substring(11, 16)),
  datasets: [
    {
      data: AirData.data
        .slice(0, 24)
        .reverse()
        .map((item) => item.aqi),
    },
    // {
    //   key: 'dummy-range-padding',
    //   data: [0, 200],
    //   color: () => 'rgba0, 0, 0, 0',
    //   strokeDashArray: [0, 1000],
    //   withDots: false,
    // },
  ],
};

const Home = ({ route }) => {
  const { location, pin } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <HomeHeader location={location} />

          <AirIndex pin={pin} />

          <DayChart chartData={chartData} />

          <HealthAdvice />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
