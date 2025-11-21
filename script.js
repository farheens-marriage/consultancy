// === Dark/Light Mode with Persistence ===
const toggle = document.getElementById("modeToggle");
const body = document.body;

// Apply saved mode on page load
const savedMode = localStorage.getItem('mode');
if(savedMode){
  body.classList.add(savedMode);
  if(toggle) toggle.textContent = savedMode === 'dark' ? '🌙' : '🌞';
} else {
  body.classList.add('light'); // default
  if(toggle) toggle.textContent = '🌞';
}

// Toggle mode and save preference
if(toggle){
  toggle.addEventListener("click", () => {
    if(body.classList.contains("light")){
      body.classList.replace("light","dark");
      toggle.textContent = "🌙";
      localStorage.setItem('mode','dark');
    } else {
      body.classList.replace("dark","light");
      toggle.textContent = "🌞";
      localStorage.setItem('mode','light');
    }
  });
}

// === Scroll Animations ===
const scrollElements = document.querySelectorAll('.scroll-left, .scroll-right, .step, .card, .feature-card');

const elementInView = (el, offset = 100) => {
  return el.getBoundingClientRect().top <= window.innerHeight - offset;
}

const displayScrollElement = (el) => {
  el.classList.add('show');
}

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if(elementInView(el, 150)) displayScrollElement(el);
  });
}

// Initial call + event listener
handleScrollAnimation();
window.addEventListener('scroll', handleScrollAnimation);

// === Optional Rotating Tagline on Home Page ===
const textEl = document.getElementById("changingText");
if(textEl){
  const phrases = ["Elegant Connections","Trusted Guidance","Compatible Partners"];
  let index = 0;
  setInterval(() => {
    index = (index+1) % phrases.length;
    textEl.textContent = phrases[index];
  }, 2500);
}
