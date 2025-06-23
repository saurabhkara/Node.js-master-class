import * as fs from "node:fs";
import * as fsp from "node:fs/promises";

function createFile(pathFileName) {
  //Synchronous
  //   fs.writeFileSync(pathFileName, "Hello Node js! \n");
  //   fs.appendFileSync(pathFileName, "Hello JavaScript!");

  //Asynchronous and non-blocking
  //Error first callback

  //File Creation writting file first time
  fs.writeFile(pathFileName, "Hello NodeJs! \n", (err) => {
    if (err) {
      console.log("Something went wrong while creating file!");
    } else {
      console.log("File has been created asynchronously !");

      //Once file created and written then append text
      fs.appendFile(pathFileName, "Hello JavaScript!\n", (err) => {
        if (err) {
          console.log("Something went wrong while writting file");
        } else {
          console.log("File written successfully");
        }
      });
    }
  });

  console.log("File has been created");
}

// createFile("./hello.txt");

//Promise-based operations

async function createFileUsingPromises(filePathName) {
  try {
    await fsp.writeFile(filePathName, "Hello JavaScript! \n");
    await fsp.appendFile(filePathName, "Hello NodeJs \n");
    console.log("File created successfully");
  } catch (error) {
    console.log("Something went wrong");
  }
}

// createFileUsingPromises("./helloPromise.txt");

async function createFileWithContent(filePath, content = "") {
  try {
    await fsp.writeFile(filePath, content);
    console.log("File created Successfully");
  } catch (error) {
    console.log("Something went Wrong", error);
  }
}

// createFileWithContent("./graph.txt", "Hello Graph");

//Create folder and recursive folders too
async function createFolder(folderPath) {
  try {
    await fsp.mkdir(folderPath, { recursive: true });
  } catch (error) {
    console.log("Error occured while creating folder");
  }
}

// createFolder("content/image");

//Read File content
async function readFile(filePath) {
  try {
    const content = await fsp.readFile(filePath, "utf-8");
    console.log("Content of file :", content);
  } catch (error) {
    console.log("Error occurred", error);
  }
}

// readFile("./graph.txt");

//Delete file
async function deleteFile(filePathName) {
  try {
    await fsp.unlink(filePathName);
  } catch (error) {
    console.log("Error occurred", error);
  }
}

// deleteFile("./graph.txt");

// Remove Folder and recursive folders too

async function deleteFolder(folderPath) {
  try {
    await fsp.rm(folderPath, { recursive: true });
    console.log("Folder removed");
  } catch (error) {
    console.log("Error", error);
  }
}

// deleteFolder("./content");

async function getFileInfo(filePathName) {
  try {
    const data = await fsp.stat(filePathName);
    return {
      size: `${(data.size / 1024).toFixed(2)}`,
      createdAt: data.birthtime.toLocaleString(),
      modified: data.mtime.toLocaleString(),
    };
  } catch (error) {
    console.log("error", error);
  }
}
// getFileInfo("./README.md").then((data) => {
//   console.log("file detail", data);
// });
