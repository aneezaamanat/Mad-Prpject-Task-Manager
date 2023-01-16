import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity , Pressable, ScrollView, Modal, TextInput} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../App';
import { FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer,  DefaultTheme,
  DarkTheme,useTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function Notifications ({navigation}) {

  return (
    <View style={styles.body}>
     <ImageBackground  style={styles.imgwall} resizeMode="cover" >

    <View style={{flexDirection: "row"}}>
         <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}} >All</Text></TouchableOpacity>
       <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}} >Work</Text></TouchableOpacity>
      <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}}>Personal</Text></TouchableOpacity>
     <TouchableOpacity style={styles.catg}><Text style= {{color: "white", textAlign: "center", justifyContent: "center", paddingBottom: 8}} >Birthday</Text></TouchableOpacity>
      
    </View>
  
      <Text style={{color: "#fc8eac", fontWeight: "bold", fontSize: 20, marginTop: "4%", marginLeft: "3%", marginBottom: "3%", textAlign: "center"}} >My To Do's! </Text>
<Text style={styles.taskhead}>Pending</Text>

 
     <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
    <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><MaterialIcons name="pending" size={32} color='pink' /></Text>
 
    <TouchableOpacity style={styles.tasks} >
    <Text style= {{  justifyContent: "space-around", paddingTop: 3, fontSize: 17}}>TSE 1
    </Text>

    <Text style={{fontSize: 10}}>Created on: 02/11/2022 </Text>
    </TouchableOpacity>

      <View style={styles.cont2}>

      <TouchableOpacity><Foundation name="trash" size={24} color="pink" />
  </TouchableOpacity>
      </View>
      </TouchableOpacity>
     </View>

   


<Text style={styles.taskhead2}>Done</Text>

     <View style={{flexDirection: "row"}}>
    <TouchableOpacity  style={{flexDirection: "row", width: "98%"}}>
    <Text style={{height: 50, backgroundColor:"white" , marginTop: "3%", marginLeft: "10%",  width: 29,      borderBottomLeftRadius:  10, borderTopLeftRadius:  10,}}><Ionicons name="md-checkmark-circle" size={32} color='pink' /></Text>
 
    <TouchableOpacity style={styles.tasks} >
    <Text style= {{  justifyContent: "space-around", paddingTop: 3, fontSize: 17}}>TSE 1
    </Text>

    <Text style={{fontSize: 10}}>Created on: 02/11/2022 </Text>
    </TouchableOpacity>

      <View style={styles.cont2}>

      <TouchableOpacity><Foundation name="trash" size={24} color="pink" />
  </TouchableOpacity>
      </View>
      </TouchableOpacity>
     </View>

   
<View style={{flexDirection: "row", backgroundColor: "#fc8eac", height: 50, border: 2, borderColor: "red", borderRadius: 10, marginBottom: "5%", width: "85%", marginLeft: "5%" , marginTop:270}}>
       <TouchableOpacity style={{marginLeft: "18%",marginTop:"2%"}} onPress={() => navigation.navigate('Home')} >
          <FontAwesome name="home" size={28} color="white"  style={{height: 40, width: 25, marginTop: "4%", marginLeft:  "28%", marginBottom: "3%"}}/>
       </TouchableOpacity>

       <TouchableOpacity style={{marginLeft: "20%",marginTop:"2%"}}  onPress={() => navigation.navigate('Notifications')} >
       <Text><AntDesign name="clockcircle" size={24} color="white" style={{paddingTop: "3%", }}/></Text>
       </TouchableOpacity>
    </View>
 
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
 
  body: {
 border: 0, 
  },img7:{
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
      
  },taskhead:{
    marginLeft: "10%", fontWeight: "bold", fontSize: 20, color: "black"

  } ,taskhead2:{
    marginLeft: "10%", fontWeight: "bold", fontSize: 20, color: "black", marginTop: "4%"

  } ,cont2:{
     backgroundColor: "white",  border: 0,   height: 50, width: 35, marginTop: "3%",flexDirection: "row", borderBottomRightRadius:  10, borderTopRightRadius:  10, 

  }, img: {
     backgroundColor: "#white",   height: 20, width: 20 , marginTop: "55%", marginLeft: "12%", paddingLeft: "2%",
      
  },imgwall2: {
     height: 170, width: 200, borderWidth: 2}
});

export default Notifications;
