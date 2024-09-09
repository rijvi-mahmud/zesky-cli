import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
import { isCancel, note, text } from "@clack/prompts";

// Utility class for directory handling
export class DirectoryHandler {
    static getFullPath(dirName: string): string {
      return path.join(process.cwd(), dirName);
    }
  
    static createDirectory(dirPath: string): void {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        note(chalk.rgb(0, 255, 0)(`Directory created at ${dirPath}`));
      }
    }
  
    static ensureNonExistingDirectory(dirPath: string): void {
      if (fs.existsSync(dirPath)) {
        console.error(`Directory "${dirPath}" already exists and contains files that could conflict.`);
        process.exit(1);
      }
    }
  
    static async promptDirectoryName(): Promise<string> {
      while (true) {
        const dirName = await text({
          message: "Enter the directory name where you want to create the project:",
          placeholder: "my-zesky-app",
        });
  
        if (isCancel(dirName)) {
          note(chalk.red("Cancelling"), "Please try again.");
          process.exit(0);
        }
  
        const projectDir = this.getFullPath(dirName as string);
  
        if (!fs.existsSync(projectDir)) {
          return projectDir;
        }
  
        note(chalk.red.bold(`Directory "${projectDir}" already exists. Please choose a different name.`));
      }
    }
  }
  