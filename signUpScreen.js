import React, { Component } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

export default class SignUpScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <View>
          <TextInput placeholder="Username" style={styles.inputText} />
          <TextInput placeholder="Email" style={styles.inputText} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputText}
            placeholderTextColor={"#aaaaaa"}
          />
          <TextInput
            placeholder="Password again"
            secureTextEntry={true}
            style={styles.inputText}
            placeholderTextColor={"#aaaaaa"}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Sign up </Text>
        </TouchableOpacity>
        <View style={styles.logInContainer}>
          <Text style={styles.haveAccount}> You already have an account? </Text>
          <Text style={styles.logIn}> Log in </Text>
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  loginText: {
    fontSize: 50,
    color: "#9234eb",
    marginVertical: 50,
  },

  inputText: {
    borderBottomColor: "#9234eb",
    borderBottomWidth: 2,
    marginBottom: 5,
    fontSize: 20,
    marginVertical: 40,
  },

  buttonContainer: {
    height: 70,
    backgroundColor: "#9234eb",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 30,
  },
  logInContainer: {
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  haveAccount: {
    fontSize: 15,
  },
  logIn: {
    fontSize: 20,
    color: "#9234eb",
  },
});
