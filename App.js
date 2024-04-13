import BetsPage from './screens/BetsPage';
import Home from './screens/Home';
import { View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Layout from './Components/Layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Layout  />
    </SafeAreaProvider>
  );
}

