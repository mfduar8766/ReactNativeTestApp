import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppScreenNames from './appScreenNames';

const LogInScreen = ({ navigation }: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="User Name"
        mode="flat"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.textInput}
        label="Password"
        mode="flat"
        value={password}
        onChangeText={(text) => setPassword(text)}
        render={(props: RenderProps) => (
          <View
            style={{
              marginTop: 10,
              marginRight: 5,
              alignSelf: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Ionicons name="eye-off-outline" size={30} color="gray" />
          </View>
        )}
      />
      <Button
        style={styles.textInput}
        mode="contained"
        dark={true}
        uppercase={false}
        color="blue"
        onPress={() => navigation.navigate(AppScreenNames.HOME_CONTAINER)}
      >
        Log In
      </Button>
      <Button
        style={styles.textInput}
        mode="contained"
        dark={true}
        uppercase={false}
        color="blue"
        onPress={() => navigation.navigate(AppScreenNames.HOME_CONTAINER)}
      >
        Sign Up
      </Button>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', //#ddf
  },
  textInput: {
    width: 300,
    height: 50,
    marginBottom: 20,
  },
});
