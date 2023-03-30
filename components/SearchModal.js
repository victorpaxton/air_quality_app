import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

import AirIndex from './AirIndex';

const SearchModal = ({ location, pin }) => {
  return (
    <View style={styles.modal}>
      <View
        style={{
          flexDirection: 'col',
          alignItems: 'center',
          gap: 8,
          paddingVertical: SIZES.small,
          paddingTop: 40,
        }}
      >
        <Text style={styles.title}>{location.city}</Text>
        <Text style={styles.subtitle}>{location.country}</Text>
      </View>

      <AirIndex pin={pin} />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 650,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    backgroundColor: COLORS.primary,
    shadowColor: '#fff',
    shadowOffset: {
      width: 2,
      height: -5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  title: { color: 'white', fontSize: SIZES.extraLarge },
  subtitle: { color: 'white', fontSize: SIZES.large },
});

export default SearchModal;
