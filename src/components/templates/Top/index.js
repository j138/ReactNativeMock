import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
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

@inject('user')
@observer
export default class Top extends React.Component {
  constructor(props) {
    super();
    console.log('top');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!
        </Text>

        <Link to="/StaffId">
          <Text style={styles.welcome}>社員証表示</Text>
        </Link>
      </View>
    );
  }
}

Top.propTypes = {
  user: PropTypes.shape({
    inc: PropTypes.number,
  }),
};

AppRegistry.registerComponent('Top', () => Top);
