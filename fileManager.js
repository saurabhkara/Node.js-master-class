import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import fs from "node:fs/promises";
import chalk from "chalk";
import path from "node:path";

const r1 = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function menu() {
  console.log(chalk.blue.bold("\n📂  File manager \n"));
  const options = [
    "Create Folder",
    "Create File",
    "Write File",
    "Delete File",
    "Delete Folder",
    "List Items",
    "Exit",
  ];

  options.forEach((opt, index) => {
    return console.log(
      chalk.yellow(`${index + 1}`) + chalk.white.bold(` ${opt}`)
    );
  });

  const ans = await r1.question(chalk.cyan("\nSelect Option : "));

  switch (ans) {
    case "1": {
      const option = await r1.question(
        chalk.cyan("Enter folder path and name: ")
      );
      await createFolder(option);
      console.log(chalk.green("✔ Folder has been created"));
      break;
    }
    case "2": {
      const filePath = await r1.question(
        chalk.cyan("Enter file path, name with extension : ")
      );
      const content = await r1.question(
        chalk.cyan("Enter the content of file : ")
      );
      await createFile(filePath, content);
      console.log(chalk.green.bold("✔ File Created"));
      break;
    }
    case "3": {
      const filePath = await r1.question(
        chalk.cyan("Enter file path, name with extension ")
      );
      const content = await r1.question(
        chalk.cyan("Enter the content of file : ")
      );
      await appendFileContent(filePath, content);
      console.log(chalk.green.bold("✔ File content added"));
      break;
    }
    case "4": {
      const filePath = await r1.question(
        chalk.cyan("Enter file path, name with extension ")
      );
      await deleteFile(filePath);
      console.log(chalk.green.bold("✔ File deleted "));
      break;
    }
    case "5": {
      const folderPath = await r1.question(
        chalk.cyan("Enter Folder path, name with extension ")
      );
      await deleteFolder(folderPath);
      console.log(chalk.green.bold("✔ Folder deleted "));
      break;
    }
    case "6": {
      const listPath = await r1.question(chalk.cyan("enter folder path"));
      const listItemsData = await getListItems(listPath);
      console.log(chalk.blue("Content of folder"));
      listItemsData.forEach((item) => {
        const isFolder = item.type === "folder" ? "📂" : "📄";
        return console.log(chalk.yellow(`${isFolder} ${item.fileName}`));
      });

      break;
    }
    case "7": {
      r1.close();
      return;
    }
    default:
      console.log(chalk.red.bold("❌ Wrong, Please select correct option "));
      break;
  }

  await r1.question(chalk.cyan("Please ENTER to continue..."));
  menu();
}

menu();

async function createFolder(folderPathName) {
  try {
    await fs.mkdir(folderPathName, { recursive: true });
  } catch (error) {
    console.log("Something went wrong");
  }
}

async function createFile(filePath, content = "") {
  try {
    fs.writeFile(filePath, content);
  } catch (error) {
    console.log("Error occured", error);
  }
}

async function appendFileContent(filePath, content) {
  try {
    await fs.appendFile(filePath, `\n${content}`);
  } catch (error) {
    console.log("Error occurred");
  }
}

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.log("Error occured");
  }
}

async function deleteFolder(folderPathName) {
  try {
    await fs.rm(folderPathName, { recursive: true });
  } catch (error) {
    console.log("Error occurred");
  }
}

async function getListItems(listPath = "./") {
  try {
    const list = await fs.readdir(listPath, { withFileTypes: true });
    return list.map((item) => {
      return {
        fileName: item.name,
        type: item.isDirectory() ? "folder" : "file",
        path: path.join(import.meta.dirname, item.name),
      };
    });
  } catch (error) {
    console.log("Error occured while reading directory", error);
  }
}
