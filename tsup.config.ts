import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lib/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,

  tsconfig: 'tsconfig.build.json',
});
