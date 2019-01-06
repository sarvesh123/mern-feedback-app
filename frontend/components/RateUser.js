import React from 'react'
import { Text, View, TextInput, Picker, Button, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';

import * as Constants from '../helpers/Constants'

export default class RateUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            isLoading: true,
            rate: ''
        }
    }

    componentDidMount() {
        return fetch(Constants.API_URL + '/api/attributes', {
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

    saveRating(item) {
        let data = {
            'user_id': '5be7d2ed1cb4fe16ece2162a',
            'attribute_id': item._id,
            'rating': this.state.rate
        }
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
        return fetch(Constants.API_URL + '/api/user_ratings/rate_user', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok) {
                response.json()
                    .then((errObject) => {
                        Alert.alert(errObject.message)
                    })
                    .catch((error) => {
                        console.log('promise error', error)
                    })
            }
            return response.json()
        })
        .then((responseJson) => {
            Alert.alert('Success!')
        })
        .catch((error) => {
            console.log('errObject', error)
        })
    }

    render() {
        const propParams = this.props.navigation.state.params
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }
        return (
            <View>
                <Text style={styles.nameLabel}>Name: { propParams.user.firstName } { propParams.user.lastName }</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <View style={ styles.attributeRow } >
                        <View style={styles.attribute}><Text>{item.name} </Text></View>
                        <View style={styles.rateInput}>
                            <Picker selectedValue={this.state.rate} onValueChange={(itemValue) => this.setState({rate: itemValue})} >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="1" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                            </Picker>  
                        </View>
                        <View style={styles.rateButton}><Button onPress={ this.saveRating.bind(this, item) } title="Rate"/></View>
                    </View> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    nameLabel: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    attribute: {
        padding: 10,
        fontSize: 18,
        height: 50,
        width: 100
    },
    rateInput: {
        width: 150,
        margin: 0,
        padding: 0,
        alignContent: 'flex-start'
    },
    rateButton: {
        padding: 10,
        fontSize: 18,
        height: 50,
        backgroundColor: 'skyblue',
        color: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        width: 80
    },
    attributeRow: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    }
})