import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

import { BottomTab } from './navigations';

import { StateContext } from './context/StateContext';

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });

  if (!loaded) return null;

  return (
    <StateContext>
      <NavigationContainer>
        <StatusBar animated={true} barStyle="light-content" />
        <BottomTab />
      </NavigationContainer>
    </StateContext>
  );
};

export default App;
