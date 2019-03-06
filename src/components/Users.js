import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import { Avatar, Card, ListItem } from "react-native-material-ui";
import { Link } from "@reach/router";
import shorternName from "../services/shortenName";
export default class Users extends Component {
  componentWillMount = () => {
    this.props.users.get();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Fake social network</Text>
          <Text style={styles.text}>Click on avatar to go to user page</Text>
        </View>
        <View style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          {this.props.users.state.users.map(
            ({
              id,
              name,
              phone,
              email,
              address,
              shortName = shorternName(name),
              ...user
            }) => (
              <Card key={id} style={styles.card}>
                <ListItem
                  style={styles.item}
                  leftElement={
                    <Link to="/user/1" state={{ isUserListLoaded: true }}>
                      <Avatar text={shortName} />
                    </Link>
                  }
                  centerElement={{
                    primaryText: name
                  }}
                />
              </Card>
            )
          )
          // console.log(this.props.users.state)
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  card: {
    width: Dimensions.get("window").width / 2
  },
  // item: {
  //   centerElementContainer: {
  //     backgroundColor: "red",
  //     color: "blue",
  //     width: 200,
  //     padding: 5
  //   }
  // },
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20,
    flex: 1
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
  },
  link: {
    color: "#1B95E0"
  },
  content: {},
  footer: {
    flex: 1
  }
});
