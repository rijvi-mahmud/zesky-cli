import { select, isCancel, note } from "@clack/prompts";
import chalk from "chalk";

// Utility class for prompting user options
export class Prompter {
    static async promptOption(message: string): Promise<boolean> {
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