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
        "divider_dots": "url('/assets/images/divider-dots.svg')",
        "contact_us": "url('/assets/images/contact-us.jpg')",
      },
      colors: {
        'transparent_brown': '#884A2CCC',
        'dark_brown': '#884A2C',
        'light_brown': '#D66C36',
        'dark_beige': '#E7B66C',
        // 'light_beige': '#FFF0D3',
        'light_beige': '#FAF0E4',
        'blood_red': '#F53333',
        'light_blue': '#5AD4EF',
        'metal_gray': '#545454',
      },
    },
  },
  plugins: [],
};
