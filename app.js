/**
 * CHIMP CAFÉ | APPLICATION LOGIC
 * High-performance static showcase with cafe background animation,
 * opening preloader, coffee fortunes, and botanical ambiance.
 */

// =============================================================================
// 1. MENU DATA
// =============================================================================
const MENU_ITEMS = [
  {
    id: "banana-foster-macchiato",
    name: "Banana Foster Macchiato",
    category: "espresso",
    price: 6.50,
    tags: ["signature", "vegan"],
    tagLabels: ["⭐ Signature", "🌿 Vegan Avail"],
    image: "images/latte.jpg",
    description: "House-roasted Guatemala espresso layered with caramelized banana puree, steamed oat milk microfoam, and spiced cinnamon dust."
  },
  {
    id: "sumatra-geisha-pour-over",
    name: "Sumatra Primate Geisha",
    category: "espresso",
    price: 7.50,
    tags: ["signature", "vegan", "gf"],
    tagLabels: ["⭐ Micro-Lot", "🌿 Vegan", "🌾 GF"],
    image: "images/latte.jpg",
    description: "Direct-trade rare shade-grown Geisha hand poured over Kalita Wave. Jasmine blossoms, crisp bergamot, and sweet stone fruit."
  },
  {
    id: "wild-nitro-cold-brew",
    name: "Wild Jungle Nitro Cold Brew",
    category: "espresso",
    price: 5.75,
    tags: ["vegan", "gf"],
    tagLabels: ["🌿 Vegan", "🌾 GF"],
    image: "images/latte.jpg",
    description: "20-hour cold-extracted single origin infused with pure nitrogen for a cascading creamy head. Served with fresh spearmint."
  },
  {
    id: "smoked-canopy-cortado",
    name: "Smoked Canopy Cortado",
    category: "espresso",
    price: 5.25,
    tags: ["gf"],
    tagLabels: ["🌾 GF", "1:1 Ratio"],
    image: "images/latte.jpg",
    description: "Equal parts intense double ristretto and silky textured milk with a gentle infusion of smoked bourbon-vanilla bean."
  },
  {
    id: "alpha-double-ristretto",
    name: "Alpha Primate Double Ristretto",
    category: "espresso",
    price: 4.50,
    tags: ["vegan", "gf"],
    tagLabels: ["⚡ High Octane", "🌿 Vegan"],
    image: "images/latte.jpg",
    description: "Short, ultra-dense extraction of our dark roast Sumatra & Ethiopian blend. Viscous, notes of dark cocoa and molasses."
  },
  {
    id: "forest-mist-matcha",
    name: "Forest Mist Matcha Latte",
    category: "elixirs",
    price: 6.25,
    tags: ["signature", "vegan", "gf"],
    tagLabels: ["⭐ Signature", "🌿 Vegan", "🌾 GF"],
    image: "images/latte.jpg",
    description: "Ceremonial first-harvest Uji matcha whisked with warm coconut-oat blend and sweetened with raw wild rainforest agave."
  },
  {
    id: "cascara-hibiscus-fizz",
    name: "Wild Hibiscus Cascara Fizz",
    category: "elixirs",
    price: 5.50,
    tags: ["vegan", "gf"],
    tagLabels: ["🌿 Vegan", "🌾 GF", "Sparkling"],
    image: "images/latte.jpg",
    description: "Upcycled coffee cherry cascara tea, steeped with organic hibiscus petals, sparkling tonic water, and a twist of Meyer lemon."
  },
  {
    id: "golden-baobab-chai",
    name: "Golden Baobab Canopy Chai",
    category: "elixirs",
    price: 6.00,
    tags: ["vegan", "gf"],
    tagLabels: ["🌿 Vegan", "Superfood"],
    image: "images/latte.jpg",
    description: "Slow-simmered cinnamon, ginger, cloves, and African baobab fruit pulp blended with creamy oat milk and golden turmeric."
  },
  {
    id: "iced-lavender-tonic",
    name: "Canopy Lavender Espresso Tonic",
    category: "elixirs",
    price: 5.75,
    tags: ["vegan", "gf"],
    tagLabels: ["🌿 Vegan", "Chilled"],
    image: "images/latte.jpg",
    description: "Artisanal Mediterranean tonic, house lavender blossom syrup, topped with floating double espresso and fresh rosemary sprig."
  },
  {
    id: "caramelized-banana-brioche",
    name: "Caramelized Banana Brioche",
    category: "bakery",
    price: 5.50,
    tags: ["signature"],
    tagLabels: ["⭐ Fresh Baked", "🍌 Signature"],
    image: "images/pastry.jpg",
    description: "Golden buttery brioche baked with caramelized banana foster swirl, toasted pecans, and raw honey drizzle."
  },
  {
    id: "dark-choco-banana-babka",
    name: "Dark Choco-Banana Babka",
    category: "bakery",
    price: 5.75,
    tags: ["signature"],
    tagLabels: ["⭐ House Classic"],
    image: "images/pastry.jpg",
    description: "Twisted sourdough babka with 70% single-origin Belgian chocolate ganache and ripe plantain ribbons."
  },
  {
    id: "primate-monkey-bread",
    name: "Monkey Bread Cinnamon Bites",
    category: "bakery",
    price: 4.75,
    tags: [],
    tagLabels: ["Warm & Sweet"],
    image: "images/pastry.jpg",
    description: "Bite-sized pull-apart brioche tossed in Saigon cinnamon and muscovado sugar, finished with salted caramel glaze."
  },
  {
    id: "normandy-butter-croissant",
    name: "Normandy Butter Croissant",
    category: "bakery",
    price: 4.25,
    tags: [],
    tagLabels: ["36 Layers"],
    image: "images/pastry.jpg",
    description: "Ultra-flaky hand-laminated croissant made with cultured French butter. Crispy exterior, airy honeycomb interior."
  },
  {
    id: "tropical-acai-canopy-bowl",
    name: "Tropical Canopy Acai Bowl",
    category: "brunch",
    price: 11.50,
    tags: ["signature", "vegan", "gf"],
    tagLabels: ["⭐ Signature", "🌿 Vegan", "🌾 GF"],
    image: "images/pastry.jpg",
    description: "Wild Amazonian acai blended thick, topped with sliced banana, dragonfruit cubes, chia seeds, cacao nibs, and coconut shavings."
  },
  {
    id: "avocado-sourdough",
    name: "Rainforest Avocado Sourdough",
    category: "brunch",
    price: 12.00,
    tags: ["vegan"],
    tagLabels: ["🌿 100% Plant-Based"],
    image: "images/pastry.jpg",
    description: "Thick slice of house country sourdough, crushed Hass avocado, watermelon radish, pickled shallots, pumpkin seed dukkah."
  },
  {
    id: "gorilla-truffle-scramble",
    name: "Gorilla Truffle Scramble",
    category: "brunch",
    price: 13.50,
    tags: ["gf"],
    tagLabels: ["🌾 GF Avail", "Chef Special"],
    image: "images/pastry.jpg",
    description: "Pasture-raised soft scrambled eggs, wild foraged shiitake & oyster mushrooms, black truffle oil, on toasted brioche."
  }
];

