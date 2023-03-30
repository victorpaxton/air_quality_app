import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, AirMap, Report, Location } from '../screens';

import { Entypo, Feather, Foundation } from '@expo/vector-icons';

import { COLORS } from '../constants';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#f9d16b',
        tabBarStyle: { backgroundColor: COLORS.primary, paddingTop: 8 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{
          location: {
            city: 'My Location',
            country: 'Ho Chi Minh City, Vietnam',
          },
          pin: { lon: 106.6297, lat: 10.8231 },
        }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="AirMap"
        component={AirMap}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="graph-trend" size={size + 8} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location-pin" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
