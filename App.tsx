/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { I18nManager } from 'react-native';
import RNrestart from 'react-native-restart';
function App() {
  useEffect(() => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    // RNrestart.restart();
  }, []);
  return <WelcomeScreen />;
}

export default App;
