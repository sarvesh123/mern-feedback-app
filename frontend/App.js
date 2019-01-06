import Home from './components/Home'
import UserList from './components/UserList'
import RateUser from './components/RateUser'
import Login from './components/Login'
import Register from './components/Register'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Register: {screen: Register},
  UserList: {screen: UserList},
  RateUser: {screen: RateUser},
});

export default createAppContainer(AppNavigator);