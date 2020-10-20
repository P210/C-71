import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {AppTabNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';

 
export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Writescreen : {screen:WriteScreen},
  ReadScreen : {screen:ReadScreen}
})

 defaultNavigationOptions: ({navigation})=>({
tabBarIcon:()=>{
  const routeName = navigation.state.routeName;
  if (routeName==="WriteScreen"){
    return(
<Image
source={require("./assets/Write.jpg")}
style={{height:40,width:40}}
/>
    )
  }
  else if(routeName==="ReadScreen"){
    <Image
source={require("./assets/Read.jpg")}
style={{height:40,width:40}}
/>
  }
}
})

const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
