import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './home'
import CountryDetail from '../../components/CountryDetail'
import AddCountry from '../../components/AddCountry'

const MainNavigator = createStackNavigator({
  Home,
  CountryDetail,
  AddCountry
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "World Countries",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

const App = createAppContainer(MainNavigator)
export default App