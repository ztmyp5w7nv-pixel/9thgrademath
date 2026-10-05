# -*- coding: utf-8 -*-
import json

topics = [
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
                "goldenRule": "Bir önermenin değili (olumsuzu) $p'$ ile gösterilir. $(p')' \equiv p$ dir.",
                "pitfall": "'Ahmet çok çalışkandır' veya 'Bugün hava sıcak' gibi kişiye göre değişen göreceli yargılar önerme SAYILMAZ!",
                "example": "$p: '2 + 3 = 6'$ ifadesi yanlış bir önermedir ($p \equiv 0$). $p': '2 + 3 \\neq 6'$ doğru bir önermedir ($p' \equiv 1$)."
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
                "content": "$\sqrt[n]{a} = b \\iff b^n = a$\n• Rasyonel Üs İlişkisi: $\\sqrt[n]{a^m} = a^{m/n}$\n• **Tanım Kümesi**:\n  1. $n$ tek ise: $\\sqrt[n]{a}$ her reel $a$ için tanımlıdır.\n  2. $n$ çift ise: $\\sqrt[n]{a}$ ifadesinin reel olması için $a \\ge 0$ olmalıdır!\n• Kök dışına çıkarma: $\\sqrt[2n]{a^{2n}} = |a|$ (çift derecede mutlak değerle çıkar!), $\\sqrt[2n+1]{a^{2n+1}} = a$ (tek derecede aynen çıkar).",
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
                "content": "• İç açılar toplamı $180^\circ$, dış açılar toplamı $360^\circ$ dir.\n• Bir dış açı kendisine komşu olmayan iki iç açının toplamına eşittir.\n• **Üçgen Eşitsizliği**: $|b - c| < a < b + c$\n• Büyük açının karşısında büyük kenar bulunur: $m(\\widehat{A}) > m(\\widehat{B}) \\implies a > b$.",
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
]

# Write data-topics.js
with open("/Users/gokalpemirbas/.gemini/antigravity/scratch/matematik9-app/js/data-topics.js", "w", encoding="utf-8") as f:
    f.write("// 9. SINIF MATEMATİK TÜM KONU ANLATIMLARI VE FORMÜLLERİ\n")
    f.write("window.TOPICS_DATA = " + json.dumps(topics, ensure_ascii=False, indent=2) + ";\n")

print("data-topics.js generated successfully. Total topics:", len(topics))

