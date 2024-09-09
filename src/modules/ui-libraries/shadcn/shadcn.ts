import { UILibrariesInstall } from "../uiLibraries.interface";
import { ShadCnNextJs } from "./shadcnNextJs";


class ShadCnInstaller implements UILibrariesInstall {
    installReact(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async installNextjs(cwd: string): Promise<void> {
       return await new ShadCnNextJs().install(cwd);
    }
}


export { ShadCnInstaller }