// =============================================================================
// 2. PRIMATE FORTUNES DATA
// =============================================================================
const FORTUNES = [
  {
    num: 12,
    quote: "A wise ape never rushes the pour-over: great things drip with patience and gentle temperature.",
    pairing: "Sumatra Primate Geisha"
  },
  {
    num: 27,
    quote: "He who shares the caramelized banana brioche makes friends in every tree.",
    pairing: "Warm Banana Brioche Loaf"
  },
  {
    num: 34,
    quote: "Life is far too short for burnt beans. Swing for the high canopy branches!",
    pairing: "Sumatra High-Canopy Micro-Lot"
  },
  {
    num: 45,
    quote: "Your energy today will be as bright and unstoppable as cold brew steeped on nitro.",
    pairing: "Wild Jungle Nitro Cold Brew"
  },
  {
    num: 58,
    quote: "The sweetest coffee cherries hang in the sunniest canopy. Go take that bold leap.",
    pairing: "Banana Foster Macchiato"
  },
  {
    num: 63,
    quote: "Curiosity is the true mother of flavor. Never stop tasting new botanical horizons.",
    pairing: "Wild Hibiscus Cascara Fizz"
  },
  {
    num: 79,
    quote: "When life feels tangled like jungle vines, sit quietly under a Monstera and sip slow.",
    pairing: "Forest Mist Matcha Latte"
  }
];

// =============================================================================
// 3. APPLICATION STATE
// =============================================================================
localStorage.removeItem("chimp_theme");
document.documentElement.removeAttribute("data-theme");

const state = {
  activeCategory: "all",
  searchQuery: "",
  activeDietFilter: null,
  soundPlaying: false
};

