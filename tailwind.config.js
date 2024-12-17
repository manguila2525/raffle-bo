import { join } from 'path';

export default {
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './index.html'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
