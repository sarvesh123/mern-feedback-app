import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Button, Alert } from 'react-native';

import * as Constants from '../helpers/Constants'

export default class UserList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch(Constants.API_URL + '/api/users/get_users_to_vote', {
      mode: 'no-cors'
    })
    .then((response) => response.json())
    .then((responseJson)=> {
      for (i in responseJson) {
        responseJson[i].key = responseJson[i]._id
      }
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
    const {navigate} = this.props.navigation;
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
          renderItem={({item}) => <View>
              <Text style={styles.item}>{item.firstName} {item.lastName} </Text>
              <Button onPress={() => navigate('RateUser', {user: item})} title="Rate Me"/>
            </View> }
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
