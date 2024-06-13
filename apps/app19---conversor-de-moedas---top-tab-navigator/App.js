import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import BitCoin from './src/pages/BitCoin';
 
const Tab = createMaterialTopTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Dolar' component={Dolar} />
        <Tab.Screen name='Euro' component={Euro} />
        <Tab.Screen name='BitCoin' component={BitCoin} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

