import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaCompras from './src/pages/ListaCompras';
import CriaItem from './src/pages/CriaItem'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ListaCompras" component={ListaCompras} />
        <Stack.Screen name="CriaItem" component={CriaItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
