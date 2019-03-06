import "unfetch/polyfill";
export const get = async () =>
  await fetch("https://jsonplaceholder.typicode.com/todos").then(response =>
    response.json()
  );
export const getById = async userId =>
  await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`).then(
    response => response.json()
  );
