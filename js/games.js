/**
 * 9. SINIF MATEMATİK AKADEMİSİ - OYUN ARENASI (BOSS SAVAŞI & HIZLI SORU AVCISI)
 */

window.GamesModule = {
  activeGame: null, // 'boss' | 'speed' | null
  
  // Boss Savaşı Durumu
  bossState: {
    selectedBoss: null,
    bossHp: 100,
    playerHp: 100,
    currentQuestion: null,
    questionPool: []
  },

  // Hızlı Maraton Durumu
  speedState: {
    timeLeft: 60,
    timerId: null,
    score: 0,
    combo: 0,
    currentQuestion: null
  },

  bossList: [
    { id: "uslu_sayilar", name: "Eksponansiyal Ejderhası", avatar: "🐉", unit: "Üslü Sayılar", hp: 100, desc: "Üslerin gücünü kullanıyor! Üslü sayı sorularını çözerek onu alt et." },
    { id: "mantik", name: "Çelişki Golemi", avatar: "🗿", unit: "Mantık", hp: 100, desc: "Totoloji ve doğruluk değerlerini karıştırmaya çalışıyor." },
    { id: "kumeler", name: "Venn Şeytanı", avatar: "🔮", unit: "Kümeler", hp: 100, desc: "Kesişim ve birleşimlerin karanlığından besleniyor." },
    { id: "mutlak_deger", name: "Mutlak Değer Aynası", avatar: "🪞", unit: "Mutlak Değer", hp: 100, desc: "Her şeyi pozitife çeviriyor, dikkatli hamle yap!" },
    { id: "ucgenler", name: "Pisagor Titanı", avatar: "⚡", unit: "Üçgenler", hp: 100, desc: "Hipotenüs ve dik açılarla saldırıyor." }
  ],

  init() {},

  render() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    if (this.activeGame === "boss") {
      this.renderBossBattle();
    } else if (this.activeGame === "speed") {
      this.renderSpeedHunt();
    } else {
      this.renderGameLobby();
    }
  },

  renderGameLobby() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    const bossCardsHtml = this.bossList.map(b => `
      <div class="card" style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:2.4rem;">${b.avatar}</div>
          <div>
            <h4 style="font-size:1rem; font-weight:800; color:var(--text-main);">${b.name}</h4>
            <span class="meta-pill" style="color:var(--primary); background:var(--primary-light);">${b.unit}</span>
            <p style="font-size:0.78rem; color:var(--text-muted); margin-top:4px;">${b.desc}</p>
          </div>
        </div>
        <button class="btn-primary" style="font-size:0.8rem; padding:8px 14px; flex-shrink:0;" onclick="GamesModule.startBossBattle('${b.id}')">
          Savaş ⚔️
        </button>
      </div>
    `).join("");

    container.innerHTML = `
      <!-- Oyun Başlığı -->
      <div style="margin-bottom:20px;">
        <h2 style="font-size:1.3rem; font-weight:800; color:var(--text-main);">🎮 Matematik Oyun Arenası</h2>
        <p style="font-size:0.85rem; color:var(--text-muted);">Eğlenerek öğren: Boss savaşlarında canavarları yen, maratonda rekor kır!</p>
      </div>

      <!-- Hızlı Soru Avcısı Banner -->
      <div class="card" style="background:linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); color:white; margin-bottom:24px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div>
            <span style="background:rgba(255,255,255,0.2); padding:3px 8px; border-radius:99px; font-size:0.72rem; font-weight:800; text-transform:uppercase;">
              ⏱️ Hızlı Maraton
            </span>
            <h3 style="font-size:1.2rem; font-weight:800; margin:6px 0 2px;">Hızlı Soru Avcısı (60 Sn)</h3>
            <p style="font-size:0.82rem; opacity:0.95;">60 saniyede olabildiğince çok soru çöz, comboları topla!</p>
          </div>
          <button class="btn-secondary" style="background:white; color:#ea580c; font-weight:800;" onclick="GamesModule.startSpeedHunt()">
            Arenaya Gir ⚡
          </button>
        </div>
      </div>

      <!-- Boss Savaşları Listesi -->
      <div class="section-header">
        <h3 class="section-title">🐉 Ünite Canavarları (Boss Savaşı)</h3>
      </div>
      <div>
        ${bossCardsHtml}
      </div>
    `;
  },

  // -------------------------------------------------------------
  // BOSS SAVAŞI MANTIĞI
  // -------------------------------------------------------------
  startBossBattle(bossId) {
    const boss = this.bossList.find(b => b.id === bossId) || this.bossList[0];
    this.bossState.selectedBoss = boss;
    this.bossState.bossHp = 100;
    this.bossState.playerHp = 100;

    // Boss'a ait soruları hazırla
    let pool = (window.QUESTIONS_DATA || []).filter(q => q.unitId === boss.id);
    if (pool.length === 0) pool = window.QUESTIONS_DATA || [];
    
    // Karıştır
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    this.bossState.questionPool = pool;
    this.bossState.currentQuestion = pool[0];
    this.activeGame = "boss";
    this.render();
  },

  renderBossBattle() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    const boss = this.bossState.selectedBoss;
    const q = this.bossState.currentQuestion;

    if (this.bossState.bossHp <= 0) {
      this.renderBossVictory();
      return;
    }
    if (this.bossState.playerHp <= 0) {
      this.renderBossDefeat();
      return;
    }

    const letters = ["A", "B", "C", "D", "E"];
    const optionsHtml = q.options.map((opt, optIdx) => `
      <button class="option-btn" id="boss-opt-${optIdx}" onclick="GamesModule.handleBossAttack(${optIdx})">
        <span class="option-prefix">${letters[optIdx]}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join("");

    container.innerHTML = `
      <!-- Boss Arenası Üst Panel -->
      <div class="boss-arena">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <button class="btn-secondary" style="font-size:0.75rem; padding:4px 10px; background:rgba(255,255,255,0.15); color:white; border-color:transparent;" onclick="GamesModule.activeGame = null; GamesModule.render();">
            ◀ Arenadan Çık
          </button>
          <span style="font-weight:700; font-size:0.85rem;">${boss.unit} Düellosu</span>
        </div>

        <div style="text-align:center;">
          <div class="boss-avatar-box" id="boss-avatar-el">
            ${boss.avatar}
          </div>
          <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:4px;">${boss.name}</h3>
          
          <!-- Boss Can Barı -->
          <div style="max-width:300px; margin:0 auto 14px;">
            <div style="display:flex; justify-content:space-between; font-size:0.74rem; font-weight:700; margin-bottom:2px;">
              <span>CANAVAR CANI</span>
              <span>${this.bossState.bossHp} / 100</span>
            </div>
            <div class="health-bar-container">
              <div class="health-bar-fill" style="width: ${this.bossState.bossHp}%;"></div>
            </div>
          </div>

          <!-- Oyuncu Can Barı -->
          <div style="max-width:300px; margin:0 auto;">
            <div style="display:flex; justify-content:space-between; font-size:0.74rem; font-weight:700; margin-bottom:2px;">
              <span>SENİN CANIN (ÖĞRENCİ)</span>
              <span>${this.bossState.playerHp} / 100</span>
            </div>
            <div class="health-bar-container">
              <div class="health-bar-fill" style="background:#10b981; width: ${this.bossState.playerHp}%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Savaş Sorusu Kartı -->
      <div class="card">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
          <span style="font-size:0.85rem; font-weight:800; color:var(--primary);">Saldırı Sorusu</span>
          <span class="difficulty-tag ${q.difficulty}">${q.difficulty}</span>
        </div>

        <div class="question-text">
          ${q.question}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        <div id="boss-feedback-box" style="display:none; margin-top:14px;"></div>
      </div>
    `;

    window.App.renderMath();
  },

  handleBossAttack(selectedIdx) {
    const q = this.bossState.currentQuestion;
    const isCorrect = selectedIdx === q.correctIndex;

    for (let i = 0; i < q.options.length; i++) {
      const b = document.getElementById(`boss-opt-${i}`);
      if (b) b.disabled = true;
    }

    const btn = document.getElementById(`boss-opt-${selectedIdx}`);
    const correctBtn = document.getElementById(`boss-opt-${q.correctIndex}`);
    const avatar = document.getElementById("boss-avatar-el");
    const feedbackBox = document.getElementById("boss-feedback-box");

    if (isCorrect) {
      if (btn) btn.classList.add("correct");
      this.bossState.bossHp = Math.max(0, this.bossState.bossHp - 35);
      window.App.playSound("boss_hit");
      window.App.addXP(25);
      
      if (avatar) {
        avatar.style.transform = "scale(0.85) rotate(10deg)";
        setTimeout(() => avatar.style.transform = "", 300);
      }
      window.App.showToast("⚔️ VURUŞ BAŞARILI! Bossa 35 hasar verdin!");
    } else {
      if (btn) btn.classList.add("wrong");
      if (correctBtn) correctBtn.classList.add("correct");
      this.bossState.playerHp = Math.max(0, this.bossState.playerHp - 35);
      window.App.playSound("wrong");
      window.App.showToast("💥 HATA! Canavar sana saldırdı (-35 CAN)!");
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="explanation-box">
          <div class="explanation-title">${isCorrect ? '✅ Hamle Doğru!' : '❌ Kaçırdın!'} Çözüm:</div>
          <div>${q.explanation}</div>
        </div>
      `;
      window.App.renderMath();
    }

    setTimeout(() => {
      // Sıradaki soruya geç
      const pool = this.bossState.questionPool;
      const nextIdx = (pool.indexOf(q) + 1) % pool.length;
      this.bossState.currentQuestion = pool[nextIdx];
      this.render();
    }, 1800);
  },

  renderBossVictory() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    window.App.celebrate();
    window.App.playSound("level_up");
    window.App.addXP(100);

    container.innerHTML = `
      <div class="card" style="text-align:center; padding:36px 20px;">
        <div style="font-size:4rem; margin-bottom:12px;">🏆</div>
        <h2 style="font-size:1.5rem; font-weight:800; color:#047857; margin-bottom:8px;">ZAFER SENİN!</h2>
        <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">
          ${this.bossState.selectedBoss.name} dize getirildi! +100 XP kazandın.
        </p>
        <button class="btn-primary" onclick="GamesModule.activeGame = null; GamesModule.render();">
          🎮 Oyun Arenasına Dön
        </button>
      </div>
    `;
  },

  renderBossDefeat() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    container.innerHTML = `
      <div class="card" style="text-align:center; padding:36px 20px;">
        <div style="font-size:4rem; margin-bottom:12px;">💀</div>
        <h2 style="font-size:1.4rem; font-weight:800; color:#be123c; margin-bottom:8px;">Yenildin...</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:16px;">
          Canavar bu sefer galip geldi. Konuyu tekrar edip tekrar dene!
        </p>
        <button class="btn-primary" onclick="GamesModule.startBossBattle('${this.bossState.selectedBoss.id}')">
          🔄 Tekrar Savaş
        </button>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // HIZLI SORU AVCISI (MARATON)
  // -------------------------------------------------------------
  startSpeedHunt() {
    this.activeGame = "speed";
    this.speedState.timeLeft = 60;
    this.speedState.score = 0;
    this.speedState.combo = 0;
    
    const allQs = [...(window.QUESTIONS_DATA || [])];
    const randQ = allQs[Math.floor(Math.random() * allQs.length)];
    this.speedState.currentQuestion = randQ;

    if (this.speedState.timerId) clearInterval(this.speedState.timerId);
    this.speedState.timerId = setInterval(() => {
      this.speedState.timeLeft -= 1;
      const timerEl = document.getElementById("speed-timer-val");
      if (timerEl) timerEl.textContent = `${this.speedState.timeLeft}s`;

      if (this.speedState.timeLeft <= 0) {
        clearInterval(this.speedState.timerId);
        this.renderSpeedResult();
      }
    }, 1000);

    this.render();
  },

  renderSpeedHunt() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    const q = this.speedState.currentQuestion;
    const letters = ["A", "B", "C", "D", "E"];
    const optionsHtml = q.options.map((opt, optIdx) => `
      <button class="option-btn" onclick="GamesModule.handleSpeedAnswer(${optIdx})">
        <span class="option-prefix">${letters[optIdx]}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join("");

    container.innerHTML = `
      <div class="card" style="margin-bottom:16px; background:#fffbeb; border-color:#fde68a;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <span style="font-size:1.1rem; font-weight:800; color:#b45309;" id="speed-timer-val">
            ⏱️ ${this.speedState.timeLeft}s
          </span>
          <span style="font-size:1.1rem; font-weight:800; color:var(--primary);">
            Skor: ${this.speedState.score}
          </span>
          <span class="meta-pill" style="background:#fee2e2; color:#b91c1c;">
            🔥 Combo: ${this.speedState.combo}x
          </span>
        </div>
      </div>

      <div class="card">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
          <span class="meta-pill">${q.unitTitle}</span>
          <span class="difficulty-tag ${q.difficulty}">${q.difficulty}</span>
        </div>

        <div class="question-text">
          ${q.question}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>
      </div>
    `;

    window.App.renderMath();
  },

  handleSpeedAnswer(selectedIdx) {
    const q = this.speedState.currentQuestion;
    const isCorrect = selectedIdx === q.correctIndex;

    if (isCorrect) {
      this.speedState.combo += 1;
      const pts = 10 * this.speedState.combo;
      this.speedState.score += pts;
      this.speedState.timeLeft += 3; // Doğru cevapta +3 sn
      window.App.playSound("correct");
      window.App.addXP(pts);
      window.App.showToast(`✨ +${pts} Puan! Combo: ${this.speedState.combo}x`);
    } else {
      this.speedState.combo = 0;
      window.App.playSound("wrong");
    }

    // Hemen yeni soru seç
    const allQs = window.QUESTIONS_DATA || [];
    this.speedState.currentQuestion = allQs[Math.floor(Math.random() * allQs.length)];
    this.render();
  },

  renderSpeedResult() {
    const container = document.getElementById("games-view-container");
    if (!container) return;

    window.App.celebrate();
    window.App.playSound("level_up");

    container.innerHTML = `
      <div class="card" style="text-align:center; padding:32px 20px;">
        <div style="font-size:3.5rem; margin-bottom:10px;">⚡</div>
        <h2 style="font-size:1.4rem; font-weight:800; margin-bottom:6px;">Süre Doldu!</h2>
        <div style="font-size:2rem; font-weight:800; color:var(--primary); margin-bottom:16px;">
          ${this.speedState.score} Puan
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px;">Harika bir hız gösterisiydi!</p>
        <div style="display:flex; justify-content:center; gap:12px;">
          <button class="btn-secondary" onclick="GamesModule.activeGame = null; GamesModule.render();">
            Arenaya Dön
          </button>
          <button class="btn-primary" onclick="GamesModule.startSpeedHunt()">
            Tekrar Oyna 🔄
          </button>
        </div>
      </div>
    `;
  }
};
