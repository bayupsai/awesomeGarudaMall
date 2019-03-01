import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './src/pages/home'

const App = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'HOME>JS'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(App)