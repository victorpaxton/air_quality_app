import { View, Text, Image, TextInput } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
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
          style={{ width: 60, height: 60 }}
        />

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Smart Environment
        </Text>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
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
          Hello, Bogdan 👋
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#f9d16b',
            borderRadius: SIZES.extraLarge,
            minwidth: 120,
            padding: SIZES.small,
            marginTop: SIZES.extraLarge,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              textAlign: 'center',
            }}
          >
            <Foundation name="home" size={32} color="black" />
            <Text>{'  '}Your Home</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: SIZES.font }}>
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
            placeholder="Search for places"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            marginTop: SIZES.extraLarge,
          }}
        >
          Air Quality
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
