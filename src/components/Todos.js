import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import { Avatar, Card, ListItem, Checkbox } from "react-native-material-ui";
import { Link } from "@reach/router";
import Layout from "./Layout";

export default class Todos extends Component {
  componentWillMount() {
    this.props.todos.get();
    this.props.users.get(); //TODO - to optimize
  }

  render() {
    const todos = this.props.userId
      ? this.props.todos.state.todos.filter(
          t => t.userId === ~~this.props.userId
        )
      : this.props.todos.state.todos;
    let user;
    if (this.props.userId) {
      user = this.props.users.getById(this.props.userId);
    }
    console.log(user);
    return (
      <Layout userId={this.props.userId}>
        <View style={styles.container}>
          {user ? (
            <View style={styles.header}>
              <Text style={styles.title}>{user.name}</Text>
            </View>
          ) : null}

          {todos.map(({ title, completed }, id) => (
            <Card key={id} style={styles.card}>
              <ListItem
                style={styles.item}
                leftElement={<Text>{id}</Text>}
                centerElement={{
                  primaryText: title
                }}
                rightElement={<Checkbox value="agree" checked={completed} />}
              />
            </Card>
          ))}
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});
