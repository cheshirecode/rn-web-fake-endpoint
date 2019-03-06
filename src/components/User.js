import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import ContactDetails from "./ContactDetails";
import Address from "../components/Address";
import { Link } from "@reach/router";
import Navigation from "../containers/Navigation";
import Layout from "./Layout";

export default class User extends Component {
  componentWillMount() {
    if (
      this.props.location.state &&
      this.props.location.state.isUserListLoaded &&
      this.props.users.users &&
      !!this.props.users.users.length //assume always there
    ) {
    } else {
      this.props.users.get();
    }
  }

  render() {
    const { id, name, phone, email, address, ...user } =
      this.props.users.getById(this.props.userId) || {};

    return (
      !!id && (
        <Layout userId={this.props.userId}>
          <View>
            {
              // <Link to="/">Back to list</Link>
            }
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                <Text>{name}</Text>
              </Text>
              <ContactDetails phone={phone} email={email} />
              <Address address={address} />
            </View>
          </View>
        </Layout>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width
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
    fontSize: "1.5rem"
    // textAlign: "left"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em"
    // textAlign: "center"
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
