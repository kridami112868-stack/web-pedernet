import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './layouts/**/*.{html,js,ts,jsx,tsx,mdx}',
    './pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{html,js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
 plugins: [nextui()],
}
