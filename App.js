import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#329845" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
