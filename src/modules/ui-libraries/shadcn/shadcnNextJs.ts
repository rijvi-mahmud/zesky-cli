import { CommandExecutor } from "../../../utils/lib/CommandExecutor.js";

export class ShadCnNextJs{
    async install(cwd: string): Promise<void> {
        CommandExecutor.execute('npx', [
            'shadcn@latest',
            'init',
            '-d'
        ], cwd);
    }
}