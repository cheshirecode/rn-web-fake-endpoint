import "unfetch/polyfill";
export const get = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json()
  );
