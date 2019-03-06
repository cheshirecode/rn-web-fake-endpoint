export default s =>
  s
    .split(" ")
    .map(s => s.substr(0, 1))
    .join("");
