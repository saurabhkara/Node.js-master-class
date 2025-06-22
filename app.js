// Common Js Module System
// const greetings = require("./greetings");

//ESM
import greetings from "./greetings.js";

const name = process.argv[2];

const hours = new Date().getHours();

// console.log(greetings(hours), name);

// Inbuild Modules

// import os from "node:os";

// console.log("CPUs", os.cpus().length); // Number CPUs
// console.log("Total Memory", os.totalmem() / (1024 * 1024 * 1024)); // Memory in GB
// console.log("Free memory", os.freemem() / (1024 * 1024)); // Memory in MB
// console.log("Up time", os.uptime() / (60 * 60)); // Time in Hours
// console.log("Host", os.hostname());
// console.log("Architecture", os.arch());