// =============================================================================
// 4. CAFE-BASED BACKGROUND ANIMATION (Floating Beans & Steam Wisps)
// =============================================================================
class CafeAtmosphereEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.beans = [];
    this.steamParticles = [];
    this.mouse = { x: -1000, y: -1000, active: false };
    this.animId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Mouse movement interaction for gentle breeze effect
    window.addEventListener("pointermove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    document.addEventListener("mouseleave", () => {
      this.mouse.active = false;
    });

    // Populate Floating Coffee Beans
    const beanCount = Math.floor(Math.min(window.innerWidth / 55, 24));
    for (let i = 0; i < beanCount; i++) {
      this.beans.push(this.createBean(true));
    }

    // Populate Rising Coffee Steam Wisps
    const steamCount = Math.floor(Math.min(window.innerWidth / 40, 32));
    for (let i = 0; i < steamCount; i++) {
      this.steamParticles.push(this.createSteam(true));
    }

    // Pause when page is hidden to preserve battery
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(this.animId);
      } else {
        this.render();
      }
    });

    this.render();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createBean(randomY = false) {
    const depth = 0.3 + Math.random() * 0.7; // 0.3 = distant/small, 1 = close
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 40,
      radiusX: (7 + Math.random() * 8) * depth,
      radiusY: (11 + Math.random() * 10) * depth,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.012,
      vy: -(0.25 + Math.random() * 0.45) * depth,
      vx: (Math.random() - 0.5) * 0.25,
      wobbleSpeed: 0.015 + Math.random() * 0.02,
      wobblePhase: Math.random() * Math.PI * 2,
      depth: depth,
      color: Math.random() > 0.4 ? "dark" : "amber"
    };
  }

  createSteam(randomY = false) {
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 20,
      radius: 12 + Math.random() * 22,
      maxRadius: 35 + Math.random() * 35,
      vy: -(0.4 + Math.random() * 0.6),
      vx: (Math.random() - 0.5) * 0.3,
      alpha: 0,
      maxAlpha: 0.06 + Math.random() * 0.1,
      life: 0,
      maxLife: 200 + Math.random() * 200
    };
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Render & Update Steam Particles
    for (let i = 0; i < this.steamParticles.length; i++) {
      const s = this.steamParticles[i];
      s.life++;
      s.y += s.vy;
      s.x += s.vx + Math.sin(s.life * 0.02) * 0.3;

      // Alpha curve: fades in then fades out
      const progress = s.life / s.maxLife;
      if (progress < 0.2) {
        s.alpha = (progress / 0.2) * s.maxAlpha;
      } else {
        s.alpha = (1 - (progress - 0.2) / 0.8) * s.maxAlpha;
      }
      s.radius += 0.08;

      if (s.life >= s.maxLife || s.y < -50) {
        this.steamParticles[i] = this.createSteam(false);
        continue;
      }

      // Draw soft ambient steam glow
      const grad = this.ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      grad.addColorStop(0, `rgba(224, 122, 43, ${s.alpha * 1.35})`);
      grad.addColorStop(0.5, `rgba(243, 181, 63, ${s.alpha * 0.65})`);
      grad.addColorStop(1, `rgba(224, 122, 43, 0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 2. Render & Update Floating Coffee Beans
    for (let i = 0; i < this.beans.length; i++) {
      const b = this.beans[i];

      // Natural gentle floating motion
      b.y += b.vy;
      b.x += b.vx + Math.sin(b.wobblePhase) * 0.25;
      b.wobblePhase += b.wobbleSpeed;
      b.angle += b.rotationSpeed;

      // Mouse interactive waft effect (subtle breeze)
      if (this.mouse.active) {
        const dx = b.x - this.mouse.x;
        const dy = b.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 0) {
          const force = (140 - dist) / 140 * 1.2;
          b.x += (dx / dist) * force;
          b.y += (dy / dist) * force;
        }
      }

      // Wrap around bounds
      if (b.y < -40) {
        this.beans[i] = this.createBean(false);
        continue;
      }
      if (b.x < -40) b.x = this.width + 30;
      if (b.x > this.width + 40) b.x = -30;

      // Draw Realistic Roasted Coffee Bean
      this.ctx.save();
      this.ctx.translate(b.x, b.y);
      this.ctx.rotate(b.angle);

      const baseAlpha = 0.22 + b.depth * 0.42;
      this.ctx.globalAlpha = baseAlpha;

      // Bean outer oval
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, b.radiusX, b.radiusY, 0, 0, Math.PI * 2);

      const beanGrad = this.ctx.createLinearGradient(-b.radiusX, -b.radiusY, b.radiusX, b.radiusY);
      if (b.color === "amber") {
        beanGrad.addColorStop(0, "#c96f26");
        beanGrad.addColorStop(0.5, "#522b16");
        beanGrad.addColorStop(1, "#261309");
      } else {
        beanGrad.addColorStop(0, "#884e2a");
        beanGrad.addColorStop(0.6, "#442212");
        beanGrad.addColorStop(1, "#1c0d06");
      }
      this.ctx.fillStyle = beanGrad;
      this.ctx.fill();

      // Subtle bean edge highlight
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "rgba(255, 235, 210, 0.35)";
      this.ctx.stroke();

      // Classic Coffee Bean Center Crease (curved furrow)
      this.ctx.beginPath();
      this.ctx.moveTo(0, -b.radiusY * 0.75);
      this.ctx.quadraticCurveTo(b.radiusX * 0.3, 0, 0, b.radiusY * 0.75);
      this.ctx.lineWidth = Math.max(1, b.depth * 1.8);
      this.ctx.strokeStyle = "rgba(25, 12, 6, 0.85)";
      this.ctx.stroke();

      this.ctx.restore();
    }

    this.animId = requestAnimationFrame(() => this.render());
  }
}

// =============================================================================
// 5. AMBIENT AUDIO SYNTHESIZER (Web Audio API)
// =============================================================================
class AmbientCafeAudio {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.gainNode = null;
    this.chimeInterval = null;
    this.isPlaying = false;
  }

  init() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    this.ctx = new AudioContext();
    return true;
  }

  start() {
    if (!this.ctx) {
      if (!this.init()) return;
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.11;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 820;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.16, this.ctx.currentTime + 1.5);

    this.noiseNode.connect(filter);
    filter.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.noiseNode.start();
    this.isPlaying = true;

    this.chimeInterval = setInterval(() => {
      if (!this.isPlaying) return;
      this.playGentleChime();
    }, 8500);
  }

  playGentleChime() {
    if (!this.ctx || this.ctx.state === "suspended") return;
    const osc = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();

    const notes = [587.33, 659.25, 783.99, 880.00];
    const freq = notes[Math.floor(Math.random() * notes.length)];

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    chimeGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.035, this.ctx.currentTime + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.2);

    osc.connect(chimeGain);
    chimeGain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 2.3);
  }

  stop() {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.7);
      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch (e) {}
        }
        if (this.chimeInterval) clearInterval(this.chimeInterval);
        this.isPlaying = false;
      }, 750);
    }
  }
}

const ambientAudio = new AmbientCafeAudio();

// =============================================================================
// 6. INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  new CafeAtmosphereEngine("cafeAtmosphereCanvas");
  initPreloader();
  initLiveHours();
  renderMenu();
  initMenuFilters();
  initFortuneCookie();
  initAmbientSound();
  initAccordions();
  initReviewModal();
  initNewsletter();
  initMobileNav();
});

// =============================================================================
// 7. CINEMATIC PRELOADER ANIMATION
// =============================================================================
function initPreloader() {
  const overlay = document.getElementById("preloaderOverlay");
  const fill = document.getElementById("preloaderBarFill");
  const pct = document.getElementById("preloaderPct");
  const msg = document.getElementById("preloaderStatusMsg");
  const skipBtn = document.getElementById("preloaderSkipBtn");
  const replayBtn = document.getElementById("replayIntroBtn");

  if (!overlay) return;

  const statusMessages = [
    { p: 15, text: "Harvesting wild shade-grown cherries..." },
    { p: 40, text: "Grinding micro-lot single origins..." },
    { p: 70, text: "Steaming banana nectar & silky oat foam..." },
    { p: 95, text: "Opening canopy glass conservatory..." },
    { p: 100, text: "Welcome to Chimp Café!" }
  ];

  let progress = 0;
  let interval = null;

  function runPreloader() {
    overlay.classList.remove("curtain-split", "fade-out");
    overlay.style.display = "flex";
    progress = 0;
    if (fill) fill.style.width = "0%";
    if (pct) pct.textContent = "0%";

    interval = setInterval(() => {
      progress += Math.floor(Math.random() * 5) + 3;
      if (progress > 100) progress = 100;

      if (fill) fill.style.width = `${progress}%`;
      if (pct) pct.textContent = `${progress}%`;

      const matched = statusMessages.find(m => progress <= m.p);
      if (matched && msg) msg.textContent = matched.text;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(dismissPreloader, 400);
      }
    }, 45);
  }

  function dismissPreloader() {
    if (interval) clearInterval(interval);
    overlay.classList.add("curtain-split");
    setTimeout(() => {
      overlay.classList.add("fade-out");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 600);
    }, 850);
  }

  if (skipBtn) skipBtn.addEventListener("click", dismissPreloader);
  if (replayBtn) replayBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    runPreloader();
  });

  runPreloader();
}

// =============================================================================
// 8. REAL-TIME CAFE HOURS
// =============================================================================
function initLiveHours() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const timeInDecimal = currentHour + currentMinutes / 60;

  let openTime = 7.0;
  let closeTime = 20.0;

  if (currentDay === 5) {
    closeTime = 21.5;
  } else if (currentDay === 6) {
    openTime = 7.5;
    closeTime = 21.5;
  } else if (currentDay === 0) {
    openTime = 7.5;
    closeTime = 20.0;
  }

  const isOpen = timeInDecimal >= openTime && timeInDecimal < closeTime;

  const headerStatus = document.getElementById("liveStatusBadge");
  if (headerStatus) {
    if (isOpen) {
      headerStatus.classList.add("open");
      headerStatus.classList.remove("closed");
      headerStatus.querySelector(".status-text").textContent = "Open Today until 8:00 PM";
    } else {
      headerStatus.classList.add("closed");
      headerStatus.classList.remove("open");
      headerStatus.querySelector(".status-text").textContent = "Closed Now • Opens 7:00 AM";
    }
  }

  const locationTag = document.getElementById("hoursLiveTag");
  if (locationTag) {
    if (isOpen) {
      locationTag.textContent = "OPEN NOW";
      locationTag.style.background = "var(--accent-sage-soft)";
      locationTag.style.color = "var(--accent-sage)";
    } else {
      locationTag.textContent = "CLOSED NOW";
      locationTag.style.background = "rgba(239, 68, 68, 0.15)";
      locationTag.style.color = "#ef4444";
    }
  }

  const rows = document.querySelectorAll("#weeklyHoursTable tr");
  rows.forEach(row => {
    if (parseInt(row.getAttribute("data-day")) === currentDay) {
      row.classList.add("today-highlight");
      const dayCell = row.querySelector("td:first-child");
      if (dayCell && !dayCell.querySelector(".badge-mini")) {
        dayCell.innerHTML += " <span class='badge-mini'>TODAY</span>";
      }
    }
  });
}

// =============================================================================
// 10. PRIMATE COFFEE FORTUNE COOKIE
// =============================================================================
function initFortuneCookie() {
  const cherryBtn = document.getElementById("cherryCrackerBtn");
  const hint = document.getElementById("fortuneClickHint");
  const card = document.getElementById("fortuneRevealCard");
  const quoteEl = document.getElementById("fortuneQuote");
  const numEl = document.getElementById("fortuneNum");
  const pairingEl = document.getElementById("fortunePairing");
  const crackAnotherBtn = document.getElementById("crackAnotherBtn");

  function crackCherry() {
    const random = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];

    if (numEl) numEl.textContent = random.num;
    if (quoteEl) quoteEl.textContent = `"${random.quote}"`;
    if (pairingEl) pairingEl.textContent = `Recommended Pairing: ${random.pairing}`;

    if (card) card.style.display = "block";
    if (hint) hint.style.display = "none";
    if (cherryBtn) {
      cherryBtn.style.transform = "scale(0.92)";
      setTimeout(() => { cherryBtn.style.transform = "scale(1)"; }, 200);
    }

    showToast("🍒 Coffee fortune unlocked!");
  }

  if (cherryBtn) cherryBtn.addEventListener("click", crackCherry);
  if (crackAnotherBtn) crackAnotherBtn.addEventListener("click", crackCherry);
}

// =============================================================================
// 11. MENU RENDERING & FILTERS
// =============================================================================
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("menuEmptyState");
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = state.activeCategory === "all" || item.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    const matchesDiet = !state.activeDietFilter || item.tags.includes(state.activeDietFilter);

    return matchesCat && matchesSearch && matchesDiet;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <div class="menu-card-image-wrap">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
        ${item.tags.includes("signature") ? `<span class="menu-badge-corner">Signature</span>` : ""}
        <span class="menu-card-price-tag">$${item.price.toFixed(2)}</span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3 class="menu-item-title">${item.name}</h3>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-item-tags">
          ${item.tagLabels.map(tag => `<span class="menu-tag-pill ${tag.includes('Vegan') ? 'vegan' : ''}">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function initMenuFilters() {
  const tabs = document.querySelectorAll(".category-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      state.activeCategory = tab.getAttribute("data-category");
      renderMenu();
    });
  });

  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = state.searchQuery ? "block" : "none";
      renderMenu();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearBtn.style.display = "none";
      renderMenu();
      searchInput.focus();
    });
  }

  const dietPills = document.querySelectorAll(".diet-filter-pill");
  dietPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const diet = pill.getAttribute("data-diet");
      if (state.activeDietFilter === diet) {
        state.activeDietFilter = null;
        pill.classList.remove("active");
      } else {
        dietPills.forEach(p => p.classList.remove("active"));
        state.activeDietFilter = diet;
        pill.classList.add("active");
      }
      renderMenu();
    });
  });

  const resetBtn = document.getElementById("resetMenuFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.activeCategory = "all";
      state.searchQuery = "";
      state.activeDietFilter = null;
      if (searchInput) searchInput.value = "";
      if (clearBtn) clearBtn.style.display = "none";
      tabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === "all"));
      dietPills.forEach(p => p.classList.remove("active"));
      renderMenu();
    });
  }
}

