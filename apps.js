// List your apps here. Add/edit/remove as needed.

const apps = [
  {
    name: "Sateesh Sketch Book",
    url: "https://sateesh-sketch-book.vercel.app/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/270f.png",
    desc: "Sateesh's Sketch Book."
  },
  {
    name: "Receipt Scanner",
    url: "https://receipt-scanner-ai.streamlit.app/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png",
    desc: "App to scan the receipts and show few details."
  },
  {
    name: "Audio to Text Convertor",
    url: "https://huggingface.co/spaces/SateeshAIWorld/audio-to-text-converter",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f399.png",
    desc: "Audio to text convertor hosted on hugging face."
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
