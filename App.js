import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import SignUpScreen from "./signUpScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    marginHorizontal: 40,
  },
});