// =============================================================================
// 12. AMBIENT AUDIO BUTTON
// =============================================================================
function initAmbientSound() {
  const btn = document.getElementById("soundToggleBtn");
  const label = document.getElementById("soundStatusLabel");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (state.soundPlaying) {
      ambientAudio.stop();
      state.soundPlaying = false;
      btn.classList.remove("playing");
      if (label) label.textContent = "Canopy Mist Ambience: Off";
      showToast("Muted botanical ambience 🔇");
    } else {
      ambientAudio.start();
      state.soundPlaying = true;
      btn.classList.add("playing");
      if (label) label.textContent = "Canopy Mist Ambience: Playing";
      showToast("Playing tropical cafe soundscape 🎧🌿");
    }
  });
}

// =============================================================================
// 13. ACCORDIONS
// =============================================================================
function initAccordions() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector(".accordion-header")?.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// =============================================================================
// 14. USER REVIEWS MODAL
// =============================================================================
function initReviewModal() {
  const openBtn = document.getElementById("openReviewModalBtn");
  const modal = document.getElementById("reviewModal");
  const closeBtn = document.getElementById("closeReviewModalBtn");
  const form = document.getElementById("newReviewForm");
  const grid = document.getElementById("reviewsGrid");

  if (openBtn && modal) openBtn.addEventListener("click", () => modal.showModal());
  if (closeBtn && modal) closeBtn.addEventListener("click", () => modal.close());

  if (form && modal && grid) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("reviewAuthor").value;
      const ratingVal = parseInt(document.getElementById("reviewRating").value);
      const favorite = document.getElementById("reviewFavorite").value || "Sumatra Geisha";
      const comment = document.getElementById("reviewComment").value;
      const stars = "★".repeat(ratingVal) + "☆".repeat(5 - ratingVal);

      const newCard = document.createElement("div");
      newCard.className = "review-card warm-card";
      newCard.innerHTML = `
        <div class="review-header">
          <div class="reviewer-avatar">🐵</div>
          <div>
            <h4 class="reviewer-name">${author}</h4>
            <div class="reviewer-rating">${stars} <span class="review-time">Just now</span></div>
          </div>
        </div>
        <p class="review-text">"${comment}"</p>
        <span class="review-tag">Favorite: ${favorite}</span>
      `;

      grid.prepend(newCard);
      modal.close();
      form.reset();
      showToast("Thank you for reviewing Chimp Café! ⭐");
    });
  }
}

// =============================================================================
// 15. NEWSLETTER
// =============================================================================
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const successBox = document.getElementById("newsletterSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsEmail").value;
      if (successBox) {
        successBox.style.display = "block";
        successBox.innerHTML = `🎉 <strong>Welcome to the troop, ${email}!</strong> Voucher code <code>BANANABRIOCHEFREE</code> has been unlocked!`;
      }
      form.reset();
      showToast("Free pastry voucher sent to your inbox! 🥐");
    });
  }
}

// =============================================================================
// 16. MOBILE NAV
// =============================================================================
function initMobileNav() {
  const btn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileNavDrawer");
  const links = document.querySelectorAll(".mobile-link");

  if (btn && drawer) {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !isExpanded);
      drawer.classList.toggle("active");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        drawer.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }
}

// =============================================================================
// 17. TOAST NOTIFICATIONS
// =============================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
