import { View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS, SIZES, assets } from '../constants';
import { LocationCard } from '../components';

const Location = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 1 }}>
          <View
            style={{
              marginVertical: SIZES.font,
              marginHorizontal: SIZES.large,
            }}
          >
            <View
              style={{
                width: '100%',
                borderRadius: SIZES.font,
                backgroundColor: COLORS.gray,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <Image
                source={assets.search}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: SIZES.base }}
              />
              <TextInput
                placeholder="Search for a city..."
                style={{ flex: 1, fontSize: SIZES.medium, color: 'white' }}
              />
            </View>
          </View>
        </View>

        <LocationCard
          city="Ho Chi Minh City"
          country="Vietnam"
          lon="106.6297"
          lat="10.8231"
        />
        <LocationCard
          city="Hue"
          country="Vietnam"
          lon="107.5909"
          lat="16.4637"
        />
        <LocationCard
          city="Ha Noi"
          country="Vietnam"
          lon="105.8342"
          lat="21.0278"
        />
        <LocationCard
          city="Binh Duong"
          country="Vietnam"
          lon="108.0717"
          lat="16.0545"
        />
        <LocationCard
          city="Da Nang"
          country="Vietnam"
          lon="106.6297"
          lat="10.8231"
        />
        <LocationCard
          city="Kon Tum"
          country="Vietnam"
          lon="106.6297"
          lat="10.8231"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;
