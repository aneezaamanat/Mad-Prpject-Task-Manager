import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
  useState,
  Switch,
  useColorScheme,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import CreateTasks from './components/createTasks';
import SubTask from './components/subtasks';
import Welcome from './components/welcome';
import Notifications from './components/notifications';

const Stack = createNativeStackNavigator();
function App() {
  const DarkTheme = {
    colors: {
      primary: '#fff',
      background: 'pink',
      card: 'pink',
      text: 'white',
      border: 'white',
      notification: 'rgb(255, 69, 58)',
      icon: 'pink',
    },
  };

  const LightTheme = {
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={isEnabled ? DarkTheme : LightTheme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerRight: () => (
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ),
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={CreateTasks} />
        <Stack.Screen name="Subtask" component={SubTask} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
