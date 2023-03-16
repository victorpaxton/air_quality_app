import { View, Text } from 'react-native';
import { SIZES } from '../constants';
import { WeatherData } from '../constants/dump';

import { Ionicons } from '@expo/vector-icons';

const Temperature = () => {
  return (
    <View
      style={{ marginHorizontal: SIZES.medium, marginVertical: SIZES.large }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 80 }}>
          {WeatherData.current.temp_c}
        </Text>
        <Text style={{ color: 'white', fontSize: 45 }}>o</Text>
      </View>

      <Text
        style={{ color: 'white', textAlign: 'center', fontSize: SIZES.large }}
      >
        {WeatherData.current.condition.text}
        {'  '}
        <Ionicons name="partly-sunny-outline" size={24} color="white" />
      </Text>
    </View>
  );
};

export default Temperature;
