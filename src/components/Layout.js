import React from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text } from "react-native";

import Navigation from "../containers/Navigation";

export default ({ children, ...props }) => (
  <View style={styles.container}>
    <ScrollView style={styles.content}>{children}</ScrollView>
    <View style={styles.footer}>
      <Navigation {...props} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
    // marginVertical: "1em",
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  name: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  content: {},
  footer: {
    flex: 1
  }
});
