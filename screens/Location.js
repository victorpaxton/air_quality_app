import { View, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../constants';

const Location = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <Text>abc</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;
