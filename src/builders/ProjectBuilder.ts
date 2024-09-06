import { select, isCancel, text, note } from "@clack/prompts";
import chalk from "chalk";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

export type ProjectOptions = {
  eslint: boolean;
  tailwind: boolean;
  srcDirectory: boolean;
  appRouter: boolean;
  customAlias: boolean;
  aliasName?: string; // Optional alias if the user chooses to customize
};

export abstract class ProjectBuilder {
  protected pkgManager: string;
  protected framework: string;
  protected projectDir: string;

  constructor(pkgManager: string, framework: string) {
    this.pkgManager = pkgManager;
    this.framework = framework;
    this.projectDir = "";
  }

  abstract createProject(): Promise<void>;

  protected async promptDirectoryName(): Promise<void> {
    while (true) {
      const dirName = await text({
        message: "Enter the directory name where you want to create the project:",
        placeholder: "my-zesky-app",
      });

      if (isCancel(dirName)) {
        note(chalk.red("Cancelling"), "Please try again.");
        process.exit(0);
      }

      this.projectDir = path.join(process.cwd(), dirName as string);

      if (!fs.existsSync(this.projectDir)) {
        break; // Directory does not exist, proceed
      }

      note(chalk.red.bold(`Directory "${this.projectDir}" already exists. Please choose a different name.`));
    }
  }

  protected async ensureDirectory(): Promise<void> {
    if (fs.existsSync(this.projectDir)) {
      console.log(`Directory "${this.projectDir}" already exists and contains files that could conflict.`);
      process.exit(1);
    }
  }

  protected executeCommand(command: string, args: string[]): void {
    const process = spawn(command, args, {
      cwd: this.projectDir,
      stdio: "pipe",
    });

    process.on("error", (error) => {
      console.error(`Error executing command: ${error.message}`);
    });

    process.on("close", (code) => {
      if (code !== 0) {
        console.error(`Command exited with code ${code}`);
      } else {
        note(chalk.green.bold(`Project created successfully in ${this.projectDir}`));
      }
    });
  }

  protected createProjectDir(): void {
    if (!fs.existsSync(this.projectDir)) {
      fs.mkdirSync(this.projectDir, { recursive: true });
      note(chalk.rgb(0, 255, 0)(`Directory created at ${this.projectDir}`));
    }
  }

  protected async promptOption(message: string): Promise<boolean> {
    const option = await select({
      message,
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    });

    if (isCancel(option)) {
      note(chalk.red("Cancelling"), "Please try again.");
      process.exit(0);
    }

    return option as boolean;
  }
}
