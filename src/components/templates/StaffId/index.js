import React, { Component } from 'react';
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
});

export default class StaffId extends Component {
  constructor() {
    super();

    this.state = {
      uid: 'T00114',
      name: 'Junya Nakazato',
    };
  }

  render() {
    const { uid, name } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {uid}: {name}
        </Text>

        <Link to="/">
          <Text>jump portal</Text>
        </Link>
      </View>
    );
  }
}

AppRegistry.registerComponent('StaffId', () => StaffId);
