import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { PageTwo } from '../screens/PageTwo';

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
        name="page-two"
        component={PageTwo}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book" size={size} color={color} />,
          tabBarLabel: 'Página 2',
        }}
      />
    </Tab.Navigator>
  );
}
