// 9. SINIF MATEMATİK TÜM KONU ANLATIMLARI VE FORMÜLLERİ
window.TOPICS_DATA = [
  {
    "id": "mantik",
    "title": "Mantık",
    "badge": "1. Ünite",
    "icon": "brain",
    "color": "#6366f1",
    "description": "Önermeler, doğruluk değerleri, mantık bağlaçları, koşullu önermeler, totoloji, çelişki ve niceleyiciler.",
    "sections": [
      {
        "title": "1. Önerme ve Doğruluk Değerleri",
        "content": "Doğru ya da yanlış kesin bir hüküm (yargı) bildiren ifadelere **önerme** denir. Soru, emir, dilek veya duygu cümleleri önerme değildir. Doğru önermeler $1$, yanlış önermeler $0$ ile gösterilir. $n$ farklı önermenin $2^n$ farklı doğruluk durumu vardır.",
        "goldenRule": "Bir önermenin değili (olumsuzu) $p'$ ile gösterilir. $(p')' \\equiv p$ dir.",
        "pitfall": "'Ahmet çok çalışkandır' veya 'Bugün hava sıcak' gibi kişiye göre değişen göreceli yargılar önerme SAYILMAZ!",
        "example": "$p: '2 + 3 = 6'$ ifadesi yanlış bir önermedir ($p \\equiv 0$). $p': '2 + 3 \\neq 6'$ doğru bir önermedir ($p' \\equiv 1$)."
      },
      {
        "title": "2. Mantık Bağlaçları (Ve, Veya, Ya da)",
        "content": "• **Ve ($\\land$)**: Her iki önerme de $1$ iken sonuç $1$, diğer durumlarda $0$'dır.\n• **Veya ($\\lor$)**: Önermelerden en az biri $1$ iken sonuç $1$, her ikisi de $0$ iken $0$'dır.\n• **Ya da ($\\underline{\\lor}$)**: Önermelerin doğruluk değerleri farklı iken $1$, aynı iken $0$'dır.",
        "goldenRule": "De Morgan Kuralları: $(p \\land q)' \\equiv p' \\lor q'$ ve $(p \\lor q)' \\equiv p' \\land q'$.",
        "pitfall": "Ve ($\\land$) ile Veya ($\\lor$) işaretlerini karıştırma! 'Ve' serttir (ikisi de 1 olmalı), 'Veya' esnektir (biri 1 olsa yeter).",
        "example": "$1 \\land 0 \\equiv 0$, $1 \\lor 0 \\equiv 1$, $1 \\underline{\\lor} 1 \\equiv 0$."
      },
      {
        "title": "3. Koşullu Önerme (İse - $\\implies$) ve Ancak ve Ancak ($\\iff$)",
        "content": "• **İse ($\\implies$)**: Sadece $1 \\implies 0 \\equiv 0$ durumunda yanlıştır (100 Kuralı!), diğer tüm durumlarda $1$'dir.\n• Denkliği: $p \\implies q \\equiv p' \\lor q$\n• **Karşıtı**: $q \\implies p$, **Tersi**: $p' \\implies q'$, **Karşıt Tersi**: $q' \\implies p'$\n• Bir önerme karşıt tersine daima denktir: $p \\implies q \\equiv q' \\implies p'$.",
        "goldenRule": "$p \\iff q \\equiv (p \\implies q) \\land (q \\implies p)$. Aynı iken 1, farklı iken 0 olur.",
        "pitfall": "$0 \\implies 1 \\equiv 1$ ve $0 \\implies 0 \\equiv 1$ dir. Hipotez (sol taraf) yanlış ise koşullu önerme daima DOĞRUDUR!",
        "example": "'Yağmur yağarsa yerler ıslanır' önermesinin karşıt tersi: 'Yerler ıslak değilse yağmur yağmamıştır'."
      },
      {
        "title": "4. Niceleyiciler (Her - $\\forall$ ve Bazı - $\\exists$)",
        "content": "• **$\\forall$ (Her / Evrensel Niceleyici)**: Bütün elemanlar için sağlandığında doğru olur.\n• **$\\exists$ (Bazı / Varlıksal Niceleyici)**: En az bir eleman için sağlanması doğruluğu için yeterlidir.\n• Olumsuzlar: $(\\forall x, P(x))' \\equiv \\exists x, P'(x)$ ve $(\\exists x, P(x))' \\equiv \\forall x, P'(x)$.",
        "goldenRule": "$>$'ın değili $\\le$, $<$'ın değili $\\ge$, $=$'ın değili $\\neq$ dir.",
        "pitfall": "Olumsuz alırken eşitsizlik işaretinin tersine dönerken eşitlik durumunun da değiştiğini unutma ($>$ olumsuzu $\\le$ dir!).",
        "example": "$(\\forall x \\in \\mathbb{R}, x^2 \\ge 0)' \\equiv \\exists x \\in \\mathbb{R}, x^2 < 0$."
      }
    ]
  },
  {
    "id": "kumeler",
    "title": "Kümeler",
    "badge": "2. Ünite",
    "icon": "layers",
    "color": "#8b5cf6",
    "description": "Kümelerin gösterimi, alt küme, küme işlemleri (kesişim, birleşim, fark, tümleyen), küme problemleri ve kartezyen çarpım.",
    "simulator": "venn-lab",
    "sections": [
      {
        "title": "1. Kümelerde Temel Kavramlar ve Alt Küme",
        "content": "İyi tanımlanmış nesneler topluluğuna **küme** denir. Liste, Venn şeması ve ortak özellik yöntemleriyle gösterilir. $n$ elemanlı bir kümenin:\n• **Alt küme sayısı**: $2^n$\n• **Öz alt küme sayısı**: $2^n - 1$",
        "goldenRule": "$k$ tane elemanın 'bulunduğu' veya 'bulunmadığı' alt kümeler sorulduğunda o $k$ eleman atılır, kalan $n-k$ elemanla $2^{n-k}$ alt küme hesaplanır.",
        "pitfall": "Boş küme ($\\emptyset$) her kümenin alt kümesidir: $\\emptyset \\subseteq A$. Fakat boş küme kümenin elemanı olmak zorunda değildir ($\\{ \\emptyset \\}$ gibi parantez içinde verilmediyse).",
        "example": "$A = \\{1, 2, 3, 4, 5\\}$ kümesinin alt kümelerinden $2^5 = 32$ tanedir. $1$'in bulunduğu alt küme sayısı $2^{5-1} = 2^4 = 16$ tanedir."
      },
      {
        "title": "2. Küme İşlemleri ve Formüller",
        "content": "• **Kesişim ($A \\cap B$)**: Her iki kümede de ortak olan elemanlar.\n• **Birleşim ($A \\cup B$)**: İki kümenin tüm elemanları: $s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$\n• **Fark ($A \\setminus B$)**: $A$'da olup $B$'de olmayanlar ($A \\setminus B = A \\cap B'$)\n• **Tümleyen ($A'$)**: Evrensel kümede olup $A$'da olmayanlar ($s(A) + s(A') = s(E)$)",
        "goldenRule": "De Morgan: $(A \\cup B)' = A' \\cap B'$ ve $(A \\cap B)' = A' \\cup B'$.",
        "pitfall": "$A \\setminus B$ ile $B \\setminus A$ birbirinden farklıdır (fark işleminin değişme özelliği yoktur).",
        "example": "$s(A)=10, s(B)=8, s(A \\cap B)=3 \\implies s(A \\cup B) = 10 + 8 - 3 = 15$."
      },
      {
        "title": "3. Kartezyen Çarpım ($A \\times B$)",
        "content": "Birinci bileşeni $A$'dan, ikinci bileşeni $B$'den seçilerek oluşturulan tüm sıralı ikililerin $(x, y)$ kümesine **kartezyen çarpım** denir.\n• $s(A \\times B) = s(A) \\cdot s(B)$\n• $A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)$",
        "goldenRule": "$A \\times B \\neq B \\times A$ (genellikle değişme özelliği yoktur), ancak eleman sayıları eşittir: $s(A \\times B) = s(B \\times A)$.",
        "pitfall": "Kartezyen çarpımın grafiğinde 1. bileşenler yatay ($x$) eksende, 2. bileşenler dikey ($y$) eksende işaretlenir.",
        "example": "$A = \\{1, 2\\}$, $B = \\{a, b, c\\} \\implies s(A \\times B) = 2 \\cdot 3 = 6$."
      }
    ]
  },
  {
    "id": "sayilar",
    "title": "Sayı Kümeleri & Bölünebilme",
    "badge": "3. Ünite",
    "icon": "hash",
    "color": "#ec4899",
    "description": "Sayı kümeleri (N, Z, Q, Q', R), asal sayılar, bölünebilme kuralları (2,3,4,5,8,9,11), EBOB-EKOK ve periyodik durumlar.",
    "sections": [
      {
        "title": "1. Sayı Kümeleri Hiyerarşisi",
        "content": "• **Doğal Sayılar ($\\mathbb{N}$)**: $\\{0, 1, 2, 3, \\dots\\}$\n• **Sayma Sayıları ($\\mathbb{N}^+$)**: $\\{1, 2, 3, \\dots\\}$\n• **Tam Sayılar ($\\mathbb{Z}$)**: $\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$\n• **Rasyonel Sayılar ($\\mathbb{Q}$)**: $a/b$ şeklinde yazılabilen ($b \\neq 0$) sayılar\n• **İrrasyonel Sayılar ($\\mathbb{Q}'$)**: $a/b$ şeklinde yazılamayan (kök dışına çıkamayanlar: $\\sqrt{2}, \\sqrt{3}, \\pi, e$)\n• **Gerçek (Reel) Sayılar ($\\mathbb{R}$)**: $\\mathbb{Q} \\cup \\mathbb{Q}'$",
        "goldenRule": "İki rasyonel sayının çarpımı ve bölümü daima rasyoneldir. Ancak iki irrasyonelin çarpımı rasyonel olabilir: $\\sqrt{2} \\cdot \\sqrt{2} = 2$.",
        "pitfall": "0 bir doğal sayıdır ve çift tam sayıdır; ancak pozitif ya da negatif değildir (nötrdür).",
        "example": "$\\sqrt{16} = 4$ rasyoneldir, $\\sqrt{17}$ irrasyoneldir."
      },
      {
        "title": "2. Pratik Bölünebilme Kuralları",
        "content": "• **2**: Son basamak çift olmalı ($0,2,4,6,8$).\n• **3**: Rakamları toplamı 3'ün katı olmalı.\n• **4**: Son iki basamağı 00 veya 4'ün katı olmalı.\n• **5**: Son basamağı 0 veya 5 olmalı.\n• **8**: Son üç basamağı 8'in katı olmalı.\n• **9**: Rakamları toplamı 9'un katı olmalı.\n• **10**: Son basamağı 0 olmalı.\n• **11**: Sağdan sola $+ - + - +$ işaretlenip toplanır, sonuç 11'in katı olmalı.\n• **Bileşik kurallar**: $6 = 2 \\cdot 3$, $12 = 3 \\cdot 4$, $15 = 3 \\cdot 5$, $36 = 4 \\cdot 9$, $45 = 5 \\cdot 9$ (aralarında asal çarpanlara bakılır).",
        "goldenRule": "Bir sayının 9 ile bölümünden kalan, o sayının rakamları toplamının 9 ile bölümünden kalana eşittir.",
        "pitfall": "Bölünebilme sorularında önce son basamağı bağlayan (5, 10, 4) kurallara bakılır, ardından rakamlar toplamı (3, 9) kurallarına geçilir.",
        "example": "$4a7b$ sayısı 36'ya tam bölünüyorsa önce $b$ incelenir (4 ile bölünebilme: $7b \\implies 72, 76$), sonra 9 ile bölünebilme uygulanır."
      },
      {
        "title": "3. EBOB, EKOK ve Periyodik Problemler",
        "content": "• İki sayının çarpımı, EBOB ve EKOK'larının çarpımına eşittir: $a \\cdot b = \\text{EBOB}(a, b) \\cdot \\text{EKOK}(a, b)$\n• **EBOB Problemleri**: Bütünden küçük eşit parçalara bölme (çuval bölme, tarlaya eşit aralıkla ağaç dikme, kumaş kesme).\n• **EKOK Problemleri**: Küçük parçalardan büyük bir bütün oluşturma (birlikte nöbet tutma, zillerin aynı anda çalması, tuğla dizme).\n• **Periyodik Durumlar**: Günler 7'de bir, saatler 24'te bir tekrar eder. Kalan bulunur ve ileriye doğru eklenir.",
        "goldenRule": "Aralarında asal iki sayının $\\text{EBOB}'u = 1$, $\\text{EKOK}'u = a \\cdot b$ dir.",
        "pitfall": "Nöbet sorularında: 1. nöbet zaten tutulmuştur! 5. nöbet soruluyorsa $5 - 1 = 4$ periyot geçer.",
        "example": "$\text{EBOB}(24, 36) = 12$, $\text{EKOK}(24, 36) = 72$. $24 \\cdot 36 = 12 \\cdot 72 = 864$."
      }
    ]
  },
  {
    "id": "denklemler",
    "title": "Denklem ve Eşitsizlikler",
    "badge": "4. Ünite",
    "icon": "scale",
    "color": "#f97316",
    "description": "Gerçek sayılarda aralıklar, birinci dereceden bir ve iki bilinmeyenli denklemler, eşitsizlikler ve çözüm bölgeleri.",
    "sections": [
      {
        "title": "1. Birinci Dereceden Denklemler ve Özel Durumlar",
        "content": "$ax + b = 0$ denklemi için:\n1. $a \\neq 0$ ise tek çözüm vardır: $x = -b/a$.\n2. $a = 0$ ve $b = 0$ ise çözüm kümesi tüm reel sayılardır: Ç.K. $= \\mathbb{R}$ ($0x = 0$ sonsuz çözüm).\n3. $a = 0$ ve $b \\neq 0$ ise çözüm kümesi boş kümedir: Ç.K. $= \\emptyset$ ($0x = 5$ imkansız).",
        "goldenRule": "İki bilinmeyenli denklem sisteminde $a_1x + b_1y = c_1$ ve $a_2x + b_2y = c_2$ için: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ ise sonsuz çözüm (çakışık doğrular); $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ ise boş küme (paralel doğrular).",
        "pitfall": "Rasyonel denklemlerde bulunan kökün paydayı sıfır yapıp yapmadığı (tanımsızlık) MUTLAKA kontrol edilmelidir!",
        "example": "$\\frac{x-3}{x-3} = 1$ denkleminde $x = 3$ bir kök OLAMAZ çünkü paydayı sıfır yapar."
      },
      {
        "title": "2. Birinci Dereceden Eşitsizlikler",
        "content": "• Bir eşitsizliğin her iki tarafına aynı sayı eklenir veya çıkarılırsa eşitsizlik yön DEĞİŞTİRMEZ.\n• Bir eşitsizlik pozitif bir sayıyla çarpılır veya bölünürse yön DEĞİŞTİRMEZ.\n• Bir eşitsizlik **negatif bir sayıyla çarpılır veya bölünürse eşitsizlik YÖN DEĞİŞTİRİR!** ($< \\to >$, $\\le \\to \\ge$)",
        "goldenRule": "Reel sayılarda aralık verildiyse değer seçilmez; eşitsizlikler istenen ifadeye benzetilerek genişletilir ve taraf tarafa toplanır.",
        "pitfall": "Eşitsizlikler taraf tarafa ÇIKARILMAZ veya BÖLÜNMEZ! Çıkarma yapmak için önce $-1$ ile çarpılır, sonra toplanır.",
        "example": "$-2 < x \\le 5$ ise $-3x$ için $-3$ ile çarparız: $-15 \\le -3x < 6$ olur (yön değişti)."
      },
      {
        "title": "3. Kare Alma ve Aralık Analizi",
        "content": "• Eğer aralık $0$'ı içeriyorsa (örneğin $-3 \\le x < 4$): Bir sayının karesi en az $0$ olabilir: $0 \\le x^2 < 16$.\n• Eğer aralık tamamen pozitifse ($2 < x < 5$): $4 < x^2 < 25$.\n• Eğer aralık tamamen negatifse ($-5 < x < -2$): $4 < x^2 < 25$.",
        "goldenRule": "Aralıkta sıfır varsa karesinin alt sınırı daima $0 \\le x^2$ dir!",
        "pitfall": "$-3 \\le x \\le 2$ verildiğinde alt sınır $(-3)^2 = 9$ ve $2^2 = 4$ deyip $4 \\le x^2 \\le 9$ yazmak ölümcül hatadır! En küçük değer $0$'dır.",
        "example": "$-4 < x < 3 \\implies 0 \\le x^2 < 16$."
      }
    ]
  },
  {
    "id": "mutlak_deger",
    "title": "Mutlak Değer",
    "badge": "5. Ünite",
    "icon": "maximize-2",
    "color": "#eab308",
    "description": "Mutlak değerin geometrik anlamı, özellikleri, mutlak değerli denklemler ve eşitsizlikler.",
    "simulator": "abs-lab",
    "sections": [
      {
        "title": "1. Mutlak Değer Tanımı ve Özellikleri",
        "content": "Bir gerçek sayının sayı doğrusu üzerinde sıfır (başlangıç) noktasına olan uzaklığına **mutlak değer** denir. Uzaklık negatif olamayacağından $|x| \\ge 0$ dır.\n• $x \\ge 0$ ise $|x| = x$ (aynen çıkar)\n• $x < 0$ ise $|x| = -x$ (önüne eksi alarak pozitifleşir)",
        "goldenRule": "$|a \\cdot b| = |a| \\cdot |b|$ ve $|-x| = |x|$ ve $|a - b| = |b - a|$ dır.",
        "pitfall": "$|-x|$ ifadesini görünce 'bu negatiftir' deme! $x = -3$ ise $|-x| = |3| = 3$ tür.",
        "example": "$x < 0$ ise $|2x| = -2x$ olur; çünkü $x$ negatif olduğu için $-2x$ pozitiftir."
      },
      {
        "title": "2. Mutlak Değerli Denklemler",
        "content": "1. $|f(x)| = c$ ($c > 0$): $f(x) = c$ veya $f(x) = -c$.\n2. $|f(x)| = 0$: $f(x) = 0$.\n3. $|f(x)| = c$ ($c < 0$): Çözüm kümesi $\\emptyset$ (boş küme)!\n4. $|f(x)| = |g(x)|$: $f(x) = g(x)$ veya $f(x) = -g(x)$.\n5. $|f(x)| = g(x)$: Bulunan kökler $g(x) \\ge 0$ şartını sağlamalıdır!",
        "goldenRule": "$|ax + b| = c$ ($c > 0$) denkleminin kökleri toplamı daima $2 \\cdot (-b/a)$ dır (içini sıfır yapan değerin iki katı).",
        "pitfall": "$|x + 2| = 2x - 1$ gibi denklemlerde sağ tarafın pozitif olduğunu mutlaka kontrol et, yoksa yalancı kök tuzağına düşersin!",
        "example": "$|2x - 6| = 10 \\implies 2x - 6 = 10 \\implies x = 8$ veya $2x - 6 = -10 \\implies x = -2$."
      },
      {
        "title": "3. Mutlak Değerli Eşitsizlikler",
        "content": "• **Küçüktür ($|x| \\le a$ - $a > 0$)**: İki sınır arasına sıkışır: $-a \\le x \\le a$\n• **Büyüktür ($|x| \\ge a$ - $a > 0$)**: İki ayrı kola ayrılır: $x \\ge a$ veya $x \\le -a$\n• $|x| < -3$: Ç.K. $= \\emptyset$ (boş küme)\n• $|x| > -3$: Ç.K. $= \\mathbb{R}$ (tüm reel sayılar)",
        "goldenRule": "$|x - a| \\le r$ ifadesi sayı doğrusunda $a$ merkezli, $r$ yarıçaplı kapalı aralıktır: $[a-r, a+r]$.",
        "pitfall": "$|x - 2| > 4$ eşitsizliğini tek satırda $-4 < x - 2 > 4$ diye yazamazsın! Ayrı iki eşitsizlik olarak çözmelisin.",
        "example": "$|x - 3| \\le 5 \\implies -5 \\le x - 3 \\le 5 \\implies -2 \\le x \\le 8$."
      }
    ]
  },
  {
    "id": "uslu_sayilar",
    "title": "Üslü İfadeler ve Denklemler",
    "badge": "⭐ ÖZEL ODAK - 6. Ünite",
    "icon": "zap",
    "color": "#10b981",
    "description": "Üs kavramı, negatif üs, üslü sayılarda 4 işlem, üssün üssü, üslü denklemler, bilimsel gösterim ve yeni nesil problemler.",
    "simulator": "power-lab",
    "sections": [
      {
        "title": "1. Üs Kavramı ve Temel Özellikler",
        "content": "$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ tane}}$\n• $a^0 = 1$ ($a \\neq 0$ olmak üzere). Dikkat: $0^0$ belirsizdir!\n• $a^1 = a$ ve $1^n = 1$\n• **Parantez Hayatidir!**: $(-2)^4 = 16$ iken $-2^4 = -16$ dır. Negatif tabanın çift kuvveti ancak parantez içindeyse pozitif olur.\n• **Negatif Üs Kuralı**: Üssün negatif olması sayıyı ters çevirir (işaretini değiştirmez!):\n$$a^{-n} = \\frac{1}{a^n} \\quad \\text{ve} \\quad \\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$",
        "goldenRule": "Negatif üs işaret değiştirmez, sadece sayıyı takla attırır! $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$ (pozitiftir!).",
        "pitfall": "$(-3)^{-2}$ işleminde taban ve üssün eksilerini çarpıp pozitif yapmaya çalışma! Taban $(-3)$, üs $-2$'dir: $\\frac{1}{(-3)^2} = \\frac{1}{9}$.",
        "example": "$\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$."
      },
      {
        "title": "2. Üslü Sayılarda İşlem Kuralları",
        "content": "• **Çarpma İşlemi**:\n  1. Tabanlar aynı ise üsler toplanır: $a^m \\cdot a^n = a^{m+n}$\n  2. Üsler aynı ise tabanlar çarpılır: $a^n \\cdot b^n = (a \\cdot b)^n$\n• **Bölme İşlemi**:\n  1. Tabanlar aynı ise üsler çıkarılır: $\\frac{a^m}{a^n} = a^{m-n}$\n  2. Üsler aynı ise tabanlar bölünür: $\\frac{a^n}{b^n} = \\left(\\frac{a}{b}\\right)^n$\n• **Üssün Üssü Kuralı**: Üsler çarpılır: $(a^m)^n = a^{m \\cdot n}$\n• **Toplama / Çıkarma**: Yalnızca hem tabanı hem üssü aynı olan terimler ortak paranteze alınarak toplanıp çıkarılır:\n$$x \\cdot a^n + y \\cdot a^n = (x + y) \\cdot a^n$$",
        "goldenRule": "$2^5 + 2^5 + 2^5 + 2^5 = 4 \\cdot 2^5 = 2^2 \\cdot 2^5 = 2^7$ dir. Toplamayı çarpmaya dönüştürmeyi unutma!",
        "pitfall": "$(2^3)^4$ ile $2^{3^4}$ aynı DEĞİLDİR! $(2^3)^4 = 2^{12}$ iken $2^{3^4} = 2^{81}$ dir.",
        "example": "$\\frac{3^8 \\cdot 3^5}{3^9} = 3^{13 - 9} = 3^4 = 81$."
      },
      {
        "title": "3. Üslü Denklemler (3 Temel Durum)",
        "content": "1. **Tabanlar Eşitse**: $a^x = a^y \\implies x = y$ ($a \\neq 0, 1, -1$).\n2. **Üsler Eşitse ($x^n = y^n$)**:\n   • $n$ tek sayı ise: $x = y$\n   • $n$ çift sayı ise: $x = y$ veya $x = -y$\n3. **$a^x = 1$ Durumu (3 Şart İncelenir!)**:\n   • Durum 1: Üs sıfır olmalı ($x = 0$) ve taban sıfır olmamalı ($a \\neq 0$).\n   • Durum 2: Taban bir olmalı ($a = 1$).\n   • Durum 3: Taban eksi bir olmalı ($a = -1$) ve üs çift tam sayı olmalı.",
        "goldenRule": "$a^x = b^y$ ve $a^z = b^t$ eşitliklerinde üslerin oranları birbirine eşittir: $\\frac{x}{z} = \\frac{y}{t}$.",
        "pitfall": "$(x-2)^{x+3} = 1$ denkleminde sadece üssü sıfıra eşitleyip bırakma! Tabanın 1 ve -1 olma durumlarını mutlaka kontrol et.",
        "example": "$(x - 3)^4 = (2x + 1)^4 \\implies x - 3 = 2x + 1$ veya $x - 3 = -(2x + 1)$."
      },
      {
        "title": "4. Bilimsel Gösterim ve Basamak Sayısı",
        "content": "• **Bilimsel Gösterim**: $1 \\le |a| < 10$ ve $n \\in \\mathbb{Z}$ olmak üzere bir sayının $a \\cdot 10^n$ biçiminde yazılmasıdır.\n• **Basamak Sayısı ve Sıfır Sayısı**:\n  1. Sayı $A \\cdot 10^n$ formatına getirilir ($10 = 2 \\cdot 5$ çarpanları oluşturulur).\n  2. $A$ tamsayısının basamak sayısına $n$ eklenerek toplam basamak sayısı bulunur.\n  3. Sondan $n$ basamağı sıfırdır.",
        "goldenRule": "$8^5 \\cdot 25^7 = (2^3)^5 \\cdot (5^2)^7 = 2^{15} \\cdot 5^{14} = 2^1 \\cdot (2^{14} \\cdot 5^{14}) = 2 \\cdot 10^{14}$. $1 + 14 = 15$ basamaklıdır.",
        "pitfall": "Bilimsel gösterimde katsayı $10$ veya $10$'dan büyük OLAMAZ, $1$'den küçük de OLAMAZ!",
        "example": "$0{,}000048 = 4{,}8 \\cdot 10^{-5}$ ve $7500000 = 7{,}5 \\cdot 10^6$."
      }
    ]
  },
  {
    "id": "koklu_sayilar",
    "title": "Köklü İfadeler ve Denklemler",
    "badge": "7. Ünite",
    "icon": "corner-down-right",
    "color": "#06b6d4",
    "description": "Kök kavramı, rasyonel üs, kök dışına çıkarma/içine alma, dört işlem, eşlenik ve özel kökler.",
    "sections": [
      {
        "title": "1. Kök Kavramı ve Tanım Kümesi",
        "content": "$\\sqrt[n]{a} = b \\iff b^n = a$\n• Rasyonel Üs İlişkisi: $\\sqrt[n]{a^m} = a^{m/n}$\n• **Tanım Kümesi**:\n  1. $n$ tek ise: $\\sqrt[n]{a}$ her reel $a$ için tanımlıdır.\n  2. $n$ çift ise: $\\sqrt[n]{a}$ ifadesinin reel olması için $a \\ge 0$ olmalıdır!\n• Kök dışına çıkarma: $\\sqrt[2n]{a^{2n}} = |a|$ (çift derecede mutlak değerle çıkar!), $\\sqrt[2n+1]{a^{2n+1}} = a$ (tek derecede aynen çıkar).",
        "goldenRule": "$\\sqrt{(-5)^2} = |-5| = 5$ dir, asla $-5$ değildir!",
        "pitfall": "$\\sqrt{x - 3}$ ifadesi reel sayı belirtiyorsa $x \\ge 3$ olmalıdır.",
        "example": "$\\sqrt[3]{-8} = -2$, fakat $\\sqrt{-9}$ reel sayı değildir."
      },
      {
        "title": "2. Dört İşlem ve Eşlenik (Paydayı Rasyonel Yapma)",
        "content": "• **Kök dışına çıkarma**: $\\sqrt{a^2 \\cdot b} = a\\sqrt{b}$\n• **Kök içine alma**: $a\\sqrt{b} = \\sqrt{a^2 \\cdot b}$\n• **Toplama / Çıkarma**: Sadece derecesi ve kök içi aynı olan kökler toplanır.\n• **Eşlenik ile Çarpma**:\n  1. $\\frac{1}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}$\n  2. $\\frac{1}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} + \\sqrt{b}}{a - b}$",
        "goldenRule": "İki kare farkı: $(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) = a - b$.",
        "pitfall": "$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ dir! Örneğin $\\sqrt{9 + 16} = \\sqrt{25} = 5$ iken $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$ dir.",
        "example": "$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$."
      },
      {
        "title": "3. Özel Kök Kuralı: $\\sqrt{a \\pm 2\\sqrt{b}}$",
        "content": "İçteki kökün başında $2$ katsayısı varken, çarpımları $b$ ve toplamları $a$ olan iki sayı $x$ ve $y$ ($x > y$) ise:\n$$\\sqrt{(x + y) \\pm 2\\sqrt{x \\cdot y}} = \\sqrt{x} \\pm \\sqrt{y}$$",
        "goldenRule": "İçteki kökün önünde 2 yoksa (örneğin 4 varsa), fazlalık olan 2 kökün içine karesi alınarak sokulur.",
        "pitfall": "Arada eksi işareti varken daima BÜYÜK olan kök öne yazılır (çünkü karekökün sonucu negatif olamaz): $\\sqrt{x} - \\sqrt{y}$.",
        "example": "$\\sqrt{8 + 2\\sqrt{15}} = \\sqrt{5} + \\sqrt{3}$ (çünkü $5 \\cdot 3 = 15$ ve $5 + 3 = 8$)."
      }
    ]
  },
  {
    "id": "oran_oranti",
    "title": "Oran-Orantı ve Problemler",
    "badge": "8. Ünite",
    "icon": "trending-up",
    "color": "#3b82f6",
    "description": "Doğru ve ters orantı, orantı özellikleri, aritmetik ve geometrik ortalama, sayı-kesir, yaş, yüzde, kâr-zarar, karışım ve hareket problemleri.",
    "sections": [
      {
        "title": "1. Oran ve Orantı Çeşitleri",
        "content": "• **Doğru Orantı**: Biri artarken diğeri de aynı oranda artar ($y/x = k$). Bölüm sabittir.\n• **Ters Orantı**: Biri artarken diğeri aynı oranda azalır ($x \\cdot y = k$). Çarpım sabittir.\n• **Aritmetik Ortalama**: $\\text{A.O.} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$\n• **Geometrik Ortalama**: $\\text{G.O.} = \\sqrt{a \\cdot b}$",
        "goldenRule": "İşçi/havuz ve zaman arasında TERS orantı; iş miktarı ve zaman arasında DOĞRU orantı vardır.",
        "pitfall": "Doğru orantıda çapraz çarpım (içler-dışlar), ters orantıda karşılıklı düz çarpım yapılır.",
        "example": "3 işçi 12 günde bitirirse, 6 işçi ters orantıdan $3 \\cdot 12 / 6 = 6$ günde bitirir."
      },
      {
        "title": "2. Sayı, Kesir ve Yaş Problemleri",
        "content": "• Kesir problemlerinde bütüne paydaların EKOK'u kadar değer vermek işlemleri tam sayılara dönüştürerek kolaylaştırır.\n• Yaş problemlerinde: Geçen zaman herkes için aynıdır. İki kişi arasındaki yaş farkı YILLAR GEÇSE DE ASLA DEĞİŞMEZ!",
        "goldenRule": "Bir telin ucundan $x$ kadar kesilirse orta noktası $x/2$ kadar diğer tarafa kayar.",
        "pitfall": "2 çocuğun yaşları toplamı $t$ ise, $x$ yıl sonra toplamları $t + x$ değil, $t + 2x$ olur!",
        "example": "Baba 36, çocuk 12 yaşında ise yaş farkı 24'tür ve bu fark asla değişmez."
      },
      {
        "title": "3. Yüzde, Kâr-Zarar, Karışım ve Hareket Problemleri",
        "content": "• **Yüzde / Kâr-Zarar**: Ürünün maliyetine daima $100x$ denir. %20 kârla satış $= 120x$, %15 zararla satış $= 85x$.\n• **Karışım**: Saf madde yüzdesi $= \\frac{\\text{Saf Madde Miktarı}}{\\text{Toplam Karışım Miktarı}} \\times 100$\n• **Hareket**: $\\text{Yol} = \\text{Hız} \\times \\text{Zaman}$ ($x = v \\cdot t$).\n  - Karşılaşma (zıt yön): $x = (v_1 + v_2) \\cdot t$\n  - Yetişme (aynı yön): $x = (v_1 - v_2) \\cdot t$\n  - Ortalama Hız: $v_{\\text{ort}} = \\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$",
        "goldenRule": "Su buharlaştırıldığında tuz/şeker miktarı değişmez; saf su eklendiğinde saf tuz eklenmiş sayılmaz.",
        "pitfall": "Gidiş-dönüş ortalama hızında hızların aritmetik ortalaması ALINMAZ! $v_{\\text{ort}} = \\frac{2 v_1 v_2}{v_1 + v_2}$ harmonik ortalama formülü kullanılır.",
        "example": "%20'lik 40 kg ve %40'lık 60 kg karışım: $\\frac{40(0{,}2) + 60(0{,}4)}{100} = \\frac{8 + 24}{100} = \\%32$."
      }
    ]
  },
  {
    "id": "ucgenler",
    "title": "Üçgenler ve Geometri",
    "badge": "9. Ünite",
    "icon": "triangle",
    "color": "#14b8a6",
    "description": "Üçgende açılar, açı-kenar bağıntıları, eşlik ve benzerlik, açıortay-kenarortay, dik üçgen (Pisagor, Öklid) ve alan formülleri.",
    "simulator": "pythagoras-lab",
    "sections": [
      {
        "title": "1. Üçgende Açılar ve Açı-Kenar Bağıntıları",
        "content": "• İç açılar toplamı $180^\\circ$, dış açılar toplamı $360^\\circ$ dir.\n• Bir dış açı kendisine komşu olmayan iki iç açının toplamına eşittir.\n• **Üçgen Eşitsizliği**: $|b - c| < a < b + c$\n• Büyük açının karşısında büyük kenar bulunur: $m(\\widehat{A}) > m(\\widehat{B}) \\implies a > b$.",
        "goldenRule": "Geniş açılı ($m(\\widehat{A}) > 90^\\circ$) üçgende: $a^2 > b^2 + c^2$. Dar açılı üçgende: $a^2 < b^2 + c^2$.",
        "pitfall": "Bir üçgenin kenarları tam sayı ve çevresi biliniyorsa en uzun kenar çevrenin yarısından KESİNLİKLE küçük olmalıdır ($a < Ç/2$).",
        "example": "Kenarları 5 ve 9 cm olan üçgende üçüncü kenar: $9-5 < x < 9+5 \\implies 4 < x < 14$."
      },
      {
        "title": "2. Dik Üçgen (Pisagor ve Öklid Bağıntıları)",
        "content": "• **Pisagor**: $a^2 + b^2 = c^2$\n• **Özel Dik Üçgenler**: 3-4-5, 5-12-13, 8-15-17, 7-24-25 ve bunların katları.\n• **Özel Açılı Üçgenler**:\n  - $30^\\circ - 60^\\circ - 90^\\circ$: $30^\\circ$'nin karşısı $a$ ise, hipotenüs $2a$, $60^\\circ$'nin karşısı $a\\sqrt{3}$.\n  - $45^\\circ - 45^\\circ - 90^\\circ$: Dik kenarlar $a$, hipotenüs $a\\sqrt{2}$.\n• **Öklid Bağıntıları** (Dik açıdan inen dikme için):\n  1. $h^2 = p \\cdot k$\n  2. $b^2 = k \\cdot a$ ve $c^2 = p \\cdot a$\n  3. $a \\cdot h = b \\cdot c$",
        "goldenRule": "Muhteşem Üçlü: Dik üçgende hipotenüse indirilen kenarortay ayırdığı parçalara eşittir: $V_a = a/2$.",
        "pitfall": "Öklid bağıntısı yalnızca dik açıdan hipotenüse dikme indirildiğinde geçerlidir; rastgele üçgenlerde uygulanamaz!",
        "example": "Hipotenüsü 4 ve 9 cm bölen yükseklik: $h^2 = 4 \\cdot 9 = 36 \\implies h = 6$ cm."
      },
      {
        "title": "3. Benzerlik ve Üçgende Alan",
        "content": "• **Benzerlik Oranı ($k$)**: Karşılıklı kenarların oranıdır.\n• Çevreler oranı $k$'ya eşittir.\n• **Alanlar oranı $k^2$'ye eşittir!**\n• **Alan Formülleri**:\n  1. $A = \\frac{\\text{taban} \\times h}{2}$\n  2. Sinüslü Alan: $A = \\frac{1}{2} a b \\sin(\\alpha)$\n  3. Eşkenar Üçgen: $A = \\frac{a^2\\sqrt{3}}{4}$",
        "goldenRule": "Ağırlık merkezi ($G$) kenarortayı köşeye 2 birim, kenara 1 birim ($2:1$ oranı) oranında böler.",
        "pitfall": "Benzerlik oranı $2/3$ ise alanlar oranı $2/3$ değil, $(2/3)^2 = 4/9$ dur!",
        "example": "Bir kenarı 6 cm olan eşkenar üçgenin alanı $\\frac{6^2\\sqrt{3}}{4} = 9\\sqrt{3}\\text{ cm}^2$ dir."
      }
    ]
  },
  {
    "id": "veri_istatistik",
    "title": "Veri, Olasılık ve İstatistik",
    "badge": "10. Ünite",
    "icon": "bar-chart-2",
    "color": "#a855f7",
    "description": "Merkezi eğilim ve yayılım ölçüleri (ortalama, medyan, mod, açıklık, standart sapma), grafik gösterimleri ve temel olasılık.",
    "sections": [
      {
        "title": "1. Merkezi Eğilim ve Yayılım Ölçüleri",
        "content": "• **Merkezi Eğilim Ölçüleri**:\n  1. **Aritmetik Ortalama**: Veriler toplamı / Veri sayısı\n  2. **Medyan (Ortanca)**: Küçükten büyüğe sıralandığında tam ortadaki değer (çift sayıda ise ortadaki ikisinin ortalaması)\n  3. **Mod (Tepe Değer)**: En çok tekrar eden veri\n• **Merkezi Yayılım Ölçüleri**:\n  1. **Açıklık (Ranj)**: En büyük değer $-$ En küçük değer\n  2. **Standart Sapma**: Verilerin ortalamaya yakınlığını ve tutarlılığını ölçer. Standart sapma küçükse veriler birbirine yakın ve grup homojendir.",
        "goldenRule": "Tüm verileri eşit olan bir veri grubunun standart sapması sıfırdır ($S = 0$).",
        "pitfall": "Medyanı bulmadan önce verileri MUTLAKA küçükten büyüğe sıralamalısın! Sıralamadan ortadaki elemanı seçmek en sık yapılan hatadır.",
        "example": "Dizi: $2, 5, 8, 8, 12 \\implies$ Ortalama: 7, Medyan: 8, Mod: 8, Açıklık: $12 - 2 = 10$."
      },
      {
        "title": "2. Grafik Türleri ve Yorumlama",
        "content": "• **Daire Grafiği**: Bir bütünün parçalarını göstermek için en uygundur (tüm daire $360^\\circ$).\n• **Çizgi Grafiği**: Zaman içindeki değişimi ve sürekliliği göstermek için en uygundur (sıcaklık, borsa, boy artışı).\n• **Sütun Grafiği**: Farklı kategoriler arasındaki karşılaştırmaları göstermek için idealdir.\n• **Kutu Grafiği (Boxplot)**: En küçük değer, $Q_1$ (alt çeyrek), $Q_2$ (medyan), $Q_3$ (üst çeyrek) ve en büyük değeri özetler.",
        "goldenRule": "Daire grafiğinde parça açısı $= \\frac{\\text{Değer}}{\\text{Toplam}} \\times 360^\\circ$.",
        "pitfall": "Zaman içindeki trendi incelerken sütun grafiği yerine çizgi grafiği tercih edilir.",
        "example": "Toplam 120 kişinin 30'u $\\frac{30}{120} \\times 360^\\circ = 90^\\circ$'lik merkez açıyla gösterilir."
      },
      {
        "title": "3. Basit Olasılık Kavramı",
        "content": "Bir olayın gerçekleşme olasılığı:\n$$P(A) = \\frac{\\text{İstenen Olası Durumların Sayısı}}{\\text{Tüm Olası Durumların Sayısı (Örnek Uzay)}}$$\n• İmkansız olay: $P = 0$, Kesin olay: $P = 1$\n• Bir olayın olma ve olmama olasılıkları toplamı: $P(A) + P(A') = 1$",
        "goldenRule": "Bir madeni para $n$ kez atıldığında tüm durumlar $2^n$; bir zar $n$ kez atıldığında $6^n$ dir.",
        "pitfall": "Olasılık değeri asla $0$'dan küçük veya $1$'den büyük olamaz ($0 \\le P(A) \\le 1$).",
        "example": "Zarda asal sayı gelme: $\\{2, 3, 5\\}$ (3 durum) $\\implies 3/6 = 1/2$."
      }
    ]
  }
];
