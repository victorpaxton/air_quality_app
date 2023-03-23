import { View, Text, Image } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../constants';

const PollutantCard = ({ image, title, value, unit }) => {
  return (
    <View
      style={{
        width: '30%',
        height: 175,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: '70%',
          height: '40%',
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 50,
        }}
      />
      <View style={{ height: 40 }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.medium,
            paddingHorizontal: 20,
            paddingTop: 6,
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraLarge,
            paddingTop: 10,
            textAlign: 'center',
          }}
        >
          {value}{' '}
        </Text>

        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.medium,
            paddingTop: 10,
            textAlign: 'center',
          }}
        >
          {unit}
        </Text>
      </View>
    </View>
  );
};

export default PollutantCard;
