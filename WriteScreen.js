import React from 'react';
import {Stylesheet, Text,View,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firestore'

export default class WriteScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            author:'',
            storyText:'',
        
        }
    }
    submitStory=()=>{
        db.collection("newstories").add({
            title : this.state.title,
            author : this.state.author,
            storyText : this.state.storyText
        })
        this.setState({
            title:'',
            author:'',
            storyText:''
        })
        }
    render(){
        return(
            <View style={styles.container}>
             <Header 
             backgroundColor={'pink'}
             centerComponent={{
                 text:'Story Hub',
                 style:{color:'black',fontSize:30}
             }}
             />
             <TextInput
            placeholder='Story Title'
            onChangeText={(text)=>{
               this.setState({
                   title:text
               })
            }}
            value={this.state.title}
            style={styles.title}
            placeholderTextColor='black' />

             <TextInput
            placeholder='Author'
            onChangeText={(text)=>{
               this.setState({
                   author:text
               })
            }}
            value={this.state.author}
            style={styles.author}
            placeholderTextColor='black' /> 

             <TextInput
            placeholder='Write your story'
            onChangeText={(text)=>{
               this.setState({
                   storyText:text
               })
            }}
            value={this.state.storyText}
            style={styles.storyText}
            placeholderTextColor='black' 
            multiline={true}
            />
            <TouchableOpacity
            style={styles.submitButton}
          onPress = {()=>{
              this.submitStory()
          }}
            >
          <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
  title:{
      height:40,
      boderWidth:20,
      marginTop:20,
      margin:10,
      color:'black',
      padding:6
  },
  author:{
    height:40,
    boderWidth:20,
    marginTop:20,
    margin:10,
    color:'black',
    padding:6
  },
  storyText:{
    height:40,
    boderWidth:20,
    marginTop:20,
    margin:10,
    color:'black',
    padding:6
  },
  submitButton:{
      justifyContent:'center',
      alignSelf:'center',
      backgroundColor:'pink',
      width:80,
      color:'black'
  },
  buttonText:{
      textAlign:'center',
      color:'white',
      fontWeight:'bold',
      color:'black'
  }
})