import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dados from './src/pages/Dados';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const icons = {
  Dados:{
    name: 'ios-person',
  },
  Formacao:{
    name: 'ios-school',
  },
  Experiencia:{
    name: 'ios-briefcase',
  }
}


function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        }) }
        tabBarOptions={{
        activeBackgroundColor: 'white',
        activeTintColor: '#788FAD',
        inactiveBackgroundColor: 'lightgray',
        inactiveTintColor: 'gray'
        }}
        >
        <Tab.Screen name='Dados' component={Dados} options={{ 
          title: 'Sobre mim', 
          headerStyle: { backgroundColor: '#788FAD' }, 
          headerTintColor: '#fff'
        }} />
        <Tab.Screen name='Formacao' component={Formacao} options={{ 
          title: 'Formação',
          headerStyle: { backgroundColor: '#788FAD' }, 
          headerTintColor: '#fff'
        }} />
        <Tab.Screen name='Experiencia' component={Experiencia} options={{ 
          title: 'Experiência',
          headerStyle: { backgroundColor: '#788FAD' }, 
          headerTintColor: '#fff'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
