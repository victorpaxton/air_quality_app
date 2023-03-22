import { View, Text, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

import { AntDesign } from '@expo/vector-icons';

const AQIBar = ({ value, color }) => {
  const width = Dimensions.get('window').width - 2 * SIZES.large;
  const ping = (value * width) / 350;

  return (
    <View style={{ marginVertical: 24 }}>
      <AntDesign
        name="caretdown"
        size={16}
        color={color}
        style={{
          marginLeft: -5,
          paddingLeft: ping,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 8,
        }}
      >
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.good,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.moderate,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.sensitive,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.unhealthy,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.very_unhealthy,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.very_unhealthy,
          }}
        ></View>
        <View
          style={{
            width: '14.2857%',
            backgroundColor: COLORS.hazardous,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: -2,
          paddingTop: 5,
        }}
      >
        <Text style={{ color: 'gray' }}>0</Text>
        <Text style={{ color: 'gray', paddingLeft: '11%' }}>50</Text>
        <Text style={{ color: 'gray', paddingLeft: '9%' }}>100</Text>
        <Text style={{ color: 'gray', paddingLeft: '8%' }}>150</Text>
        <Text style={{ color: 'gray', paddingLeft: '9%' }}>200</Text>
        <Text style={{ color: 'gray', paddingLeft: '21%' }}>300</Text>
        <Text style={{ color: 'gray', paddingLeft: '7%' }}>350+</Text>
      </View>
    </View>
  );
};

export default AQIBar;
