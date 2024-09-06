import { isCancel, note, text } from "@clack/prompts";
import { ProjectBuilder } from "./ProjectBuilder";
import chalk from "chalk";
import { spawn } from "child_process";

export class NextJsProjectBuilder extends ProjectBuilder {
  constructor(pkgManager: string, framework: string) {
    super(pkgManager, framework);
  }
  async createProject(): Promise<void> {
    await this.promptDirectoryName(); // Prompt for the directory name
    await this.ensureDirectory(); // Check if the directory already exists

    const options = {
      eslint: await this.promptOption("Do you use ESLint?"),
      tailwind: await this.promptOption("Do you use Tailwind?"),
      srcDirectory: await this.promptOption("Do you need a src directory?"),
      appRouter: await this.promptOption("Do you need an app router?"),
      customAlias: await this.promptOption("Would you like to customize the default import alias (@/*)?"),
    };

    let alias = "@/*"; // default alias
  if (options.customAlias) {
    alias = (await text({
      message: "Enter your preferred alias (default is @/*):",
      placeholder: "@/*",
      initialValue: "@/*",
    })) as string;

    if (isCancel(alias)) {
      note(chalk.red("Cancelling"), "Please try again.");
      process.exit(0); // Exit if the user cancels
    }
  }

    const args = ["create", "next-app", this.projectDir, "--ts"];

    args.push(options.eslint ? "--eslint" : "--no-eslint");
    args.push(options.tailwind ? "--tailwind" : "--no-tailwind");
    args.push(options.srcDirectory ? "--src-dir" : "--no-src-dir");
    args.push(options.appRouter ? "--app" : "--no-app");
    args.push(`--import-alias`, alias);

   await this.runCommand(this.pkgManager, args);
  }


  runCommand(pkgManager: string, args: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const process = spawn(pkgManager, args, { stdio: "pipe" });

      process.stdout.on("data", (data) => {
        const log = data.toString();
        this.customizeLog(log);
      });

      process.stderr.on("data", (data) => {
        const errorLog = data.toString();
        this.customizeLog(errorLog, true);
      });

      process.on("close", (code) => {
        if (code === 0) {
          note(chalk.green.bold("Project created successfully."));
          resolve();
        } else {
          console.log(chalk.red(`Process exited with code ${code}`));
          reject(new Error(`Process failed with code ${code}`));
        }
      });
    });
  }

  customizeLog(log: string, isError = false): void {
    if (isError) {
      console.error(chalk.red(`Error: ${log}`));
    } else {
      // Modify the log here as needed with color and formatting
      console.log(chalk.blue(`${log}`));
    }
  }
}
