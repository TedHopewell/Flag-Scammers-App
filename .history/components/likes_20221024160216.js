import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 1,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
        <View>
            <TouchableOpacity onClick={this.updateLikes}><Text>Like</Text></TouchableOpacity>
            <View>{this.state.likes}</View>
        </View>
        
    //   <div>
    //     <p onClick={this.updateLikes}>Like</p>
    //     <p>{this.state.likes}</p>
    //   </div>
    );

  }


}

export default Likes;
