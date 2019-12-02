
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  yourName: t.String,
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
  
});
const options = {
  fields: {
    email: {
      error: 'Enter an email'
    },
    password: {
      error: 'Enter a password'
    },
    username: {
      error: 'Enter a username'
    },
    yourName: {
      error: 'Enter your name'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};


export default class SignUp extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c} // assign a ref
          type={User} 
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});