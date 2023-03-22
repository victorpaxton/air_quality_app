import { View, Text } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

import { Face, AirStatus } from '../components';

const IndexCard = ({ title, subtitle, value, colors }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.font,
        margin: SIZES.medium,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.extraLarge,

        ...SHADOWS.dark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ width: '50%', gap: 6 }}>
        <Text
          style={{
            fontSize: SIZES.large,
            textTransform: 'uppercase',
            fontFamily: FONTS.semiBold,
            color: COLORS.white,
          }}
        >
          {title}
          {'  '}
          <Text
            style={{
              fontSize: SIZES.font,
              textTransform: 'capitalize',
              fontFamily: FONTS.regular,
            }}
          >
            {subtitle}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.bold,
            color: COLORS.white,
          }}
        >
          <AirStatus value={value} />
        </Text>
        <View
          style={{
            backgroundColor: COLORS.gray,
            width: 80,
            marginTop: 5,
            paddingVertical: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: SIZES.font,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.medium,
              color: COLORS.white,
            }}
          >
            {value} &#181;g/m3
          </Text>
        </View>
      </View>

      <Face value={value} />
    </View>
  );
};

export default IndexCard;
