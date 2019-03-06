import React from "react";
import { Subscribe } from "unstated";
import UsersContainer from "./UsersContainer";
// import NavigationContainer from "./Navigation";
import User from "../components/User";

export default ({ ...props }) => (
  <Subscribe to={[UsersContainer]}>
    {users => <User users={users} {...props} />}
  </Subscribe>
);
