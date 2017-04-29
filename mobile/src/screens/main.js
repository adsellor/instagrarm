import React, {Component} from 'react'

import {
  View,
  Image,
  Text,
  StatusBar
} from  'react-native'

export default class Main extends Component {
  render()  {
    return(
      <View>
        <StatusBar
          hidden={false}
          backgroundColor="#00506b"/>
        <Text>
          Hello
        </Text>
      </View>
    )
  }
}
