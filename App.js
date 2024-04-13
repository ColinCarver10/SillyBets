import Layout from './Components/Layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Layout  />
    </SafeAreaProvider>
  );
}

