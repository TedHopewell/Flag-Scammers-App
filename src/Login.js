import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image } from 'react-native';
import React from 'react'

import react from 'react';
import { auth } from './config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome'
import image1 from "../assets/bg.png"
import image2 from '../assets/google.png'

export default function Login({navigation}){
  const [email,setEmail]=react.useState('');
  const [password,setPass]=react.useState('');

  const login = (()=>{

    signInWithEmailAndPassword(auth, email, password).then(()=>{
      navigation.push('Home');
    }).catch((err)=>{

        console.log(err);
    })
    
})




  return (
  <ImageBackground style={styles.wrapper} source={image1} >
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputContainer}>

        <TextInput
        placeholder='Email'
        style={styles.input}
        onChange={(e)=>setEmail(e.target)}
        />
        <TextInput
            placeholder='Password'
            style={styles.input}
            onChange={(e)=>setPass(e.target)}/>


      
       <View style={styles.LoginTxt}>
        <Icon
        color='red'
        name='envelope'
        type='font-awesome'
        size={12}
        />
       <TextInput
          placeholder='Email'
          style={styles.input}
        />
       </View>

       <View style={styles.LoginTxt}>
        <Icon
        color='red'
        name='lock'
        type='font-awesome'
        size={16}
        />
       <TextInput
          placeholder='Password'
          style={styles.input}

        />
       </View>    
      </View>

      <View style={styles.forget}>
          <TouchableOpacity style={styles.for}>
            <Text style={styles.textForget}>Forget password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.for}
          onPress={() => navigation.push('Register')}
          >
            <Text style={styles.textForget}>Don't have an account click here</Text>
          </TouchableOpacity>

        </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}

                onPress={login}
            >
              <FontAwesomeIcon icon={ faEnvelope} />

       

                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.OR}>
          <Text style={styles.ORTxt}>Or</Text>
        </View>

        
      <View style={styles.GoogleContainer}>
            <TouchableOpacity
                style={styles.GoogleButton}
            >
              <Image
               source={image2}
               style={{width:'30px', height:'30px'}}
               />
                <Text style={styles.googleButtonText}>Login with google</Text>
            </TouchableOpacity>
        </View>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      paddingHorizontal:30,
      justifyContent:'center',

    },
    header:{
        color:"red",
        marginTop:'20%',
        marginLeft:"20%",
        fontFamily:'coda',
        fontWeight:'200',
        fontSize:'25px',
        lineHeight:35,
    },

    text:{
      marginLeft:'80%',
      fontSize:'25px',
      fontFamily:'coda',
      fontStyle:'normal',
      
    },

    Login:{
      display:'flex',
      flexDirection:'row',
    
 
      

    },

   
    input:{
      width:'100%',
      paddingLeft:'10px',
      
  
     
   
    },

    LoginTxt:{
      width:'100%',
      height:44,
      paddingHorizontal:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'gray',
      borderBottomWidth:1,
      paddingHorizontal:2,
      


   

    },

    forget:{
      display:'flex',
      flexDirection:"row",
      marginTop:"20px"
    },

    for:{
      width:'190px',
    },

    textForget:{
      fontFamily:'coda',
      fontStyle:'normal',
      fontWeight:'200',
      fontSize:'15px',
      lineHeight:'23px',
      color:'#34B1F8',

    },
  


    buttonContainer:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'10%',
      paddingHorizontal:50

  },
  
  button:{
      backgroundColor:'#EA4335',
      width:'100%',
      padding:15,
      borderRadius:'27px',
      alignItems:'center',
      fontSize:'bold'
      
    },




    buttonText:{
       color:'white',
      fontSize:'bold'
    },

    

    bottomContainer:{
      backgroundColor:'black',
      marginTop:'10%',
    },

    GoogleContainer:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'10%',
      paddingHorizontal:50,
      
    },

    GoogleButton:{
      backgroundColor: '#FFFFFF',
      width:'100%',
      padding:15,
      borderRadius:'30px',
      alignItems:'center',
      fontSize:'bold',
      display:'flex',
      flexDirection:'row',
     
    },

    googleButtonText:{
      paddingLeft:"30px"
    },

    OR:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop:"10%", 
    },

    ORTxt:{
      fontFamily:'coda',
      fontWeight:400,
      fontSize:'25px',
      lineHeight:'35px',
      color:'#353535',
      textAlign:'center',

    }
  });

