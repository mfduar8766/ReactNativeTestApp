import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import AppScreenNames from '../screens/appScreenNames';

interface HeaderProps {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: any;
}

const Header = ({ route, navigation }: HeaderProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={5} color="gray" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Ionicons
        onPress={() => navigation.navigate(AppScreenNames.MESSAGES)}
        name="chatbubble-ellipses-outline"
        size={5}
        color="gray"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
