import { execSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = resolve(__dirname, '../src/styles/full.scss');
const outputPath = resolve(__dirname, '../dist/shadcn-uikit-full.css');
const configPath = resolve(__dirname, '../tailwind.config.full.js');

try {
  // Use Tailwind CLI to build with full config (no content scanning via config file)
  execSync(
    `pnpm exec tailwindcss -c ${configPath} -i ${inputPath} -o ${outputPath} --minify`,
    { stdio: 'inherit' }
  );
  console.log('✓ Generated full unpurged CSS bundle');
} catch (error) {
  console.error('Error generating full CSS:', error);
  process.exit(1);
}
