import React from 'react'
import { View, Button } from 'react-native'

import Login from './Login'
import Register from './Register'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        const {navigate} = this.props.navigation
        return (
            <View >
                <Button onPress={() => navigate('Register')} title="Register" />
                <Button onPress={() => navigate('Login')} title="Login" />
            </View>
        )
    }
}