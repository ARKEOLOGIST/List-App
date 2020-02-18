import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    }
    render()
    {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.navigation.getParam('data')}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
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
  