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
