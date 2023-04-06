import { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_API_KEY } from '@env';
import { LocationCard, SearchModal } from '../components';

import { COLORS, SIZES, assets } from '../constants';
import { EvilIcons } from '@expo/vector-icons';

const Location = () => {
  const [pin, setPin] = useState({ lat: 10.8231, lon: 106.6297 });
  const [location, setLocation] = useState({ city: '', country: '', id: '' });

  const [showModal, setShowModal] = useState(false);

  const [locationList, setLocationList] = useState([]);

  console.log(locationList);

  const deleteCard = (id) => {
    const index = locationList.findIndex((item) => item.id === id);
    locationList.splice(index, 1);
    setLocationList((locationList) => [...locationList]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ margin: SIZES.large }}>
          <GooglePlacesAutocomplete
            placeholder="Search for a city..."
            fetchDetails={true}
            onPress={(data, details = null) => {
              console.log(data, details);
              setPin({
                lat: details.geometry.location.lat,
                lon: details.geometry.location.lng,
              });
              setLocation({
                city: data.structured_formatting.main_text,
                country: data.structured_formatting.secondary_text,
                id: data.place_id,
              });
              setShowModal(!showModal);
            }}
            query={{
              key: GOOGLE_API_KEY,
              language: 'us',
              components: 'country:vn',
            }}
            styles={styles.search}
          />
        </View>
        <EvilIcons
          name="search"
          size={24}
          color="white"
          style={{ position: 'absolute', marginTop: 25, marginLeft: 24 }}
        />

        {showModal ? (
          <>
            <SearchModal location={location} pin={pin} />

            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                padding: SIZES.large,
                marginTop: 75,
                gap: 270,
              }}
            >
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={styles.subtitle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  locationList.findIndex((elem) => elem.id === location.id) ===
                  -1
                    ? setLocationList((locationList) => [
                        ...locationList,
                        { ...location, ...pin },
                      ])
                    : console.log('Duplicate location');
                  setShowModal(false);
                }}
              >
                <Text
                  style={{
                    ...styles.subtitle,
                    fontWeight: 'bold',
                  }}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}

        {!showModal ? (
          <FlatList
            data={locationList}
            renderItem={({ item }) => (
              <LocationCard
                location={{ city: item.city, country: item.country }}
                pin={{ lat: item.lat, lon: item.lon }}
                handleDelete={() => deleteCard(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    container: { width: '100%' },
    poweredContainer: { display: 'none' },
    textInput: {
      backgroundColor: COLORS.secondary,
      fontSize: SIZES.medium,
      color: 'white',
      borderRadius: SIZES.large,
      height: 34,
      paddingLeft: 32,
    },
    description: { fontSize: SIZES.medium, color: COLORS.lightgray },
    row: {
      backgroundColor: 'none',
      paddingVertical: 13,
      paddingHorizontal: 0,
      height: 44,
      flexDirection: 'row',
    },
    separator: { height: 0 },
  },

  title: { color: 'white', fontSize: SIZES.extraLarge },
  subtitle: { color: 'white', fontSize: SIZES.large },
});

export default Location;
