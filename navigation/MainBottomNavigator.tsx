import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NetWorkScreen from '../screens/NetWorkScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { HandleTabBarIcons } from '../utils';
import AppScreenNames from '../screens/appScreenNames';

const Tab = createBottomTabNavigator();

const MainBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          HandleTabBarIcons({ route, focused, color, size }),
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={AppScreenNames.HOME} component={HomeScreen} />
      <Tab.Screen name={AppScreenNames.NETWPRK} component={NetWorkScreen} />
      <Tab.Screen name={AppScreenNames.MESSAGES} component={MessagesScreen} />
      <Tab.Screen
        name={AppScreenNames.NOTIFICATIONS}
        options={{ tabBarBadge: 3 }}
        component={NotificationsScreen}
      />
      <Tab.Screen name={AppScreenNames.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomNavigator;
