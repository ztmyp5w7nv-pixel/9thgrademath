/**
 * 9. SINIF MATEMATİK AKADEMİSİ - BİLGİ KARTLARI (FLASHCARDS) MODÜLÜ (105 KART)
 */

window.FlashcardsModule = {
  currentFilter: "all",
  currentIndex: 0,
  isFlipped: false,

  init() {
    this.bindTouchEvents();
  },

  setFilter(unitId) {
    this.currentFilter = unitId;
    this.currentIndex = 0;
    this.isFlipped = false;
    this.render();
  },

  getCards() {
    let list = window.FLASHCARDS_DATA || [];
    if (this.currentFilter !== "all") {
      list = list.filter(c => c.unitId === this.currentFilter);
    }
    return list;
  },

  render() {
    const container = document.getElementById("cards-view-container");
    if (!container) return;

    const cards = this.getCards();
    const total = cards.length;
    const knownCount = window.App.state.knownFlashcardIds.length;

    const units = [
      { id: "all", name: "Tüm Kartlar (105)" },
      { id: "uslu_sayilar", name: "⚡ Üslü Sayılar (20)" },
      { id: "mantik", name: "Mantık (10)" },
      { id: "kumeler", name: "Kümeler (10)" },
      { id: "sayilar", name: "Sayılar & Böl. (10)" },
      { id: "denklemler", name: "Denklemler (10)" },
      { id: "mutlak_deger", name: "Mutlak Değer (10)" },
      { id: "koklu_sayilar", name: "Köklü Sayılar (10)" },
      { id: "oran_oranti", name: "Oran-Orantı (10)" },
      { id: "ucgenler", name: "Üçgenler (10)" },
      { id: "veri_istatistik", name: "Veri & Olasılık (5)" }
    ];

    const filterChipsHtml = units.map(u => `
      <button class="filter-chip ${this.currentFilter === u.id ? 'active' : ''}" onclick="FlashcardsModule.setFilter('${u.id}')">
        ${u.name}
      </button>
    `).join("");

    if (total === 0) {
      container.innerHTML = `<p style="text-align:center;">Kart bulunamadı.</p>`;
      return;
    }

    if (this.currentIndex >= total) {
      this.currentIndex = 0;
    }

    const currentCard = cards[this.currentIndex];
    const isKnown = window.App.state.knownFlashcardIds.includes(currentCard.id);

    container.innerHTML = `
      <!-- Başlık ve İlerleme -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
        <div>
          <h2 style="font-size:1.15rem; font-weight:800; color:var(--text-main);">🃏 Akıllı Bilgi Kartları</h2>
          <p style="font-size:0.78rem; color:var(--text-muted);">Dokunarak kartı çevir, formülleri kalıcı hafızaya al.</p>
        </div>
        <span class="meta-pill" style="background:#ecfdf5; color:#047857; font-weight:700;">
          ✓ ${knownCount} / 105 Ezberlendi
        </span>
      </div>

      <!-- Filtreler -->
      <div class="filter-scroll" style="margin-bottom:16px;">
        ${filterChipsHtml}
      </div>

      <!-- Kart Sayacı & İlerleme Çubuğu -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">
          Kart ${this.currentIndex + 1} / ${total}
        </span>
        <span class="meta-pill">${currentCard.unitTitle}</span>
      </div>

      <div class="quiz-progress-bar" style="margin-bottom:16px;">
        <div class="quiz-progress-fill" style="width: ${Math.round(((this.currentIndex + 1) / total) * 100)}%;"></div>
      </div>

      <!-- 3D Döndürülebilir Bilgi Kartı -->
      <div class="flashcard-container" id="active-flashcard-box" onclick="FlashcardsModule.flipCard()">
        <div class="flashcard ${this.isFlipped ? 'flipped' : ''}" id="flashcard-element">
          <!-- Ön Yüz -->
          <div class="card-face front">
            <span class="card-tag">${currentCard.tag || 'Formül'}</span>
            <div class="card-content">
              ${currentCard.front}
            </div>
            <div class="card-hint-text">
              👆 Çözümü & formülü görmek için dokun
            </div>
          </div>

          <!-- Arka Yüz -->
          <div class="card-face back">
            <span class="card-tag" style="background:#ecfdf5; color:#059669;">Çözüm & Açıklama</span>
            <div class="card-content" style="font-size:1.05rem; color:#1e293b;">
              ${currentCard.back.replace(/\n/g, '<br>')}
            </div>
            <div class="card-hint-text">
              ${isKnown ? '✅ Bu kartı biliyorsun' : '💡 İyice tekrar et'}
            </div>
          </div>
        </div>
      </div>

      <!-- Aksiyon Butonları -->
      <div class="card-controls">
        <button class="btn-card-learn" onclick="FlashcardsModule.markReview()">
          ❌ Tekrar Et (←)
        </button>
        <button class="btn-card-know" onclick="FlashcardsModule.markKnown()">
          ✅ Biliyorum (→)
        </button>
      </div>

      <div style="display:flex; justify-content:center; gap:20px; margin-top:20px;">
        <button class="btn-secondary" style="font-size:0.82rem;" onclick="FlashcardsModule.prevCard()">
          ◀ Önceki Kart
        </button>
        <button class="btn-secondary" style="font-size:0.82rem;" onclick="FlashcardsModule.nextCard()">
          Sonraki Kart ▶
        </button>
      </div>
    `;

    window.App.renderMath();
  },

  flipCard() {
    this.isFlipped = !this.isFlipped;
    const el = document.getElementById("flashcard-element");
    if (el) {
      el.classList.toggle("flipped", this.isFlipped);
    }
  },

  nextCard() {
    const cards = this.getCards();
    if (this.currentIndex < cards.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
    this.isFlipped = false;
    this.render();
  },

  prevCard() {
    const cards = this.getCards();
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = cards.length - 1;
    }
    this.isFlipped = false;
    this.render();
  },

  markKnown() {
    const cards = this.getCards();
    const c = cards[this.currentIndex];
    if (c) {
      if (!window.App.state.knownFlashcardIds.includes(c.id)) {
        window.App.state.knownFlashcardIds.push(c.id);
        window.App.addXP(5);
        window.App.playSound("correct");
      }
      window.App.state.reviewFlashcardIds = window.App.state.reviewFlashcardIds.filter(id => id !== c.id);
      window.App.saveState();
      window.App.showToast("✨ Kart ezberlendi! +5 XP");
    }
    this.nextCard();
  },

  markReview() {
    const cards = this.getCards();
    const c = cards[this.currentIndex];
    if (c) {
      if (!window.App.state.reviewFlashcardIds.includes(c.id)) {
        window.App.state.reviewFlashcardIds.push(c.id);
      }
      window.App.state.knownFlashcardIds = window.App.state.knownFlashcardIds.filter(id => id !== c.id);
      window.App.saveState();
      window.App.playSound("wrong");
      window.App.showToast("📌 Kart tekrar listesine alındı.");
    }
    this.nextCard();
  },

  // Dokunmatik Kaydırma (Swipe)
  bindTouchEvents() {
    let startX = 0;
    document.addEventListener("touchstart", (e) => {
      const box = document.getElementById("active-flashcard-box");
      if (box && box.contains(e.target)) {
        startX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
      const box = document.getElementById("active-flashcard-box");
      if (box && box.contains(e.target)) {
        const endX = e.changedTouches[0].screenX;
        const diff = endX - startX;
        if (diff > 50) {
          // Sağa kaydırma -> Biliyorum
          this.markKnown();
        } else if (diff < -50) {
          // Sola kaydırma -> Tekrar et
          this.markReview();
        }
      }
    }, { passive: true });
  }
};
