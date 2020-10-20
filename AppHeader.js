import React from 'react';
import {Stylesheet, Text,View} from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.a}>Buzz</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    
      },
      a:{
          color:'red',
          font:30
          
      }
})