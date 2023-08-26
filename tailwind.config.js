/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav_texture": "url('/assets/images/nav-texture.svg')",
        "home_header_bg": "url('/assets/images/header.jpg')",
        "secondary_header_bg": "url('/assets/images/advantages-bg.jpg')",
        "conferences_header_bg": "url('/assets/images/advantages-bg.jpg')",
        "divider_dots": "url('/assets/images/divider-dots.svg')",
        "contact_us": "url('/assets/images/contact-us.jpg')",
      },
      colors: {
        "transparent_brown": "#884A2CCC",
        "dark_brown": "#B5654B",
        "light_brown": "#D67229",
        "transparent_orange": "#D67229CC",
        "dark_beige": "#EBC284",
        "light_beige": "#FAF0E4",
        "light_blue": "#5AD4EF",
        "metal_gray": "#545454",
        "silver_gray": "#dde4ea",
        "off_white": "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
