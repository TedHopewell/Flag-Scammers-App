
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';

import RedPart2 from '../components/secureTopParts';
// import { ScrollView } from 'react-native-web';
import { db } from './config/firebase';
import { auth } from './config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs,query,where} from 'firebase/firestore';
import Comments from './Comments';
import DropdownPicker from '../components/dropdownpicker';


export default function HomeScreen({navigation}) {

  const [flags,setFlags]= React.useState([]);
  const[users,setUsers]= React.useState('');
  const [address,setAddress] =React.useState('')

  const flagRef =collection(db,"flag");

  var user= auth.currentUser;
  console.log(user);
  

 

  const addButton = async()=>{
    if (user == null) {
      
      alert('not logged in')
      navigation.push('Login');
    }else{
      alert('logged in')
      navigation.push('AddScammer');
     
    }
  }




  const getItems = async()=>{
      
    console.log(flagRef);
  
    let data = await getDocs(flagRef);
     setFlags(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    
    }

    
    const search = async() =>{

        flags.map(flag=>((

          // console.log(address)

          address == flag.address ?(
            navigation.push('Comments')
          ):(
            navigation.push('NotFound')
          )
          
          // console.log(address)
          // address == flag.address ?(
          //   navigation.push('Comments',{flag:flag})
          // ):(
          //   navigation.push('Home')
          // )
       
        
      )))}
   

    React.useEffect(()=>{
      console.log("some")
      getItems();
      console.log(getItems());
      
     }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      {
        user != null ? (<RedPart2 />):(<RedPart />)
      } 
      
      
      
      <View style={styles.boxes}>
        
          <View style={styles.selectView}>
          {/* <DropdownComponent/> */}
            <DropdownPicker/>
          </View>
   
          <TextInput style={styles.inputBox} placeholder='Enter Address...' onChangeText={address=>setAddress(address)}></TextInput>
          <TouchableOpacity onPress={search}><View style={styles.searchIconBtn} ><FontAwesomeIcon icon={faSearch} style={styles.searchIcon} /></View></TouchableOpacity>
      </View>
      

            <ScrollView style={styles.midContainer}>
            {
                  
               flags.map(flag=>((
        
                  <View style={styles.cardsContainer} key={flag.id}>
                    <View style={styles.card}>
                        <View style={styles.dateContainerBorder}>
                          <View style={styles.dateContainer}>
                            <Text style={styles.day}>22</Text>
                            <Text style={styles.month}>Aug</Text>
                            <Text style={styles.year}>2022</Text>
                          </View>

                        </View>
                        <View style={styles.userContainerRightBorder}>
                          <View style={styles.userContainer}>
                            <Text style={styles.username1}>{flag.address}</Text>
                            <View style={styles.comments}>
                              <Text style={styles.username2}>2.5k</Text><FontAwesomeIcon icon={faFlag} style={styles.flags} />
                              <Text style={styles.username3}>352</Text><FontAwesomeIcon icon={faComment} style={styles.commentIcon} />
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity style={styles.upvoteBtn}>
                          <Text style={styles.upvoteTXT}>UPVOTE</Text>
                        </TouchableOpacity>
                    </View>
                    
                  </View>
                 )))} 
                  
              </ScrollView> 

                  
      
      <TouchableOpacity style={styles.buttonContainer} onPress={addButton}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      <View style={styles.bottomContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  midContainer: {
    flex: 12,
    height: '500px',
    width: '100%',
    marginTop: 20,
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width: '100%',
    
  },
  inputBox: {
    height: 25,
    border: '1px solid black',
    width: '45%',
    marginTop: '25px',
    paddingLeft: '2%',
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    fontSize:12,
    boxShadow: '#ababab 0px 6px 9px -3px;',
  },
 
  searchIconBtn: {
    backgroundColor: '#D2373C',
    width: '30px',
    height: '30px',
    paddingTop: '7px',
    paddingLeft: '8px',
    borderRadius: '20px',
    marginTop: '23px',
    boxShadow: '#ababab 0px 6px 9px -1px;',
  },
  searchIcon: {
    color: '#EDEDED',
  },
  dateContainerBorder: {
    width: 70,
  },
  dateContainer: {
    height: 40,
    marginTop: 20,
    borderRightWidth: 1,
    borderRightColor: 'black',
    
  },
  userContainerRightBorder:{
    flex:3,
  },
  userContainer: {
    height: 40,
    width:180,
    borderRightColor:'black',
    paddingLeft:10,
    marginTop:20,
  },
  bottomContainer: {
    backgroundColor: '#000000',
    height: '15%',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: '92%',
    marginLeft: 15,
    boxShadow: '#ababab 0px 6px 9px -3px;',
  },
  buttonContainer: {
    backgroundColor: '#D2373C',
    width: '50px',
    height: '50px',
    paddingLeft: 16,
    borderRadius: 50,
    marginTop: 20,
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  button: {
    color: '#EDEDED',
    fontSize: '1.8em',
  },
  day: {
    paddingLeft: 26,
    color: 'red',
    fontSize:10,
  },
  month: {
    paddingLeft: 20,
    fontSize: 10,
    color: '#D2373C',
    fontWeight: 'bolder',
  },
  year: {
    paddingLeft: 18,
    fontSize: 10,
    color: '#D2373C',
  },
  username1: {
    paddingLeft: 10,
    fontSize: 12,
  },
  username2: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 10,
  },
  username3:{
    paddingTop: 10,
    fontSize: 10,
    paddingLeft:60,
  },
  comments: {
    display: 'flex',
    flexDirection: 'row',
  },
  commentIcon: {
    paddingTop: 10,
    position: 'absolute',
    paddingLeft: 115,
  },
  flags: {
    paddingTop: 10,
    paddingLeft: 40,
    color: '#D2373C',
    position: 'absolute',
  },
  upvoteBtn: {
    flex: 1,
    border: '1px solid #6200EE',
    height: 22,
    width: 40,
    marginTop: 30,
    marginRight: 10,
    borderRadius: 4,
  },
  upvoteTXT: {
    paddingLeft: 8,
    paddingTop: 2,
    fontSize: 11,
    color: '#6200EE',
    fontWeight: 'bold',
  },
});