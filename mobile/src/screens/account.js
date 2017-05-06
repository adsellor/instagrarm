import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import Header from '../components/customHeader'

const pic = require('../assets/user-icon.png');

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: 999,
      posts: 0,
      following: 999,
      username: 'iterate',
      name: 'Iterate Iterateian'
      };
  }
  render() {

    return (
     <View>
       <Header title={this.state.username} color="#DCC6E0"/>
       <ScrollView automaticallyAdjustContentInsets={false} style={styles.scrollView}>
         <View style={styles.infoWrap}>
           <View style={styles.info}>
             <Image source={pic} style={styles.pic}/>
             <Text style={styles.name}>{this.state.name}</Text>
            </View>

          <View style={{flex:1}}>
            <View style={styles.dataContainer}>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>{this.state.posts}</Text>
                <Text style={{fontSize:12, color:'#777'}}>posts</Text>
              </View>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>{this.state.followers}</Text>
                <Text style={{fontSize:12, color:'#777'}}>followers</Text>
              </View>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>{this.state.following}</Text>
                <Text style={{fontSize:12, color:'#777'}}>following</Text>
              </View>

            </View>
            <TouchableOpacity style={styles.edit}>
              <Text>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#fff',
    marginBottom:110
  },
  container: {
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic:{
      width:70,
      height:70,
      borderRadius:35
  },
  infoWrap:{
    paddingTop:5,

    flexDirection:'row'
  },
  dataContainer:{
    flex:2,
    paddingTop:20,
    flexDirection:'row',

  },
  info:{
    alignItems:'center',
    padding:15
  },
  name:{
    fontWeight:'bold',
    fontSize:12,
    paddingTop:10
  },
  data:{
    flex:1,
    alignItems:'center'
  },
  edit:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:3,
    alignItems:'center',
    margin:15,
    padding:2
  }

});
