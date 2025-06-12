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

2. Express

- [x] Install express `npm i express`
- [x] Init express server
- [x] Add public resources
- [x] Setup static folder
- [x] Add body parser middleware `urlencoded`
- [x] Set up routes file
- [x] Add home controller

3. Handlebars

- [x] install handlebars `npm i express-handlebars`
- [x] set up view engine
- [x] change view directory
- [x] config file extentions
- [x] set up static
- [x] add layout
- [x] add partial dir
- [x] config handlebars to read mongoose documents `handlebars.engine({
  extname: "hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
})`

4. Database

- [x] install mongoose `npm i mongoose`
- [x] set up url mongoose
- [x] try to connect use dbname
- [x] add schema & model
- [x] set up db connection error handling

5.
