import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/Search';
import ShowScreen from '../screen/Show';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Search' }}
      />
      <Stack.Screen name='Show' component={ShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
