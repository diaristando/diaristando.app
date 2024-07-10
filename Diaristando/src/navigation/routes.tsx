import { NavigationContainer } from '@react-navigation/native';

import { TabRoutes } from './tabRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
