## Node.js

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser — typically on the server side.

Key features of Node.js

- Built on Chrome's V8 engine
- Non-blocking I/O and asynchronous programming
- Single-threaded but highly scalable
- Cross-platform

### Node Version

```
node -v
```

```
node --version
```

### REPL - READ EVAL PRINT LOOP

- To enter into interactive Shell or command line, Just fire this command in cmd `node`

### Run Node.js file

- fire this command `node file_name.js`

### Process

`process` is a global object in Node.js that provides information about the current Node.js process.

```
console.log(process);
```

`argv` stands for argument vector — it's an array containing the command-line arguments passed when you launch the Node.js process.

```
console.log(process.argv)
```

### Moduele

A module is simply a file in Node.js.
It allows you to organize your code into reusable pieces.

Module are categories based on creator:

- User defined Modules
- InBuild Modules
- Third Parties modules (packages)

Modules are categories based on system:

- CommonJS module(Old)
- ESM (ES6 Module system)

CommonJS

```
module.exports = greetings;

const greetings = require(./greetings)
```

ESM - ES Modules

```
export default greetings;

import greetings from "./greetings.js";
```

Inbuilt Module

```
import os from "node:os";

console.log("CPUs", os.cpus().length); // Number CPUs
console.log("Total Memory", os.totalmem() / (1024 * 1024 * 1024)); // Memory in GB
console.log("Free memory", os.freemem() / (1024 * 1024)); // Memory in MB
console.log("Up time", os.uptime() / (60 * 60)); // Time in Hours
console.log("Host", os.hostname());
console.log("Architecture", os.arch());
```

### Project on monitering system and memory usage using inbuild module(OS) and third party

- Please check `moniter.js` file
- To run this project hit this command `node moniter.js` in cmd

![alt text](<Screenshot (299).png>)

### Synchronous and blocking code

Synchronous execution usually uses to code executing in sequence and the program is executed line by line, one line at a time. When a function is called, the program execution waits until that function returns before continuing to the next line of code.

### Asynchronous and non-blocking code

Asynchronous execution applies to execution that doesn’t run in the sequence it appears in the code. The program doesn’t wait for the task to complete and can move on to the next task.

### File system in Node.js

- Create File
- Update File
- Get File Detail
- Create Folder
- Delete Files
- Write file
- Appending data into file
- Folder removal

- check `fs.js` file for above operation

### Project File manager

This project is about file management using interactive command line prompt
User can perform following operations using cmd

- Folder can created using cmd
- File can created using cmd
- File content can updated
- Files can be deleted using cmd
- Folders can be deleted using cmd

`node:fs`, `node:path` and `chalk` modules used in this project.

![alt text](<Screenshot (301).png>)

### HTTP Server and Streaming

When sending data from server to client, it is recomended to use stream mechanism

- Run this `server.js` file to see api created using `Node.js`
- GET and POST both methods are created for expense tracker
