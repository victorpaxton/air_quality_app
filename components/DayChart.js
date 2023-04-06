import { Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { COLORS } from '../constants';

const screenWidth = Dimensions.get('window').width;

const DayChart = ({ chartData, fillShadowGradient }) => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    // backgroundGradientFrom: COLORS.good,

    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    // backgroundGradientTo: COLORS.hazardous,
    backgroundGradientToOpacity: 0,

    fillShadowGradient,
    // fillShadowGradientOpacity: 1,
    color: (opacity = 1) => COLORS.good,
    labelColor: (opacity = 1) => COLORS.lightgray,
    strokeWidth: 3,

    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  return (
    <LineChart
      data={chartData}
      width={screenWidth}
      height={300}
      chartConfig={chartConfig}
      verticalLabelRotation={90}
      xLabelsOffset={-10}
      hidePointsAtIndex={[
        1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 21, 22,
      ]}
      bezier
      style={{ marginLeft: -15 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  legendContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default DayChart;
