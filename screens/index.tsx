import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import { DispatchContext } from '../context';
import { IUser } from '../models/users.interface';
import { setError, setUsers } from '../resolvers';
import UseFetch from '../services/useFetch';

const HomePage = () => {
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
  }, [data]);

  const getUserInfo = (user: IUser) => console.log('User', user);

  if (errorMessage !== '' && !data.length) {
    return (
      <View style={styles.container}>
        <Text>No users available</Text>
      </View>
    );
  }

  return (
    <View>
      {userList && userList.length ? (
        <FlatList
          style={{ flex: 1, width: 100 }}
          data={userList}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => getUserInfo(item)}
            >
              <Text>{`${item.name.first} ${item.name.last}`}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.container}>
          <Text>No Users Found</Text>
        </View>
      )}
    </View>
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
