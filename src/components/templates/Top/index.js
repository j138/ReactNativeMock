import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Top = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!!!!
    </Text>

    <Link to="/StaffId">
      <Text style={styles.welcome}>社員証表示</Text>
    </Link>
  </View>
);

export default Top;

AppRegistry.registerComponent('Top', () => Top);
