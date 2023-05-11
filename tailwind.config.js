/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212B36",
        secondary: "#637381",
        imagesBG: "#919EAB",
        headerBtn: "#40C7F4",
      },
      borderColor: {
        "gray-secondary": "rgba(22, 28, 36, 0.1)",
        myTransparent: "#000",
        btnBlue: "#40C7F4",
        btnOrange: "#F89F28",
        btnGreen: "#4EC0A5",
        btnRed: "#F16A82",
      },

      gridTemplateColumns: {
        "3-480px": "repeat(3, minmax(0, 480px))",
      },
    },
    screens: {
      // "2xl": { max: "1535px" },
      // xl: { max: "1279px" },
      // lg: { max: "1023px" },
      // md: { max: "767px" },
      // sm: { max: "639px" },
    },
  },
  plugins: [],
};
