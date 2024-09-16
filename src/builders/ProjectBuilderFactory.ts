import { NextJsProjectBuilder } from "./NextJsProjectBuilder.js";
import { ProjectBuilder } from "./ProjectBuilder.js";

export class ProjectBuilderFactory {
  static createProjectBuilder(pkgManager: string, framework: string): ProjectBuilder {
    switch (framework) {
      case "next":
        return new NextJsProjectBuilder(pkgManager, framework);
      // Add more cases here for other frameworks
      default:
        throw new Error("Unsupported framework");
    }
  }
}
