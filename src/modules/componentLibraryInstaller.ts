import { ComponentLibraryInstall } from "./interface/componentLibraryInstall.interface.js";
import { ShadCnInstaller } from "./ui-libraries/shadcn/shadcn.js";

class ComponentLibraryInstaller implements ComponentLibraryInstall {
    install(framework: string, cwd: string): Promise<void> {
        switch (framework) {
            case "next":
                return new ShadCnInstaller().installNextjs(cwd);
            case "react":
                return new ShadCnInstaller().installReact();
            default:
                throw new Error("Unsupported framework");
        }
    }
}

export { ComponentLibraryInstaller }