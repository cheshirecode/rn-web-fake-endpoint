import React from "react";
import { Container, Subscribe } from "unstated";
import Navigation from "../components/Navigation";

class NavigationContainer extends Container {
  state = {
    active: ""
  };

  setActive = (active, callback) => this.setState({ active }, callback);
}

export default ({ ...props }) => (
  <Subscribe to={[NavigationContainer]}>
    {nav => <Navigation nav={nav} {...props} />}
  </Subscribe>
);
