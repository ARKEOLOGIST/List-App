import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  
  export default class List extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data'),
            search: ""
        }
    }
    render()
    {
    return (
      <View style={styles.container}>
      <Text style={{padding: '1%'}}>&nbsp;</Text>
        <View style={{ width: '100%',flexDirection: 'row' }}><TextInput style={{ width: '80%',padding: '5%',borderWidth: 2,borderColor: 'blue' }} onChangeText={(value) => { this.setState({ search: value })}}></TextInput><TouchableOpacity style={{ padding: '5%',backgroundColor: 'blue', opacity: 0.7,borderTopWidth:2,borderBottomWidth:2,borderRightWidth:2,borderColor: 'blue'}}><Text style={{alignSelf: 'center',fontWeight: 'bold'}}>Search</Text></TouchableOpacity></View>
      <Text style={{padding: '1%'}}>&nbsp;</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  