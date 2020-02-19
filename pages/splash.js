import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }
    
    componentDidMount() {
        fetch('https://www.mocky.io/v2/5e419e082f0000cb5458368e')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({data: responseJson.products});
          })
          .catch((error) => {
            ToastAndroid.show('Oops! An error occurred!' + error, ToastAndroid.SHORT);
          });
          setTimeout(() => {
            this.props.navigation.navigate('Menu' , { data: this.state.data});
          }, 3000);
      }

  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 20,fontWeight: 'bold'}}>Please wait while your data is loading</Text>
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