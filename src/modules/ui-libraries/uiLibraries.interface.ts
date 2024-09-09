export interface UILibrariesInstall {
   installReact(): Promise<void>;
   installNextjs(cwd: string): Promise<void>;
}