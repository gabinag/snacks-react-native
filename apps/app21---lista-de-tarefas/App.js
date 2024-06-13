import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tarefas from './src/pages/Tarefas';
import CriaTarefas from './src/pages/CriaTarefas'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Tarefas'>
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="CriaTarefas" component={CriaTarefas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
