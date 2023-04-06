import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { HomeHeader } from "../components";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { ForecastGraph } from "../components";
import { ForecastLine } from "../components";
import { HourlyItem } from "../components";
import { forecastDay } from "../hook/useFetch";
import { ActivityIndicator } from "react-native";

const Report = () => {
  const { data, isLoading, error } = forecastDay();

  return isLoading ? (
    <>
      <ActivityIndicator
        size="large"
        color="white"
        style={{ paddingTop: "20%" }}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: 10,
          paddingBottom: "20%",
          fontSize: SIZES.large,
        }}
      >
        Loading...
      </Text>
    </>
  ) : error ? (
    <Text
      style={{
        color: "white",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: "20%",
        fontSize: SIZES.large,
      }}
    >
      Oops, something went wrong!
    </Text>
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator="false">
        <View style={{ zIndex: 1 }}>
          <HomeHeader />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              margin: SIZES.large,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: 28,
                color: COLORS.white,
              }}
            >
              7 day Forecast
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 15,
              paddingVertical: 5,
              backgroundColor: "rgba(211,211,211,0.3)",
            }}
          >
            <ForecastLine
              day={data[0].day}
              aqi="51-100"
              icon={data[0].icon}
              temp1={data[0].temperature_min}
              temp2={data[0].temperature_max}
              wind={data[0].wind.speed}
              angle={data[0].wind.angle}
            />
            <ForecastLine
              day={data[1].day}
              aqi="51-100"
              icon={data[1].icon}
              temp1={data[1].temperature_min}
              temp2={data[1].temperature_max}
              wind={data[1].wind.speed}
              angle={data[1].wind.angle}
            />
            <ForecastLine
              day={data[2].day}
              aqi="51-100"
              icon={data[2].icon}
              temp1={data[2].temperature_min}
              temp2={data[2].temperature_max}
              wind={data[2].wind.speed}
              angle={data[2].wind.angle}
            />
            <ForecastLine
              day={data[3].day}
              aqi="51-100"
              icon={data[3].icon}
              temp1={data[3].temperature_min}
              temp2={data[3].temperature_max}
              wind={data[3].wind.speed}
              angle={data[3].wind.angle}
            />
            <ForecastLine
              day={data[4].day}
              aqi="51-100"
              icon={data[4].icon}
              temp1={data[4].temperature_min}
              temp2={data[4].temperature_max}
              wind={data[4].wind.speed}
              angle={data[4].wind.angle}
            />
            <ForecastLine
              day={data[5].day}
              aqi="51-100"
              icon={data[5].icon}
              temp1={data[5].temperature_min}
              temp2={data[5].temperature_max}
              wind={data[5].wind.speed}
              angle={data[5].wind.angle}
            />
            <ForecastLine
              day={data[6].day}
              aqi="51-100"
              icon={data[6].icon}
              temp1={data[6].temperature_min}
              temp2={data[6].temperature_max}
              wind={data[6].wind.speed}
              angle={data[6].wind.angle}
            />
          </View>
          {/* <DayChart /> */}
        </View>
      </ScrollView>
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Report;
