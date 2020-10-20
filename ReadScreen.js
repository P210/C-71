import React from 'react';
import {Stylesheet, Text,View} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <AppHeader/>
       <Text style={styles.b}>Read Stories</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      b:{
        color:'peach',
        font:20
        
    
  }
})