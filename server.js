import { createServer } from "node:http";
import fsp from "node:fs/promises";
import fs from "node:fs";

const server = createServer(async (req, res) => {
  console.log("Request received");

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    // const data = await fsp.readFile("./index.html");
    // res.end(data);

    const streamData = fs.createReadStream("./index.html");
    // streamData.on("data", (chunk) => {
    //   res.write(chunk);
    // });

    // streamData.on("end", () => {
    //   res.end();
    // });
    streamData.pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>This is your about page</h1>");
  } else if (req.url === "/expense") {
    if (req.method === "POST") {
      // read data from request
      let buff = "";
      req.on("data", (chunk) => {
        console.log(chunk);
        buff = buff + chunk.toString();
      });

      req.on("end", async () => {
        //Read the json file(db.json)
        const data = await fsp.readFile("./db.json");
        //convert into JS and push new data into parsed data
        const dbData = JSON.parse(data);
        dbData.push(JSON.parse(buff));

        //write this data into file
        await fsp.writeFile("./db.json", JSON.stringify(dbData, null, 2));

        res.end("OK");
      });

      // Store it on database
      console.log("Requesed post method");
    } else if (req.method === "GET") {
      // Read data from json
      const data = await fsp.readFile("./db.json");

      // return the data to client
      res.end(data);
    }
  }
});

server.listen(3000, () => {
  console.log("Server started listing at 3000 port");
});
