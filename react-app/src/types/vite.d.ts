// Mock Vite types to resolve TypeScript errors until real dependencies are installed
declare module 'vite' {
  interface UserConfig {
    plugins?: any[];
    build?: any;
    server?: any;
    preview?: any;
    base?: string;
    [key: string]: any;
  }
  
  export function defineConfig(config: UserConfig | (() => UserConfig)): UserConfig;
}

declare module '@vitejs/plugin-react' {
  interface ReactPluginOptions {
    include?: string | RegExp | (string | RegExp)[];
    exclude?: string | RegExp | (string | RegExp)[];
    jsxImportSource?: string;
    jsxRuntime?: 'automatic' | 'classic';
    [key: string]: any;
  }
  
  function react(options?: ReactPluginOptions): any;
  export default react;
}

declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    [key: string]: any;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}