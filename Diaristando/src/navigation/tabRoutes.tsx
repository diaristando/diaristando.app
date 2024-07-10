import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicio } from '../screens/Inicio';
import { PageTwo } from '../screens/PageTwo';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="inicio" component={Inicio} />
      <Tab.Screen name="page-two" component={PageTwo} />
    </Tab.Navigator>
  );
}
