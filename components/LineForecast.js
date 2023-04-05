import { View, Text, Image, StyleSheet } from "react-native";
import WeatherIcon from "./WeatherIcon.js";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
const ForecastLine = ({ day, aqi, icon, temp1, temp2, wind, angle }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: SIZES.large,
      paddingBottom: 3,
      paddingTop: 3,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
    },
  });
  const date = new Date(day);
  const day1 = date.toLocaleString("en-US", { weekday: "long" }).split(",")[0];
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", width: "18%" }}>{day1}</Text>
      <View style={{ borderRadius: 5, backgroundColor: COLORS.moderate }}>
        <Text
          style={{
            color: "white",
            padding: 5,
          }}
        >
          {aqi}
        </Text>
      </View>
      <View>
        <WeatherIcon i={icon} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 7,
        }}
      >
        <Text style={{ color: "gray" }}>{Math.floor(temp1)}°C</Text>
        <Text style={{ color: "white" }}>{Math.floor(temp2)}°C</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 7,
        }}
      >
        <Image
          style={{
            width: 10,
            height: 14,
            transform: [{ rotate: `${angle}deg` }],
          }}
          source={assets.arrow}
        />
        <Text style={{ color: "white", width: 50 }}>{wind} m/s</Text>
      </View>
    </View>
  );
};

export default ForecastLine;
