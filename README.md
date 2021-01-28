# Graph QL Reference

> This repository is a direct build of a tutorial by [NetNinja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg), put on github for personal reference.

## Live Demo
[https://lead-rune-cord.glitch.me/](https://lead-rune-cord.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/graphql-example-ref-netninja.git
$ cd graphql-example-ref-netninja
$ npm run install-server
$ npm run install-client
```

## Scripts
| script | command | action
|--------|---------|----------|
start | npm run server-start | runs the server for production
install-server | cd server && npm i | installs server dependencies
install-client | cd client && npm i | installs client development environment dependencies
client-dev | cd client && npm run start | runs the client development environment
client-build | cd client && npm run build | creates a client build
server-dev | cd server && npm run dev | starts the server with auto restart for development
server-start | cd server && npm run start | starts the server
deploy | cp -r client/build server/ | moves the current client build to the server
build | npm run client-build && npm run deploy | creates a build and deploys to the server
dev | concurrently "npm run server-dev" "npm run client-dev" | runs the server in development mode and the clietn development environment