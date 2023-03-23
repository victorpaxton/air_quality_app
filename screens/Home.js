import { View, SafeAreaView, ScrollView } from 'react-native';

import { COLORS } from '../constants';

import { DayChart, HomeHeader, AirIndex } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <HomeHeader />

          <AirIndex />

          {/* <DayChart /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
