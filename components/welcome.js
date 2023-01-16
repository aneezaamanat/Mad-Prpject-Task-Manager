import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, modal,Image,
TextArea } from 'react-native';
import { NavigationContainer,  DefaultTheme,
  DarkTheme,useTheme } from '@react-navigation/native';

function Welcome ({ navigation }) {
  state={
    show: false
  }
  const { colors } = useTheme();
  
  return (
    
    <View style={styles.body}>

     <ImageBackground source={require('./assets/images/wall1.jpg')} style={styles.imgwall} resizeMode="cover" >
     <Text style={  styles.cont1}>Manage your Tasks With Us! </Text>
    <View style={{flexDirection: "row"}}>
      <Text  style={styles.container}>To-Do List   </Text>
      <Image source={require('./assets/images/icons8-what-i-do-50.png')} style={styles.img1}/>
      <Text style={{width: 10, backgroundColor:"#e75480", borderTopRightRadius:  10, borderBottomRightRadius: 10, marginRight: "10%",  marginTop: "3%"}}> 

</Text>
</View>

    <View style={{flexDirection: "row"}}>

<Text style={{ marginLeft: "34%"}}>Create your Tasks</Text>

</View>
 <View style={{flexDirection: "row"}}>


<Text style={{ marginLeft: "34%"}}>Set Your Reminders</Text>

</View>
 <View style={{flexDirection: "row"}}>

<Text style={{ marginLeft: "34%"}}>Manage your routine </Text>

</View>
<TouchableOpacity style={styles.start} onPress={() => navigation.navigate('Home')}>
<Text style={{color: "white"}}>Get Started</Text>

</TouchableOpacity>
    
     </ImageBackground>
     </View>


  );
}

const styles = StyleSheet.create({
 
  body: {
 border: 0,
  },
  cont1:{
    backgroundColor: "#fc8eac", color: "white", fontWeight: "bold", fontSize: 18, marginTop: "28%", marginLeft: "19%", marginBottom: "3%", textAlign: "center", borderWidth: 1, borderRadius: 10, height:40, justifyContent: "center", paddingTop: "1%", width: 250, borderColor: "#fe6c9e"

  },
  container: {
    flex: 1,
    justifyContent: 'center', color: "#e75480", marginLeft: "28%",
    textAlign: "center", fontSize: 25,
    paddingTop: "3%", paddingBottom: "3%", fontWeight: "bold",   border: 0, borderBottomLeftRadius:  10, borderTopLeftRadius:  10, marginTop: "40%"
  },


  imgwall: {
     height: 720, width: 380, 
  },
 img1:{
   marginTop: "30%", marginRight: "12%", 
 },img2:{
   marginTop: "0%", height: 20, width: 15, marginLeft: "28%",
 }, start:{
   backgroundColor: "#fc8eac", marginLeft: "49%", width: "24%", textAlign:"center", borderRadius: 10, paddingBottom: "1%", marginTop: "4%", paddingLeft: "2%" 
 }


});
export default Welcome;
