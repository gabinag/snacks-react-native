import { View } from 'react-native';
import CriarConta from  './src/pages/CriarConta'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dados from './src/pages/Dados';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CriarConta" component={CriarConta} options={{headerShown: false}}/>
        <Stack.Screen name="Dados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


