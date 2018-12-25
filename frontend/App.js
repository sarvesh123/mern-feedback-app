import Home from './components/Home'
import RateUser from './components/RateUser'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  RateUser: {screen: RateUser},
});

export default createAppContainer(AppNavigator);