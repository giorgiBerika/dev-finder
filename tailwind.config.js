/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Space Mono', 'sans-serif']
      },
      colors: {
          blueCommon: '#0079FF',
          greyFirst: '#697C9A',
          greySecond: '#F6F8FF',
          darkBlueFirst: '#4B6A9B',
          darkBlueSecond: '#1E2A47',
          blackFirst: '#2B3442',
          blackSecond: '#141D2F',
          whiteFirst: '#FEFEFE',
          whiteSecond: '#FFFFFF',
          btnHover: '#60ABFF',
          switcherHoverDark: '#222731'
      }
    },
  },
  plugins: [],
}

