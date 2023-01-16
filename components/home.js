import * as React from 'react';
import { useState, Component } from 'react';
import { Text, View, StyleSheet,Button, Image, ImageBackground, TouchableOpacity , Pressable, ScrollView, Modal, TextInput,KeyboardAvoidingView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer,  DefaultTheme,
  DarkTheme,useTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import CreateTasks from './createTasks'
import listView from './createTasks'

class Home extends React.Component {
constructor(props) {
       super(props)
      Obj = new CreateTasks();  
}
state={
  listView1:   this.props.route.params
}
view=(props)=>{
      Obj.getValueFunction() ;
      //alert(this.state.listView1);
      //console.log(this.state.listView1);
     this.setState({listView1: <CreateTasks param={this.props.param}/>});
     }
 removeValue = async () => {
  try {
     const id = this.state.listView1.id;
    await AsyncStorage.removeItem('id')
  } catch(e) {
    console.log('error.')
  }

  console.log('Done.')
}

 render(){
       const { navigation } = this.props;
       const {route} = this.props; 
      // alert(this.state.listView);
    <CreateTasks navigation={this.props.navigation}/>
       //const {t1} = route.params;
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.body}>
     <ImageBackground   style={styles.imgwall} resizeMode="cover" >
     <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}}  >All</Text></TouchableOpacity>
       <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}} >Work</Text></TouchableOpacity>
      <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}}>Personal</Text></TouchableOpacity>
     <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}} >Birthday</Text></TouchableOpacity> 
    </View>
  

      <Text style={{color: "#fc8eac", fontWeight: "bold", fontSize: 20, marginTop: "4%", marginLeft: "3%", marginBottom: "3%", textAlign: "center"}} >Your Tasks! </Text>
    
      <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
       <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><AntDesign name="paperclip" size={20} color="pink" /></Text>
 
    <TouchableOpacity style={styles.tasks}  onPress={() => this.props.navigation.navigate('Subtask')}>
         <Text style= {{  justifyContent: "space-around", paddingTop: 3,color:"black", fontSize: 16}}>The task is {JSON.stringify(this.state.listView)}</Text>
    </TouchableOpacity>
    <View style={styles.cont2}>
      <TouchableOpacity>
        <Text><Foundation name="trash" size={24} color="pink" /></Text>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
   </View> 


   <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
       <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><AntDesign name="paperclip" size={20} color="pink" /></Text>
 
    <TouchableOpacity style={styles.tasks}  onPress={() => navigation.navigate('Subtask')}>
         <Text style= {{  justifyContent: "space-around", paddingTop: 3,color:"black", fontSize: 17}}>Mad Quiz1
         </Text>
      
    </TouchableOpacity>

    <View style={styles.cont2}>

      <TouchableOpacity>
        <Text><Foundation name="trash" size={24} color="pink" /></Text>
      </TouchableOpacity>
   
      </View>
    </TouchableOpacity>
   </View> 
    <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
       <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><AntDesign name="paperclip" size={20} color="pink" /></Text>
 
    <TouchableOpacity style={styles.tasks}  onPress={() => navigation.navigate('Subtask')}>
         <Text style= {{  justifyContent: "space-around", paddingTop: 3,color:"black", fontSize: 17}}>Mad Quiz2
         </Text>
 
    </TouchableOpacity>

    <View style={styles.cont2}>

      <TouchableOpacity>
        <Text><Foundation name="trash" size={24} color="pink" /></Text>
      </TouchableOpacity>
   
      </View>
    </TouchableOpacity>
   </View>
      <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
       <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><AntDesign name="paperclip" size={20} color="pink" /></Text>
 
    <TouchableOpacity style={styles.tasks}  onPress={() => navigation.navigate('Subtask')}>
         <Text style= {{  justifyContent: "space-around", paddingTop: 3,color:"black", fontSize: 17}}>Mad Quiz1
         </Text>
         
    </TouchableOpacity>

    <View style={styles.cont2}>

      <TouchableOpacity>
        <Text><Foundation name="trash" size={24} color="pink" /></Text>
      </TouchableOpacity>
   
      </View>
    </TouchableOpacity>
   </View>

    <TouchableOpacity style={{marginTop:150}}  onPress={() => this.props.navigation.navigate('Tasks')}>
      <AntDesign name="pluscircle" size={44} color="pink" style={styles.img5}/>

     </TouchableOpacity>
     
      <View style={{flexDirection: "row", backgroundColor: "#fc8eac", height: 50, border: 2, borderColor: "red", borderRadius: 10, marginBottom: "5%", width: "85%", marginLeft: "5%",  }}>
       <TouchableOpacity style={{marginLeft: "20%",marginTop:"2%"}} >
           <FontAwesome name="home" size={28} color="white"  style={{height: 40, width: 25, marginTop: "3%", marginLeft:  "28%", marginBottom: "3%"}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{marginLeft: "20%",marginTop:"2%"}}  onPress={() => navigation.navigate('Notifications')} >
       <Text><AntDesign name="clockcircle" size={24} color="white" style={{paddingTop: "3%",marginTop: "7%", }}/></Text>
       </TouchableOpacity>
    </View>

</ImageBackground>
</View>
 </KeyboardAvoidingView>
)
}}
const styles = StyleSheet.create({
 img7:{
     height: 30, width: 30, marginLeft: "75%", marginTop: "2%"

 },
 
  img2: {
      backgroundColor: "#white",  border: 0,   height: 20, width: 19,  marginLeft: "35%" , marginTop: "9%", 

  }, catg: {
     backgroundColor: "#fc8eac",  border: 0, borderRadius:  10, color: "white", marginLeft: "4%", textAlign: "center", height: 30, width: 69, justifyContent: 'space-around', fontSize: 15, paddingTop: 4, marginTop: "3%"
  },
  tasks: {
    backgroundColor: "white", height: 50,  fontSize: 16, marginTop: "3%", width: "60%",  paddingLeft: "3%", paddingTop: "1%", 
  },
  imgwall: {
     height: 720, width: 380, 
  },
 img4: {
     backgroundColor: "#white",   height: 28, width: 25 , marginTop: "30%", marginLeft: "9%", paddingLeft: "2%",
      
  },mod1 :{
   borderWidth: 2, borderRadius: 10, marginTop: "4%", width: "75%", marginLeft: "10%", height: 40
 }, cont2:{
     backgroundColor: "white",  border: 0,   height: 50, width: 35, marginTop: "3%",flexDirection: "row", borderBottomRightRadius:  10, borderTopRightRadius:  10, 

  }, img5: {
    marginLeft: "75%", height: 50, marginTop: "10%"
  },img: {
     backgroundColor: "#white",   height: 20, width: 20 , marginTop: "55%", marginLeft: "12%", paddingLeft: "2%",
      
  },imgwall2: {
     height: 170, width: 200, borderWidth: 2}
});

export default Home;
