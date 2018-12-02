import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://192.168.1.100:3000/api/users/get_users_to_vote', {
      mode: 'no-cors'
    })
      .then((response) => response.json())
      .then((responseJson)=> {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        })
      })
      .catch((error) =>{
        console.log(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.item}>{item.firstName} {item.lastName}</Text>}
          keyExtractor={({id}, index)=> id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
