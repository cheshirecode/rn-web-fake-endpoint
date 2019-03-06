import React from "react";
import { Subscribe } from "unstated";
import UsersContainer from "./UsersContainer";
import Navigation from "./Navigation";
import Users from "../components/Users";

export default () => (
  <Subscribe to={[UsersContainer]}>
    {users => <Users users={users} />}
  </Subscribe>
);
