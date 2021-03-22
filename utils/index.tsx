import React from 'react';
import { RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppScreenNames from '../screens/appScreenNames';

interface TabBar {
  route: RouteProp<Record<string, object | undefined>, string>;
  focused: boolean;
  color: string;
  size: number;
}

export const HandleTabBarIcons = ({
  route,
  color,
  size,
}: TabBar): JSX.Element => {
  let iconName = '';
  if (route.name === AppScreenNames.HOME) {
    iconName = 'home';
  } else if (route.name === AppScreenNames.SETTINGS) {
    iconName = 'settings';
  } else if (route.name === AppScreenNames.NOTIFICATIONS) {
    iconName = 'notifications-outline';
  } else if (route.name === AppScreenNames.NETWPRK) {
    iconName = 'people-circle-outline';
  } else if (route.name === AppScreenNames.MESSAGES) {
    iconName = 'chatbubble-ellipses-outline';
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};
