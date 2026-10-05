# -*- coding: utf-8 -*-
with open("/Users/gokalpemirbas/.gemini/antigravity/scratch/matematik9-app/index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the stats grid with 3 items
old_grid = """      <!-- Hızlı Özet Sayaçları -->
      <div class="stats-grid" style="margin-bottom:24px;">
        <div class="stat-box">
          <div class="stat-value" id="home-stat-solved">0 / 269</div>
          <div class="stat-title">Çözülen Soru</div>
        </div>
        <div class="stat-box" onclick="App.switchView('quiz'); QuizModule.setStatusFilter('wrong');" style="cursor:pointer;">
          <div class="stat-value" style="color:var(--rose);" id="home-stat-wrong">0</div>
          <div class="stat-title">Yanlışlar Defteri ➔</div>
        </div>
      </div>"""

new_grid = """      <!-- Hızlı Özet Sayaçları -->
      <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom:24px;">
        <div class="stat-box">
          <div class="stat-value" id="home-stat-solved" style="font-size:1.3rem;">0 / 269</div>
          <div class="stat-title">Çözülen Soru</div>
        </div>
        <div class="stat-box" onclick="App.switchView('quiz'); QuizModule.setStatusFilter('wrong');" style="cursor:pointer;">
          <div class="stat-value" style="color:var(--rose); font-size:1.3rem;" id="home-stat-wrong">0</div>
          <div class="stat-title">Yanlışlar ➔</div>
        </div>
        <div class="stat-box" onclick="App.switchView('cards');" style="cursor:pointer;">
          <div class="stat-value" style="color:#8b5cf6; font-size:1.3rem;" id="home-stat-cards">0 / 105</div>
          <div class="stat-title">Kartlar ➔</div>
        </div>
      </div>"""

if old_grid in content:
    content = content.replace(old_grid, new_grid)
    with open("/Users/gokalpemirbas/.gemini/antigravity/scratch/matematik9-app/index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("HTML updated successfully!")
else:
    print("Pattern not found, skipping.")
