import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";

const ForecastAQI = ({ aqi }) => {
  if (aqi >= 0 && aqi <= 50)
    return (
      <View
        style={{
          width: 59,
          borderRadius: 5,
          backgroundColor: COLORS.good,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          0-50
        </Text>
      </View>
    );
  else if (aqi >= 51 && aqi <= 100)
    return (
      <View
        style={{ width: 59, borderRadius: 5, backgroundColor: COLORS.moderate }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          51-100
        </Text>
      </View>
    );
  else if (aqi >= 101 && aqi <= 150)
    return (
      <View
        style={{
          width: 59,
          borderRadius: 5,
          backgroundColor: COLORS.sensitive,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          101-150
        </Text>
      </View>
    );
  else if (aqi >= 151 && aqi <= 200)
    return (
      <View
        style={{
          width: 59,
          borderRadius: 5,
          backgroundColor: COLORS.unhealthy,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          151-200
        </Text>
      </View>
    );
  else if (aqi > 200 && aqi <= 300)
    return (
      <View
        style={{
          width: 59,
          borderRadius: 5,
          backgroundColor: COLORS.very_unhealthy,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          201-300
        </Text>
      </View>
    );
  else
    return (
      <View
        style={{
          width: 59,
          borderRadius: 5,
          backgroundColor: COLORS.hazardous,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
          }}
        >
          300+
        </Text>
      </View>
    );
};

export default ForecastAQI;
