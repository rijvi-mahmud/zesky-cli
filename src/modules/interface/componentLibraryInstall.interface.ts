export interface ComponentLibraryInstall {
    install(framework: string, cwd: string): Promise<void>;
}