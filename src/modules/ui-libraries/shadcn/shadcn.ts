import { UILibrariesInstall } from "../uiLibraries.interface.js";
import { ShadCnNextJs } from "./shadcnNextJs.js";


class ShadCnInstaller implements UILibrariesInstall {
    installReact(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async installNextjs(cwd: string): Promise<void> {
       return await new ShadCnNextJs().install(cwd);
    }
}


export { ShadCnInstaller }