/**
 * 9. SINIF MATEMATİK AKADEMİSİ - TEST & SORU BANKASI MOTORU (269 SORU)
 */

window.QuizModule = {
  currentFilter: "all",
  currentDifficulty: "all",
  currentSearchQuery: "",
  currentStatusFilter: "all", // all, wrong, bookmarked, unsolved
  currentPage: 1,
  pageSize: 15,
  testMode: null, // null | 'mini' | 'deneme'
  testQuestions: [],
  testIndex: 0,
  testScore: { correct: 0, wrong: 0 },
  testAnswers: {},

  init() {
    this.bindEvents();
  },

  bindEvents() {
    // Arama Çubuğu
    const searchInput = document.getElementById("quiz-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.currentSearchQuery = e.target.value.toLowerCase();
        this.currentPage = 1;
        this.renderList();
      });
    }
  },

  setUnitFilter(unitId) {
    this.currentFilter = unitId;
    this.currentPage = 1;
    this.render();
  },

  setStatusFilter(status) {
    this.currentStatusFilter = status;
    this.currentPage = 1;
    this.render();
  },

  render() {
    if (this.testMode) {
      this.renderTestView();
    } else {
      this.renderBrowserView();
    }
  },

  getFilteredQuestions() {
    let list = window.QUESTIONS_DATA || [];
    
    // Ünite Filtresi
    if (this.currentFilter !== "all") {
      list = list.filter(q => q.unitId === this.currentFilter);
    }
    
    // Zorluk Filtresi
    if (this.currentDifficulty !== "all") {
      list = list.filter(q => q.difficulty === this.currentDifficulty);
    }

    // Durum Filtresi
    if (this.currentStatusFilter === "wrong") {
      list = list.filter(q => window.App.state.wrongQuestionIds.includes(q.id));
    } else if (this.currentStatusFilter === "bookmarked") {
      list = list.filter(q => window.App.state.bookmarkedQuestionIds.includes(q.id));
    } else if (this.currentStatusFilter === "unsolved") {
      list = list.filter(q => !window.App.state.solvedQuestionIds.includes(q.id));
    }

    // Arama Kelimesi
    if (this.currentSearchQuery) {
      list = list.filter(q => 
        q.question.toLowerCase().includes(this.currentSearchQuery) ||
        q.explanation.toLowerCase().includes(this.currentSearchQuery) ||
        q.unitTitle.toLowerCase().includes(this.currentSearchQuery)
      );
    }

    return list;
  },

  renderBrowserView() {
    const container = document.getElementById("quiz-view-container");
    if (!container) return;

    const filtered = this.getFilteredQuestions();
    const totalCount = (window.QUESTIONS_DATA || []).length;
    
    const units = [
      { id: "all", name: "Tümü (269)" },
      { id: "uslu_sayilar", name: "⚡ Üslü Sayılar (35)" },
      { id: "mantik", name: "Mantık (26)" },
      { id: "kumeler", name: "Kümeler (26)" },
      { id: "sayilar", name: "Sayılar & Bölünebilme (26)" },
      { id: "denklemler", name: "Denklem & Eşitsizlik (26)" },
      { id: "mutlak_deger", name: "Mutlak Değer (26)" },
      { id: "koklu_sayilar", name: "Köklü Sayılar (26)" },
      { id: "oran_oranti", name: "Oran-Orantı & Prob. (26)" },
      { id: "ucgenler", name: "Üçgenler & Geometri (26)" },
      { id: "veri_istatistik", name: "Veri & İstatistik (26)" }
    ];

    const filterChipsHtml = units.map(u => `
      <button class="filter-chip ${this.currentFilter === u.id ? 'active' : ''}" onclick="QuizModule.setUnitFilter('${u.id}')">
        ${u.name}
      </button>
    `).join("");

    const statusChipsHtml = `
      <button class="filter-chip ${this.currentStatusFilter === 'all' ? 'active' : ''}" onclick="QuizModule.setStatusFilter('all')">
        📋 Tüm Sorular (${filtered.length})
      </button>
      <button class="filter-chip ${this.currentStatusFilter === 'wrong' ? 'active' : ''}" onclick="QuizModule.setStatusFilter('wrong')">
        ❌ Yanlışlarım (${window.App.state.wrongQuestionIds.length})
      </button>
      <button class="filter-chip ${this.currentStatusFilter === 'bookmarked' ? 'active' : ''}" onclick="QuizModule.setStatusFilter('bookmarked')">
        ⭐ Yıldızlılarım (${window.App.state.bookmarkedQuestionIds.length})
      </button>
      <button class="filter-chip ${this.currentStatusFilter === 'unsolved' ? 'active' : ''}" onclick="QuizModule.setStatusFilter('unsolved')">
        ⏳ Çözmediklerim (${totalCount - window.App.state.solvedQuestionIds.length})
      </button>
    `;

    // Sayfalama
    const totalPages = Math.ceil(filtered.length / this.pageSize) || 1;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const pageItems = filtered.slice(startIndex, startIndex + this.pageSize);

    const questionsHtml = pageItems.length === 0 ? `
      <div class="card" style="text-align:center; padding:40px 20px;">
        <div style="font-size:3rem; margin-bottom:10px;">🔍</div>
        <h3 style="font-size:1.1rem; font-weight:700;">Bu kriterlere uygun soru bulunamadı.</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">Filtreleri sıfırlayarak tüm soruları inceleyebilirsiniz.</p>
        <button class="btn-primary" style="margin-top:16px;" onclick="QuizModule.setUnitFilter('all'); QuizModule.setStatusFilter('all');">Filtreleri Sıfırla</button>
      </div>
    ` : pageItems.map((q, idx) => {
      const qNum = startIndex + idx + 1;
      const isBookmarked = window.App.state.bookmarkedQuestionIds.includes(q.id);
      const isSolved = window.App.state.solvedQuestionIds.includes(q.id);
      const isWrong = window.App.state.wrongQuestionIds.includes(q.id);

      const optionsHtml = q.options.map((opt, optIdx) => {
        const letters = ["A", "B", "C", "D", "E"];
        return `
          <button class="option-btn" id="opt-btn-${q.id}-${optIdx}" onclick="QuizModule.checkAnswer(${q.id}, ${optIdx})">
            <span class="option-prefix">${letters[optIdx]}</span>
            <span class="option-text">${opt}</span>
          </button>
        `;
      }).join("");

      return `
        <div class="question-box" id="q-box-${q.id}">
          <div class="question-meta">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-weight:800; font-size:0.88rem; color:var(--primary);">Soru ${q.id}</span>
              <span class="meta-pill">${q.unitTitle}</span>
              <span class="difficulty-tag ${q.difficulty}">${q.difficulty}</span>
              ${isSolved ? '<span class="meta-pill" style="color:#047857; background:#ecfdf5;">✓ Çözüldü</span>' : ''}
              ${isWrong ? '<span class="meta-pill" style="color:#be123c; background:#fff1f2;">✗ Yanlış</span>' : ''}
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <button class="sound-btn" onclick="QuizModule.toggleBookmark(${q.id})" title="Yıldızla">
                ${isBookmarked ? '⭐' : '☆'}
              </button>
              <button class="sound-btn" onclick="QuizModule.toggleHint(${q.id})" title="İpucu Al">
                💡
              </button>
            </div>
          </div>

          <div class="question-text">
            ${q.question}
          </div>

          <div class="options-list">
            ${optionsHtml}
          </div>

          <div id="hint-box-${q.id}" class="hint-box" style="display:none;">
            <strong>💡 İpucu:</strong> ${q.hint}
          </div>

          <div id="solution-box-${q.id}" class="explanation-box" style="display:none;">
            <div class="explanation-title">📝 Adım Adım Çözüm:</div>
            <div>${q.explanation}</div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <!-- Hızlı Test Başlatma Çubuğu -->
      <div class="card" style="background:linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color:white; margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div>
            <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:2px;">Hazır Mısın? Kendini Test Et!</h3>
            <p style="font-size:0.82rem; opacity:0.9;">2026 Müfredatına uygun süreli denemeler ve mini testler.</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-secondary" style="background:white; color:var(--primary); font-size:0.8rem;" onclick="QuizModule.startTest('mini')">
              ⏱️ 10 Soruluk Mini Test
            </button>
            <button class="btn-secondary" style="background:rgba(255,255,255,0.2); color:white; border-color:rgba(255,255,255,0.4); font-size:0.8rem;" onclick="QuizModule.startTest('deneme')">
              🏆 20 Soruluk Genel Deneme
            </button>
          </div>
        </div>
      </div>

      <!-- Arama ve Filtreler -->
      <div class="search-input-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="quiz-search-input" class="search-input" placeholder="Soru ara (örn. 2^5, De Morgan, Pisagor...)" value="${this.currentSearchQuery}">
      </div>

      <div class="filter-scroll">
        ${statusChipsHtml}
      </div>

      <div class="filter-scroll">
        ${filterChipsHtml}
      </div>

      <!-- Soru Listesi -->
      <div class="questions-stream">
        ${questionsHtml}
      </div>

      <!-- Sayfalama -->
      ${totalPages > 1 ? `
        <div style="display:flex; align-items:center; justify-content:center; gap:12px; margin-top:20px;">
          <button class="btn-secondary" ${this.currentPage <= 1 ? 'disabled style="opacity:0.5;"' : ''} onclick="QuizModule.changePage(${this.currentPage - 1})">
            ◀ Önceki
          </button>
          <span style="font-size:0.85rem; font-weight:700;">Sayfa ${this.currentPage} / ${totalPages}</span>
          <button class="btn-secondary" ${this.currentPage >= totalPages ? 'disabled style="opacity:0.5;"' : ''} onclick="QuizModule.changePage(${this.currentPage + 1})">
            Sonraki ▶
          </button>
        </div>
      ` : ''}
    `;

    // KaTeX Render
    window.App.renderMath();
  },

  changePage(newPage) {
    this.currentPage = newPage;
    this.render();
    window.scrollTo({ top: 300, behavior: "smooth" });
  },

  checkAnswer(questionId, selectedIdx) {
    const q = (window.QUESTIONS_DATA || []).find(item => item.id === questionId);
    if (!q) return;

    const isCorrect = selectedIdx === q.correctIndex;
    const btn = document.getElementById(`opt-btn-${questionId}-${selectedIdx}`);
    const correctBtn = document.getElementById(`opt-btn-${questionId}-${q.correctIndex}`);
    const solBox = document.getElementById(`solution-box-${questionId}`);

    // Butonları kilitle
    for (let i = 0; i < q.options.length; i++) {
      const b = document.getElementById(`opt-btn-${questionId}-${i}`);
      if (b) b.disabled = true;
    }

    if (isCorrect) {
      if (btn) btn.classList.add("correct");
      window.App.playSound("correct");
      window.App.addXP(q.xp || 15);
      
      // Çözülenler listesine ekle
      if (!window.App.state.solvedQuestionIds.includes(questionId)) {
        window.App.state.solvedQuestionIds.push(questionId);
      }
      // Yanlışlardan sil
      window.App.state.wrongQuestionIds = window.App.state.wrongQuestionIds.filter(id => id !== questionId);
      window.App.saveState();
      window.App.showToast(`✨ DOĞRU! +${q.xp || 15} XP kazandın!`);
    } else {
      if (btn) btn.classList.add("wrong");
      if (correctBtn) correctBtn.classList.add("correct");
      window.App.playSound("wrong");
      
      // Yanlışlar listesine ekle
      if (!window.App.state.wrongQuestionIds.includes(questionId)) {
        window.App.state.wrongQuestionIds.push(questionId);
      }
      window.App.saveState();
      window.App.showToast("❌ Yanlış cevap! Çözümü aşağıdan inceleyebilirsin.");
    }

    // Çözümü göster
    if (solBox) {
      solBox.style.display = "block";
      window.App.renderMath();
    }
  },

  toggleHint(questionId) {
    const el = document.getElementById(`hint-box-${questionId}`);
    if (el) {
      el.style.display = el.style.display === "none" ? "block" : "none";
      window.App.renderMath();
    }
  },

  toggleBookmark(questionId) {
    const b = window.App.state.bookmarkedQuestionIds;
    const idx = b.indexOf(questionId);
    if (idx === -1) {
      b.push(questionId);
      window.App.showToast("⭐ Soru yıldızlılara eklendi!");
    } else {
      b.splice(idx, 1);
      window.App.showToast("Soru yıldızlılardan çıkarıldı.");
    }
    window.App.saveState();
    this.render();
  },

  startUnitQuiz(unitId) {
    window.App.switchView("quiz");
    this.setUnitFilter(unitId);
  },

  // -----------------------------------------------------------
  // TEST MODU (10 SORULUK MİNİ TEST VEYA 20 SORULUK DENEME)
  // -----------------------------------------------------------
  startTest(mode) {
    this.testMode = mode;
    this.testIndex = 0;
    this.testScore = { correct: 0, wrong: 0 };
    this.testAnswers = {};

    const allQs = [...(window.QUESTIONS_DATA || [])];
    // Karıştır
    for (let i = allQs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQs[i], allQs[j]] = [allQs[j], allQs[i]];
    }

    const count = mode === "mini" ? 10 : 20;
    this.testQuestions = allQs.slice(0, count);
    this.render();
  },

  renderTestView() {
    const container = document.getElementById("quiz-view-container");
    if (!container) return;

    if (this.testIndex >= this.testQuestions.length) {
      this.renderTestResult();
      return;
    }

    const q = this.testQuestions[this.testIndex];
    const currentNum = this.testIndex + 1;
    const totalNum = this.testQuestions.length;
    const progressPercent = Math.round((currentNum / totalNum) * 100);

    const letters = ["A", "B", "C", "D", "E"];
    const optionsHtml = q.options.map((opt, optIdx) => `
      <button class="option-btn" id="test-opt-${optIdx}" onclick="QuizModule.handleTestAnswer(${optIdx})">
        <span class="option-prefix">${letters[optIdx]}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join("");

    container.innerHTML = `
      <div class="card">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
          <span style="font-size:0.85rem; font-weight:800; color:var(--primary);">
            ${this.testMode === 'mini' ? '⏱️ 10 Soruluk Mini Test' : '🏆 20 Soruluk Deneme Sınavı'}
          </span>
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">
            Soru ${currentNum} / ${totalNum}
          </span>
        </div>

        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px;">
          <span class="meta-pill">${q.unitTitle}</span>
          <span class="difficulty-tag ${q.difficulty}">${q.difficulty}</span>
        </div>

        <div class="question-text">
          ${q.question}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        <div id="test-feedback-box" style="display:none; margin-top:16px;"></div>

        <div style="display:flex; justify-content:flex-end; margin-top:16px;">
          <button id="test-next-btn" class="btn-primary" style="display:none;" onclick="QuizModule.nextTestQuestion()">
            Sonraki Soru ➔
          </button>
        </div>
      </div>
    `;

    window.App.renderMath();
  },

  handleTestAnswer(selectedIdx) {
    const q = this.testQuestions[this.testIndex];
    const isCorrect = selectedIdx === q.correctIndex;
    
    // Butonları kilitle
    for (let i = 0; i < q.options.length; i++) {
      const b = document.getElementById(`test-opt-${i}`);
      if (b) b.disabled = true;
    }

    const btn = document.getElementById(`test-opt-${selectedIdx}`);
    const correctBtn = document.getElementById(`test-opt-${q.correctIndex}`);
    const feedbackBox = document.getElementById("test-feedback-box");
    const nextBtn = document.getElementById("test-next-btn");

    if (isCorrect) {
      if (btn) btn.classList.add("correct");
      this.testScore.correct += 1;
      window.App.playSound("correct");
      window.App.addXP(q.xp || 15);
    } else {
      if (btn) btn.classList.add("wrong");
      if (correctBtn) correctBtn.classList.add("correct");
      this.testScore.wrong += 1;
      window.App.playSound("wrong");
      if (!window.App.state.wrongQuestionIds.includes(q.id)) {
        window.App.state.wrongQuestionIds.push(q.id);
        window.App.saveState();
      }
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="explanation-box">
          <div class="explanation-title">${isCorrect ? '✅ Doğru!' : '❌ Yanlış!'} Çözüm Açıklaması:</div>
          <div>${q.explanation}</div>
        </div>
      `;
      window.App.renderMath();
    }

    if (nextBtn) {
      nextBtn.style.display = "inline-flex";
    }
  },

  nextTestQuestion() {
    this.testIndex += 1;
    this.render();
  },

  renderTestResult() {
    const container = document.getElementById("quiz-view-container");
    if (!container) return;

    const total = this.testQuestions.length;
    const correct = this.testScore.correct;
    const wrong = this.testScore.wrong;
    const empty = total - (correct + wrong);
    const net = (correct - (wrong * 0.25)).toFixed(2);
    const successPercent = Math.round((correct / total) * 100);

    window.App.celebrate();
    window.App.playSound("level_up");

    container.innerHTML = `
      <div class="card" style="text-align:center; padding:32px 20px;">
        <div style="font-size:3.5rem; margin-bottom:12px;">🎉</div>
        <h2 style="font-size:1.4rem; font-weight:800; margin-bottom:6px;">Sınav Tamamlandı!</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:20px;">Harika bir performans sergiledin.</p>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; max-width:380px; margin:0 auto 24px;">
          <div class="stat-box" style="border-color:#a7f3d0; background:#f0fdf4;">
            <div class="stat-value" style="color:#059669;">${correct}</div>
            <div class="stat-title">Doğru</div>
          </div>
          <div class="stat-box" style="border-color:#fecdd3; background:#fff1f2;">
            <div class="stat-value" style="color:#e11d48;">${wrong}</div>
            <div class="stat-title">Yanlış</div>
          </div>
          <div class="stat-box" style="border-color:#e0e7ff; background:#eef2ff;">
            <div class="stat-value" style="color:#4f46e5;">%${successPercent}</div>
            <div class="stat-title">Başarı</div>
          </div>
        </div>

        <div style="font-size:1rem; font-weight:700; color:var(--text-main); margin-bottom:24px;">
          Net Puanı: <span style="color:var(--primary); font-size:1.2rem;">${net} Net</span>
        </div>

        <div style="display:flex; justify-content:center; gap:12px;">
          <button class="btn-secondary" onclick="QuizModule.testMode = null; QuizModule.render();">
            📋 Soru Bankasına Dön
          </button>
          <button class="btn-primary" onclick="QuizModule.startTest('${this.testMode}')">
            🔄 Tekrar Çöz
          </button>
        </div>
      </div>
    `;
  }
};
