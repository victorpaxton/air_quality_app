import { View, Text } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants';

const DayChart = () => {
  return (
    <View style={{ margin: SIZES.large }}>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: 28,
          color: COLORS.white,
        }}
      >
        DayChart
      </Text>
    </View>
  );
};

export default DayChart;
