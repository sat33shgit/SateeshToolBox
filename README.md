# Sateesh's Tool Box

A static single-page application that serves as a personal app launcher. This page hosts links to all the apps I'm developing, making it easy to access them from one central location.

## Features

- Clean, mobile-responsive design with white background
- Grid layout displaying apps with icons, names, and descriptions
- Easy to update by editing the `apps.js` file
- Static content (no database required)
- Hosted on GitHub Pages for easy access and maintenance

## How to Add New Apps

Edit the `apps.js` file and add new app objects to the `apps` array:

```javascript
{
  name: "Your App Name",
  url: "https://your-app-url.com",
  icon: "path/to/icon.png", // or emoji URL
  desc: "Short description of your app"
}
```

## Live Demo

Visit: https://sat33shgit.github.io/SateeshToolBox/

## Tech Stack

- HTML5
- CSS3 (with mobile-first responsive design)
- Vanilla JavaScript
- GitHub Pages for hosting
