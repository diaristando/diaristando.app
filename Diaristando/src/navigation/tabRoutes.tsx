import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@/screens/HomeScreen/Home';
import Signup from '@/screens/LoginScreen/Signup';
import { SocialLogin } from '@/screens/SocialLogin';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="social-login"
        component={SocialLogin}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="globe" size={size} color={color} />,
          tabBarLabel: 'Login Social',
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Signup}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="globe" size={size} color={color} />,
          tabBarLabel: 'Cadastro',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
