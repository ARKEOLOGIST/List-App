import React from 'react';
import {StyleSheet, Text, View, ToastAndroid } from 'react-native';

export default class Splash extends React.Component {
    constructor() {
        this.state = {
          data: []
        };
      }
    
    componentDidMount() {
        fetch('https://www.mocky.io/v2/5e419e082f0000cb5458368e')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({data: JSON.parse(responseJson)});
          })
          .catch((error) => {
            ToastAndroid.show('Oops! An error occurred!' + error, ToastAndroid.SHORT);
          });
      }

  render() {
    return (
      <View style={styles.container}>
        <Text>Wait while your data is loading!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});