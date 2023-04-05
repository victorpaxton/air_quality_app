import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const WeatherGraph = () => {
  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
    useShadowColorFromDataset: false,
  };
  const data = [
    { date: "2022-04-01", temperature: 25 },
    { date: "2022-04-02", temperature: 27 },
    { date: "2022-04-03", temperature: 23 },
    { date: "2022-04-04", temperature: 20 },
    // and so on...
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast</Text>
      <LineChart
        data={{
          labels: data.map((item) => item.date),
          datasets: [
            {
              data: data.map((item) => item.temperature),
            },
          ],
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};
export default WeatherGraph;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
