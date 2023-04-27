import { View, SafeAreaView, ScrollView } from 'react-native';

import { COLORS } from '../constants';

import { DayChart, HomeHeader, AirIndex, HealthAdvice } from '../components';

import { useStateContext } from '../context/StateContext';

const Home = () => {
  const { location, pin } = useStateContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <HomeHeader location={location} />

          <AirIndex pin={pin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
