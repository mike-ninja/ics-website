/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   satoshi: ['Satoshi', 'sans-serif'],
      //   inter: ['Inter', 'sans-serif'],
      // },
      backgroundImage: {
        "nav_texture": "url('/assets/images/nav-texture.svg')",
        "header_bg": "url('/assets/images/header-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'transparent_brown': '#884A2CCC',
        'dark_brown': '#884A2C',
        'light_brown': '#D66C36',
        'dark_beige': '#E7B66C',
        'light_beige': '#FFF0D3',
        'blood_red': '#F53333',
      },
      screens: {
        'tablet': '640px',
        'latop': '1024px',
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
};
