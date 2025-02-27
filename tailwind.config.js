import { join } from 'path';

export default {
  content: [
    join('./src/**/*.{js,ts,jsx,tsx}'),
    join('./index.html'),
  ],
 theme: {
    extend: {
      colors: {
        black: '#000', 
        white: '#fff',
        primary: '#713FFF',
        dark: '#003087',
        
      },
    },
  },
  plugins: [],
};
