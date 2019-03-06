# Sample codebase

# Task

See [a relative link](../task.md)

# Stack

- [React Native for Web])https://github.com/necolas/react-native-web] - very portable code that mostly works for Web and RN (which mean both iOS and Android).
- [RN Material UI])https://github.com/xotahal/react-native-material-ui/] - due to self-imposed time limit, component library'd add some shortcuts but I personally felt it'd take more time in the long run versus writing custom components based on building blocks like Tachyon and/or styled-components v4.
- [Unstated])https://github.com/jamiebuilds/unstated/tree/master/example] - Redux is alot of boilerplates, before adding _-saga_ or _-observable_. Rxjs is not quick to get to productivity. Unstated has just about the right kind of complexity and pattern.
- [Reach Router])https://reach.tech/router/] - lighter and modern version of React Router (same author)

# Notes

- Timebox of 4hrs.
- Keep things light and generic to stick with short iteration and multi-platform support.
- Aim is:
  - Demo-able codebase.
  - Easy to get started
  - Handle for Web first, then RN at a later time as CodeSandbox is meant for web developement and rapid prototyping.
  - Extendable modular codebase, able to replace Web-specific stuff like DOM Router with RN-specfic version like RN Navigation.
  - Functionality (CRUD, render, routin etc) over look and feel.

# Done?

- Base RN for Web setup with light code structure of dumb/smart component pattern.
- Routing
- User list READONLY
- Profile READONLY
- TODOs per user READONLY
  No posts nor photos nor POST/PUT yet.
