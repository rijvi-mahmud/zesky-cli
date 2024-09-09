import { spawn } from "node:child_process";
import chalk from "chalk";
import { note } from "@clack/prompts";

export class CommandExecutor {
  static execute(command: string, args: string[], cwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const process = spawn(command, args, {
        cwd,
        stdio: "inherit",
      });

      process.on("error", (error) => {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
      });

      process.on("close", (code) => {
        if (code !== 0) {
          console.error(`Command exited with code ${code}`);
          reject(new Error(`Command failed with exit code ${code}`));
        } else {
          note(chalk.green.bold(`Command executed successfully in ${cwd}`));
          resolve();
        }
      });
    });
  }
}
