/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
          "primary": "#D3A2A0",
                
          "secondary": "#A4C25F",
                
          "accent": "#D0CC9C",
                
          "neutral": "#DD973D",
                
          "base-100": "#F8F1F9",
                
          "info": "#976D4B",
                
          "success": "#D3D3D3",
                
          "warning": "#EF9606",
                
          "error": "#F15B83",
       },
    },
  ],
  plugins: [require("daisyui")],
}
