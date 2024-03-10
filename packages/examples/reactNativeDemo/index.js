/* eslint-disable import/no-unassigned-import */
/**
 * @format
 */
import 'node-libs-react-native/globals';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import {SafeApp} from './App';
import {name as appName} from './app.json';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

AppRegistry.registerComponent(appName, () => SafeApp);
