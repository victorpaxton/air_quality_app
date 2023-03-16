import { View, Text } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

import { Donut } from 'react-native-donut-chart';

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
      <View style={{ width: '60%', gap: 6 }}>
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
          Unhealthy
        </Text>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            color: COLORS.white,
          }}
        >
          {value} &#181;g/m3
        </Text>
      </View>

      <Donut
        data={[
          { value: 70, color: colors[0] },
          { value: 30, color: colors[1] },
        ]}
        radius={40}
      />
    </View>
  );
};

export default IndexCard;
