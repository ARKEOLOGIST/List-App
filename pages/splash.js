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
          /*setTimeout(() => {
            this.props.navigation.navigate('List' , { data: this.state.data});
          }, 3000);*/
      }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: '15%' }}>Click here to navigate to the respective screens</Text>
        <TouchableOpacity style= {{ padding: '10%', backgroundColor: 'blue', opacity: 0.7}} onPress={() => {this.props.navigation.navigate('List' , { data: this.state.data});}}><Text>Move to list</Text></TouchableOpacity>
        <Text style={{padding: '5%'}}>&nbsp;</Text>
        <TouchableOpacity style= {{ padding: '10%', backgroundColor: 'blue', opacity: 0.7}} onPress={() => {this.props.navigation.navigate('Search' , { data: this.state.data});}}><Text>Move to search</Text></TouchableOpacity>
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