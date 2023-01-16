import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Modal,Text, View, TouchableOpacity, ImageBackground, TextInput, modal,Image,
TextArea, Button,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  DefaultTheme,
  DarkTheme,useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome } from '@expo/vector-icons'; 

const CreateTasks = ()  =>{
 state={
          title: "",
          categ:"",
          desc: "",
          subtask1:"",
          subtask2:"",
          subtask3:"",
          listView:[],list:[],status:"pending", id:Date.now(), 
        };

add=()=>{
     //const obj ={id: Date.now(), title:this.state.title, categ:this.state.categ, desc: this.state.desc,status:this.state.status};
    // AsyncStorage.setItem('1',JSON.stringify(obj));
    // alert('Data Saved');
      const obj ={title:this.state.title, categ:this.state.categ, desc: this.state.desc,  sub1: this.state.subtask1, sub2: this.state.subtask2, sub3: this.state.subtask3};
     AsyncStorage.setItem('1',JSON.stringify(obj));

     alert('Data Saved');
     // const arr=this.state.listView;
     //arr.push(obj);
     //this.setState({listView:arr});
    //alert(this.state.listView)
  }

     getValueFunction = async() => {
      // let user = await AsyncStorage.getItem('1');  
       //let parsed = JSON.parse(1);  
       //alert(user);  
       AsyncStorage.getItem('1').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        this.setState({listView:value}) 
    )
  
  }
      getTask = async() => {
        const id = this.state.id;
       let user = await AsyncStorage.getItem('id');  
       let parsed = JSON.parse(id);  
       this.setState({list:parsed.title})
       //alert(user);  
      
        //AsyncStorage returns a promise so adding a callback to get the value
  
  }
 
  
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.body}>

     <Text style={  { backgroundColor: "#fc8eac", color: "white", fontWeight: "bold", fontSize: 20, marginTop: "4%", marginLeft: "19%", marginBottom: "3%", textAlign: "center", borderWidth: 1, borderRadius: 10, height:40, justifyContent: "center", paddingTop: "1%", width: 200, borderColor: "#fe6c9e" }}>Create Your Tasks!</Text>

  <Text style={styles.subtask2}>Add Tasks </Text>   
<TextInput style={styles.inp} placeholder= "  Enter your Title"     />
<TextInput style={styles.txt} placeholder= "  Enter Category"  />
    <TextInput style={styles.inp3} multiline = {true}
numberOfLines = {5} placeholder= "  Description"  />

<Text style={styles.subtask}>Add Subtasks </Text>
<TextInput style={styles.inp2} placeholder= "  Subtask 1"  />
<TextInput style={styles.inp2} placeholder= "  Subtask 2"  />
<TextInput style={styles.inp2} placeholder= "  Subtask 3" />
<View style={{flexDirection: "row", marginLeft: "75%", marginTop: "2%"}}>

<TouchableOpacity onPress={this.add}>
   <AntDesign name="pluscircle" size={34} color="pink" style={styles.img3}/>
</TouchableOpacity>

</View>

   
<View style={{flexDirection: "row", backgroundColor: "#fc8eac", height: 50, border: 2, borderColor: "red", borderRadius: 10, marginBottom: "5%", width: "85%", marginLeft: "5%" , marginTop:30}}>
       <TouchableOpacity style={{marginLeft: "18%",marginTop:"2%"}} onPress={(listView)=>this.props.navigation.navigate('Home', { screen: 'CreateTasks',
  params: { listView1: this.state.listView }, })} >
          <FontAwesome name="home" size={28} color="white"  style={{height: 40, width: 25, marginTop: "3%", marginLeft:  "28%", marginBottom: "3%"}}/>
       </TouchableOpacity>

       <TouchableOpacity style={{marginLeft: "20%",marginTop:"2%"}}  onPress={() => navigation.navigate('Notifications')} >
       <Text><AntDesign name="clockcircle" size={24} color="white" style={{paddingTop: "3%", }}/></Text>
       </TouchableOpacity>
    </View>
    
     </View>
     </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
 border: 0, 
  },
  subtask:{
    backgroundColor: "#fc8eac", height: 30, color: "white", fontWeight: "bold", textAlign: "center", width: "40%", marginLeft: "10%", paddingTop: "1%", borderRadius: 10,  fontSize: 15, marginTop: "6%"

  }, subtask2:{
    backgroundColor: "#fc8eac", height: 30, color: "white", fontWeight: "bold", textAlign: "center", width: "40%", marginLeft: "10%", paddingTop: "1%", borderRadius: 10, marginTop: "5%", fontSize: 15

  },

  imgwall: {
     height: 720, width: 380, 
  },
 inp:{
   marginLeft: "10%", borderWidth: 2, borderRadius: 10, height: 40, width :"75%", marginTop: "5%",  
   
 },inp2:{
    marginLeft: "10%", borderWidth: 2, borderRadius: 10, height: 40, width :"75%", marginTop: "3%",  

 }
 
 , img3:{
      marginTop: "1%", height: 35, width: 35,  marginBottom: "5%"

 },
txt:{
   marginLeft: "10%", borderWidth: 2, borderRadius: 10, height: 40, width :"75%", marginTop: "3%",  flexDirection: "row"

 },
 inp1:{
    marginLeft: "1%",   

 },
 img2:{
   marginLeft: "60%", height: 30, marginTop: "1%", width: 25
 },inp3:{
   marginLeft: "10%", borderWidth: 2, borderRadius: 10, height: 90, width :"75%", marginTop: "3%", 
   
 },

});

export default CreateTasks;

