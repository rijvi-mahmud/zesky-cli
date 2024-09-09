import { CommandExecutor } from "../../../utils/lib/CommandExecutor";

export class ShadCnNextJs{
    async install(cwd: string): Promise<void> {
        CommandExecutor.execute('npx', [
            'shadcn@latest',
            'init',
            '-d'
        ], cwd);
    }
}