import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Provider } from "unstated";
import Users from "./containers/Users";
import User from "./containers/User";
import Todos from "./containers/Todos";
//specifically for web. for RN part, split Reach router code into .web portion
import { Router } from "@reach/router";

const App = () => (
  <ScrollView style={styles.app}>
    <Provider>
      <Router>
        <Users path="/" />
        <User path="/user/:userId" />
        <Todos path="/todos/:userId" />
      </Router>
    </Provider>
  </ScrollView>
);

export default App;
const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto"
  }
});
