import React from 'react';
import Routes from './src/navigation/Routes';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <Routes/>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#b6cae7',
  }, 
});