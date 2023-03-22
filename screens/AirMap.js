import React from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { LineChart } from 'react-native-chart-kit';

const GOOGLE_MAP_API_KEY = 'AIzaSyCACxPZK1Km-2Z_eiDX-3mae10hjnd19Q0';

const AirMap = () => {
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      {/* <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: '400px',
            width: '400px',
          }}
          zoom={10}
          center={{
            lat: -33.865143,
            lng: 151.2099,
          }}
        />
      </LoadScript>
    </View>
  );
};

export default AirMap;
