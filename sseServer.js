import { createServer } from "node:http";
import fs from "node:fs";

//Server Sent Event(SSE)
const server = createServer(async (req, res) => {
  let count = 0;
  //Events sending from server and count is being updating

  //   if (req.url === "/") {
  //     res.writeHead(200, {
  //       "content-type": "text/event-stream",
  //       "cache-control": "no-cache",
  //       connection: "alive",
  //     });
  //   }
  //   setInterval(() => {
  //     res.write(`data:The value of count is ${count++} \n`);
  //   }, 1000);

  if (req.url === "/") {
    const htmlPage = await fs.createReadStream("./stream.html");
    htmlPage.pipe(res);
  } else if (req.url === "/stream") {
    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connetion: "alive",
    });

    setInterval(() => {
      res.write(`data:The value of count is ${count++} \n`);
    }, 1000);
  }
});

server.listen(3001, () => {
  console.log("Server has been started");
});
