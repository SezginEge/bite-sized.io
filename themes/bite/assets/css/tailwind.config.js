module.exports = {
  purge: {
    enabled: true,
    content: ["layouts/**/*.html", "themes/bite/layouts/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
