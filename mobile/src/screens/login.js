import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("../assets/login_bg.jpg");
const lockIcon = require("../assets/login1_lock.png");
const personIcon = require("../assets/login1_person.png");

export default class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress = {() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar
          hidden={true} />
        <Image source={background} style={styles.background} resizeMode="cover">

          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                underlineColorAndroid='transparent'
                placeholder="Username"
                placeholderTextColor="#FFF"
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                underlineColorAndroid='transparent'
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5}
                onPress={() => this.porps.navigation.navigate("Signup")}>
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 230,
  },
  inputWrap: {
    flexDirection: "row",
    height: 75,

  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 30,
    width: 30,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
