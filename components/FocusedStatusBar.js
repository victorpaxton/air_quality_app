import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { setStatusBarStyle } from 'expo-status-bar';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated={true} backgroundColor="#001F2D" />
  ) : null;
};

export default FocusedStatusBar;
