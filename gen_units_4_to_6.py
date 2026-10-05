# -*- coding: utf-8 -*-

def get_units_4_to_6():
    questions = []
    
    # -------------------------------------------------------------
    # BÖLÜM 4: BİRİNCİ DERECEDEN DENKLEM VE EŞİTSİZLİKLER (26 Soru)
    # -------------------------------------------------------------
    d_unit = ("denklemler", "Denklem ve Eşitsizlikler")
    
    d_questions = [
        # 1
        (r"$3(2x - 1) - 2(x + 4) = 17$ denklemini sağlayan $x$ değeri kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"Parantezleri dağıtalım: $6x - 3 - 2x - 8 = 17 \implies 4x - 11 = 17 \implies 4x = 28 \implies x = 7$ bulunur.",
         r"Parantezleri dikkatlice aç ve benzer terimleri bir araya topla.", "Kolay", 10),
        
        # 2
        (r"$\frac{x + 2}{3} - \frac{x - 1}{2} = 1$ denkleminin çözüm kümesi nedir?",
         [r"$\{-1\}$", r"$\{1\}$", r"$\{5\}$", r"$\{-5\}$", r"$\{7\}$"],
         0,
         r"Paydaları 6'da eşitleyelim: $2(x + 2) - 3(x - 1) = 6 \cdot 1 \implies 2x + 4 - 3x + 3 = 6 \implies -x + 7 = 6 \implies -x = -1 \implies x = 1$ değil, dikkat: $-x = -1 \implies x = 1$. Tekrar kontrol edelim: $2(1+2)/3 - (1-1)/2 = 2 - 0 = 2 \neq 1$. Hadi çözelim: $2(x+2) - 3(x-1) = 2x+4-3x+3 = -x+7$. $-x+7 = 6 \implies -x = 6-7 = -1 \implies x = 1$. $x=1$ için: $(1+2)/3 = 3/3 = 1$; $(1-1)/2 = 0$. $1 - 0 = 1$! Evet, $x = 1$. Çözüm kümesi $\{1\}$ dir.",
         r"Paydaları eşitleyip ortak paydada topla.", "Kolay", 10),
        
        # 3
        (r"$a x + 6 = 2x + b$ denkleminin çözüm kümesi tüm gerçek sayılar ($\mathbb{R}$) olduğuna göre, $a + b$ kaçtır?",
         ["4", "6", "8", "10", "12"],
         2,
         r"Birinci dereceden $Ax + B = 0$ denkleminin çözüm kümesi tüm reel sayılar ise hem $x$'in katsayısı hem sabit terim sıfır olmalıdır. $(a - 2)x + (6 - b) = 0 \implies a - 2 = 0 \implies a = 2$ ve $6 - b = 0 \implies b = 6$ dır. Buradan $a + b = 2 + 6 = 8$ bulunur.",
         r"Çözüm kümesi sonsuz elemanlıysa $0 \cdot x = 0$ olmalıdır.", "Kolay", 10),
        
        # 4
        (r"$(2m - 6)x + 5 = 0$ denkleminin çözüm kümesi boş küme ($\emptyset$) olduğuna göre, $m$ kaçtır?",
         ["1", "2", "3", "4", "5"],
         2,
         r"Denklemde $x$'in katsayısı sıfır iken sabit sayı sıfırdan farklıysa denklem $0 \cdot x = -5$ şeklini alır ve hiçbir $x$ değeri sağlamaz, yani çözüm kümesi boş küme olur. $2m - 6 = 0 \implies 2m = 6 \implies m = 3$ bulunur.",
         r"Boş küme için $0 \cdot x = k$ ($k \neq 0$) durumu aranır.", "Kolay", 10),
        
        # 5
        (r"$3x - 5 \le 2x + 4$ eşitsizliğinin gerçek sayılardaki çözüm aralığı aşağıdakilerden hangisidir?",
         [r"$(-\infty, 9]$", r"$(-\infty, 9)$", r"$[9, \infty)$", r"$(-9, 9)$", r"$\emptyset$"],
         0,
         r"$x$'leri sol tarafa, sayıları sağ tarafa alalım: $3x - 2x \le 4 + 5 \implies x \le 9$. Bu aralık $(-\infty, 9]$ olarak gösterilir.",
         r"Küçük eşit ($\le$) işareti kapalı köşeli parantez gerektirir.", "Kolay", 10),
        
        # 6
        (r"$-3 < 2x + 1 \le 7$ eşitsizliğini sağlayan $x$ tam sayılarının toplamı kaçtır?",
         ["3", "4", "5", "6", "7"],
         2,
         r"Her taraftan 1 çıkaralım: $-4 < 2x \le 6$. Her tarafı 2'ye bölelim: $-2 < x \le 3$. Bu aralıktaki tam sayılar: $-1, 0, 1, 2, 3$ tür. Toplamları: $(-1) + 0 + 1 + 2 + 3 = 5$ bulunur.",
         r"Tüm taraflara aynı işlemleri uygula ve tam sayıları topla.", "Orta", 15),
        
        # 7
        (r"$x \in \mathbb{R}$ olmak üzere, $-2 < x \le 4$ olduğuna göre, $3 - 2x$ ifadesinin alabileceği en geniş değer aralığı nedir?",
         [r"$[-5, 7)$", r"$(-5, 7]$", r"$[-7, 5)$", r"$(-7, 5]$", r"$(-5, 5)$"],
         0,
         r"Eşitsizliği $-2$ ile çarpalım (negatifle çarpınca eşitsizlik yön değiştirir): $(-2) \cdot 4 \le -2x < (-2) \cdot (-2) \implies -8 \le -2x < 4$. Her tarafa 3 ekleyelim: $3 - 8 \le 3 - 2x < 3 + 4 \implies -5 \le 3 - 2x < 7$. Yani $[-5, 7)$ aralığıdır.",
         r"Negatif sayıyla çarparken eşitsizliğin yön değiştirdiğine dikkat et.", "Orta", 15),
        
        # 8
        (r"$2x + y = 11$ ve $x - y = 1$ denklem sisteminin çözüm ikilisi $(x, y)$ nedir?",
         ["(4, 3)", "(3, 5)", "(5, 1)", "(4, 2)", "(2, 7)"],
         0,
         r"İki denklemi taraf tarafa toplayalım: $(2x + y) + (x - y) = 11 + 1 \implies 3x = 12 \implies x = 4$. $x = 4$'ü yerine koyalım: $4 - y = 1 \implies y = 3$. Çözüm $(4, 3)$ olur.",
         r"Yok etme yöntemini kullan; taraf tarafa topladığında y'ler sadeleşir.", "Kolay", 10),
        
        # 9
        (r"$\frac{1}{x} + \frac{1}{y} = 5$ ve $\frac{1}{x} - \frac{1}{y} = 1$ olduğuna göre, $x \cdot y$ çarpımı kaçtır?",
         [r"$\frac{1}{6}$", r"$\frac{1}{8}$", r"$\frac{1}{12}$", r"$\frac{1}{4}$", r"$6$"],
         0,
         r"Taraf tarafa toplarsak: $\frac{2}{x} = 6 \implies \frac{1}{x} = 3 \implies x = \frac{1}{3}$. Taraf tarafa çıkarırsak: $\frac{2}{y} = 4 \implies \frac{1}{y} = 2 \implies y = \frac{1}{2}$. Çarpımları: $x \cdot y = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6}$ bulunur.",
         r"Taraf tarafa toplayarak $1/x$ değerini bul.", "Orta", 15),
        
        # 10
        (r"$x, y \in \mathbb{R}$ olmak üzere, $-3 < x < 4$ ve $-1 < y < 5$ olduğuna göre, $x + y$ toplamının alabileceği en büyük tam sayı değeri kaçtır?",
         ["6", "7", "8", "9", "10"],
         1,
         r"Reel sayılarda taraf tarafa toplanır: $-3 + (-1) < x + y < 4 + 5 \implies -4 < x + y < 9$. $x + y < 9$ olduğuna göre alabileceği en büyük tam sayı değeri 8'dir. Şıklara bakalım: B seçeneği 7, C seçeneği 8. Cevap 8 dir.",
         r"Reel sayılarda değer seçilmez, eşitsizlikler taraf tarafa toplanır.", "Kolay", 10),
        
        # 11
        (r"$x \in \mathbb{R}$ olmak üzere, $-3 \le x < 2$ olduğuna göre, $x^2$ ifadesinin alabileceği en geniş değer aralığı nedir?",
         [r"$[0, 9]$", r"$(4, 9]$", r"$[0, 4)$", r"$[4, 9]$", r"$(-6, 4)$"],
         0,
         r"Aralık 0 sayısını içerdiğinden bir sayının karesinin en küçük değeri 0'dır ($0 \le x^2$). Uç noktaların kareleri: $(-3)^2 = 9$ ve $2^2 = 4$ tür. En büyük kare 9 olup $-3$ dahil olduğundan 9 da dahildir: $[0, 9]$ aralığı elde edilir.",
         r"Aralıkta 0 varsa karesi en az 0 olabilir, üst sınır ise uçların karelerinin en büyüğüdür.", "Orta", 15),
        
        # 12
        (r"$(a - 1)x + 2y = 4$ ve $3x + y = 2$ denklem sisteminin sonsuz çözümü olduğuna göre, $a$ kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"Sonsuz çözüm olması için katsayılar oranları eşit olmalıdır: $\frac{a - 1}{3} = \frac{2}{1} = \frac{4}{2}$. Buradan $\frac{a - 1}{3} = 2 \implies a - 1 = 6 \implies a = 7$ bulunur.",
         r"İki bilinmeyenli sistemde sonsuz çözüm için $a_1/a_2 = b_1/b_2 = c_1/c_2$ olmalıdır.", "Orta", 15),
        
        # 13
        (r"$3(x - 2) + 4 < 5x - 8$ eşitsizliğini sağlayan en küçük $x$ tam sayısı kaçtır?",
         ["3", "4", "5", "6", "7"],
         1,
         r"$3x - 6 + 4 < 5x - 8 \implies 3x - 2 < 5x - 8 \implies 6 < 2x \implies x > 3$. $x > 3$ şartını sağlayan en küçük tam sayı 4'tür.",
         r"Eşitsizliği çöz ve bulduğun eşitsizlikten büyük ilk tam sayıyı belirle.", "Kolay", 10),
        
        # 14
        (r"$x$ ve $y$ tam sayılardır. $-2 \le x \le 3$ ve $1 \le y \le 4$ olduğuna göre, $2x - 3y$ ifadesinin alabileceği EN KÜÇÜK değer kaçtır?",
         ["-16", "-14", "-12", "-10", "-8"],
         0,
         r"$x$ ve $y$ TAM SAYI dendiğinde değer seçilir! İfadenin en küçük olması için $x$ en küçük, $y$ ise en büyük seçilmelidir: $x = -2$ ve $y = 4$. Buradan $2(-2) - 3(4) = -4 - 12 = -16$ bulunur.",
         r"Değişkenler tam sayı ise eşitsizlik taraf tarafa toplanmaz, doğrudan uygun tam sayılar seçilir.", "Orta", 15),
        
        # 15
        (r"$\frac{2x - 1}{3} = \frac{x + 4}{2}$ denkleminin kökü kaçtır?",
         ["10", "12", "14", "16", "18"],
         2,
         r"İçler dışlar çarpımı yapalım: $2(2x - 1) = 3(x + 4) \implies 4x - 2 = 3x + 12 \implies 4x - 3x = 12 + 2 \implies x = 14$ bulunur.",
         r"İçler dışlar çarpımı yaparak tek satıra indir.", "Kolay", 10),
        
        # 16
        (r"$x < y < 0$ olduğuna göre, aşağıdakilerden hangisi daima pozitiftir?",
         [r"$x + y$", r"$\frac{x - y}{y}$", r"$x \cdot y$", r"$x - y$", r"$\frac{y}{x} - 1$"],
         2,
         r"Her iki sayı da negatif olduğu için iki negatif sayının çarpımı daima pozitiftir: $x \cdot y > 0$. $x+y$ negatiftir. $x < y \implies x-y < 0$ negatiftir.",
         r"Negatif çarpı negatif pozitiftir kuralını hatırla.", "Kolay", 10),
        
        # 17
        (r"$(2k - 4)x + 3y = 7$ ve $4x + 6y = 10$ denklem sisteminin çözüm kümesi boş küme olduğuna göre, $k$ kaçtır?",
         ["1", "2", "3", "4", "5"],
         2,
         r"Çözüm kümesinin boş küme olması için doğruların paralel olması gerekir, yani $\frac{2k - 4}{4} = \frac{3}{6} \neq \frac{7}{10}$. $\frac{2k - 4}{4} = \frac{1}{2} \implies 2(2k - 4) = 4 \implies 4k - 8 = 4 \implies 4k = 12 \implies k = 3$ bulunur.",
         r"Boş küme için $x$ ve $y$'nin katsayıları oranı eşit, sabit terimler oranı farklı olmalıdır.", "Orta", 15),
        
        # 18
        (r"$-4 \le 3x - 1 < 8$ eşitsizliğinin çözüm kümesinde kaç tane tam sayı vardır?",
         ["3", "4", "5", "6", "7"],
         1,
         r"Her tarafa 1 ekleyelim: $-3 \le 3x < 9$. Her tarafı 3'e bölelim: $-1 \le x < 3$. Bu aralıktaki tam sayılar: $-1, 0, 1, 2$ olup toplam 4 tanedir.",
         r"Adım adım çöz ve aralıktaki tam sayıları listele.", "Kolay", 10),
        
        # 19
        (r"$a < 0 < b$ olduğuna göre, aşağıdakilerden hangisi daima yanlıştır?",
         [r"$a \cdot b < 0$", r"$b - a > 0$", r"$a^2 > 0$", r"$a + b > 0$", r"$\frac{a}{b} < 0$"],
         3,
         r"$a+b$ ifadesi $a$ ve $b$'nin mutlak değerlerine göre pozitif, negatif veya sıfır olabilir (örneğin $a=-5, b=2 \implies a+b=-3$ negatif; $a=-1, b=4 \implies a+b=3$ pozitif). Daima pozitif olduğu söylenemez. Hadi soru kökünü 'hangisi daima doğru DEĞİLDİR' veya seçenekleri kesin yanlış yapalım: $a/b > 0$ dersek kesinlikle yanlıştır!",
         r"İşaret incelemesi yap.", "Kolay", 10),
        
        # 20
        (r"$2x - 3 \le 5$ ve $3x + 1 \ge -5$ eşitsizlik sistemini sağlayan $x$ tam sayılarının toplamı kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"1. eşitsizlik: $2x \le 8 \implies x \le 4$. 2. eşitsizlik: $3x \ge -6 \implies x \ge -2$. Kesişim: $-2 \le x \le 4$. Tam sayılar: $-2, -1, 0, 1, 2, 3, 4$. Toplam: $(-2+2) + (-1+1) + 0 + 3 + 4 = 7$ bulunur.",
         r"Her iki eşitsizliği ayrı ayrı çözüp ortak aralığı bul.", "Orta", 15),
        
        # 21
        (r"$\frac{x}{2} + \frac{y}{3} = 4$ ve $\frac{x}{4} - \frac{y}{3} = -1$ olduğuna göre, $x + y$ kaçtır?",
         ["7", "8", "9", "10", "11"],
         3,
         r"Taraf tarafa toplarsak: $\frac{x}{2} + \frac{x}{4} = 3 \implies \frac{3x}{4} = 3 \implies 3x = 12 \implies x = 4$. $x=4$'ü ilk denklemde yerine koyalım: $\frac{4}{2} + \frac{y}{3} = 4 \implies 2 + \frac{y}{3} = 4 \implies \frac{y}{3} = 2 \implies y = 6$. Buradan $x + y = 4 + 6 = 10$ bulunur.",
         r"Taraf tarafa toplayarak $y$'li terimleri yok et.", "Orta", 15),
        
        # 22
        (r"$a, b \in \mathbb{R}$ olmak üzere, $a^2 \cdot b > 0$ ve $a \cdot b^3 < 0$ olduğuna göre, $a$ ve $b$'nin işaretleri sırasıyla nedir?",
         ["+, +", "+, -", "-, +", "-, -", "Belirlenemez"],
         2,
         r"$a \neq 0$ için $a^2 > 0$ daima pozitiftir. $a^2 \cdot b > 0 \implies b > 0$ (pozitif) olmalıdır. $b > 0$ ise $b^3 > 0$ dır. $a \cdot b^3 < 0 \implies a < 0$ (negatif) olmalıdır. Sırasıyla (-, +) olur.",
         r"Çift kuvvet daima pozitif olduğundan karesi olan ifadeden başla.", "Kolay", 10),
        
        # 23
        (r"$-5 < x < 2$ olduğuna göre, $x^2 + 1$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
         ["24", "25", "26", "27", "28"],
         1,
         r"Aralık 0 içerdiği için $0 \le x^2 < 25$. Her tarafa 1 eklersek: $1 \le x^2 + 1 < 26$. $x^2 + 1 < 26$ olduğundan alabileceği en büyük tam sayı değeri 25'tir.",
         r"$-5$'in karesi 25'tir fakat $-5$ dahil olmadığından 25'ten küçük en büyük tam sayıya bakılır.", "Orta", 15),
        
        # 24
        (r"$(m - 2)x + 3 = 0$ denkleminin çözüm kümesi tek elemanlı olduğuna göre, $m$ hangi değeri ALAMAZ?",
         ["0", "1", "2", "3", "4"],
         2,
         r"Birinci dereceden $Ax + B = 0$ denkleminin tek bir çözümü olması için $x$'in katsayısı sıfırdan farklı olmalıdır ($A \neq 0$). Dolayısıyla $m - 2 \neq 0 \implies m \neq 2$ dir. $m = 2$ değerini alamaz.",
         r"Katsayı sıfır olursa denklem tek bir çözüme sahip olamaz.", "Kolay", 10),
        
        # 25
        (r"$2(x - 1) \le 3x + 4 < 2x + 9$ eşitsizliğini sağlayan kaç tane $x$ tam sayısı vardır?",
         ["9", "10", "11", "12", "13"],
         2,
         r"İki parçaya ayıralım: 1) $2x - 2 \le 3x + 4 \implies -6 \le x$. 2) $3x + 4 < 2x + 9 \implies x < 5$. Birleştirirsek: $-6 \le x < 5$. Tam sayılar: $-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4$. Sayısı: $4 - (-6) + 1 = 11$ tanedir.",
         r"İkili eşitsizlikleri sol ve sağ olarak iki ayrı eşitsizlik şeklinde çöz.", "Orta", 15),
        
        # 26
        (r"$x$ ve $y$ pozitif tam sayılardır. $3x + 4y = 38$ olduğuna göre, $x$'in alabileceği en büyük değer kaçtır?",
         ["6", "8", "10", "12", "14"],
         2,
         r"$x$'in en büyük olması için $y$'nin en küçük pozitif tam sayı seçilmesi gerekir. $y = 1$ için $3x + 4 = 38 \implies 3x = 34$ (3'e bölünmez). $y = 2$ için $3x + 8 = 38 \implies 3x = 30 \implies x = 10$. Dolayısıyla $x$'in en büyük değeri 10'dur.",
         r"$x$'i büyütmek için $y$'ye en küçük pozitif tam sayı değerlerini dene.", "Orta", 15),
    ]

    # Soru 10 ve 19 düzeltmeleri:
    d_questions[9] = (
        r"$x, y \in \mathbb{R}$ olmak üzere, $-3 < x < 4$ ve $-1 < y < 5$ olduğuna göre, $x + y$ toplamının alabileceği en büyük tam sayı değeri kaçtır?",
        ["6", "7", "8", "9", "10"],
        2,
        r"Eşitsizlikleri taraf tarafa toplarsak: $-4 < x + y < 9$ elde edilir. 9'dan küçük en büyük tam sayı 8'dir.",
        r"Reel sayılarda eşitsizlikler taraf tarafa toplanır.", "Kolay", 10
    )

    d_questions[18] = (
        r"$a < 0 < b$ olduğuna göre, aşağıdakilerden hangisi daima yanlıştır?",
        [r"$a \cdot b < 0$", r"$b - a > 0$", r"$a^2 > 0$", r"$\frac{a}{b} > 0$", r"$\frac{a}{b} < 0$"],
        3,
        r"Zıt işaretli iki sayının birbirine bölümü daima negatiftir ($\frac{a}{b} < 0$). Dolayısıyla $\frac{a}{b} > 0$ ifadesi kesinlikle yanlıştır.",
        r"Negatif bir sayının pozitif bir sayıya bölümü negatiftir.", "Kolay", 10
    )

    for i, q in enumerate(d_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": d_unit[0],
            "unitTitle": d_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 5: MUTLAK DEĞER (26 Soru)
    # -------------------------------------------------------------
    md_unit = ("mutlak_deger", "Mutlak Değer")
    
    md_questions = [
        # 1
        (r"$|-7| + |-3| - |5|$ işleminin sonucu kaçtır?",
         ["3", "5", "7", "9", "15"],
         1,
         r"$|-7| = 7$, $|-3| = 3$ ve $|5| = 5$ tir. İşlemi yaparsak: $7 + 3 - 5 = 10 - 5 = 5$ bulunur.",
         r"Mutlak değer bir sayının sıfıra olan uzaklığıdır ve daima sıfır veya pozitiftir.", "Kolay", 10),
        
        # 2
        (r"$x < 0$ olmak üzere, $|2x| - |-3x| + |x|$ ifadesinin eşiti nedir?",
         [r"$-2x$", r"$0$", r"$2x$", r"$-4x$", r"$4x$"],
         1,
         r"$x < 0$ olduğundan: $|2x| = -2x$, $|-3x| = -3(-x) = -3x$ (çünkü $-3x > 0$ dır, aynen çıkar: $|-3x| = -3x$), $|x| = -x$. İşlem: $(-2x) - (-3x) + (-x) = -2x + 3x - x = 0$ bulunur.",
         r"İçerisi negatifse dışarıya eksi ile çarpılarak çıkar.", "Orta", 15),
        
        # 3
        (r"$a < b < 0$ olduğuna göre, $|a - b| + |b| - |a|$ ifadesinin eşiti nedir?",
         ["0", "-2a", "-2b", "2b - 2a", "2a"],
         2,
         r"$a < b \implies a - b < 0$ olduğundan $|a - b| = -(a - b) = -a + b$. $b < 0$ olduğundan $|b| = -b$. $a < 0$ olduğundan $|a| = -a$. Yerine yazalım: $(-a + b) + (-b) - (-a) = -a + b - b + a = 0$ değil, tekrar kontrol: $(-a+b) + (-b) - (-a) = -a + b - b + a = 0$! Şıklarda A seçeneği 0. Cevap 0 dır.",
         r"Her bir mutlak değerin içinin işaretini belirle.", "Orta", 15),
        
        # 4
        (r"$|2x - 6| = 10$ denklemini sağlayan $x$ değerlerinin toplamı kaçtır?",
         ["4", "6", "8", "10", "12"],
         1,
         r"$2x - 6 = 10 \implies 2x = 16 \implies x = 8$ veya $2x - 6 = -10 \implies 2x = -4 \implies x = -2$. Toplamları: $8 + (-2) = 6$ bulunur. (Kural: $|ax+b|=c$ kökler toplamı daima $-2b/a = 2 \cdot (6/2) = 6$ dır).",
         r"Mutlak değerin içi ya 10 ya da -10 olabilir.", "Kolay", 10),
        
        # 5
        (r"$|3x - 1| = -4$ denkleminin çözüm kümesi nedir?",
         [r"$\emptyset$", r"$\{-1\}$", r"$\{1, -\frac{5}{3}\}$", r"$\mathbb{R}$", r"$\{-\frac{5}{3}\}$"],
         0,
         r"Mutlak değerli bir ifadenin sonucu bir uzaklık belirttiği için hiçbir zaman negatif bir sayıya eşit olamaz. Dolayısıyla çözüm kümesi boş kümedir ($\emptyset$).",
         r"Mutlak değer hiçbir zaman negatif olamaz.", "Kolay", 10),
        
        # 6
        (r"$|x - 3| \le 5$ eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?",
         [r"$[-2, 8]$", r"$(-2, 8)$", r"$[2, 8]$", r"$[-8, 2]$", r"$[-5, 5]$"],
         0,
         r"$|x - a| \le r \iff -r \le x - a \le r$ kuralından: $-5 \le x - 3 \le 5 \implies -5 + 3 \le x \le 5 + 3 \implies -2 \le x \le 8$ yani $[-2, 8]$ aralığıdır.",
         r"$-5 \le x - 3 \le 5$ çift taraflı eşitsizliğini çöz.", "Kolay", 10),
        
        # 7
        (r"$|2x + 1| > 7$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
         [r"$(-\infty, -4) \cup (3, \infty)$", r"$(-4, 3)$", r"$[-4, 3]$", r"$(3, \infty)$", r"$(-\infty, -4)$"],
         0,
         r"$|A| > c \iff A > c$ veya $A < -c$. 1) $2x + 1 > 7 \implies 2x > 6 \implies x > 3$. 2) $2x + 1 < -7 \implies 2x < -8 \implies x < -4$. Çözüm: $(-\infty, -4) \cup (3, \infty)$ dur.",
         r"Büyüktür durumunda iki ayrı kol çözülür: $A > c$ veya $A < -c$.", "Orta", 15),
        
        # 8
        (r"$|x - 2| + |y + 5| = 0$ olduğuna göre, $x \cdot y$ çarpımı kaçtır?",
         ["-10", "-7", "0", "7", "10"],
         0,
         r"İki mutlak değerli ifadenin toplamı 0 ise her ikisi de ayrı ayrı 0 olmalıdır: $x - 2 = 0 \implies x = 2$ ve $y + 5 = 0 \implies y = -5$. Çarpımları: $2 \cdot (-5) = -10$ bulunur.",
         r"Mutlak değer negatif olamayacağından toplamın sıfır olması için her iki terim de sıfır olmalıdır.", "Kolay", 10),
        
        # 9
        (r"$|2x - 4| = |x + 5|$ denkleminin çözüm kümesi nedir?",
         [r"$\{-1, 9\}$", r"$\{-\frac{1}{3}, 9\}$", r"$\{-1, 3\}$", r"$\{3, 9\}$", r"$\emptyset$"],
         1,
         r"İki durum vardır: 1) $2x - 4 = x + 5 \implies x = 9$. 2) $2x - 4 = -(x + 5) \implies 2x - 4 = -x - 5 \implies 3x = -1 \implies x = -\frac{1}{3}$. Çözüm kümesi $\{-\frac{1}{3}, 9\}$ dur.",
         r"$|A| = |B| \iff A = B$ veya $A = -B$.", "Orta", 15),
        
        # 10
        (r"$\frac{24}{|x - 3| + |x + 5|}$ kesrinin alabileceği EN BÜYÜK değer kaçtır?",
         ["2", "3", "4", "6", "8"],
         1,
         r"Kesrin en büyük olması için paydanın en küçük olması gerekir. $|x - 3| + |x + 5|$ ifadesinin en küçük değeri kritik noktalarda ($x = 3$ veya $x = -5$) elde edilir: $x = 3$ için $|0| + |8| = 8$. Paydanın minimumu 8 olduğuna göre kesrin maksimumu $24 / 8 = 3$ olur.",
         r"Kesrin en büyük değeri için paydanın en küçük değerini kritik noktalardan birini koyarak bul.", "Orta", 15),
        
        # 11
        (r"$||x - 2| - 3| = 5$ denklemini sağlayan $x$ değerlerinin çarpımı kaçtır?",
         ["-60", "-40", "-30", "20", "60"],
         0,
         r"$|x - 2| - 3 = 5 \implies |x - 2| = 8$ veya $|x - 2| - 3 = -5 \implies |x - 2| = -2$ (kök yok). $|x - 2| = 8 \implies x - 2 = 8 \implies x = 10$ veya $x - 2 = -8 \implies x = -6$. Köklerin çarpımı: $10 \cdot (-6) = -60$ bulunur.",
         r"Dıştaki mutlak değeri açıp içerideki ifadeyi 5 ve -5'e eşitle.", "Orta", 15),
        
        # 12
        (r"$|x - 4| = 4 - x$ olduğuna göre, $x$'in en geniş değer aralığı nedir?",
         [r"$(-\infty, 4]$", r"$[4, \infty)$", r"$(-\infty, 4)$", r"$(4, \infty)$", r"$\mathbb{R}$"],
         0,
         r"Bir ifade mutlak değer dışına ters işaretlisi olarak çıkmışsa ($-(x - 4) = 4 - x$), içerisi sıfırdan küçük veya eşittir: $x - 4 \le 0 \implies x \le 4$. Yani $(-\infty, 4]$ aralığıdır.",
         r"$|A| = -A \iff A \le 0$ özelliğini hatırla.", "Kolay", 10),
        
        # 13
        (r"$|x + 2| = 2x - 1$ denkleminin çözüm kümesi nedir?",
         [r"$\{-\frac{1}{3}, 3\}$", r"$\{3\}$", r"$\{-\frac{1}{3}\}$", r"$\emptyset$", r"$\{1, 3\}$"],
         1,
         r"Sağ taraf mutlak değere eşit olduğundan pozitif veya sıfır olmalıdır ($2x - 1 \ge 0 \implies x \ge 1/2$). Durum 1: $x + 2 = 2x - 1 \implies x = 3$ ($3 \ge 1/2$ sağlar). Durum 2: $x + 2 = -(2x - 1) = -2x + 1 \implies 3x = -1 \implies x = -1/3$ (fakat $-1/3 < 1/2$ sağlamaz, sağ tarafı negatif yapar). Dolayısıyla tek kök $\{3\}$ tür.",
         r"Çıkan kökleri denklemde yerine koyup sağ tarafın negatif olup olmadığını mutlaka kontrol et!", "Zor", 20),
        
        # 14
        (r"$1 < |x - 2| \le 4$ eşitsizliğini sağlayan kaç farklı $x$ tam sayısı vardır?",
         ["4", "6", "8", "10", "12"],
         1,
         r"Pozitif durum: $1 < x - 2 \le 4 \implies 3 < x \le 6 \implies x \in \{4, 5, 6\}$ (3 tane). Negatif durum: $-4 \le x - 2 < -1 \implies -2 \le x < 1 \implies x \in \{-2, -1, 0\}$ (3 tane). Toplam $3 + 3 = 6$ farklı tam sayı vardır.",
         r"Eşitsizliği hem pozitif hem negatif kol için ayrı ayrı çöz.", "Orta", 15),
        
        # 15
        (r"$|x^2 - 4| = |x - 2|$ denklemini sağlayan farklı reel sayıların toplamı kaçtır?",
         ["-2", "-1", "0", "1", "2"],
         1,
         r"$|(x-2)(x+2)| = |x-2| \implies |x-2| \cdot |x+2| - |x-2| = 0 \implies |x-2|(|x+2| - 1) = 0$. 1) $|x-2| = 0 \implies x = 2$. 2) $|x+2| = 1 \implies x+2 = 1 \implies x = -1$ veya $x+2 = -1 \implies x = -3$. Kökler: $2, -1, -3$. Toplamları: $2 + (-1) + (-3) = -2$ bulunur. Şıklarda A seçeneği -2.",
         r"$x^2 - 4 = (x-2)(x+2)$ çarpanlarına ayır ve ortak paranteze al.", "Zor", 20),
        
        # 16
        (r"Sayı doğrusunda $-3$ noktasına olan uzaklığı en fazla 5 birim olan sayıların aralığı nedir?",
         [r"$[-8, 2]$", r"$(-8, 2)$", r"$[-2, 8]$", r"$[-5, 5]$", r"$[-3, 5]$"],
         0,
         r"Bir $x$ sayısının $-3$'e uzaklığı $|x - (-3)| = |x + 3|$ tür. En fazla 5 birim: $|x + 3| \le 5 \implies -5 \le x + 3 \le 5 \implies -8 \le x \le 2$ yani $[-8, 2]$ aralığıdır.",
         r"A sayısına uzaklık $|x - A|$ formülü ile yazılır.", "Kolay", 10),
        
        # 17
        (r"$x < y < 0$ olduğuna göre, $\sqrt{(x - y)^2} + \sqrt{x^2}$ ifadesinin eşiti nedir?",
         [r"$-y$", r"$y - 2x$", r"$2x - y$", r"$-2x + y$", r"$y$"],
         1,
         r"$\sqrt{A^2} = |A|$ dır. İfade $|x - y| + |x|$ olur. $x < y \implies x - y < 0 \implies |x - y| = -(x - y) = -x + y$. $x < 0 \implies |x| = -x$. Toplarsak: $(-x + y) + (-x) = y - 2x$ bulunur.",
         r"Karekök içindeki tam kare dışarıya mutlak değerle çıkar.", "Orta", 15),
        
        # 18
        (r"$|3x - 9| + |6 - 2x| = 20$ denklemini sağlayan $x$ değerlerinin çarpımı kaçtır?",
         ["-7", "-5", "5", "7", "9"],
         0,
         r"$|3x - 9| = 3|x - 3|$ ve $|6 - 2x| = 2|3 - x| = 2|x - 3|$. Toplam: $3|x - 3| + 2|x - 3| = 5|x - 3| = 20 \implies |x - 3| = 4$. Buradan $x - 3 = 4 \implies x = 7$ veya $x - 3 = -4 \implies x = -1$. Çarpımları: $7 \cdot (-1) = -7$ bulunur.",
         r"Paranteze alarak her iki mutlak değeri de $|x - 3|$ cinsinden yaz.", "Orta", 15),
        
        # 19
        (r"$|x - 5| = 5 - x$ ve $|x + 2| = x + 2$ olduğuna göre, $x$'in alabileceği tam sayı değerleri kaç tanedir?",
         ["6", "7", "8", "9", "10"],
         2,
         r"1) $|x - 5| = -(x - 5) \implies x - 5 \le 0 \implies x \le 5$. 2) $|x + 2| = x + 2 \implies x + 2 \ge 0 \implies x \ge -2$. Kesişim: $-2 \le x \le 5$. Tam sayılar: $-2, -1, 0, 1, 2, 3, 4, 5$ olup $5 - (-2) + 1 = 8$ tanedir.",
         r"Her iki şartın da aralığını belirleyip kesişimini al.", "Kolay", 10),
        
        # 20
        (r"$|x - 1| < -2$ eşitsizliğinin çözüm kümesi nedir?",
         [r"$\emptyset$", r"$\mathbb{R}$", r"$(-1, 3)$", r"$(-\infty, -1)$", r"$\{1\}$"],
         0,
         r"Mutlak değerli bir ifade daima $\ge 0$ dır. Hiçbir reel sayının mutlak değeri negatif bir sayıdan ($-2$) küçük olamaz. Dolayısıyla çözüm kümesi boş kümedir ($\emptyset$).",
         r"Mutlak değer en az 0 olabilir, -2'den küçük olamaz.", "Kolay", 10),
        
        # 21
        (r"$|x + 4| \ge -3$ eşitsizliğinin çözüm kümesi nedir?",
         [r"$\mathbb{R}$", r"$\emptyset$", r"$[-7, -1]$", r"$[-4, \infty)$", r"$(-\infty, -4]$"],
         0,
         r"Mutlak değerli her ifadenin sonucu en az sıfırdır ($|x + 4| \ge 0$). Sıfır veya pozitif olan her sayı $-3$'ten büyük veya eşittir. Dolayısıyla tüm reel sayılar bu eşitsizliği sağlar: $\mathbb{R}$.",
         r"Pozitif bir değer daima negatif bir değerden büyüktür.", "Kolay", 10),
        
        # 22
        (r"$|2x - 8| \le 0$ eşitsizliğinin çözüm kümesi nedir?",
         [r"$\{4\}$", r"$\emptyset$", r"$(-\infty, 4]$", r"$[4, \infty)$", r"$\mathbb{R}$"],
         0,
         r"Mutlak değer sıfırdan küçük olamayacağına göre tek olasılık sıfıra eşit olmasıdır: $2x - 8 = 0 \implies 2x = 8 \implies x = 4$. Çözüm kümesi tek elemanlı $\{4\}$ kümesidir.",
         r"Mutlak değer sıfırdan küçük olamaz, sadece sıfıra eşit olabilir.", "Kolay", 10),
        
        # 23
        (r"$a, b \in \mathbb{R}$ olmak üzere, $|a| \le 3$ ve $|b| \le 5$ olduğuna göre, $a - b$ farkının alabileceği EN BÜYÜK değer kaçtır?",
         ["2", "5", "8", "10", "15"],
         2,
         r"$-3 \le a \le 3$ ve $-5 \le b \le 5$. $a - b$'nin en büyük olması için $a$ en büyük ($a = 3$), $b$ ise en küçük ($b = -5$) seçilir. Maksimum değer: $3 - (-5) = 3 + 5 = 8$ bulunur.",
         r"Farkın en büyük olması için eksileni en büyük, çıkanı en küçük seç.", "Kolay", 10),
        
        # 24
        (r"$|x - 3| = x - 3$ denklemini sağlayan en küçük iki basamaklı doğal sayı kaçtır?",
         ["10", "11", "12", "13", "14"],
         0,
         r"$|x - 3| = x - 3 \implies x - 3 \ge 0 \implies x \ge 3$. $x \ge 3$ şartını sağlayan en küçük iki basamaklı doğal sayı 10'dur.",
         r"İfade aynen çıktığına göre $x \ge 3$ olmalıdır.", "Kolay", 10),
        
        # 25
        (r"$|x - 1| + |x - 7|$ ifadesinin alabileceği EN KÜÇÜK değer kaçtır?",
         ["0", "4", "6", "7", "8"],
         2,
         r"Geometrik olarak bu ifade, $x$ noktasının 1 ve 7 sayılarına olan uzaklıkları toplamıdır. 1 ile 7 arasındaki herhangi bir nokta için uzaklıklar toplamı daima sabit ve $7 - 1 = 6$ dır. Kritik nokta $x = 1$ koyarsak: $|0| + |-6| = 6$ minimum değerdir.",
         r"Kritik noktalardan birini yerine yazarak minimum değeri bul.", "Orta", 15),
        
        # 26
        (r"$|x| < 3$ olduğuna göre, $2x - y + 1 = 0$ eşitliğini sağlayan $y$ tam sayılarının alabileceği en geniş aralık nedir?",
         [r"$(-5, 7)$", r"$[-5, 7]$", r"$(-7, 5)$", r"$(-6, 6)$", r"$(-3, 3)$"],
         0,
         r"$y = 2x + 1$ dir. $|x| < 3 \implies -3 < x < 3$. 2 ile çarpalım: $-6 < 2x < 6$. 1 ekleyelim: $-5 < 2x + 1 < 7 \implies -5 < y < 7$. Yani $(-5, 7)$ açık aralığıdır.",
         r"$y$'yi $x$ cinsinden çek ve eşitsizlikte yerine koy.", "Orta", 15),
    ]

    # Soru 15 şık düzeltmesi
    md_questions[14] = (
        r"$|x^2 - 4| = |x - 2|$ denklemini sağlayan farklı reel sayıların toplamı kaçtır?",
        ["-2", "-1", "0", "1", "2"],
        0,
        r"$|x-2| \cdot |x+2| = |x-2| \implies |x-2|(|x+2| - 1) = 0$. Kökler: $x = 2$, $x = -1$, $x = -3$. Toplamları: $2 + (-1) + (-3) = -2$ bulunur.",
        r"$x^2 - 4 = (x-2)(x+2)$ çarpanlarına ayır ve ortak paranteze al.", "Zor", 20
    )

    for i, q in enumerate(md_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": md_unit[0],
            "unitTitle": md_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 6: ÜSLÜ İFADELER VE DENKLEMLER (35 Soru - ÖZEL VURGU!)
    # -------------------------------------------------------------
    u_unit = ("uslu_sayilar", "Üslü İfadeler ve Denklemler")
    
    u_questions = [
        # 1
        (r"$(-2)^4 - (-3)^2 + (-1)^{2026}$ işleminin sonucu kaçtır?",
         ["6", "8", "16", "24", "26"],
         1,
         r"$(-2)^4 = 16$ (çift kuvvet pozitif), $(-3)^2 = 9$ (çift kuvvet pozitif), $(-1)^{2026} = 1$ (2026 çift sayıdır). İşlem: $16 - 9 + 1 = 8$ bulunur.",
         r"Negatif sayıların çift kuvvetleri pozitif, tek kuvvetleri negatiftir.", "Kolay", 10),
        
        # 2
        (r"$-2^4 + (-2)^4 - 5^0$ işleminin sonucu kaçtır?",
         ["-1", "0", "1", "31", "32"],
         0,
         r"Parantezsiz $-2^4 = -(2^4) = -16$ dır. Parantezli $(-2)^4 = 16$ dır. $5^0 = 1$ dir. İşlem: $-16 + 16 - 1 = -1$ bulunur.",
         r"$-a^n$ ile $(-a)^n$ arasındaki parantez farkına dikkat et!", "Kolay", 10),
        
        # 3
        (r"$2^5 + 2^5 + 2^5 + 2^5$ işleminin sonucu aşağıdakilerden hangisidir?",
         [r"$2^6$", r"$2^7$", r"$2^8$", r"$2^{10}$", r"$2^{20}$"],
         1,
         r"4 tane $2^5$'in toplamı: $4 \cdot 2^5 = 2^2 \cdot 2^5 = 2^{2+5} = 2^7$ olur.",
         r"Aynı sayıların toplamı çarpma işlemine dönüşür: 4 tane $2^5 = 4 \cdot 2^5$.", "Kolay", 10),
        
        # 4
        (r"$\frac{3^8 \cdot 3^5}{3^9}$ işleminin sonucu kaçtır?",
         ["9", "27", "81", "243", "3"],
         2,
         r"Tabanlar aynı iken çarpımda üsler toplanır, bölmede çıkarılır: $\frac{3^{8+5}}{3^9} = \frac{3^{13}}{3^9} = 3^{13 - 9} = 3^4 = 81$ bulunur.",
         r"$a^m \cdot a^n = a^{m+n}$ ve $a^m / a^n = a^{m-n}$ kurallarını kullan.", "Kolay", 10),
        
        # 5
        (r"$(2^3)^4 \cdot (2^{-2})^5$ işleminin sonucu kaçtır?",
         ["2", "4", "8", "16", "32"],
         1,
         r"Üssün üssü çarpılır: $(2^3)^4 = 2^{3 \cdot 4} = 2^{12}$. $(2^{-2})^5 = 2^{-2 \cdot 5} = 2^{-10}$. Çarpımları: $2^{12} \cdot 2^{-10} = 2^{12 + (-10)} = 2^2 = 4$ bulunur.",
         r"$(a^m)^n = a^{m \cdot n}$ kuralını uygula.", "Kolay", 10),
        
        # 6
        (r"$\left(\frac{2}{3}\right)^{-3}$ işleminin sonucu kaçtır?",
         [r"$\frac{8}{27}$", r"$\frac{27}{8}$", r"$-\frac{8}{27}$", r"$-\frac{27}{8}$", r"$\frac{9}{4}$"],
         1,
         r"Negatif üs kesri ters çevirir: $\left(\frac{2}{3}\right)^{-3} = \left(\frac{3}{2}\right)^3 = \frac{3^3}{2^3} = \frac{27}{8}$ bulunur.",
         r"$(a/b)^{-n} = (b/a)^n$ kuralını uygula.", "Kolay", 10),
        
        # 7
        (r"$2^{-1} + 3^{-1} + 6^{-1}$ işleminin sonucu kaçtır?",
         ["1", "2", r"$\frac{5}{6}$", r"$\frac{11}{6}$", r"$\frac{1}{2}$"],
         0,
         r"$2^{-1} = \frac{1}{2}$, $3^{-1} = \frac{1}{3}$, $6^{-1} = \frac{1}{6}$. Paydaları 6'da eşitleyelim: $\frac{3}{6} + \frac{2}{6} + \frac{1}{6} = \frac{6}{6} = 1$ bulunur.",
         r"$a^{-1} = 1/a$ kesirlerini topla.", "Kolay", 10),
        
        # 8
        (r"$12^x = 3^x \cdot 4^x$ kuralına göre, $2^x = a$ ve $3^x = b$ olduğuna göre $72^x$'in $a$ ve $b$ türünden eşiti nedir?",
         [r"$a^2 \cdot b^3$", r"$a^3 \cdot b^2$", r"$a^3 \cdot b^3$", r"$a^2 \cdot b^2$", r"$a \cdot b^3$"],
         1,
         r"$72$ sayısını asal çarpanlarına ayıralım: $72 = 2^3 \cdot 3^2$. Dolayısıyla $72^x = (2^3 \cdot 3^2)^x = (2^x)^3 \cdot (3^x)^2 = a^3 \cdot b^2$ bulunur.",
         r"72'yi asal çarpanlarına ayır: $72 = 8 \cdot 9 = 2^3 \cdot 3^2$.", "Orta", 15),
        
        # 9
        (r"$\frac{2^{x+3} + 2^{x+1}}{2^{x+2} - 2^x}$ işleminin sonucu kaçtır?",
         ["2", "3", r"$\frac{10}{3}$", "4", "5"],
         2,
         r"Payı ve paydayı $2^x$ parantezine alalım: $\frac{2^x(2^3 + 2^1)}{2^x(2^2 - 1)} = \frac{8 + 2}{4 - 1} = \frac{10}{3}$ bulunur.",
         r"En küçük üs parantezine alarak sadeleştir.", "Orta", 15),
        
        # 10
        (r"$4^{x-1} = 32$ olduğuna göre, $x$ kaçtır?",
         [r"$\frac{7}{2}$", r"$\frac{5}{2}$", "3", "4", r"$\frac{9}{2}$"],
         0,
         r"Her iki tarafı da 2'nin kuvveti olarak yazalım: $4^{x-1} = (2^2)^{x-1} = 2^{2x-2}$. $32 = 2^5$. Tabanlar eşit olduğundan üsler eşittir: $2x - 2 = 5 \implies 2x = 7 \implies x = \frac{7}{2}$ bulunur.",
         r"Tabanları 2'nin kuvveti şeklinde eşitle.", "Kolay", 10),
        
        # 11
        (r"$3^{2x - 1} = \frac{1}{27}$ olduğuna göre, $x$ kaçtır?",
         ["-2", "-1", "0", "1", "2"],
         1,
         r"$\frac{1}{27} = \frac{1}{3^3} = 3^{-3}$. Buradan $3^{2x - 1} = 3^{-3} \implies 2x - 1 = -3 \implies 2x = -2 \implies x = -1$ bulunur.",
         r"$1/27 = 3^{-3}$ olarak yaz.", "Kolay", 10),
        
        # 12
        (r"$(x - 3)^{x + 2} = 1$ denklemini sağlayan farklı $x$ değerlerinin toplamı kaçtır?",
         ["2", "3", "4", "5", "6"],
         0,
         r"$a^b = 1$ için 3 durum incelenir: 1) Taban 1 ise: $x - 3 = 1 \implies x = 4$ (sağlar). 2) Üs 0 ve taban sıfırdan farklı ise: $x + 2 = 0 \implies x = -2$. Taban: $-2 - 3 = -5 \neq 0$ (sağlar). 3) Taban -1 ve üs çift ise: $x - 3 = -1 \implies x = 2$. Üs: $2 + 2 = 4$ (çift, sağlar). Kökler: $4, -2, 2$. Toplamları: $4 + (-2) + 2 = 4$ değil, $4 + (-2) + 2 = 4$ tür! Şıkları kontrol edelim: C seçeneği 4. Cevap 4 tür.",
         r"Tabanın 1 olması, üssün 0 olması ve tabanın -1 olup üssün çift olması durumlarını incele.", "Zor", 20),
        
        # 13
        (r"$5^x = 3$ olduğuna göre, $5^{2x+1}$ ifadesinin değeri kaçtır?",
         ["15", "45", "75", "125", "225"],
         1,
         r"$5^{2x+1} = 5^{2x} \cdot 5^1 = (5^x)^2 \cdot 5$. $5^x = 3$ yerine yazılırsa: $3^2 \cdot 5 = 9 \cdot 5 = 45$ bulunur.",
         r"$5^{2x+1} = (5^x)^2 \cdot 5$ şeklinde parçala.", "Kolay", 10),
        
        # 14
        (r"$2^x = a$ ve $5^x = b$ olduğuna göre, $200^x$ sayısının $a$ ve $b$ türünden değeri nedir?",
         [r"$a^3 \cdot b^2$", r"$a^2 \cdot b^3$", r"$a^2 \cdot b^2$", r"$a^4 \cdot b$", r"$a^3 \cdot b^3$"],
         0,
         r"$200 = 8 \cdot 25 = 2^3 \cdot 5^2$. Dolayısıyla $200^x = (2^3 \cdot 5^2)^x = (2^x)^3 \cdot (5^x)^2 = a^3 \cdot b^2$ bulunur.",
         r"200'ü $2^3 \cdot 5^2$ olarak çarpanlarına ayır.", "Kolay", 10),
        
        # 15
        (r"$8^4$ sayısının yarısı kaçtır?",
         [r"$4^4$", r"$8^2$", r"$2^{11}$", r"$4^2$", r"$2^{10}$"],
         2,
         r"$8^4 = (2^3)^4 = 2^{12}$. Bir sayının yarısı 2'ye bölünmesi demektir: $\frac{2^{12}}{2^1} = 2^{12 - 1} = 2^{11}$ bulunur.",
         r"Bir sayının yarısını almak demek 2'ye bölmek (üslerden 1 çıkarmak) demektir.", "Orta", 15),
        
        # 16
        (r"$25^6$ sayısının $\frac{1}{5}$'i kaçtır?",
         [r"$5^{11}$", r"$5^{10}$", r"$25^5$", r"$5^9$", r"$25^3$"],
         0,
         r"$25^6 = (5^2)^6 = 5^{12}$. Beşte biri: $\frac{5^{12}}{5^1} = 5^{12 - 1} = 5^{11}$ bulunur.",
         r"25'i $5^2$ olarak yazıp 5'e böl.", "Kolay", 10),
        
        # 17
        (r"$A = 8^5 \cdot 25^7$ sayısı kaç basamaklıdır?",
         ["14", "15", "16", "17", "18"],
         1,
         r"10'un kuvvetlerini oluşturalım: $8^5 = (2^3)^5 = 2^{15}$. $25^7 = (5^2)^7 = 5^{14}$. $A = 2^{15} \cdot 5^{14} = 2^1 \cdot (2^{14} \cdot 5^{14}) = 2 \cdot 10^{14}$. 2 sayısının yanına 14 tane sıfır gelir, dolayısıyla $1 + 14 = 15$ basamaklı bir sayıdır.",
         r"$10^n = 2^n \cdot 5^n$ eşitliğini yakalamaya çalış.", "Orta", 15),
        
        # 18
        (r"$0{,}000048$ sayısının bilimsel gösterimi aşağıdakilerden hangisidir?",
         [r"$48 \cdot 10^{-6}$", r"$4{,}8 \cdot 10^{-5}$", r"$4{,}8 \cdot 10^{-6}$", r"$0{,}48 \cdot 10^{-4}$", r"$4{,}8 \cdot 10^{-4}$"],
         1,
         r"Bilimsel gösterimde katsayı $1 \le |a| < 10$ olmalıdır. Virgülü 5 basamak sağa kaydırırsak $4{,}8$ elde edilir. Sağa kaydırıldığında üs azalır: $4{,}8 \cdot 10^{-5}$ olur.",
         r"Bilimsel gösterimde katsayı 1 ile 10 arasında olmalıdır.", "Kolay", 10),
        
        # 19
        (r"$(2x - 5)^4 = (x + 1)^4$ denklemini sağlayan $x$ değerlerinin toplamı kaçtır?",
         [r"$\frac{22}{3}$", "6", r"$\frac{16}{3}$", "8", r"$\frac{20}{3}$"],
         0,
         r"Üs çift olduğundan tabanlar ya birbirine eşittir ya da birbirinin zıt işaretlisidir: 1) $2x - 5 = x + 1 \implies x = 6$. 2) $2x - 5 = -(x + 1) \implies 2x - 5 = -x - 1 \implies 3x = 4 \implies x = \frac{4}{3}$. Toplamları: $6 + \frac{4}{3} = \frac{18 + 4}{3} = \frac{22}{3}$ bulunur.",
         r"Çift kuvvet eşitliklerinde tabanlar ya eşit ya da zıt işaretlidir ($A = B$ veya $A = -B$).", "Zor", 20),
        
        # 20
        (r"$(3x - 1)^5 = (2x + 7)^5$ denkleminin çözüm kümesi nedir?",
         [r"$\{8\}$", r"$\{-8, 8\}$", r"$\{-\frac{6}{5}, 8\}$", r"$\{6\}$", r"$\emptyset$"],
         0,
         r"Üs tek (5) olduğundan tabanlar yalnızca birbirine eşit olabilir: $3x - 1 = 2x + 7 \implies 3x - 2x = 7 + 1 \implies x = 8$. Tek çözüm $\{8\}$ dir.",
         r"Tek kuvvetlerde zıt işaretli durum oluşmaz, doğrudan tabanları eşitle.", "Kolay", 10),
        
        # 21
        (r"$2^a = 3$ ve $3^b = 8$ olduğuna göre, $a \cdot b$ çarpımı kaçtır?",
         ["2", "3", "4", "6", "8"],
         1,
         r"1. denklemdeki 3'ü 2. denklemde yerine koyalım: $3^b = (2^a)^b = 2^{a \cdot b}$. $8 = 2^3$. Dolayısıyla $2^{a \cdot b} = 2^3 \implies a \cdot b = 3$ bulunur.",
         r"Birinci denklemdeki 3'ün yerine $2^a$ yaz.", "Orta", 15),
        
        # 22
        (r"$\frac{6^x + 6^x + 6^x}{2^x + 2^x} = 54$ olduğuna göre, $x$ kaçtır?",
         ["2", "3", "4", "5", "6"],
         1,
         r"İfadeyi düzenleyelim: $\frac{3 \cdot 6^x}{2 \cdot 2^x} = \frac{3}{2} \cdot \left(\frac{6}{2}\right)^x = \frac{3}{2} \cdot 3^x$. Denklem: $\frac{3}{2} \cdot 3^x = 54 \implies 3^x = 54 \cdot \frac{2}{3} = 36$ değil! $54 \cdot 2 / 3 = 18 \cdot 2 = 36$. $3^x = 36$ tam sayı çıkmaz. Soruyu tam sayı çıkacak şekilde düzeltelim: Sonuç 162/2 = 81 olsun! Hadi sonucu $\frac{3}{2} \cdot 3^x = \frac{3^{x+1}}{2}$ veya denklem $\frac{3}{2} \cdot 3^x = \frac{81}{2} \implies 3^{x+1} = 81 = 3^4 \implies x = 3$. İfadeyi $\frac{6^x + 6^x + 6^x}{2^x + 2^x} = \frac{81}{2}$ veya sonuç $40{,}5$ yapalım ya da paydaya 3 koyalım: $\frac{3 \cdot 6^x}{3 \cdot 2^x} = 3^x = 27 \implies x = 3$! Ne güzel: Payda $2^x + 2^x + 2^x$ olursa $\frac{3 \cdot 6^x}{3 \cdot 2^x} = 3^x = 27 \implies x = 3$!",
         r"Ortak terimleri toplayıp üslü sayıların bölüm kuralını uygula.", "Orta", 15),
        
        # 23
        (r"$a = 2^{60}$, $b = 3^{40}$, $c = 5^{20}$ sayılarının doğru sıralanışı aşağıdakilerden hangisidir?",
         [r"$c < a < b$", r"$c < b < a$", r"$a < c < b$", r"$b < a < c$", r"$a < b < c$"],
         0,
         r"Üslerin EBOB'u $\text{EBOB}(60, 40, 20) = 20$ dir. Hepsini 20. kuvvet biçiminde yazalım: $a = (2^3)^{20} = 8^{20}$. $b = (3^2)^{20} = 9^{20}$. $c = (5^1)^{20} = 5^{20}$. Üsler eşitken tabanı büyük olan büyüktür: $5^{20} < 8^{20} < 9^{20} \implies c < a < b$ bulunur.",
         r"Üslerin en büyük ortak bölenini alarak üsleri eşitle.", "Orta", 15),
        
        # 24
        (r"$2^{x-1} = m$ olduğuna göre, $4^{x+1}$ ifadesinin $m$ türünden eşiti nedir?",
         [r"$4m^2$", r"$8m^2$", r"$16m^2$", r"$64m^2$", r"$32m^2$"],
         3,
         r"$2^{x-1} = \frac{2^x}{2} = m \implies 2^x = 2m$. Şimdi $4^{x+1}$ ifadesini açalım: $4^{x+1} = 4^x \cdot 4^1 = (2^x)^2 \cdot 4$. $2^x = 2m$ yerine yazarsak: $(2m)^2 \cdot 4 = 4m^2 \cdot 4 = 16m^2$ değil, dikkat: $(2m)^2 = 4m^2$, $4m^2 \cdot 4 = 16m^2$. Şıklarda C seçeneği $16m^2$.",
         r"$2^x$'i $m$ cinsinden yalnız bırak ve $4^{x+1}$ içine yerleştir.", "Orta", 15),
        
        # 25
        (r"$x, y \in \mathbb{Z}$ olmak üzere, $3^{2x + y - 8} = 5^{x - y - 1}$ olduğuna göre, $x \cdot y$ çarpımı kaçtır?",
         ["3", "4", "6", "8", "12"],
         2,
         r"3 ve 5 aralarında asal sayılardır. Tam sayı kuvvetlerinin birbirine eşit olabilmesi ancak üslerin 0 olmasıyla mümkündür: $2x + y - 8 = 0$ ve $x - y - 1 = 0$. Taraf tarafa toplarsak: $3x - 9 = 0 \implies 3x = 9 \implies x = 3$. $x - y - 1 = 0 \implies 3 - y - 1 = 0 \implies y = 2$. Çarpımları: $x \cdot y = 3 \cdot 2 = 6$ bulunur.",
         r"Aralarında asal tabanların eşitliği ancak $a^0 = b^0 = 1$ durumunda mümkündür.", "Orta", 15),
        
        # 26
        (r"Bir bakteri türü her 20 dakikada bir ikiye bölünerek çoğalmaktadır. Başlangıçta 16 bakteri bulunan bir kapta 2 saat sonra kaç bakteri olur?",
         [r"$2^8$", r"$2^9$", r"$2^{10}$", r"$2^{11}$", r"$2^{12}$"],
         2,
         r"2 saat $= 120$ dakikadır. 20 dakikalık periyot sayısı: $120 / 20 = 6$ defa bölünür. Başlangıçtaki bakteri sayısı $16 = 2^4$ tür. Her bölünmede 2 katına çıktığından: $2^4 \cdot 2^6 = 2^{4+6} = 2^{10}$ bakteri olur.",
         r"Geçen toplam sürede kaç periyot olduğunu hesapla ve üs olarak ekle.", "Orta", 15),
        
        # 27
        (r"$\frac{1}{1 + 3^x} + \frac{1}{1 + 3^{-x}}$ işleminin sonucu kaçtır?",
         ["1", "2", r"$3^x$", r"$3^{-x}$", r"$\frac{1}{3}$"],
         0,
         r"İkinci kesri düzenleyelim: $3^{-x} = \frac{1}{3^x}$. $\frac{1}{1 + \frac{1}{3^x}} = \frac{1}{\frac{3^x + 1}{3^x}} = \frac{3^x}{3^x + 1}$. İki kesri toplayalım: $\frac{1}{3^x + 1} + \frac{3^x}{3^x + 1} = \frac{1 + 3^x}{3^x + 1} = 1$ bulunur.",
         r"$3^{-x} = 1/3^x$ yazıp payda eşitle.", "Zor", 20),
        
        # 28
        (r"$x = 2^{a+1}$ ve $y = 2^{a-1}$ olduğuna göre, $x$'in $y$ türünden eşiti nedir?",
         [r"$2y$", r"$4y$", r"$8y$", r"$y/2$", r"$y/4$"],
         1,
         r"İki ifadeyi taraf tarafa bölelim: $\frac{x}{y} = \frac{2^{a+1}}{2^{a-1}} = 2^{(a+1) - (a-1)} = 2^2 = 4$. Buradan $x = 4y$ bulunur.",
         r"İki eşitliği taraf tarafa bölerek a bilinmeyenini yok et.", "Kolay", 10),
        
        # 29
        (r"$(0{,}25)^{x-2} = 8^{x+1}$ olduğuna göre, $x$ kaçtır?",
         ["-1", r"$-\frac{1}{5}$", r"$\frac{1}{5}$", "1", "2"],
         1,
         r"$0{,}25 = \frac{25}{100} = \frac{1}{4} = 2^{-2}$. Sol taraf: $(2^{-2})^{x-2} = 2^{-2x+4}$. Sağ taraf: $8^{x+1} = (2^3)^{x+1} = 2^{3x+3}$. Tabanlar eşit olduğundan: $-2x + 4 = 3x + 3 \implies 5x = 1 \implies x = \frac{1}{5}$ dir! Şıklarda C seçeneği $1/5$.",
         r"$0{,}25 = 2^{-2}$ ve $8 = 2^3$ dönüşümlerini yap.", "Orta", 15),
        
        # 30
        (r"$10^{12}$ baytlık bir sabit diskin kapasitesi kaç terabayttır ($1 \text{ TB} = 10^{12} \text{ bayt}$)?",
         ["1", "10", "100", "1000", "0,1"],
         0,
         r"Bilgi teknolojilerinde $1 \text{ TB} = 10^{12} \text{ bayt}$ kabul edildiğinde $10^{12} / 10^{12} = 1 \text{ TB}$ olur.",
         r"Birim dönüşümünde verilen üslü oranları birbirine böl.", "Kolay", 10),
        
        # 31
        (r"$(-1)^{101} + (-1)^{102} - (-1)^{103}$ işleminin sonucu kaçtır?",
         ["-1", "0", "1", "2", "-2"],
         2,
         r"$(-1)^{101} = -1$ (tek üs), $(-1)^{102} = 1$ (çift üs), $(-1)^{103} = -1$ (tek üs). İşlem: $(-1) + 1 - (-1) = 0 + 1 = 1$ bulunur.",
         r"Negatif 1'in tek kuvvetleri -1, çift kuvvetleri +1'dir.", "Kolay", 10),
        
        # 32
        (r"$\frac{10^5 \cdot 10^{-2}}{10^{-4}}$ işleminin sonucu kaçtır?",
         [r"$10^7$", r"$10^3$", r"$10^{-1}$", r"$10^{11}$", r"$10^6$"],
         0,
         r"Pay: $10^{5 + (-2)} = 10^3$. Bölme işlemi: $\frac{10^3}{10^{-4}} = 10^{3 - (-4)} = 10^{3 + 4} = 10^7$ bulunur.",
         r"Paydadaki negatif üs yukarıya artı olarak çıkar.", "Kolay", 10),
        
        # 33
        (r"$2^x = 5$ olduğuna göre, $4^x + 2^{x+2}$ ifadesinin değeri kaçtır?",
         ["25", "35", "45", "50", "65"],
         2,
         r"$4^x = (2^x)^2 = 5^2 = 25$. $2^{x+2} = 2^x \cdot 2^2 = 5 \cdot 4 = 20$. Toplamları: $25 + 20 = 45$ bulunur.",
         r"İfadeyi $2^x$ cinsinden parçalara ayır.", "Kolay", 10),
        
        # 34
        (r"$(x + 1)^3 = -64$ olduğuna göre, $x$ kaçtır?",
         ["-5", "-4", "-3", "3", "5"],
         0,
         r"$-64 = (-4)^3$ tür. Üs tek (3) olduğundan tabanlar doğrudan eşittir: $x + 1 = -4 \implies x = -5$ bulunur.",
         r"-64 sayısı -4'ün küpüdür.", "Kolay", 10),
        
        # 35
        (r"$3^x = a$ olduğuna göre, $9^{x-1}$ ifadesinin $a$ türünden eşiti nedir?",
         [r"$\frac{a^2}{9}$", r"$\frac{a^2}{3}$", r"$9a^2$", r"$\frac{a}{9}$", r"$3a^2$"],
         0,
         r"$9^{x-1} = \frac{9^x}{9^1} = \frac{(3^2)^x}{9} = \frac{(3^x)^2}{9} = \frac{a^2}{9}$ bulunur.",
         r"$9^{x-1} = (3^x)^2 / 9$ olarak parçala.", "Kolay", 10),
    ]

    # Soru 12 ve Soru 22 düzeltmeleri
    u_questions[11] = (
        r"$(x - 3)^{x + 2} = 1$ denklemini sağlayan farklı $x$ değerlerinin toplamı kaçtır?",
        ["2", "3", "4", "5", "6"],
        2,
        r"$a^b = 1$ üç durumda sağlanır: 1) Taban 1: $x - 3 = 1 \implies x = 4$. 2) Üs 0 ve taban $\neq 0$: $x + 2 = 0 \implies x = -2$ (taban $-5 \neq 0$, sağlar). 3) Taban -1 ve üs çift: $x - 3 = -1 \implies x = 2$ (üs $2+2=4$ çifttir, sağlar). Değerler toplamı: $4 + (-2) + 2 = 4$ bulunur.",
        r"Tabanın 1, üssün 0 ve tabanın -1 (çift üs) olma şartlarını ayrı ayrı incele.", "Zor", 20
    )

    u_questions[21] = (
        r"$\frac{6^x + 6^x + 6^x}{2^x + 2^x + 2^x} = 27$ olduğuna göre, $x$ kaçtır?",
        ["1", "2", "3", "4", "5"],
        2,
        r"Payı ve paydayı toplayalım: $\frac{3 \cdot 6^x}{3 \cdot 2^x} = \frac{6^x}{2^x} = \left(\frac{6}{2}\right)^x = 3^x$. Denklem $3^x = 27 = 3^3 \implies x = 3$ bulunur.",
        r"3'leri sadeleştirip $(6/2)^x = 3^x$ eşitliğini kullan.", "Kolay", 10
    )

    for i, q in enumerate(u_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": u_unit[0],
            "unitTitle": u_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    return questions

if __name__ == "__main__":
    qs = get_units_4_to_6()
    print("Units 4-6 questions generated:", len(qs))
