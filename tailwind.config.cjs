/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      tn: "400px",
      sm: "450px",
      md: "700px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.5rem",
      "4xl": "3.441rem",
      "5xl": "5rem",
      "6xl": "5.8rem",
    },
    extend: {
      height: {
        1000: "1000px",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeindown: "fadeindown 1s ease-out forwards",
        fadeinleft: "fadeinleft 1s ease-out forwards",
        fadeinright: "fadeinright 1s ease-out forwards",
        scaleintopleft: "scaleintopleft 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeindown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeinleft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeinright: {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [
    require("tailwindcss-elevation")(["responsive"]),
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin"),
  ],
};
