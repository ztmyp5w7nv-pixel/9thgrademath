/**
 * 9. SINIF MATEMATİK AKADEMİSİ - İNTERAKTİF MATEMATİK LABORATUVARI (SİMÜLATÖRLER)
 */

window.InteractiveModule = {
  activeSim: "power-lab", // power-lab | abs-lab | pythagoras-lab | venn-lab

  init() {},

  openSimulator(simId) {
    this.activeSim = simId;
    window.App.switchView("topics");
    
    const modal = document.getElementById("sim-modal-overlay");
    if (modal) {
      modal.classList.add("active");
      this.renderCurrentModalSim();
    }
  },

  closeModal() {
    const modal = document.getElementById("sim-modal-overlay");
    if (modal) modal.classList.remove("active");
  },

  renderCurrentModalSim() {
    const body = document.getElementById("sim-modal-body");
    if (!body) return;

    if (this.activeSim === "power-lab") {
      this.renderPowerLab(body);
    } else if (this.activeSim === "abs-lab") {
      this.renderAbsLab(body);
    } else if (this.activeSim === "pythagoras-lab") {
      this.renderPythagorasLab(body);
    } else if (this.activeSim === "venn-lab") {
      this.renderVennLab(body);
    }

    window.App.renderMath();
  },

  // -------------------------------------------------------------
  // 1. ÜSLÜ SAYILAR DENEY MASASI (POWER LAB)
  // -------------------------------------------------------------
  renderPowerLab(container) {
    container.innerHTML = `
      <div style="margin-bottom:16px;">
        <h3 style="font-size:1.2rem; font-weight:800; color:#10b981; display:flex; align-items:center; gap:8px;">
          ⚡ Üslü Sayılar Deney Masası ($a^n$)
        </h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">Taban ve üssü değiştirerek sonucu, açılımı ve negatif üs davranışını canlı izle.</p>
      </div>

      <!-- Taban Slider -->
      <div class="slider-group">
        <div class="slider-label">
          <span>Taban ($a$):</span>
          <span id="power-base-val" style="font-weight:800; color:var(--primary);">2</span>
        </div>
        <input type="range" id="power-base-input" class="custom-range" min="-5" max="10" value="2" oninput="InteractiveModule.updatePowerLab()">
      </div>

      <!-- Üs Slider -->
      <div class="slider-group">
        <div class="slider-label">
          <span>Üs ($n$):</span>
          <span id="power-exp-val" style="font-weight:800; color:#10b981;">5</span>
        </div>
        <input type="range" id="power-exp-input" class="custom-range" min="-4" max="8" value="5" oninput="InteractiveModule.updatePowerLab()">
      </div>

      <!-- Çıktı Kutusu -->
      <div id="power-output-box" class="sim-output-box" style="background:#f0fdf4; border-color:#bbf7d0;">
        <!-- JS ile dolacak -->
      </div>

      <!-- Parantez Uyarısı -->
      <div id="power-paranthesis-box" style="margin-top:12px; font-size:0.82rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px;">
        <!-- JS ile dolacak -->
      </div>

      <!-- Bilimsel Gösterim Hızlı Çevirici -->
      <div style="margin-top:18px; padding-top:14px; border-top:1px solid var(--border-light);">
        <h4 style="font-size:0.92rem; font-weight:800; margin-bottom:8px;">🔬 Bilimsel Gösterim Dönüştürücü</h4>
        <input type="number" id="scientific-input" placeholder="Bir sayı girin (örn. 480000)" style="width:100%; padding:8px 12px; border-radius:8px; border:1px solid var(--border-light); font-size:0.88rem;" oninput="InteractiveModule.updateScientific()">
        <div id="scientific-output" style="margin-top:8px; font-weight:700; color:var(--primary); font-size:0.95rem;"></div>
      </div>
    `;

    this.updatePowerLab();
  },

  updatePowerLab() {
    const base = parseInt(document.getElementById("power-base-input").value, 10);
    const exp = parseInt(document.getElementById("power-exp-input").value, 10);
    
    document.getElementById("power-base-val").textContent = base;
    document.getElementById("power-exp-val").textContent = exp;

    const outBox = document.getElementById("power-output-box");
    const parBox = document.getElementById("power-paranthesis-box");

    // Sonuç hesaplama
    let res = Math.pow(base, exp);
    let expansionText = "";

    if (base === 0 && exp === 0) {
      outBox.innerHTML = `<span style="color:#e11d48;">$0^0$ Belirsizdir / Tanımsızdır!</span>`;
    } else if (exp === 0) {
      outBox.innerHTML = `$$(${base})^0 = 1$$ <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Her sıfırdan farklı sayının 0. kuvveti 1'dir.</div>`;
    } else if (exp > 0) {
      if (exp <= 6) {
        const parts = Array(exp).fill(`(${base})`);
        expansionText = parts.join(" \\times ");
      } else {
        expansionText = `${exp} \\text{ tane } (${base}) \\text{ çarpımı}`;
      }
      outBox.innerHTML = `
        <div style="font-size:1.3rem; margin-bottom:6px;">$$(${base})^{${exp}} = ${res}$$</div>
        <div style="font-size:0.85rem; color:var(--text-muted);">Açılım: $$${expansionText} = ${res}$$</div>
      `;
    } else {
      // Negatif üs
      const posExp = Math.abs(exp);
      const denom = Math.pow(base, posExp);
      outBox.innerHTML = `
        <div style="font-size:1.3rem; margin-bottom:6px;">$$(${base})^{${exp}} = \\frac{1}{(${base})^{${posExp}}} = \\frac{1}{${denom}} \\approx ${res.toFixed(4)}$$</div>
        <div style="font-size:0.85rem; color:#047857;">💡 Negatif üs sayının işaretini değil, sayıyı paydada çarpmaya dönüştürür!</div>
      `;
    }

    // Parantez uyarısı
    if (base < 0) {
      const withoutP = -(Math.pow(Math.abs(base), exp));
      parBox.innerHTML = `
        <strong>⚠️ Parantez Farkı Uyarısı:</strong><br>
        • Parantezli: $(${base})^{${exp}} = ${res}$<br>
        • Parantezsiz: $-${Math.abs(base)}^{${exp}} = ${withoutP}$<br>
        ${res !== withoutP ? '<span style="color:#e11d48; font-weight:700;">Gördüğün gibi sonuçlar tamamen farklıdır!</span>' : ''}
      `;
    } else {
      parBox.innerHTML = `💡 İpucu: $2^{10} = 1024$ bilgisayar belleğinde 1 Kilobayttır (KB).`;
    }

    window.App.renderMath();
  },

  updateScientific() {
    const val = parseFloat(document.getElementById("scientific-input").value);
    const out = document.getElementById("scientific-output");
    if (isNaN(val) || val === 0) {
      out.textContent = "";
      return;
    }

    const exp = Math.floor(Math.log10(Math.abs(val)));
    const coeff = (val / Math.pow(10, exp)).toFixed(2);
    out.innerHTML = `Bilimsel Gösterim: $${coeff} \\times 10^{${exp}}$`;
    window.App.renderMath();
  },

  // -------------------------------------------------------------
  // 2. MUTLAK DEĞER SAYI DOĞRUSU (ABS LAB)
  // -------------------------------------------------------------
  renderAbsLab(container) {
    container.innerHTML = `
      <div style="margin-bottom:16px;">
        <h3 style="font-size:1.2rem; font-weight:800; color:#eab308;">
          📏 Mutlak Değer Sayı Doğrusu ($|x - a|$)
        </h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">$|x - a|$ demek, sayı doğrusunda $x$ noktasının $a$ noktasına olan uzaklığı demektir.</p>
      </div>

      <div class="slider-group">
        <div class="slider-label">
          <span>x Noktası:</span>
          <span id="abs-x-val" style="font-weight:800; color:var(--primary);">3</span>
        </div>
        <input type="range" id="abs-x-input" class="custom-range" min="-10" max="10" value="3" oninput="InteractiveModule.updateAbsLab()">
      </div>

      <div class="slider-group">
        <div class="slider-label">
          <span>a Noktası:</span>
          <span id="abs-a-val" style="font-weight:800; color:#eab308;">-2</span>
        </div>
        <input type="range" id="abs-a-input" class="custom-range" min="-10" max="10" value="-2" oninput="InteractiveModule.updateAbsLab()">
      </div>

      <div id="abs-output-box" class="sim-output-box"></div>

      <canvas id="abs-canvas" width="400" height="100" style="width:100%; max-width:400px; display:block; margin:16px auto; background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;"></canvas>
    `;
    this.updateAbsLab();
  },

  updateAbsLab() {
    const x = parseInt(document.getElementById("abs-x-input").value, 10);
    const a = parseInt(document.getElementById("abs-a-input").value, 10);

    document.getElementById("abs-x-val").textContent = x;
    document.getElementById("abs-a-val").textContent = a;

    const dist = Math.abs(x - a);
    const out = document.getElementById("abs-output-box");
    out.innerHTML = `
      <div>$$|${x} - (${a})| = |${x - a}| = ${dist}$$</div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
        $${x}$ noktasının $${a}$ noktasına olan uzaklığı: <strong>${dist} birimdir.</strong>
      </div>
    `;

    // Canvas çizimi
    const canvas = document.getElementById("abs-canvas");
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const centerY = 50;

      // Çizgi
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, centerY);
      ctx.lineTo(w - 20, centerY);
      ctx.stroke();

      const toPx = (val) => 20 + ((val + 10) / 20) * (w - 40);

      // 0 noktası
      const zeroX = toPx(0);
      ctx.fillStyle = "#64748b";
      ctx.beginPath();
      ctx.arc(zeroX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText("0", zeroX - 3, centerY + 16);

      // a noktası
      const pxA = toPx(a);
      ctx.fillStyle = "#eab308";
      ctx.beginPath();
      ctx.arc(pxA, centerY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(`a (${a})`, pxA - 10, centerY - 12);

      // x noktası
      const pxX = toPx(x);
      ctx.fillStyle = "#4f46e5";
      ctx.beginPath();
      ctx.arc(pxX, centerY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(`x (${x})`, pxX - 10, centerY + 24);

      // Mesafe çizgisi
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(pxA, centerY);
      ctx.lineTo(pxX, centerY);
      ctx.stroke();
    }

    window.App.renderMath();
  },

  // -------------------------------------------------------------
  // 3. PİSAGOR VE DİK ÜÇGEN SİMÜLATÖRÜ
  // -------------------------------------------------------------
  renderPythagorasLab(container) {
    container.innerHTML = `
      <div style="margin-bottom:16px;">
        <h3 style="font-size:1.2rem; font-weight:800; color:#14b8a6;">
          📐 Pisagor & Dik Üçgen Simülatörü
        </h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">$a^2 + b^2 = c^2$ formülü ile hipotenüs ve alanı canlı hesapla.</p>
      </div>

      <div class="slider-group">
        <div class="slider-label">
          <span>Dik Kenar (a):</span>
          <span id="py-a-val" style="font-weight:800; color:var(--primary);">6 cm</span>
        </div>
        <input type="range" id="py-a-input" class="custom-range" min="1" max="24" value="6" oninput="InteractiveModule.updatePythagorasLab()">
      </div>

      <div class="slider-group">
        <div class="slider-label">
          <span>Dik Kenar (b):</span>
          <span id="py-b-val" style="font-weight:800; color:#14b8a6;">8 cm</span>
        </div>
        <input type="range" id="py-b-input" class="custom-range" min="1" max="24" value="8" oninput="InteractiveModule.updatePythagorasLab()">
      </div>

      <div id="py-output-box" class="sim-output-box"></div>
    `;
    this.updatePythagorasLab();
  },

  updatePythagorasLab() {
    const a = parseInt(document.getElementById("py-a-input").value, 10);
    const b = parseInt(document.getElementById("py-b-input").value, 10);

    document.getElementById("py-a-val").textContent = `${a} cm`;
    document.getElementById("py-b-val").textContent = `${b} cm`;

    const cSq = (a * a) + (b * b);
    const c = Math.sqrt(cSq);
    const area = (a * b) / 2;

    const out = document.getElementById("py-output-box");
    out.innerHTML = `
      <div style="font-size:1.25rem;">$$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${cSq}} \\approx ${c.toFixed(2)}\\text{ cm}$$</div>
      <div style="display:flex; justify-content:space-around; font-size:0.88rem; margin-top:8px;">
        <span><strong>Hipotenüs:</strong> ${c.toFixed(2)} cm</span>
        <span><strong>Üçgenin Alanı:</strong> ${area} cm²</span>
      </div>
      ${(c === Math.floor(c)) ? `<div style="color:#059669; font-weight:700; margin-top:6px;">✨ Özel Tam Sayılı Dik Üçgen! (${a}-${b}-${c})</div>` : ''}
    `;

    window.App.renderMath();
  },

  // -------------------------------------------------------------
  // 4. VENN ŞEMASI KÜMELER SİMÜLATÖRÜ
  // -------------------------------------------------------------
  renderVennLab(container) {
    container.innerHTML = `
      <div style="margin-bottom:16px;">
        <h3 style="font-size:1.2rem; font-weight:800; color:#8b5cf6;">
          🔮 Kümeler Venn Şeması Simülatörü
        </h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">$s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$ formülünü incele.</p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-bottom:12px;">
        <div>
          <label style="font-size:0.75rem; font-weight:700;">Sadece A ($A \\setminus B$):</label>
          <input type="number" id="venn-only-a" value="5" min="0" max="30" style="width:100%; padding:6px; border-radius:6px; border:1px solid #cbd5e1;" oninput="InteractiveModule.updateVennLab()">
        </div>
        <div>
          <label style="font-size:0.75rem; font-weight:700;">Kesişim ($A \\cap B$):</label>
          <input type="number" id="venn-both" value="3" min="0" max="30" style="width:100%; padding:6px; border-radius:6px; border:1px solid #cbd5e1;" oninput="InteractiveModule.updateVennLab()">
        </div>
        <div>
          <label style="font-size:0.75rem; font-weight:700;">Sadece B ($B \\setminus A$):</label>
          <input type="number" id="venn-only-b" value="4" min="0" max="30" style="width:100%; padding:6px; border-radius:6px; border:1px solid #cbd5e1;" oninput="InteractiveModule.updateVennLab()">
        </div>
      </div>

      <div id="venn-output-box" class="sim-output-box"></div>
    `;
    this.updateVennLab();
  },

  updateVennLab() {
    const onlyA = parseInt(document.getElementById("venn-only-a").value, 10) || 0;
    const both = parseInt(document.getElementById("venn-both").value, 10) || 0;
    const onlyB = parseInt(document.getElementById("venn-only-b").value, 10) || 0;

    const sA = onlyA + both;
    const sB = onlyB + both;
    const sUnion = onlyA + both + onlyB;

    const out = document.getElementById("venn-output-box");
    out.innerHTML = `
      <div>$$s(A \\cup B) = ${sA} + ${sB} - ${both} = ${sUnion}$$</div>
      <div style="display:flex; justify-content:space-around; font-size:0.84rem; margin-top:8px;">
        <span>$s(A) = ${sA}$</span>
        <span>$s(B) = ${sB}$</span>
        <span>$s(A \\cap B) = ${both}$</span>
        <span>$s(A \\cup B) = ${sUnion}$</span>
      </div>
    `;
    window.App.renderMath();
  }
};
