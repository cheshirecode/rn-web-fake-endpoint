import { Container, Subscribe } from "unstated";
import { get } from "../services/users";

export default class UsersContainer extends Container {
  state = {
    users: [],
    currentUser: {}
  };

  get = async () => {
    const users = await get();
    this.setState({ users });
  };

  setCurrentUser = userId =>
    this.setState({ currentUser: this.getById(userId) });

  //route param is string, need to cast to int to match with ID
  getById = userId => this.state.users.find(u => u.id === ~~userId);
}
