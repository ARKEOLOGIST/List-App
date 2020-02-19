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
        <Text style={styles.title}>{title.name}</Text>
        <Text style={styles.title}>{title.price}</Text>
      </View>
    );
  }
  
  export default class List extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data'),
            search: "",
            display: []
        }
    }

    componentDidMount()
    {
        let copy = this.state.data;
        let sheep = copy.map((n) => {
            return n;
        });
        this.setState({
            display: sheep
        });
    }

    search()
    {
       let sheep = [];
       for (i =  0 ; i < this.state.data.length ; i++)
       {
           if (this.state.data[i].name === this.state.search)
           {
             sheep.push(this.state.data[i]);
           }
       }
       this.setState({
        display: sheep
    });
    }

    render()
    {
    return (
      <View style={styles.container}>
      <Text style={{padding: '1%'}}>&nbsp;</Text>
        <View style={{ width: '100%',flexDirection: 'row' }}><TextInput onFocus= {() => this.setState({search : ""})} value={this.state.search} style={{ width: '80%',padding: '5%',borderWidth: 2,borderColor: 'blue' }} onChangeText={(value) => { this.setState({ search: value })}}></TextInput><TouchableOpacity onPress={this.search.bind(this)} style={{ padding: '5%',backgroundColor: 'blue', opacity: 0.7,borderTopWidth:2,borderBottomWidth:2,borderRightWidth:2,borderColor: 'blue'}}><Text style={{alignSelf: 'center',fontWeight: 'bold'}}>Search</Text></TouchableOpacity></View>
        
        <Text style={{padding: '1%'}}>&nbsp;</Text>
        <FlatList
          data={this.state.display}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item,index) => item.id.toString()}
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
      padding: '5%'
    },
  });
  