
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
const width = Dimensions.get('window').width;

export default class Header extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <View style={[styles.topBar, {backgroundColor: this.props.color}]}>
        <View style={styles.nav}>
          <Text>{this.props.title}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topBar:{
    flexDirection:'row',
    height: 55,
    marginTop: 0,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderBottomColor:'#E2E2E2',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  nav:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    flexDirection:'row',
},

});
