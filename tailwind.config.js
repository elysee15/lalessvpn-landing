module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(239, 68, 68, 0.9), 0 10px 10px -5px rgba(239, 68, 68, 0.9)'
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
