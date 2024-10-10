import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@/screens/HomeScreen/Home';
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
        name="DiaristaTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="LogoutTab"
        component={SocialLogin}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="log-out" size={size} color={color} />,
          tabBarLabel: 'Logout',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
