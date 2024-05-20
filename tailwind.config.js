/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e4e4e4",
          "300": "#dbdbdb",
        },
        gray: "#fafafa",
        lightgray: "#ccc",
        dimgray: {
          "100": "#717171",
          "200": "#656565",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
