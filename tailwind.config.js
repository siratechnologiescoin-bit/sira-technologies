/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        sira: {
          red: "#BE0014",
          "red-dark": "#8F0010",
          "red-light": "#D90429",

          gold: "#D4AF37",
          "gold-dark": "#A47D16",
          "gold-light": "#F2D675",

          black: "#050505",
          dark: "#111111",

          gray: "#666666",
          light: "#F8F8F8",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },

      boxShadow: {
        sira: "0 10px 35px rgba(0, 0, 0, 0.10)",
        "sira-lg": "0 20px 60px rgba(0, 0, 0, 0.15)",
        gold: "0 10px 35px rgba(212, 175, 55, 0.20)",
      },

      borderRadius: {
        sira: "10px",
      },
    },
  },

  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],

//   theme: {
//     extend: {
//       colors: {
//         sira: {
//           red: "#B00020",
//           "red-dark": "#780014",
//           "red-light": "#D90429",

//           gold: "#D4AF37",
//           "gold-dark": "#A47D16",
//           "gold-light": "#F2D675",

//           black: "#080808",
//           dark: "#111111",
//           gray: "#666666",
//           light: "#F8F8F8",
//         },
//       },

//       fontFamily: {
//         sans: [
//           "Inter",
//           "ui-sans-serif",
//           "system-ui",
//           "sans-serif",
//         ],
//       },

//       boxShadow: {
//         sira: "0 10px 35px rgba(0, 0, 0, 0.10)",
//         "sira-lg": "0 20px 60px rgba(0, 0, 0, 0.15)",
//         gold: "0 10px 35px rgba(212, 175, 55, 0.20)",
//       },

//       borderRadius: {
//         sira: "10px",
//       },
//     },
//   },

//   plugins: [],
// };

