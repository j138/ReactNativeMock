import React from 'react';
import { NativeRouter as Router, Route } from 'react-router-native';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';
import UserState from '../state/UserState';
import Top from '../components/templates/Top';
import StaffId from '../components/templates/StaffId';

// FIXME: mobx動作確認
const userState = new UserState();

const stores = {
  user: userState,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Routes = () => (
  <Provider {...stores}>
    <Router>
      <View style={styles.container}>
        <Route exact path="/" component={Top} />
        <Route path="/staffId" component={StaffId} />
        <Route path="/top" component={Top} />
      </View>
    </Router>
  </Provider>
);
export default Routes;

AppRegistry.registerComponent('Routes', () => Routes);
