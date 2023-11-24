module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_72": "#00000072", "900_3f": "#0000003f" },
        light_blue: { A400: "#00c9ff" },
        gray: { 900: "#0e1320" },
        blue_gray: { 700: "#445b74", 900: "#202d42" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 0px 4px  4px 0px #0000003f",
      },
      fontFamily: { poppins: "Poppins" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      backgroundImage: { gradient: "radial-gradient(#00000072,#00000072)" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
