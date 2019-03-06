import React, { Component } from "react";
import { BottomNavigation } from "react-native-material-ui";
import { navigate } from "@reach/router";
export default class Navigation extends Component {
  navigate = (route, extraParams) => () => {
    this.props.nav.setActive(route, () => {
      navigate(`${route}${extraParams ? `/${extraParams}` : ""}`);
    });
  };
  render() {
    return (
      <BottomNavigation active={this.props.nav.state.active} hidden={false}>
        <BottomNavigation.Action
          key="/"
          icon="list"
          label="List"
          onPress={this.navigate("/")}
        />
        <BottomNavigation.Action
          key="/user"
          icon="person-outline"
          label="Profile"
          onPress={this.navigate("/user", this.props.userId)}
        />
        <BottomNavigation.Action
          key="/todos"
          icon="note"
          label="TODOs"
          onPress={this.navigate("/todos", this.props.userId)}
        />
      </BottomNavigation>
    );
  }
}
