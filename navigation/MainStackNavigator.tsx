import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from '../screens/LogInScreen';
import AppScreenNames from '../screens/appScreenNames';
import MainBottomNavigator from './MainBottomNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

const Stack = createStackNavigator();

const isHeaderDisplayed = (
  route: RouteProp<Record<string, object | undefined>, string>
): boolean => {
  let showheader = true;
  if (route.name === AppScreenNames.LOGIN) {
    showheader = false;
  }
  return showheader;
};

const MainStackNavigator = () => (
  <Stack.Navigator
    // Having issues displaying a custom header component.
    // Will need to figure out why React StackNavigator is not working.
    screenOptions={({ route, navigation }) => ({
      headerLeft: () => null,
      headerRight: () => null,
      headerTitle: () => (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Ionicons name="person-circle-outline" size={30} color="gray" />
          <Text>HEADER</Text>
          <Ionicons
            onPress={() => navigation.navigate(AppScreenNames.MESSAGES)}
            name="chatbubble-ellipses-outline"
            size={30}
            color="gray"
          />
        </View>
      ),
      headerShown: isHeaderDisplayed(route),
    })}
  >
    <Stack.Screen name={AppScreenNames.LOGIN} component={LogInScreen} />
    <Stack.Screen
      name={AppScreenNames.HOME_CONTAINER}
      component={MainBottomNavigator}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
