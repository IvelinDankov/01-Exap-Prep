### SOFT UNI EXAM PREPARATION

1. Initialize project

- [x] Init npm project `npm init -y`
- [x] Setup Dev Script
- [x] Add start file `src/index.js`
- [x] Config Debugging - `{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "DEBUG Watch",
      "program": "${workspaceFolder}/src/index.js",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "runtimeArgs": ["--watch"]
    }
  ]
}`
- [x] Install express `npm i express`
- [x] Init express server
- [x] Add public resources
- [ ] Setup static folder
- [ ] Add body parser middleware
- [ ] Set up routes file
- [ ] Add home controller
