import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import BitCoin from './src/pages/BitCoin';
import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const icons = {
  BitCoin:{
    name: 'ios-logo-bitcoin',
  },
  Dolar:{
    name: 'ios-logo-usd',
  },
  Euro:{
    name: 'ios-logo-euro',
  }
}


function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        }) }
        tabBarOptions={{
        activeBackgroundColor: 'white',
        activeTintColor: 'green',
        inactiveBackgroundColor: 'lightgray',
        inactiveTintColor: 'gray'
        }}
        >
        
        <Tab.Screen name='Dolar' component={Dolar} options={{ title: 'Dólar' }} />
        <Tab.Screen name='Euro' component={Euro} options={{ title: 'Euro' }}/>
        <Tab.Screen name='BitCoin' component={BitCoin} options={{ title: 'BitCoin' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
