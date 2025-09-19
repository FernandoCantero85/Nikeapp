import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../Pages/Login/index';
import Produtos from '../Pages/Produtos/index';
import Welcome from '../Pages/Welcome/index';

const DrawerNavigator = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Login" component={Login} />
      
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}