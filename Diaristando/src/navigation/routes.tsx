import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from '@/navigation/appNavigation';

export function Routes() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
