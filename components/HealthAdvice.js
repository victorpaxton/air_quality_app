import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, COLORS } from '../constants';
import { assets } from '../constants';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Headthy persons - Elderly
// Pregnant women, Children
// Persons with chronic lung disease or heart disease
const individualAdvice = {
  good: [
    'Continue with normal activities',
    'Continue with normal activities',
    'Continue with normal activities',
  ],
  moderate: [
    'Continue with normal activities',
    'Continue with normal activities',
    'Limit prolonged outdoor activities',
  ],
  sensitive: [
    'Continue with normal activities',
    'Continue with normal activities',
    'Limit prolonged outdoor activities. Stay indoors if possible.',
  ],
  unhealthy: [
    'Reduce prolonged or strenuous outdoor physical exertion',
    'Minimize prolonged or strenuous outdoor physical exertion',
    'Avoid prolonged or strenuous outdoor physical exertion',
  ],
  very_unhealthy: [
    'Avoid prolonged or strenuous outdoor physical exertion',
    'Minimize outdoor activity',
    'Avoid outdoor activity',
  ],
  hazardous: [
    'Minimize outdoor activity',
    'Avoid outdoor activity',
    'Avoid outdoor activity',
  ],
};

const details = {
  good: 'Little to no health risk',
  moderate: 'Sensitive individuals may experience irritations',
  sensitive: 'Sensitive groups should limit outdoor exertion',
  unhealthy:
    'Harmful for sensitive groups, reduced outdoor activity for everyone',
  very_unhealthy:
    'Everyone should can be affected. Avoid heavy outdoor activity',
  hazardous:
    'Serious risks of respitatory effects. Everyone should avoid outdoor activities',
};

const getStatus = (value) => {
  if (value >= 0 && value <= 50) return 'good';
  else if (value > 50 && value <= 100) return 'moderate';
  else if (value > 100 && value <= 150) return 'sensitive';
  else if (value > 150 && value <= 200) return 'unhealthy';
  else if (value > 200 && value <= 300) return 'very_unhealthy';
  else return 'hazardous';
};

const bgColor = (value) => {
  if (value >= 0 && value <= 50) return COLORS.good;
  else if (value > 50 && value <= 100) return COLORS.moderate;
  else if (value > 100 && value <= 150) return COLORS.sensitive;
  else if (value > 150 && value <= 200) return COLORS.unhealthy;
  else if (value > 200 && value <= 300) return COLORS.very_unhealthy;
  else return COLORS.hazardous;
};

const HealthAdvice = ({ value }) => {
  const status = getStatus(value);

  return (
    <View style={{ margin: SIZES.large }}>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: 28,
          color: COLORS.white,
          marginVertical: SIZES.large,
        }}
      >
        Health Recommendations
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: `${bgColor(value)}`,
          borderRadius: 10,
          padding: 10,
          flex: 1,
          alignItems: 'center',
          marginVertical: SIZES.large,
        }}
      >
        <Text
          style={{
            color: `${bgColor(value)}`,
            fontSize: SIZES.medium,
            fontFamily: FONTS.semiBold,
          }}
        >
          {details[status]}
        </Text>
      </View>

      <View
        style={{
          marginVertical: SIZES.large,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            display: `${value > 100 ? '' : 'none'}`,
            width: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <MaterialCommunityIcons
            name="air-purifier"
            size={50}
            color={`${bgColor(value)}`}
          />
          <Text style={{ color: `${bgColor(value)}` }}>Air Purifier</Text>
        </View>

        <View
          style={{
            display: `${value > 150 ? '' : 'none'}`,
            width: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <FontAwesome5
            name="door-closed"
            size={40}
            color={`${bgColor(value)}`}
          />
          <Text style={{ color: `${bgColor(value)}` }}>Close Door</Text>
        </View>

        <View
          style={{
            display: `${value > 150 ? '' : 'none'}`,
            width: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <MaterialCommunityIcons
            name="face-mask-outline"
            size={50}
            color={`${bgColor(value)}`}
          />
          <Text style={{ color: `${bgColor(value)}` }}>Face Mask (N95)</Text>
        </View>

        <View
          style={{
            display: `${value > 150 ? '' : 'none'}`,
            width: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <MaterialCommunityIcons
            name="run-fast"
            size={50}
            color={`${bgColor(value)}`}
          />
          <Text style={{ color: `${bgColor(value)}` }}>
            Cancel Outdoor Activities
          </Text>
        </View>

        <View
          style={{
            display: `${value > 200 ? '' : 'none'}`,
            width: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <FontAwesome5
            name="clinic-medical"
            size={40}
            color={`${bgColor(value)}`}
          />
          <Text style={{ color: `${bgColor(value)}` }}>Medical Help</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          width: '100%',
        }}
      >
        <Image
          source={assets.healthy_people}
          style={{ width: '35%', height: 150 }}
        />
        <View style={{ gap: 10, width: '65%' }}>
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.bold,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Healthy Persons
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: SIZES.medium,
            }}
          >
            {individualAdvice[status][0]}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          width: '100%',
        }}
      >
        <Image
          source={assets.elder_people}
          style={{ width: '35%', height: 150 }}
        />
        <View style={{ gap: 10, width: '65%' }}>
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.bold,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Elderly, Pregnant Women, Children
          </Text>
          <Text style={{ color: 'white', fontSize: SIZES.medium }}>
            {individualAdvice[status][1]}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          width: '100%',
        }}
      >
        <Image
          source={assets.disease_people}
          style={{ width: '35%', height: 150 }}
        />
        <View style={{ gap: 10, width: '65%' }}>
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.bold,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Persons with chronic lung disease or heart disease
          </Text>
          <Text style={{ color: 'white', fontSize: SIZES.medium }}>
            {individualAdvice[status][2]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HealthAdvice;
