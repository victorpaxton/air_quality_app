import { View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS, SIZES, assets } from '../constants';

const Location = () => {
  // return (
  //   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
  //     <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
  //       <View style={{ zIndex: 1 }}>
  //         <View
  //           style={{
  //             marginVertical: SIZES.font,
  //             marginHorizontal: SIZES.large,
  //           }}
  //         >
  //           <View
  //             style={{
  //               width: '100%',
  //               borderRadius: SIZES.font,
  //               backgroundColor: COLORS.gray,
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               paddingHorizontal: SIZES.font,
  //               paddingVertical: SIZES.small - 2,
  //             }}
  //           >
  //             <Image
  //               source={assets.search}
  //               resizeMode="contain"
  //               style={{ width: 20, height: 20, marginRight: SIZES.base }}
  //             />
  //             <TextInput
  //               placeholder="Search for a city..."
  //               style={{ flex: 1, fontSize: SIZES.medium, color: 'white' }}
  //               onChangeText={{}}
  //             />
  //           </View>
  //         </View>

  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );

  return (
    <View style={{ marginTop: 200 }}>
      <GooglePlacesAutocomplete
        placeholder="Search...."
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        debounce={400}
        query={{
          key: '',
          language: 'en',
        }}
        style={{}}
        onPress={(item) => {
          console.log(item);
        }}
      />
    </View>
  );
};

export default Location;
