import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GlobalProvider from './context';
import HomePage from './screens';

const App = () => {
  // const url = `https://randomuser.me/api/?results=5`;
  // const url = `https://jsonplaceholder.typicode.com/todos/5`;
  return (
    <GlobalProvider>
      <SafeAreaView style={styles.container}>
        <HomePage />
      </SafeAreaView>
    </GlobalProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
