import React from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/main';

const ReactNativeMock = () => <Main />;
export default ReactNativeMock;
AppRegistry.registerComponent('ReactNativeMock', () => ReactNativeMock);
