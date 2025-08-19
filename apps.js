// List your apps here. Add/edit/remove as needed.

const apps = [
  {
    name: "Task Manager",
    url: "https://todoist.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4cb.png",
    desc: "Organize and track your daily tasks."
  },
  {
    name: "Notes App",
    url: "https://keep.google.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4dd.png",
    desc: "Quickly jot down notes and ideas."
  },
  {
    name: "Weather Watch",
    url: "https://weather.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2600.png",
    desc: "Check the latest weather updates."
  },
  {
    name: "Finance Tracker",
    url: "https://mint.intuit.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b0.png",
    desc: "Monitor your expenses and savings."
  },
  {
    name: "Habit Builder",
    url: "https://habitica.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3c1.png",
    desc: "Build and maintain good habits."
  },
  {
    name: "Recipe Book",
    url: "https://allrecipes.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f372.png",
    desc: "Find and save your favorite recipes."
  },
  {
    name: "Workout Log",
    url: "https://www.myfitnesspal.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4aa.png",
    desc: "Track your workouts and progress."
  },
  {
    name: "Book Tracker",
    url: "https://www.goodreads.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4d6.png",
    desc: "Keep a list of books you want to read."
  },
  {
    name: "Project Planner",
    url: "https://trello.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f5c3.png",
    desc: "Plan and manage your projects visually."
  }
];

function renderApps() {
  const grid = document.getElementById('app-grid');
  grid.innerHTML = '';
  apps.forEach(app => {
    const card = document.createElement('a');
    card.className = 'app-card app-link';
    card.href = app.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <img class="app-icon" src="${app.icon || 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c1.png'}" alt="${app.name} icon" onerror="this.src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c1.png'">
      <div class="app-name">${app.name}</div>
      <div class="app-desc">${app.desc}</div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderApps);
