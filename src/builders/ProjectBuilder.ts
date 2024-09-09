import { DirectoryHandler } from "../utils/lib/DirectoryHandler";
import { CommandExecutor } from "../utils/lib/CommandExecutor";
import { Prompter } from "../utils/lib/Prompter";

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

  protected async initializeProjectDirectory(): Promise<void> {
    // Prompt for the project directory name
    this.projectDir = await DirectoryHandler.promptDirectoryName();
    DirectoryHandler.ensureNonExistingDirectory(this.projectDir);
    DirectoryHandler.createDirectory(this.projectDir);
  }

  protected executeCommand(command: string, args: string[]): void {
    console.log(command, args, this.projectDir);
    CommandExecutor.execute(command, args, this.projectDir);
  }

  protected async promptOption(message: string): Promise<boolean> {
    return await Prompter.promptOption(message);
  }
}
