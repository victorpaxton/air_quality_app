import { View, Text, Image } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../constants';

const PollutantCard = ({ image, title, value, unit }) => {
  return (
    <View
      style={{
        width: '30%',
        height: 175,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        ...SHADOWS.dark,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: '100%',
          height: '40%',
          marginTop: 10,
          // add shadows for Android only
          // elevation: 10,

          // add shadows for iOS only
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
        }}
      />
      <View style={{ height: 40 }}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SIZES.medium,
            paddingHorizontal: 20,
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
            color: COLORS.primary,
            fontSize: SIZES.extraLarge,
            paddingTop: 10,
            textAlign: 'center',
          }}
        >
          {value}{' '}
        </Text>

        <Text
          style={{
            color: COLORS.primary,
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
