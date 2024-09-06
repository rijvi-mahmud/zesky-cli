import { select, isCancel, intro, note } from "@clack/prompts";
import { PKG_MANAGER } from "../types/constant";
import { ProjectBuilderFactory } from "../builders/ProjectBuilderFactory";

import chalk from "chalk";

intro(chalk.green.bold("Welcome to Zesky!"));

async function main(): Promise<void> {
  const pkgManager = await select({
    message: "What package manager do you use?",
    options: [
      { label: PKG_MANAGER.NPM, value: PKG_MANAGER.NPM },
      { label: PKG_MANAGER.YARN, value: PKG_MANAGER.YARN },
      { label: PKG_MANAGER.PNPM, value: PKG_MANAGER.PNPM },
    ],
  }) as string;

  if (isCancel(pkgManager)) {
    note(chalk.red("Cancelling"), "Please try again.");
    return;
  }

  const framework = await select({
    message: "Which framework do you use?",
    options: [
      // { label: "React", value: "react" },
      // { label: "Vue", value: "vue" },
      // { label: "Angular", value: "angular" },
      // { label: "Svelte", value: "svelte" },
      { label: "Next", value: "next" },
      // { label: "NodeJs + Typescript", value: "node" },
    ],
  }) as string;

  if (isCancel(framework)) {
    note(chalk.red("Cancelling"), "Please try again.");
    return;
  }

  const projectBuilder = ProjectBuilderFactory.createProjectBuilder(pkgManager, framework);
  await projectBuilder.createProject();
}

main();