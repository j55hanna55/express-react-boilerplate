import React, { Component } from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

export default class InstagramScreen extends Component {
  render() {
  return (
    <WebView
    source={{url: 'https://www.google.com/'}}
    />

 );
  }
  }
const head = `
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<style>
.iframely-responsive {
    top: 0; left: 0; width: 100%; height: 0;
    position: relative; padding-bottom: 56.25%;
}
.iframely-responsive>* {
    top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;
}
</style>
`;

       
      
  InstagramScreen.navigationOptions = {
  title: 'Instagram',
};