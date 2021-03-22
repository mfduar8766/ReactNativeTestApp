import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  // FlatList,
  // TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import { DispatchContext } from '../context';
import { IUser } from '../models/users.interface';
import { setError, setUsers } from '../resolvers';
import UseFetch from '../services/useFetch';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const HomePage = ({ navigation }: any) => {
  const url = `https://randomuser.me/api/?results=5`;
  const dispatch = useContext(DispatchContext);
  const [userList, setUserList] = useState<IUser[]>([]);
  const { data, errorMessage } = UseFetch(url);

  useEffect(() => {
    if (errorMessage !== '') {
      setError(errorMessage, dispatch);
    }
    setUserList(data);
    setUsers(data, dispatch);
  }, [data, errorMessage]);

  const getUserInfo = (user: IUser) => console.log('User', user);

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
    </View>
    // <View>
    //   {userList && userList.length ? (
    //     <FlatList
    //       style={{ flex: 1, width: 100 }}
    //       data={userList}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity
    //           style={{ padding: 10 }}
    //           onPress={() => getUserInfo(item)}
    //         >
    //           <Text>{`${item.name.first} ${item.name.last}`}</Text>
    //         </TouchableOpacity>
    //       )}
    //     />
    //   ) : (
    //     <>
    //       <Ionicons name="refresh-outline" size={5} color="blue" />
    //     </>
    //   )}
    // </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
