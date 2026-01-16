/// <reference types="vite/client" />

// Augment `import.meta.env` with project-specific env vars.
// Add any VITE_* variables you use here so TypeScript knows their types.
interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY?: string;
  // add other VITE_ variables below, for example:
  // readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
