module.exports = {
    plugins: [
      require('tailwindcss')('./style.css'), // Adjust the file path here
      require('autoprefixer'),
      // ... other plugins
    ]
  }
  
  @tailwind base;
@tailwind components;
@tailwind utilities;