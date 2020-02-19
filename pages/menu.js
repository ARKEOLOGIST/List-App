import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ToastAndroid } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.navigation.getParam('data')
        };
      }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: '15%' }}>Click here to navigate to the respective screens</Text>
        <TouchableOpacity style= {{ padding: '10%', backgroundColor: 'blue', opacity: 0.7, width: '60%'}} onPress={() => {this.props.navigation.navigate('List' , { data: this.state.data});}}><Text style={styles.size}>Move to list</Text></TouchableOpacity>
        <Text style={{padding: '5%'}}>&nbsp;</Text>
        <TouchableOpacity style= {{ padding: '10%', backgroundColor: 'blue', opacity: 0.7, width: '60%'}} onPress={() => {this.props.navigation.navigate('Search' , { data: this.state.data});}}><Text style={styles.size}>Move to search</Text></TouchableOpacity>
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
  },
  size: {
    fontSize: 20,
    alignSelf: "center"
  }
});