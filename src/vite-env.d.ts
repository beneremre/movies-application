/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly OMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
