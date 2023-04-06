import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import { useState } from 'react';
import { WebView } from 'react-native-webview';

import { COLORS, SHADOWS, SIZES } from '../constants';

const PollutantCard = ({ image, title, value, unit, url }) => {
  const [visible, setVisible] = useState(false);

  const openLinkInBrowserHandler = () => {
    Linking.canOpenURL(url).then((supported) => {
      supported && Linking.openURL(url);
    });
  };

  const openLinkInWebView = () => setVisible(true);

  return (
    <>
      <TouchableOpacity
        style={{
          width: '30%',
          height: 175,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderWidth: '1px',
          borderColor: 'gray',
          borderRadius: SIZES.font,
          ...SHADOWS.dark,
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onPress={openLinkInWebView}
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
      </TouchableOpacity>

      <Modal
        presentationStyle="pageSheet"
        animationType="fade"
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <WebView source={{ uri: url }} />
      </Modal>
    </>
  );
};

export default PollutantCard;
