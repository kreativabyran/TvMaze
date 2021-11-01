import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import ShowScreen from '../screen/Show';
import FavouritesScreen from '../screen/Favourites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{ title: 'Search' }}
    />
    <Stack.Screen name='Show' component={ShowScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name='Search'
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{ headerTitle: 'Favourites', headerShown: true }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
