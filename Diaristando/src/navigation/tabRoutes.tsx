import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { SocialLogin } from '../screens/SocialLogin';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
        }}
      />
    </Tab.Navigator>
  );
}
