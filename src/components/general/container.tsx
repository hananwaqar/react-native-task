import { useTheme } from '@/hooks';
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';


function Container({ children }) {
  const {
    Colors
  } = useTheme();
  return (
    <SafeAreaView style={[styles.screen,{backgroundColor:Colors.inputBackground}]}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default Container;
