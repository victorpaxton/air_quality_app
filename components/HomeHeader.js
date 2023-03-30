import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';

import { AirData } from '../constants/dump';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

const HomeHeader = ({ location }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 130, height: 70 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.avatar}
            resizeMode="contain"
            style={{ width: '100%', height: '100%', borderRadius: 50 }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.large }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.large,
            color: COLORS.white,
            textAlign: 'center',
          }}
        >
          Hello, Nole 👋
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#f9d16b',
            borderRadius: SIZES.font,
            minwidth: 120,
            padding: SIZES.small,
            marginTop: SIZES.extraLarge,
          }}
          onPress={() => navigation.navigate('Location')}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              textAlign: 'center',
            }}
          >
            <FontAwesome5 name="location-arrow" size={24} color="black" />
            <Text>
              {'  '}
              {location.city}
            </Text>
          </Text>

          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.large,
              color: COLORS.primary,
              textAlign: 'center',
              marginTop: 5,
            }}
          >
            {location.country}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
