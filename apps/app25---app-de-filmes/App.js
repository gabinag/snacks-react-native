import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sinopse from './src/pages/Sinopse';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Sinopse" component={Sinopse} options={{
          headerStyle: {
              backgroundColor: '#000',
              borderBottomWidth: 0
            },
          headerTintColor: '#750E03',
          headerTitleStyle: {
              fontWeight: 'bold'
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

