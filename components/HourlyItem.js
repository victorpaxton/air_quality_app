import { View, Text } from "react-native";
import React from "react";

const HourlyItem = (hour, aqi, icon, temp1, temp2) => {
  return (
    <View>
      style=
      {{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "90",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        margin: 4,
      }}
      <Text>
        style=
        {{
          fontSize: 15,
          fontWeight: "bold",
          color: "white",
          margin: 20,
        }}
        {hour}
      </Text>
      <Text>
        style=
        {{
          fontSize: 15,
          fontWeight: "bold",
          color: "white",
          margin: 20,
        }}
        {aqi}
      </Text>
      <Text>
        style=
        {{
          fontSize: 15,
          fontWeight: "bold",
          color: "white",
          margin: 20,
        }}
        {icon}
      </Text>
      <Text>
        style=
        {{
          fontSize: 15,
          fontWeight: "bold",
          color: "white",
          margin: 20,
        }}
        {temp1}
        {temp2}
      </Text>
    </View>
  );
};

export default HourlyItem;
