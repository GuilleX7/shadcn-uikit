import preset from './tailwind.preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    '../demo-app/src/**/*.{js,jsx,ts,tsx,vue}', // Include demo-app for dev mode
  ],
};
