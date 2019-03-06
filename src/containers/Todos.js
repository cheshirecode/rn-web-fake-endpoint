import React from "react";
import { Container, Subscribe } from "unstated";
import { get, getById } from "../services/todos";
import Todos from "../components/Todos";
import UsersContainer from "./UsersContainer";

class TodosContainer extends Container {
  state = {
    todos: [],
    todosById: {}
  };

  get = async () => {
    const todos = await get();
    this.setState({ todos });
  };

  getById = async userId => {
    const todos = await getById(userId);

    this.setState({
      todosById: {
        ...this.state.todosById,
        [userId]: todos
      }
    });
  };

  filterByUserId = userId =>
    this.state.todos.filter(todo => todo.userId === userId);
}

export default ({ ...props }) => (
  <Subscribe to={[UsersContainer, TodosContainer]}>
    {(users, todos) => <Todos users={users} todos={todos} {...props} />}
  </Subscribe>
);
