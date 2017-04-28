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
});

@inject('user')
@observer
export default class StaffId extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    user.uid = 'T00114';
    user.name = 'Junya Nakazato';
    user.increment();
  }

  render() {
    const { uid, name, inc } = this.props.user;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {uid}: {name}
        </Text>
        <Text style={styles.welcome}>
          Mobx.inc: {inc}
        </Text>
        <Link to="/">
          <Text>jump portal</Text>
        </Link>
      </View>
    );
  }
}

StaffId.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    name: PropTypes.string,
    inc: PropTypes.number,
  }),
};

AppRegistry.registerComponent('StaffId', () => StaffId);
