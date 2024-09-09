import { ComponentLibraryInstall } from "./interface/componentLibraryInstall.interface";
import { ShadCnInstaller } from "./ui-libraries/shadcn/shadcn";

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