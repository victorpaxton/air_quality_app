import React, { useState, useEffect, useRef } from "react";
import MapView, {
  Callout,
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import * as Location from "expo-location";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";

const GOOGLE_API_KEY = "AIzaSyCKAIyLUfKD6fTcrxanozIxyubP5XTmKXM";

// Position
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  // ĐH Bách Khoa TP HCM
  latitude: 10.77217249292377,
  longitude: 106.6578910710957,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// Search Field
function InputAutocomplete({ /*label,*/ placeholder = "", onPlaceSelected }) {
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        fetchDetails
        onPress={(data, details) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export default function AirMap() {
  const mapRef = useRef(null);

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
    set(position);
    moveTo(position);
  };

  const [origin, setOrigin] = useState(null);

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details.geometry.location.lat || 0,
      longitude: details.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      } catch (error) {
        console.log("Error while getting user location: ", error);
        setErrorMsg("Something went wrong while fetching location.");
      }
    };

    fetchUserLocation();
  }, []);

  // Smooth Effect
  const [showDetails, setShowDetails] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showDetails ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [showDetails]);

  // List of Markers
  const [markers, setMarkers] = useState([
    {
      latitude: 10.77217249292377,
      longitude: 106.6578910710957,
      image_aqi: require("../assets/images/circle.png"),
      image_ava: require("../assets/images/moderate.png"),
      name: "Đại học Bách Khoa",
      aqi: 74,
      quality: "Trung bình",
      backgroundColor: "#ffd700",
      showDetails: false,
    },
    {
      latitude: 10.87452977667352,
      longitude: 106.80679286747724,
      image_aqi: require("../assets/images/circle_2.png"),
      image_ava: require("../assets/images/unhealthy.png"),
      name: "Đại học Khoa học - Tự nhiên",
      aqi: 117,
      quality: "Không tốt",
      backgroundColor: "#cd5c5c",
      showDetails: false,
    },
    {
      latitude: 10.872106446655197,
      longitude: 106.80207218001232,
      image_aqi: require("../assets/images/circle_3.png"),
      image_ava: require("../assets/images/good.png"),
      name: "Đại học Khoa học Xã hội và Nhân văn",
      aqi: 45,
      quality: "Tốt",
      backgroundColor: "#98fb98",
      showDetails: false,
    },
    {
      latitude: 10.850895814643323,
      longitude: 106.7719881980995,
      image_aqi: require("../assets/images/circle.png"),
      image_ava: require("../assets/images/moderate.png"),
      name: "Đại học Sư phạm Kỹ thuật",
      aqi: 74,
      quality: "Trung bình",
      backgroundColor: "#ffd700",
      showDetails: false,
    },
    {
      latitude: 10.784051137853169,
      longitude: 106.69459690610383,
      image_aqi: require("../assets/images/circle_2.png"),
      image_ava: require("../assets/images/unhealthy.png"),
      name: "Đại học Kinh tế TP HCM",
      aqi: 117,
      quality: "Không tốt",
      backgroundColor: "#cd5c5c",
      showDetails: false,
    },
    {
      latitude: 10.870704951632135,
      longitude: 106.77822756053959,
      image_aqi: require("../assets/images/circle_3.png"),
      image_ava: require("../assets/images/good.png"),
      name: "Đại học Kinh tế - Luật",
      aqi: 45,
      quality: "Tốt",
      backgroundColor: "#98fb98",
      showDetails: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        onPress={() => setShowDetails(false)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            image={marker.image_aqi}
            onPress={() => {
              // Cập nhật giá trị của thuộc tính showDetails cho đối tượng Marker tương ứng
              setMarkers((prevMarkers) =>
              prevMarkers.map((m, i) =>
                i === index ? { ...m, showDetails: true } : { ...m, showDetails: false }
                )
              );
              setShowDetails(true);
            }}

          ></Marker>
        ))}
      </MapView>

      {markers
        .filter((marker) => marker.showDetails)
        .map((marker, index) => (
          <Animated.View
            key={index}
            style={[styles.callout, { opacity: fadeAnim }]}
          >
            <View style={styles.callout}>
              <Text style={{ paddingLeft: 10, paddingTop: 10 }}>
                {marker.name}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: marker.backgroundColor,
                  margin: 10,
                  borderRadius: 8,
                }}
              >
                <Image source={marker.image_ava} style={styles.img} />
                <View style={{ flex: 0.3, justifyContent: "center", left: 10 }}>
                  <Text style={{ fontSize: 30, opacity: 0.5 }}>
                    {marker.aqi}
                  </Text>
                  <Text style={{ opacity: 0.5 }}>AQI Mỹ</Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text style={{ opacity: 0.5 }}>{marker.quality}</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        ))}

      <View style={styles.searchContainer}>
        <InputAutocomplete
          // label="Origin:"
          placeholder="Enter your address"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Overview of Map
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: -1,
    width: "100%",
    height: "100%",
    borderColor: "transparent",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  // Input Search Field
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },

  // Marker
  callout: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    right: "5%",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  img: {
    flex: 0.4,
    width: 100,
    height: 100,
  },
});
