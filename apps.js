// List your apps here. Add/edit/remove as needed.

const apps = [
  {
    name: "Sateesh Sketches",
    url: "https://www.sateeshsketches.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/270f.png",
    desc: "Sateesh Sketches."
  },
  {
    name: "Sateesh Sketches - Admin",
    url: "https://admin.sateeshsketches.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/270f.png",
    desc: "Sateesh Sketches - Admin"
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
    name: "Youtube Audio Extractor",
    url: "https://youtube-audio-extractor-d3cg.onrender.com/",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b0.png",
    desc: "Extract the audio file from YouTube videos."
  },
  {
    name: "TBD",
    url: "",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3c1.png",
    desc: ""
  },
  {
    name: "TBD",
    url: "",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f372.png",
    desc: ""
  },
  {
    name: "TBD",
    url: "",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4aa.png",
    desc: ""
  },
  {
    name: "TBD",
    url: "",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4d6.png",
    desc: ""
  },
  {
    name: "TBD",
    url: "",
    icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f5c3.png",
    desc: ""
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
