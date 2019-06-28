import React ,{Component} from "react";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer } from "react-navigation";
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Auth from './src/screens/Auth/Auth';
import {Provider} from 'react-redux';
import configureStore from "./src/store/configureStore";
import DetailScreen from './src/screens/PlaceDetail/PlaceDetail'

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
      
    );
  };
};

const FindPlaceStack = createStackNavigator({
  FindPlace:{
    screen:FindPlace,
    navigationOptions:{
      title:"FindPlace"
    }
  },
  PlaceDetailScreen:{screen:DetailScreen}
},{ headerLayoutPreset: 'center'});
const SharePlaceStack = createStackNavigator(
  {
    SharePlace:{
      screen:SharePlace,
      navigationOptions:{
        title:"SharePlace"
      }
    }
  },{ headerLayoutPreset: 'center'}
   );
const AppBottomTabNavigator = createBottomTabNavigator({
  SharePlace:{
    screen:SharePlaceStack,
  },
  FindPlace:{
    screen:FindPlaceStack,
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'SharePlace') {
        iconName = 'ios-share-alt';
      } else if (routeName === 'FindPlace') {
        iconName = 'ios-checkmark-circle';
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    }),
  tabBarOptions: {
    activeTintColor: '#42f44b',
    inactiveTintColor: 'gray',
  },
});
const auth = createStackNavigator({
  Auth:{
    screen:Auth,
    navigationOptions: {
      title: 'Auth',
  },
  },
},{ headerLayoutPreset: 'center'});

// const PlaceDetailScreen = createStackNavigator({
//   PlaceDetailScreen:{screen:DetailScreen}
// });

const AppSwitchNavigator = createSwitchNavigator(
  {
    Auth:auth,
    SharePlace:{screen:AppBottomTabNavigator}
  },
  {initialRouteName:"Auth"}
);
const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;