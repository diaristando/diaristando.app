import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Inicio } from '../screens/Inicio';
import { PageTwo } from '../screens/PageTwo';
import { SocialLogin } from '../screens/SocialLogin';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="page-two"
        component={PageTwo}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book" size={size} color={color} />,
          tabBarLabel: 'Página 2',
        }}
      />
      <Tab.Screen
        name="social-login"
        component={SocialLogin}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="globe" size={size} color={color} />,
          tabBarLabel: 'Login Social',
        }}
      />
    </Tab.Navigator>
  );
}