# Now generate 100+ high value Flashcards
flashcards = [
    # Üslü Sayılar (20 Kart - ÖZEL VURGU)
    {"id": 1, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Temel Kural",
     "front": "Sıfırıncı Kuvvet Kuralı: $a^0 = ?$ ($a \\neq 0$)",
     "back": "$a^0 = 1$ dir.\n⚠️ Dikkat: $0^0$ tanımsız/belirsizdir!"},
    {"id": 2, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Tuzak",
     "front": "$-2^4$ ile $(-2)^4$ arasındaki fark nedir?",
     "back": "$-2^4 = -(2^4) = -16$ (parantezsiz eksi etkilenmez).\n$(-2)^4 = +16$ (çift kuvvet eksiye de etki eder)."},
    {"id": 3, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Altın Kural",
     "front": "Negatif Üs Kuralı: $a^{-n} = ?$",
     "back": "$a^{-n} = \\frac{1}{a^n}$\nÖrnek: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$ (sayı negatifleşmez, ters döner!)."},
    {"id": 4, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Kesirli Negatif Üs: $\\left(\\frac{a}{b}\\right)^{-n} = ?$",
     "back": "$\\left(\\frac{b}{a}\\right)^n$\nÖrnek: $(2/3)^{-2} = (3/2)^2 = 9/4$."},
    {"id": 5, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Tabanları aynı üslü sayıların çarpımı: $a^m \\cdot a^n = ?$",
     "back": "$a^{m+n}$ (Üsler toplanır!)\nÖrnek: $2^3 \\cdot 2^5 = 2^8$."},
    {"id": 6, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Tabanları aynı üslü sayıların bölümü: $\\frac{a^m}{a^n} = ?$",
     "back": "$a^{m-n}$ (Payın üssünden paydanın üssü çıkarılır!)\nÖrnek: $5^7 / 5^3 = 5^4$."},
    {"id": 7, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Üssün Üssü Kuralı: $(a^m)^n = ?$",
     "back": "$a^{m \\cdot n}$ (Üsler çarpılır!)\nÖrnek: $(2^3)^4 = 2^{12} = 4096$."},
    {"id": 8, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Üsleri aynı sayıların çarpımı: $a^n \\cdot b^n = ?$",
     "back": "$(a \\cdot b)^n$\nÖrnek: $2^5 \\cdot 5^5 = (2 \\cdot 5)^5 = 10^5 = 100.000$."},
    {"id": 9, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Pratik",
     "front": "$2^6 + 2^6$ işleminin sonucu kaçtır?",
     "back": "$2 \\cdot 2^6 = 2^1 \\cdot 2^6 = 2^7$ dir!\nToplama işlemi aynı terimlerin çarpımına dönüşür."},
    {"id": 10, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Denklem",
     "front": "$a^x = a^y$ ise şart nedir?",
     "back": "$a \\neq 0, 1, -1$ ise üsler eşittir: $x = y$."},
    {"id": 11, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Denklem",
     "front": "$x^n = y^n$ eşitliğinde $n$ çift ise çözüm nedir?",
     "back": "$x = y$ veya $x = -y$ dir!\nÖrnek: $x^2 = 9 \\implies x = 3$ veya $x = -3$."},
    {"id": 12, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Denklem",
     "front": "$A^B = 1$ denkleminin 3 çözümü nedir?",
     "back": "1) $B = 0$ ve $A \\neq 0$\n2) $A = 1$\n3) $A = -1$ ve $B$ çift sayı."},
    {"id": 13, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Bilimsel",
     "front": "Bilimsel Gösterim formatı nasıldır?",
     "back": "$a \\cdot 10^n$ biçimindedir;\nBurada $1 \\le |a| < 10$ ve $n \\in \\mathbb{Z}$ olmalıdır."},
    {"id": 14, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Hafıza",
     "front": "2'nin kuvvetleri: $2^0$'dan $2^{10}$'a kadar ezberle!",
     "back": "1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.\n$2^{10} = 1024$ (1 KB)."},
    {"id": 15, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Hafıza",
     "front": "3'ün kuvvetleri: $3^1$'den $3^5$'e kadar ezberle!",
     "back": "3, 9, 27, 81, 243."},
    {"id": 16, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Basamak",
     "front": "$A = 4^6 \\cdot 5^{11}$ sayısı kaç basamaklıdır?",
     "back": "$4^6 = 2^{12}$. $A = 2^{12} \\cdot 5^{11} = 2^1 \\cdot 10^{11} = 2 \\cdot 10^{11}$.\n$1$ basamak $+ 11$ sıfır $= 12$ basamaklıdır."},
    {"id": 17, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "Bir sayının yarısı nasıl alınır?",
     "back": "Sayı 2'ye bölünür: $8^4$'ün yarısı $\\frac{(2^3)^4}{2^1} = \\frac{2^{12}}{2^1} = 2^{11}$ dir."},
    {"id": 18, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Kural",
     "front": "$\\frac{1}{1 + 2^x} + \\frac{1}{1 + 2^{-x}}$ sonucu nedir?",
     "back": "Daima 1'dir!\nÇünkü $2^{-x} = 1/2^x$ yazılıp payda eşitlenirse pay ve payda eşitlenir."},
    {"id": 19, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Ters Çevirme",
     "front": "$-(-3)^{-3}$ işleminin sonucu nedir?",
     "back": "$(-3)^{-3} = \\frac{1}{(-3)^3} = -\\frac{1}{27}$.\nÖnündeki eksi ile: $-(-1/27) = +\\frac{1}{27}$."},
    {"id": 20, "unitId": "uslu_sayilar", "unitTitle": "Üslü Sayılar", "tag": "Sıralama",
     "front": "$2^{60}, 3^{40}, 5^{20}$ sayıları nasıl sıralanır?",
     "back": "Üslerin EBOB'u 20'dir.\n$(2^3)^{20} = 8^{20}$, $(3^2)^{20} = 9^{20}$, $(5^1)^{20} = 5^{20}$.\nSıralama: $5^{20} < 8^{20} < 9^{20}$."},

    # Mantık (10 Kart)
    {"id": 21, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Tanım",
     "front": "Önerme nedir?",
     "back": "Kesin doğru (1) ya da kesin yanlış (0) hüküm bildiren ifadelerdir. Soru ve emir cümleleri önerme değildir."},
    {"id": 22, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Kural",
     "front": "De Morgan Kuralları nelerdir?",
     "back": "$(p \\land q)' \\equiv p' \\lor q'$\n$(p \\lor q)' \\equiv p' \\land q'$"},
    {"id": 23, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Altın Kural",
     "front": "$p \\implies q$ koşullu önermesinin 'Veya' türünden dengi nedir?",
     "back": "$p \\implies q \\equiv p' \\lor q$ (Birincinin değili veya ikinci)."},
    {"id": 24, "unitId": "mantik", "unitTitle": "Mantık", "tag": "100 Kuralı",
     "front": "$p \\implies q$ ne zaman 0 olur?",
     "back": "Sadece ve sadece $1 \\implies 0 \\equiv 0$ durumunda!\nDiğer tüm durumlarda sonuç 1'dir."},
    {"id": 25, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Kural",
     "front": "$p \\implies q$ önermesinin Karşıt Tersi nedir?",
     "back": "$q' \\implies p'$ dir ve önermenin kendisine daima denktir."},
    {"id": 26, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Tanım",
     "front": "Totoloji ve Çelişki nedir?",
     "back": "Bileşenlerin her değeri için daima 1 çıkan önerme: TOTOLOJİ.\nDaima 0 çıkan önerme: ÇELİŞKİ."},
    {"id": 27, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Bağlaç",
     "front": "Ya da ($\\underline{\\lor}$) bağlacı kuralı nedir?",
     "back": "Farklı iken 1, aynı iken 0 olur.\n$1 \\underline{\\lor} 0 \\equiv 1$, $1 \\underline{\\lor} 1 \\equiv 0$, $0 \\underline{\\lor} 0 \\equiv 0$."},
    {"id": 28, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Niceleyici",
     "front": "Her ($\\forall$) ve Bazı ($\\exists$) değilleri nedir?",
     "back": "$(\\forall)' = \\exists$ ve $(\\exists)' = \\forall$ dır.\nEşitsizlik yönleri de ters döner: $(\\ge)' = <$."},
    {"id": 29, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Kural",
     "front": "$n$ tane önermenin kaç farklı doğruluk durumu vardır?",
     "back": "$2^n$ farklı durum vardır. Örneğin 5 önerme için $2^5 = 32$ durum."},
    {"id": 30, "unitId": "mantik", "unitTitle": "Mantık", "tag": "Kural",
     "front": "$p \\land p'$ ve $p \\lor p'$ neye denktir?",
     "back": "$p \\land p' \\equiv 0$ (Çelişki)\n$p \\lor p' \\equiv 1$ (Totoloji)"},

    # Kümeler (10 Kart)
    {"id": 31, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Formül",
     "front": "Alt küme ve öz alt küme formülleri nelerdir?",
     "back": "Alt küme: $2^n$\nÖz alt küme: $2^n - 1$"},
    {"id": 32, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Formül",
     "front": "Birleşim kümesinin eleman sayısı formülü nedir?",
     "back": "$s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$"},
    {"id": 33, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Kural",
     "front": "$A \\setminus B$ fark kümesinin tümleyenli ifadesi nedir?",
     "back": "$A \\setminus B = A \\cap B'$ (A ile B'nin değilinin kesişimi)."},
    {"id": 34, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Formül",
     "front": "Kartezyen çarpımın eleman sayısı formülü nedir?",
     "back": "$s(A \\times B) = s(A) \\cdot s(B)$"},
    {"id": 35, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Kural",
     "front": "$s(A) + s(A') = ?$",
     "back": "$s(E)$ (Evrensel kümenin eleman sayısı)."},
    {"id": 36, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Tuzak",
     "front": "Boş küme her kümenin nesi olur?",
     "back": "$\\emptyset \\subseteq A$ (Boş küme her kümenin ALT KÜMESİDİR)."},
    {"id": 37, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Kural",
     "front": "$A \\subseteq B$ ise $A \\cap B$ ve $A \\cup B$ neye eşittir?",
     "back": "$A \\cap B = A$ (küçük olan)\n$A \\cup B = B$ (büyük olan)"},
    {"id": 38, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Kural",
     "front": "Ayrık iki küme için $s(A \\cup B)$ nedir?",
     "back": "$A \\cap B = \\emptyset$ olduğundan $s(A \\cup B) = s(A) + s(B)$ dir."},
    {"id": 39, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Pratik",
     "front": "Bir kümede 'a bulunur ama b bulunmaz' alt küme sayısı nasıl bulunur?",
     "back": "Hem a hem b kümeden atılır, kalan $n-2$ elemanla $2^{n-2}$ hesaplanır."},
    {"id": 40, "unitId": "kumeler", "unitTitle": "Kümeler", "tag": "Kural",
     "front": "De Morgan Kümeler Kuralı nedir?",
     "back": "$(A \\cup B)' = A' \\cap B'$\n$(A \\cap B)' = A' \\cup B'$"},

    # Sayı Kümeleri & Bölünebilme (10 Kart)
    {"id": 41, "unitId": "sayilar", "unitTitle": "Sayı Kümeleri", "tag": "Tanım",
     "front": "İrrasyonel sayı ($\\mathbb{Q}'$) nedir?",
     "back": "İki tam sayının oranı ($a/b$) şeklinde yazılamayan sayılardır. Kök dışına çıkamayan sayılar ($\\sqrt{2}, \\sqrt{3}$) ve $\\pi$ irrasyoneldir."},
    {"id": 42, "unitId": "sayilar", "unitTitle": "Bölünebilme", "tag": "Kural",
     "front": "3 ve 9 ile bölünebilme kuralları nedir?",
     "back": "Rakamları toplamı 3'ün katı ise 3'e, 9'un katı ise 9'a tam bölünür."},
    {"id": 43, "unitId": "sayilar", "unitTitle": "Bölünebilme", "tag": "Kural",
     "front": "4 ile bölünebilme kuralı nedir?",
     "back": "Son iki basamağın oluşturduğu sayı 00 veya 4'ün katı olmalıdır."},
    {"id": 44, "unitId": "sayilar", "unitTitle": "Bölünebilme", "tag": "Kural",
     "front": "11 ile bölünebilme kuralı nedir?",
     "back": "Sağdan sola rakamların altına $+ - + - +$ yazılıp toplanır, sonuç 11'in katı olmalıdır."},
    {"id": 45, "unitId": "sayilar", "unitTitle": "EBOB-EKOK", "tag": "Altın Kural",
     "front": "$a \\cdot b$ ile EBOB ve EKOK ilişkisi nedir?",
     "back": "$a \\cdot b = \\text{EBOB}(a, b) \\cdot \\text{EKOK}(a, b)$"},
    {"id": 46, "unitId": "sayilar", "unitTitle": "EBOB-EKOK", "tag": "Kural",
     "front": "Aralarında asal iki sayının EBOB ve EKOK'u nedir?",
     "back": "$\\text{EBOB} = 1$\n$\\text{EKOK} = a \\cdot b$"},
    {"id": 47, "unitId": "sayilar", "unitTitle": "Bölen Sayısı", "tag": "Formül",
     "front": "Pozitif bölen sayısı nasıl hesaplanır?",
     "back": "$A = x^a \\cdot y^b \\cdot z^c$ asal çarpanlara ayrılır.\n$\\text{PBS} = (a + 1)(b + 1)(c + 1)$."},
    {"id": 48, "unitId": "sayilar", "unitTitle": "Problemler", "tag": "Taktik",
     "front": "EBOB mu EKOK mu kullanacağını nasıl anlarsın?",
     "back": "Bütünden parçaya gidiliyorsa (bölme, paylaştırma) $\\to$ EBOB.\nParçadan bütüne gidiliyorsa (birleşme, periyot, nöbet) $\\to$ EKOK."},
    {"id": 49, "unitId": "sayilar", "unitTitle": "Periyot", "tag": "Kural",
     "front": "Bugün günlerden Salı ise 100 gün sonra hangi gün olur?",
     "back": "Hafta 7 gündür. $100 = 7 \\cdot 14 + 2$ (kalan 2).\nSalı + 2 gün = Perşembe."},
    {"id": 50, "unitId": "sayilar", "unitTitle": "Bölünebilme", "tag": "Bileşik",
     "front": "36 ile bölünebilme hangi iki kuralın birleşimidir?",
     "back": "Aralarında asal iki çarpan olan 4 ve 9 ile bölünebilmedir."},

    # Denklem ve Eşitsizlikler (10 Kart)
    {"id": 51, "unitId": "denklemler", "unitTitle": "Denklemler", "tag": "Özel Durum",
     "front": "$ax + b = 0$ denkleminin çözüm kümesi tüm reel sayılar (sonsuz) ise şart nedir?",
     "back": "$a = 0$ ve $b = 0$ olmalıdır ($0x = 0$)."},
    {"id": 52, "unitId": "denklemler", "unitTitle": "Denklemler", "tag": "Özel Durum",
     "front": "$ax + b = 0$ denkleminin çözüm kümesi boş küme ise şart nedir?",
     "back": "$a = 0$ ve $b \\neq 0$ olmalıdır ($0x = k$)."},
    {"id": 53, "unitId": "denklemler", "unitTitle": "Eşitsizlik", "tag": "Altın Kural",
     "front": "Bir eşitsizlik negatif sayıyla çarpılır veya bölünürse ne olur?",
     "back": "Eşitsizlik yön değiştirir!\n$< \\implies >$, $\\le \\implies \\ge$."},
    {"id": 54, "unitId": "denklemler", "unitTitle": "Eşitsizlik", "tag": "Tuzak",
     "front": "$-3 \\le x < 4$ ise $x^2$ hangi aralıktadır?",
     "back": "$0 \\le x^2 < 16$ (Aralık 0 içerdiği için en küçük değer 0'dır!)."},
    {"id": 55, "unitId": "denklemler", "unitTitle": "Eşitsizlik", "tag": "Kural",
     "front": "Eşitsizlikler taraf tarafa çıkarılabilir mi?",
     "back": "HAYIR! Eşitsizlikler sadece toplanabilir. Çıkarmak için çıkarılacak eşitsizlik $-1$ ile çarpılıp toplanır."},
    {"id": 56, "unitId": "denklemler", "unitTitle": "Denklem Sistemi", "tag": "Kural",
     "front": "İki bilinmeyenli sistemde sonsuz çözüm koşulu nedir?",
     "back": "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ (Çakışık doğrular)."},
    {"id": 57, "unitId": "denklemler", "unitTitle": "Denklem Sistemi", "tag": "Kural",
     "front": "İki bilinmeyenli sistemde boş küme (çözümsüzlük) koşulu nedir?",
     "back": "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ (Paralel doğrular)."},
    {"id": 58, "unitId": "denklemler", "unitTitle": "Aralık", "tag": "Tanım",
     "front": "$[a, b)$ yarı açık aralığı ne anlama gelir?",
     "back": "$a$ dahildir (köşeli parantez, $\\ge$), $b$ dahil değildir (yay parantez, $<$)."},
    {"id": 59, "unitId": "denklemler", "unitTitle": "Eşitsizlik", "tag": "Taktik",
     "front": "$x, y \\in \\mathbb{Z}$ (tam sayı) derse ne yapılır?",
     "back": "Aralıktan doğrudan en uygun tam sayı DEĞERLERİ seçilir; taraf tarafa toplama yapılmaz!"},
    {"id": 60, "unitId": "denklemler", "unitTitle": "Denklem", "tag": "Tuzak",
     "front": "Rasyonel denklem çözerken ilk bakılması gereken nedir?",
     "back": "Paydayı sıfır yapan değerler (tanımsızlık) kök olamaz!"},

    # Mutlak Değer (10 Kart)
    {"id": 61, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Tanım",
     "front": "Mutlak değerin geometrik anlamı nedir?",
     "back": "Sayı doğrusu üzerinde bir sayının sıfır noktasına olan uzaklığıdır; uzaklık negatif olamaz ($|x| \\ge 0$)."},
    {"id": 62, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Kural",
     "front": "$x < 0$ ise $|x|$ dışarı nasıl çıkar?",
     "back": "$-x$ olarak çıkar (önüne eksi alarak pozitifleşir)."},
    {"id": 63, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Kural",
     "front": "$|a - b| = |b - a|$ doğru mudur?",
     "back": "EVET! Çünkü iki nokta arasındaki uzaklık yönden bağımsızdır."},
    {"id": 64, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Denklem",
     "front": "$|2x - 6| = 10$ kökleri toplamı nedir?",
     "back": "Kökler $x = 8$ ve $x = -2$. Toplamları: $6$ dır ($2 \\times$ içini sıfır yapan değer)."},
    {"id": 65, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Tuzak",
     "front": "$|3x - 1| = -5$ denkleminin çözüm kümesi nedir?",
     "back": "$\\emptyset$ (boş küme)! Mutlak değer hiçbir zaman negatif olamaz."},
    {"id": 66, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Eşitsizlik",
     "front": "$|x| \\le a$ ($a > 0$) açılımı nedir?",
     "back": "$-a \\le x \\le a$ (iki sınır arasına sıkışır)."},
    {"id": 67, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Eşitsizlik",
     "front": "$|x| \\ge a$ ($a > 0$) açılımı nedir?",
     "back": "$x \\ge a$ veya $x \\le -a$ (iki ayrı kola ayrılır)."},
    {"id": 68, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Kural",
     "front": "$|A| + |B| = 0$ ise $A$ ve $B$ nedir?",
     "back": "Mutlak değerler negatif olamayacağından $A = 0$ ve $B = 0$ olmalıdır."},
    {"id": 69, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "En Küçük Değer",
     "front": "$|x - 2| + |x - 8|$ ifadesinin en küçük değeri nedir?",
     "back": "Kritik noktalar arasındaki mesafe: $8 - 2 = 6$ dır ($x = 2$ koyarsan da $6$ çıkar)."},
    {"id": 70, "unitId": "mutlak_deger", "unitTitle": "Mutlak Değer", "tag": "Özdeşlik",
     "front": "$\\sqrt{A^2} = ?$",
     "back": "$\\sqrt{A^2} = |A|$ dır (çift dereceli kök dışarı mutlak değerle çıkar!)."},

    # Köklü Sayılar (10 Kart)
    {"id": 71, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Rasyonel Üs",
     "front": "$\\sqrt[n]{a^m} = ?$",
     "back": "$a^{m/n}$ (Kök derecesi üssün paydasına yazılır!)."},
    {"id": 72, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Tanım",
     "front": "$\\sqrt{x - 5}$ reel sayı ise şart nedir?",
     "back": "$x - 5 \\ge 0 \\implies x \\ge 5$ (Çift kökün içi negatif olamaz!)."},
    {"id": 73, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Eşlenik",
     "front": "$\\frac{1}{\\sqrt{a} - \\sqrt{b}}$ eşleniği nedir?",
     "back": "Pay ve payda $(\\sqrt{a} + \\sqrt{b})$ ile çarpılır: $\\frac{\\sqrt{a} + \\sqrt{b}}{a - b}$."},
    {"id": 74, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Özel Kök",
     "front": "$\\sqrt{a \\pm 2\\sqrt{b}}$ kuralı nedir?",
     "back": "Çarpımları $b$, toplamları $a$ olan iki sayı $x$ ve $y$ ise sonuç $\\sqrt{x} \\pm \\sqrt{y}$ dir ($x > y$)."},
    {"id": 75, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Kök Dışı",
     "front": "$\\sqrt{75}$ nasıl dışarı çıkar?",
     "back": "$\\sqrt{25 \\cdot 3} = 5\\sqrt{3}$."},
    {"id": 76, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Kök İçi",
     "front": "$3\\sqrt{2}$ kök içine nasıl girer?",
     "back": "$\\sqrt{3^2 \\cdot 2} = \\sqrt{9 \\cdot 2} = \\sqrt{18}$."},
    {"id": 77, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Tuzak",
     "front": "$\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ doğru mudur?",
     "back": "YANLIŞ! Kök içindeki toplamlar ayrı ayrı kök dışına çıkarılamaz: $\\sqrt{9+16} = 5 \\neq 3+4$."},
    {"id": 78, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "İşlem",
     "front": "$\\sqrt{18} + \\sqrt{32} = ?$",
     "back": "$3\\sqrt{2} + 4\\sqrt{2} = 7\\sqrt{2}$."},
    {"id": 79, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Eşlenik",
     "front": "$\\frac{6}{\\sqrt{3}} = ?$",
     "back": "$\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$."},
    {"id": 80, "unitId": "koklu_sayilar", "unitTitle": "Köklü Sayılar", "tag": "Denklem",
     "front": "Köklü denklem çözerken en önemli adım nedir?",
     "back": "Bulunan kökleri orijinal denklemde test etmek; çünkü kökün sonucu negatif olamaz."},

    # Oran-Orantı ve Problemler (10 Kart)
    {"id": 81, "unitId": "oran_oranti", "unitTitle": "Oran-Orantı", "tag": "Tanım",
     "front": "Doğru orantı ve ters orantı denklemleri nedir?",
     "back": "Doğru orantı: $y / x = k$ (bölüm sabit)\nTers orantı: $x \\cdot y = k$ (çarpım sabit)"},
    {"id": 82, "unitId": "oran_oranti", "unitTitle": "Oran-Orantı", "tag": "Formül",
     "front": "Aritmetik ve Geometrik Ortalama formülleri nedir?",
     "back": "A.O. $= \\frac{a + b}{2}$\nG.O. $= \\sqrt{a \\cdot b}$"},
    {"id": 83, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Yaş",
     "front": "Yaş problemlerinde hiç değişmeyen şey nedir?",
     "back": "İki kişi arasındaki YAŞ FARKI zamanla asla değişmez!"},
    {"id": 84, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Kesir",
     "front": "Bir telin ucundan $1/5$'i kesilirse orta nokta ne kadar kayar?",
     "back": "Kesilen parçanın yarısı kadar: $\\frac{x/5}{2} = \\frac{x}{10}$ kadar kayar."},
    {"id": 85, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Yüzde",
     "front": "%20 kârla satılan ürünün satış fiyatı maliyetin kaç katıdır?",
     "back": "Maliyet 100 ise Satış 120'dir (1,2 katıdır)."},
    {"id": 86, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Hız",
     "front": "Hareket problemi temel formülü nedir?",
     "back": "$\\text{Yol} = \\text{Hız} \\times \\text{Zaman}$ ($x = v \\cdot t$)."},
    {"id": 87, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Hız",
     "front": "Birbirine doğru gelen iki aracın karşılaşma süresi nedir?",
     "back": "$t = \\frac{\\text{Aralarındaki Mesafe}}{v_1 + v_2}$ (Hızlar toplanır)."},
    {"id": 88, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Karışım",
     "front": "Karışımın şeker oranı nasıl hesaplanır?",
     "back": "$\\frac{\\text{Saf Şeker Miktarı}}{\\text{Toplam Karışım Miktarı}} \\times 100$"},
    {"id": 89, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "İşçi",
     "front": "Ali 6, Veli 12 günde bitirirse birlikte kaç günde bitirirler?",
     "back": "$\\frac{1}{t} = \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies t = 4$ gün."},
    {"id": 90, "unitId": "oran_oranti", "unitTitle": "Problemler", "tag": "Yüzde",
     "front": "%20 indirim üzerine tekrar %10 indirim toplam kaç indirimdir?",
     "back": "$100 \\to 80 \\to 72$ TL. Toplam indirim %28'dir (%30 DEĞİLDİR!)."},

    # Üçgenler ve Geometri (10 Kart)
    {"id": 91, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Açılar",
     "front": "Üçgenin iç ve dış açıları toplamı kaçtır?",
     "back": "İç açılar toplamı $180^\\circ$\nDış açılar toplamı $360^\\circ$"},
    {"id": 92, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Kural",
     "front": "Üçgen Eşitsizliği nedir?",
     "back": "$|b - c| < a < b + c$ (Bir kenar diğer ikisinin farkından büyük, toplamından küçüktür)."},
    {"id": 93, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Özel Üçgen",
     "front": "$30^\\circ - 60^\\circ - 90^\\circ$ üçgeni kenar oranları nedir?",
     "back": "$30^\\circ$ karşısı: $a$\nHipotenüs: $2a$\n$60^\\circ$ karşısı: $a\\sqrt{3}$"},
    {"id": 94, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Özel Üçgen",
     "front": "$45^\\circ - 45^\\circ - 90^\\circ$ üçgeni kenar oranları nedir?",
     "back": "Dik kenarlar: $a, a$\nHipotenüs: $a\\sqrt{2}$"},
    {"id": 95, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Pisagor",
     "front": "Temel özel dik üçgenler nelerdir?",
     "back": "3-4-5, 5-12-13, 8-15-17, 7-24-25 ve katları."},
    {"id": 96, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Öklid",
     "front": "Öklid yükseklik kuralı nedir?",
     "back": "$h^2 = p \\cdot k$ (Yüksekliğin karesi tabanda ayırdığı parçaların çarpımıdır)."},
    {"id": 97, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Kural",
     "front": "Muhteşem Üçlü nedir?",
     "back": "Dik açılı üçgende hipotenüse indirilen kenarortay ayırdığı parçalara eşittir: $V_a = a/2$."},
    {"id": 98, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Ağırlık Merkezi",
     "front": "Üçgenin ağırlık merkezi ($G$) kenarortayı nasıl böler?",
     "back": "Köşeye 2 birim, kenara 1 birim ($2:1$ oranıyla)."},
    {"id": 99, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Benzerlik",
     "front": "Benzerlik oranı $k$ ise alanlar oranı nedir?",
     "back": "Alanlar oranı $k^2$ dir! (Benzerlik oranının karesi)."},
    {"id": 100, "unitId": "ucgenler", "unitTitle": "Üçgenler", "tag": "Alan",
     "front": "Eşkenar üçgenin alan formülü nedir?",
     "back": "$A = \\frac{a^2\\sqrt{3}}{4}$"},

    # Veri ve İstatistik (5 Kart)
    {"id": 101, "unitId": "veri_istatistik", "unitTitle": "Veri", "tag": "Tanım",
     "front": "Merkezi eğilim ölçüleri nelerdir?",
     "back": "1) Aritmetik Ortalama\n2) Medyan (Ortanca)\n3) Mod (Tepe Değer)"},
    {"id": 102, "unitId": "veri_istatistik", "unitTitle": "Veri", "tag": "Tanım",
     "front": "Merkezi yayılım ölçüleri nelerdir?",
     "back": "1) Açıklık (Ranj)\n2) Standart Sapma"},
    {"id": 103, "unitId": "veri_istatistik", "unitTitle": "Veri", "tag": "Yorum",
     "front": "Standart sapması küçük olan bir grup ne anlama gelir?",
     "back": "Veriler ortalamaya çok yakındır, grup homojen ve dengeli/tutarlıdır."},
    {"id": 104, "unitId": "veri_istatistik", "unitTitle": "Veri", "tag": "Grafik",
     "front": "Zaman içindeki sürekli değişimleri göstermek için en uygun grafik nedir?",
     "back": "Çizgi Grafiği."},
    {"id": 105, "unitId": "veri_istatistik", "unitTitle": "Olasılık", "tag": "Kural",
     "front": "Bir olayın olma ve olmama olasılıkları toplamı kaçtır?",
     "back": "$P(A) + P(A') = 1$ dir. Olasılık 0 ile 1 arasındadır."}
]

with open("/Users/gokalpemirbas/.gemini/antigravity/scratch/matematik9-app/js/data-flashcards.js", "w", encoding="utf-8") as f:
    f.write("// 9. SINIF MATEMATİK TÜM FORMÜL VE BİLGİ KARTLARI (105 KART)\n")
    f.write("window.FLASHCARDS_DATA = " + json.dumps(flashcards, ensure_ascii=False, indent=2) + ";\n")

print("data-flashcards.js generated successfully. Total flashcards:", len(flashcards))
