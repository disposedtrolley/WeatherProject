import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Forecast = props => (
  <View style={styles.container}>
    <Text style={styles.bigText}>{props.main}</Text>
    <Text style={styles.mainText}>Current conditions: {props.description}</Text>
    <Text style={styles.bigText}>{props.temp}°F</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast;
