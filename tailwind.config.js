export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 25px 0px rgba(0, 0, 0, 0.1)', 
      },
    },
  },
  plugins: [],
};
