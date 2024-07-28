/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "70vh": "60vh",
      },
      colors: {
        "custom-c1": "#F7B36F",
        "custom-c2": "#85C585",
        "custom-c3": "#D88A96",
        "custom-c4": "#80C3C4",
        "custom-c5": "#A291B7",
        "custom-c6": "#7E5A81",
        "custom-c7": "#E9917D",
        "custom-c8": "#8DA5EB",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
        105: "1.05",
        110: "1.10",
        115: "1.15",
        120: "1.20",
      },
    },
  },
  plugins: [],
};
