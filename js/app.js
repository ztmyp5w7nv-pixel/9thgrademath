/**
 * 9. SINIF MATEMATİK AKADEMİSİ - ANA UYGULAMA MOTORU
 * Hesap Sistemi Gerektirmez (Sıfır Giriş, Yerel Depolama)
 */

window.App = {
  state: {
    userName: "9. Sınıf Öğrencisi",
    avatar: "🎓",
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().slice(0, 10),
    soundEnabled: true,
    solvedQuestionIds: [],
    wrongQuestionIds: [],
    bookmarkedQuestionIds: [],
    knownFlashcardIds: [],
    reviewFlashcardIds: [],
    unlockedBadges: ["ilk_adim"],
    activeView: "home",
    selectedUnitFilter: "all"
  },

  init() {
    this.loadState();
    this.checkDailyStreak();
    this.initAudio();
    this.bindEvents();
    this.renderHeaderStats();
    this.renderHomeOverview();
    
    // Alt modülleri başlat
    if (window.QuizModule) window.QuizModule.init();
    if (window.FlashcardsModule) window.FlashcardsModule.init();
    if (window.GamesModule) window.GamesModule.init();
    if (window.InteractiveModule) window.InteractiveModule.init();

    // KaTeX ilk render
    this.renderMath();
  },

  loadState() {
    try {
      const saved = localStorage.getItem("matematik9_state");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn("LocalStorage yüklenirken hata:", e);
    }
  },

  saveState() {
    try {
      localStorage.setItem("matematik9_state", JSON.stringify(this.state));
    } catch (e) {
      console.warn("LocalStorage kaydedilirken hata:", e);
    }
  },

  checkDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (this.state.lastActiveDate !== today) {
      const last = new Date(this.state.lastActiveDate);
      const now = new Date(today);
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        this.state.streak += 1;
      } else if (diffDays > 1) {
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
      this.saveState();
    }
  },

  // Web Audio API ile tatlı ses efektleri (Harici dosya gerektirmez!)
  initAudio() {
    this.audioCtx = null;
    const unlockAudio = () => {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("click", unlockAudio);
    };
    document.addEventListener("touchstart", unlockAudio, { once: true });
    document.addEventListener("click", unlockAudio, { once: true });
  },

  playSound(type) {
    if (!this.state.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === "correct") {
        // Çan/Coin sesi (523Hz -> 659Hz -> 784Hz)
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "wrong") {
        // Hata tonu
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "boss_hit") {
        // Vuruş/Patlama tonu
        osc.type = "triangle";
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "level_up") {
        // Zafer Fanfarı
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        osc.frequency.setValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch (e) {
      // Ses desteklenmiyorsa sessizce geç
    }
  },

  // Konfeti Kutlaması (Canvas Confetti kütüphanesi)
  celebrate() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  },

  addXP(amount) {
    this.state.xp += amount;
    const oldLevel = this.state.level;
    this.state.level = Math.floor(this.state.xp / 100) + 1;
    
    if (this.state.level > oldLevel) {
      this.playSound("level_up");
      this.celebrate();
      this.showToast(`🎉 TEBRİKLER! Seviye ${this.state.level}'e yükseldin!`);
    }
    this.checkBadges();
    this.saveState();
    this.renderHeaderStats();
  },

  checkBadges() {
    const b = this.state.unlockedBadges;
    if (this.state.solvedQuestionIds.length >= 1 && !b.includes("ilk_cozum")) {
      b.push("ilk_cozum");
      this.showToast("🏅 Yeni Rozet: İlk Soru Çözüldü!");
    }
    if (this.state.solvedQuestionIds.length >= 25 && !b.includes("soru_25")) {
      b.push("soru_25");
      this.showToast("🏅 Yeni Rozet: 25 Soru Ustası!");
    }
    if (this.state.solvedQuestionIds.length >= 100 && !b.includes("soru_100")) {
      b.push("soru_100");
      this.showToast("🏅 Yeni Rozet: 100 Soru Canavarı!");
    }
    if (this.state.knownFlashcardIds.length >= 20 && !b.includes("kart_20")) {
      b.push("kart_20");
      this.showToast("🏅 Yeni Rozet: 20 Kart Ezberlendi!");
    }
    // Üslü sayı rozeti
    const usluCount = this.state.solvedQuestionIds.filter(id => {
      const q = (window.QUESTIONS_DATA || []).find(item => item.id === id);
      return q && q.unitId === "uslu_sayilar";
    }).length;
    if (usluCount >= 15 && !b.includes("uslerin_efendisi")) {
      b.push("uslerin_efendisi");
      this.showToast("⚡ Yeni Rozet: Üslerin Efendisi!");
    }
  },

  showToast(msg) {
    const el = document.getElementById("toast-msg");
    if (!el) return;
    el.textContent = msg;
    el.style.display = "block";
    el.style.opacity = "1";
    setTimeout(() => {
      el.style.opacity = "0";
      setTimeout(() => el.style.display = "none", 300);
    }, 2800);
  },

  bindEvents() {
    // Navigasyon Menüsü
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const view = btn.dataset.view;
        if (view) this.switchView(view);
      });
    });

    // Ses Aç/Kapa Butonu
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        this.state.soundEnabled = !this.state.soundEnabled;
        soundBtn.textContent = this.state.soundEnabled ? "🔊" : "🔇";
        this.saveState();
      });
    }

    // Logo Tıklama (Ana Sayfaya Dönüş)
    const logoArea = document.querySelector(".logo-area");
    if (logoArea) {
      logoArea.addEventListener("click", () => this.switchView("home"));
    }
  },

  switchView(viewName) {
    this.state.activeView = viewName;
    
    // Navigasyon butonlarını güncelle
    document.querySelectorAll(".nav-item").forEach(b => {
      b.classList.toggle("active", b.dataset.view === viewName);
    });

    // Sayfa bölümlerini göster/gizle
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });
    
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Sayfaya özel tetikleyiciler
    if (viewName === "home") this.renderHomeOverview();
    if (viewName === "topics") this.renderTopicsList();
    if (viewName === "quiz" && window.QuizModule) window.QuizModule.render();
    if (viewName === "cards" && window.FlashcardsModule) window.FlashcardsModule.render();
    if (viewName === "games" && window.GamesModule) window.GamesModule.render();
    if (viewName === "profile") this.renderProfileView();

    this.renderMath();
  },

  renderHeaderStats() {
    const xpEl = document.getElementById("header-xp");
    const streakEl = document.getElementById("header-streak");
    if (xpEl) xpEl.textContent = `${this.state.xp} XP`;
    if (streakEl) streakEl.textContent = `${this.state.streak} Gün`;
  },

  renderHomeOverview() {
    this.renderHeaderStats();
    
    // Seviye İlerleme Çubuğu
    const levelEl = document.getElementById("home-level-title");
    const levelBar = document.getElementById("home-level-fill");
    const xpDesc = document.getElementById("home-level-desc");
    
    const currentLvlXP = (this.state.xp % 100);
    const progressPercent = Math.min(100, currentLvlXP);
    
    if (levelEl) levelEl.textContent = `Seviye ${this.state.level}: ${this.getLevelTitle(this.state.level)}`;
    if (levelBar) levelBar.style.width = `${progressPercent}%`;
    if (xpDesc) xpDesc.textContent = `${currentLvlXP} / 100 XP (Sonraki Seviyeye ${100 - currentLvlXP} XP)`;

    // İstatistik Sayacı
    const solvedCount = document.getElementById("home-stat-solved");
    const wrongCount = document.getElementById("home-stat-wrong");
    const cardCount = document.getElementById("home-stat-cards");
    
    if (solvedCount) solvedCount.textContent = `${this.state.solvedQuestionIds.length} / ${window.QUESTIONS_DATA ? window.QUESTIONS_DATA.length : 269}`;
    if (wrongCount) wrongCount.textContent = `${this.state.wrongQuestionIds.length}`;
    if (cardCount) cardCount.textContent = `${this.state.knownFlashcardIds.length} / 105`;

    // Ana Sayfadaki Ünite Listesi
    const unitsContainer = document.getElementById("home-units-list");
    if (unitsContainer && window.TOPICS_DATA) {
      unitsContainer.innerHTML = window.TOPICS_DATA.map(unit => {
        const isFeatured = unit.id === "uslu_sayilar";
        return `
          <div class="unit-card ${isFeatured ? 'featured' : ''}" onclick="App.openTopic('${unit.id}')">
            <div class="unit-info">
              <div class="unit-badge-icon" style="background: ${unit.color}15; color: ${unit.color};">
                ${isFeatured ? '⚡' : '📚'}
              </div>
              <div class="unit-details">
                <div style="display:flex; align-items:center; gap:6px;">
                  <h3>${unit.title}</h3>
                  ${isFeatured ? '<span class="meta-pill" style="background:#ecfdf5; color:#059669; border-color:#a7f3d0;">⭐ Özel Odak</span>' : ''}
                </div>
                <p>${unit.description}</p>
                <div class="unit-meta">
                  <span class="meta-pill">${unit.sections ? unit.sections.length : 3} Ders</span>
                  <span class="meta-pill">${unit.id === 'uslu_sayilar' ? '35 Soru' : '26 Soru'}</span>
                  ${unit.simulator ? '<span class="meta-pill" style="color:var(--primary); background:var(--primary-light);">🔬 Simülatör</span>' : ''}
                </div>
              </div>
            </div>
            <span style="font-size:1.2rem; color:var(--text-light);">➔</span>
          </div>
        `;
      }).join("");
    }
  },

  getLevelTitle(lvl) {
    const titles = [
      "Çırak Matematikçi",
      "Kümeler Kaşifi",
      "Mantık Dedektifi",
      "Bölünebilme Uzmanı",
      "Denklem Çözücü",
      "Mutlak Değer Ustası",
      "Üslerin Efendisi ⚡",
      "Köklü Sayı Simyacısı",
      "Orantı Mimarı",
      "Pisagor Şövalyesi 📐",
      "İstatistik Bilgesi",
      "Maarif Modeli Şampiyonu",
      "Altın Çözüm Lideri",
      "Antigravity Ordinaryüsü"
    ];
    return titles[Math.min(lvl - 1, titles.length - 1)];
  },

  openTopic(topicId) {
    this.switchView("topics");
    const el = document.getElementById(`topic-detail-${topicId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("highlight");
      setTimeout(() => el.classList.remove("highlight"), 1500);
    }
  },

  renderTopicsList() {
    const container = document.getElementById("topics-view-container");
    if (!container || !window.TOPICS_DATA) return;

    container.innerHTML = window.TOPICS_DATA.map(t => {
      const isUslu = t.id === "uslu_sayilar";
      const sectionsHtml = t.sections.map(s => `
        <div class="card" style="margin-bottom: 12px; border-left: 4px solid ${t.color};">
          <h4 style="font-size:1rem; font-weight:800; color:${t.color}; margin-bottom:8px;">${s.title}</h4>
          <div style="font-size:0.92rem; color:var(--text-main); line-height:1.6; margin-bottom:12px;">
            ${s.content.replace(/\n/g, '<br>')}
          </div>
          ${s.goldenRule ? `
            <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:10px 14px; margin-bottom:8px; font-size:0.84rem; color:#065f46;">
              <strong>💡 Altın Kural:</strong> ${s.goldenRule}
            </div>
          ` : ''}
          ${s.pitfall ? `
            <div style="background:#fff1f2; border:1px solid #fecdd3; border-radius:8px; padding:10px 14px; margin-bottom:8px; font-size:0.84rem; color:#9f1239;">
              <strong>⚠️ Sınav Tuzağı:</strong> ${s.pitfall}
            </div>
          ` : ''}
          ${s.example ? `
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px 14px; font-size:0.84rem; color:#334155;">
              <strong>📝 Örnek Soru & Çözüm:</strong> ${s.example}
            </div>
          ` : ''}
        </div>
      `).join("");

      return `
        <div id="topic-detail-${t.id}" class="topic-section-card card" style="margin-bottom: 24px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:40px; height:40px; border-radius:12px; background:${t.color}20; color:${t.color}; display:flex; align-items:center; justify-content:center; font-size:1.3rem;">
                ${isUslu ? '⚡' : '📖'}
              </div>
              <div>
                <h2 style="font-size:1.2rem; font-weight:800;">${t.title}</h2>
                <span style="font-size:0.75rem; color:var(--text-muted);">${t.badge}</span>
              </div>
            </div>
            <div style="display:flex; gap:8px;">
              ${t.simulator ? `
                <button class="btn-secondary" style="font-size:0.75rem; padding:6px 12px;" onclick="InteractiveModule.openSimulator('${t.simulator}')">
                  🔬 Deney Masası
                </button>
              ` : ''}
              <button class="btn-primary" style="font-size:0.75rem; padding:6px 12px;" onclick="QuizModule.startUnitQuiz('${t.id}')">
                ⚡ Soruları Çöz
              </button>
            </div>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:16px;">${t.description}</p>
          <div class="sections-accordion">
            ${sectionsHtml}
          </div>
        </div>
      `;
    }).join("");

    this.renderMath();
  },

  renderProfileView() {
    const totalQ = (window.QUESTIONS_DATA || []).length;
    const solved = this.state.solvedQuestionIds.length;
    const wrong = this.state.wrongQuestionIds.length;
    const rate = solved > 0 ? Math.round(((solved - wrong) / solved) * 100) : 100;

    const statsContainer = document.getElementById("profile-stats-container");
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="stat-box">
          <div class="stat-value">${this.state.xp}</div>
          <div class="stat-title">Toplam XP</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Sv. ${this.state.level}</div>
          <div class="stat-title">${this.getLevelTitle(this.state.level)}</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${solved} / ${totalQ}</div>
          <div class="stat-title">Çözülen Soru</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">%${Math.max(0, rate)}</div>
          <div class="stat-title">Başarı Oranı</div>
        </div>
      `;
    }

    // Rozetleri göster
    const badgeContainer = document.getElementById("profile-badges-container");
    if (badgeContainer) {
      const allBadges = [
        { id: "ilk_adim", name: "İlk Adım", icon: "🌱", desc: "Uygulamaya hoş geldin!" },
        { id: "ilk_cozum", name: "İlk Başarı", icon: "🎯", desc: "İlk matematik sorunu çözdün." },
        { id: "soru_25", name: "Soru Ustası", icon: "🔥", desc: "25 soru tamamladın." },
        { id: "uslerin_efendisi", name: "Üslerin Efendisi", icon: "⚡", desc: "15 üslü sayı sorusu çözdün." },
        { id: "kart_20", name: "Hafıza Şampiyonu", icon: "🃏", desc: "20 bilgi kartı ezberledin." },
        { id: "soru_100", name: "Yenilmez 100'lük", icon: "👑", desc: "100 soruyu devirdin." }
      ];

      badgeContainer.innerHTML = allBadges.map(b => {
        const isUnlocked = this.state.unlockedBadges.includes(b.id);
        return `
          <div class="badge-item ${isUnlocked ? '' : 'locked'}">
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${b.name}</div>
            <div style="font-size:0.68rem; color:var(--text-muted); margin-top:2px;">${b.desc}</div>
          </div>
        `;
      }).join("");
    }
  },

  // LaTeX Render Tetikleyici (KaTeX Auto-render)
  renderMath() {
    if (typeof renderMathInElement === "function") {
      setTimeout(() => {
        renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      }, 50);
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  window.App.init();
});
