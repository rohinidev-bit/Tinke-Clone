import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text>ABOUT</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default About
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
