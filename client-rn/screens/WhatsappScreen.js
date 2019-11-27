import React, { Component } from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
export default class WhatsappScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.reddit.com/login/'}}
        style={{marginTop: 20}}
      />
    );
  }
}
  WhatsappScreen.navigationOptions = {
  title: 'Reddit',
};