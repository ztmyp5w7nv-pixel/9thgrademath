# -*- coding: utf-8 -*-

def get_units_7_to_10():
    questions = []
    
    # -------------------------------------------------------------
    # BÖLÜM 7: KÖKLÜ İFADELER VE DENKLEMLER (26 Soru)
    # -------------------------------------------------------------
    k_unit = ("koklu_sayilar", "Köklü İfadeler ve Denklemler")
    
    k_questions = [
        # 1
        (r"$\sqrt{75} - \sqrt{27} + \sqrt{12}$ işleminin sonucu kaçtır?",
         [r"$2\sqrt{3}$", r"$3\sqrt{3}$", r"$4\sqrt{3}$", r"$5\sqrt{3}$", r"$6\sqrt{3}$"],
         2,
         r"Kök içlerini $a\sqrt{b}$ biçiminde yazalım: $\sqrt{75} = \sqrt{25 \cdot 3} = 5\sqrt{3}$, $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt{3}$, $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$. İşlem: $5\sqrt{3} - 3\sqrt{3} + 2\sqrt{3} = 4\sqrt{3}$ bulunur.",
         r"Sayıları tam kare çarpanlarına ayırarak kök dışına çıkar.", "Kolay", 10),
        
        # 2
        (r"$\sqrt{(-4)^2} + \sqrt[3]{-27} - \sqrt[4]{16}$ işleminin sonucu kaçtır?",
         ["-1", "0", "1", "3", "5"],
         0,
         r"Çift dereceli kök dışarı mutlak değerle çıkar: $\sqrt{(-4)^2} = |-4| = 4$. Tek dereceli kök işaretini korur: $\sqrt[3]{-27} = -3$. $\sqrt[4]{16} = 2$. İşlem: $4 + (-3) - 2 = 1 - 2 = -1$ bulunur.",
         r"Çift dereceli köklerde $\sqrt[2n]{x^{2n}} = |x|$ kuralına dikkat et.", "Kolay", 10),
        
        # 3
        (r"$\frac{\sqrt{3} \cdot \sqrt{6}}{\sqrt{2}}$ işleminin sonucu kaçtır?",
         ["2", "3", r"$\sqrt{6}$", r"$\sqrt{3}$", "6"],
         1,
         r"Ortak kök içinde yazalım: $\sqrt{\frac{3 \cdot 6}{2}} = \sqrt{\frac{18}{2}} = \sqrt{9} = 3$ bulunur.",
         r"Aynı dereceli kökleri tek bir kök altında çarp ve böl.", "Kolay", 10),
        
        # 4
        (r"$\frac{6}{\sqrt{3}}$ kesrinin paydasını rasyonel yaptığımızda elde edilen sonuç nedir?",
         [r"$\sqrt{3}$", r"$2\sqrt{3}$", r"$3\sqrt{3}$", r"$6\sqrt{3}$", "2"],
         1,
         r"Pay ve paydayı $\sqrt{3}$ ile çarpalım: $\frac{6 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$ bulunur.",
         r"Paydadaki kökten kurtulmak için eşleniği olan $\sqrt{3}$ ile genişlet.", "Kolay", 10),
        
        # 5
        (r"$\frac{1}{\sqrt{5} - 2}$ ifadesinin eşiti aşağıdakilerden hangisidir?",
         [r"$\sqrt{5} + 2$", r"$\sqrt{5} - 2$", r"$2 - \sqrt{5}$", r"$\frac{\sqrt{5}+2}{3}$", r"$5 + 2\sqrt{5}$"],
         0,
         r"Pay ve paydayı eşlenik olan $(\sqrt{5} + 2)$ ile çarpalım: $\frac{\sqrt{5} + 2}{(\sqrt{5} - 2)(\sqrt{5} + 2)} = \frac{\sqrt{5} + 2}{5 - 4} = \frac{\sqrt{5} + 2}{1} = \sqrt{5} + 2$ bulunur.",
         r"İki kare farkından $(a-b)(a+b) = a^2 - b^2$ elde edilir.", "Kolay", 10),
        
        # 6
        (r"$\sqrt{x - 3}$ ifadesi bir gerçek sayı belirttiğine göre, $x$'in en geniş değer aralığı nedir?",
         [r"$[3, \infty)$", r"$(3, \infty)$", r"$(-\infty, 3]$", r"$[-3, \infty)$", r"$\mathbb{R}$"],
         0,
         r"Çift dereceli köklü ifadelerin reel sayı belirtmesi için kök içinin sıfırdan büyük veya eşit olması gerekir: $x - 3 \ge 0 \implies x \ge 3$. Yani $[3, \infty)$ aralığıdır.",
         r"Karekök içi negatif olamaz: içi $\ge 0$ olmalıdır.", "Kolay", 10),
        
        # 7
        (r"$\sqrt{8 + 2\sqrt{15}}$ ifadesinin en sade hali aşağıdakilerden hangisidir?",
         [r"$\sqrt{5} + \sqrt{3}$", r"$\sqrt{5} - \sqrt{3}$", r"$\sqrt{6} + \sqrt{2}$", r"$\sqrt{15} + 1$", r"$2\sqrt{2} + \sqrt{15}$"],
         0,
         r"$\sqrt{a + 2\sqrt{b}}$ kuralına göre çarpımları 15, toplamları 8 olan iki sayı $5$ ve $3$'tür ($5 \cdot 3 = 15$ ve $5 + 3 = 8$). Dolayısıyla $\sqrt{8 + 2\sqrt{15}} = \sqrt{5} + \sqrt{3}$ olur.",
         r"Çarpımları 15, toplamları 8 olan iki pozitif sayıyı bul.", "Orta", 15),
        
        # 8
        (r"$\sqrt{2x - 1} = 5$ denkleminin çözüm kümesi nedir?",
         [r"$\{13\}$", r"$\{12\}$", r"$\{11\}$", r"$\{14\}$", r"$\{26\}$"],
         0,
         r"Her iki tarafın karesini alalım: $(\sqrt{2x - 1})^2 = 5^2 \implies 2x - 1 = 25 \implies 2x = 26 \implies x = 13$ bulunur.",
         r"Kökten kurtulmak için iki tarafın da karesini al.", "Kolay", 10),
        
        # 9
        (r"$2\sqrt{3}$ sayısı kök içine alındığında aşağıdakilerden hangisine eşit olur?",
         [r"$\sqrt{6}$", r"$\sqrt{12}$", r"$\sqrt{18}$", r"$\sqrt{24}$", r"$\sqrt{36}$"],
         1,
         r"Dışarıdaki sayı kök derecesi kadar üs alarak içeri girer: $2\sqrt{3} = \sqrt{2^2 \cdot 3} = \sqrt{4 \cdot 3} = \sqrt{12}$ olur.",
         r"Katsayı içeri girerken karesi alınarak girer.", "Kolay", 10),
        
        # 10
        (r"$\sqrt{7 - 2\sqrt{10}}$ ifadesinin eşiti nedir?",
         [r"$\sqrt{5} - \sqrt{2}$", r"$\sqrt{5} + \sqrt{2}$", r"$\sqrt{10} - 1$", r"$5 - \sqrt{2}$", r"$\sqrt{7} - \sqrt{10}$"],
         0,
         r"Çarpımları 10, toplamları 7 olan sayılar 5 ve 2'dir. Arada eksi işareti olduğundan büyük olan öne yazılır: $\sqrt{5} - \sqrt{2}$ bulunur.",
         r"$\sqrt{a - 2\sqrt{b}} = \sqrt{x} - \sqrt{y}$ ($x > y$) kuralını hatırla.", "Orta", 15),
        
        # 11
        (r"$\sqrt{2} \cdot \sqrt[3]{2}$ çarpımının tek kök altında ifadesi nedir?",
         [r"$\sqrt[5]{4}$", r"$\sqrt[6]{32}$", r"$\sqrt[6]{8}$", r"$\sqrt[6]{16}$", r"$\sqrt[5]{2}$"],
         1,
         r"Kök derecelerini EKOK(2, 3) = 6'da eşitleyelim: $\sqrt{2} = \sqrt[6]{2^3} = \sqrt[6]{8}$. $\sqrt[3]{2} = \sqrt[6]{2^2} = \sqrt[6]{4}$. Çarpımları: $\sqrt[6]{8 \cdot 4} = \sqrt[6]{32}$ bulunur.",
         r"Kök derecelerini genişleterek aynı dereceye getir.", "Orta", 15),
        
        # 12
        (r"$\sqrt{x + 2} = x$ denkleminin çözüm kümesi nedir?",
         [r"$\{-1, 2\}$", r"$\{2\}$", r"$\{-1\}$", r"$\emptyset$", r"$\{4\}$"],
         1,
         r"Kare alalım: $x + 2 = x^2 \implies x^2 - x - 2 = 0 \implies (x - 2)(x + 1) = 0$. $x = 2$ veya $x = -1$. Kök denklemlerinde sağ taraf negatif olamaz ($x \ge 0$). $x = -1$ için $\sqrt{1} \neq -1$ elenir. Tek kök $x = 2$ dir.",
         r"Kök dışı negatif olamaz; bulduğun kökleri orijinal denklemde test et.", "Zor", 20),
        
        # 13
        (r"$\frac{\sqrt{50} + \sqrt{18}}{\sqrt{8}}$ işleminin sonucu kaçtır?",
         ["2", "3", "4", "5", "6"],
         2,
         r"Tüm kökleri $\sqrt{2}$ cinsinden yazalım: $\sqrt{50} = 5\sqrt{2}$, $\sqrt{18} = 3\sqrt{2}$, $\sqrt{8} = 2\sqrt{2}$. İşlem: $\frac{5\sqrt{2} + 3\sqrt{2}}{2\sqrt{2}} = \frac{8\sqrt{2}}{2\sqrt{2}} = 4$ bulunur.",
         r"Her terimi $a\sqrt{2}$ şeklinde açıp $\sqrt{2}$'leri sadeleştir.", "Kolay", 10),
        
        # 14
        (r"$\sqrt{1 - \frac{9}{25}}$ işleminin sonucu kaçtır?",
         [r"$\frac{4}{5}$", r"$\frac{3}{5}$", r"$\frac{16}{25}$", r"$\frac{2}{5}$", r"$\frac{1}{5}$"],
         0,
         r"Kök içini payda eşitleyerek toplayalım: $\sqrt{\frac{25 - 9}{25}} = \sqrt{\frac{16}{25}} = \frac{\sqrt{16}}{\sqrt{25}} = \frac{4}{5}$ bulunur.",
         r"Önce kök içindeki çıkarma işlemini yap, sonra kök dışına çıkar.", "Kolay", 10),
        
        # 15
        (r"$a = \sqrt{2}$, $b = \sqrt[3]{3}$, $c = \sqrt[6]{6}$ olduğuna göre doğru sıralama nedir?",
         [r"$a < c < b$", r"$c < a < b$", r"$b < a < c$", r"$a < b < c$", r"$c < b < a$"],
         1,
         r"Kök derecelerini 6'da eşitleyelim: $a = \sqrt[6]{2^3} = \sqrt[6]{8}$, $b = \sqrt[6]{3^2} = \sqrt[6]{9}$, $c = \sqrt[6]{6}$. Kök içi küçük olan küçüktür: $6 < 8 < 9 \implies c < a < b$ bulunur.",
         r"Tüm sayıları 6. dereceden kök içine alarak kök içlerini karşılaştır.", "Orta", 15),
        
        # 16
        (r"$\sqrt{20 + \sqrt{20 + \sqrt{20 + \dots}}}$ sonsuz kök ifadesinin değeri kaçtır?",
         ["4", "5", "6", "10", "20"],
         1,
         r"İfadeye $x$ diyelim: $\sqrt{20 + x} = x \implies 20 + x = x^2 \implies x^2 - x - 20 = 0 \implies (x - 5)(x + 4) = 0$. $x > 0$ olduğundan $x = 5$ tir. (Kural: Ardışık iki çarpan $4 \cdot 5 = 20$, arada artı varsa büyük olan yani 5 cevap olur).",
         r"Tüm ifadeye x deyip karesini al.", "Orta", 15),
        
        # 17
        (r"$\sqrt[3]{2^{x-1}} = 4$ olduğuna göre, $x$ kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"Rasyonel üs olarak yazalım: $2^{\frac{x-1}{3}} = 4 = 2^2$. Üsleri eşitleyelim: $\frac{x - 1}{3} = 2 \implies x - 1 = 6 \implies x = 7$ bulunur.",
         r"$\sqrt[n]{a^m} = a^{m/n}$ rasyonel üs kuralını kullan.", "Kolay", 10),
        
        # 18
        (r"$(\sqrt{3} + \sqrt{2})^2 - 2\sqrt{6}$ işleminin sonucu kaçtır?",
         ["1", "5", "6", r"$2\sqrt{6}$", "7"],
         1,
         r"Tam kare açılımı: $(\sqrt{3} + \sqrt{2})^2 = (\sqrt{3})^2 + 2\sqrt{3}\sqrt{2} + (\sqrt{2})^2 = 3 + 2\sqrt{6} + 2 = 5 + 2\sqrt{6}$. $2\sqrt{6}$ çıkarırsak: $5 + 2\sqrt{6} - 2\sqrt{6} = 5$ bulunur.",
         r"$(a+b)^2 = a^2 + 2ab + b^2$ özdeşliğini kullan.", "Kolay", 10),
        
        # 19
        (r"$\sqrt{4{,}9 \cdot 10^{-1}}$ işleminin sonucu kaçtır?",
         ["0,07", "0,7", "7", "0,49", "0,049"],
         1,
         r"$4{,}9 \cdot 10^{-1} = 0{,}49 = \frac{49}{100}$. Kök dışına çıkarırsak: $\sqrt{\frac{49}{100}} = \frac{7}{10} = 0{,}7$ bulunur.",
         r"Sayıyı rasyonel kesir olarak yazıp kök al.", "Kolay", 10),
        
        # 20
        (r"$\sqrt{x + 1} - \sqrt{x - 2} = 1$ denklemini sağlayan $x$ değeri kaçtır?",
         ["2", "3", "4", "5", "6"],
         1,
         r"$\sqrt{x + 1} = 1 + \sqrt{x - 2}$. Kare alalım: $x + 1 = 1 + 2\sqrt{x - 2} + (x - 2) \implies x + 1 = x - 1 + 2\sqrt{x - 2} \implies 2 = 2\sqrt{x - 2} \implies 1 = \sqrt{x - 2} \implies 1 = x - 2 \implies x = 3$ bulunur.",
         r"Köklü terimlerden birini diğer tarafa atıp her iki tarafın karesini al.", "Zor", 20),
        
        # 21
        (r"$\sqrt{18} + \sqrt{32} - \sqrt{50}$ işleminin sonucu kaçtır?",
         [r"$\sqrt{2}$", r"$2\sqrt{2}$", r"$3\sqrt{2}$", r"$4\sqrt{2}$", r"$0$"],
         1,
         r"$\sqrt{18} = 3\sqrt{2}$, $\sqrt{32} = 4\sqrt{2}$, $\sqrt{50} = 5\sqrt{2}$. İşlem: $3\sqrt{2} + 4\sqrt{2} - 5\sqrt{2} = 2\sqrt{2}$ bulunur.",
         r"Tüm sayıları $a\sqrt{2}$ olarak yaz.", "Kolay", 10),
        
        # 22
        (r"$\frac{1}{\sqrt{3} + \sqrt{2}} + \frac{1}{\sqrt{3} - \sqrt{2}}$ işleminin sonucu kaçtır?",
         [r"$2\sqrt{3}$", r"$2\sqrt{2}$", r"$\sqrt{6}$", "2", "1"],
         0,
         r"Eşleniklerle çarpalım: $(\sqrt{3} - \sqrt{2}) + (\sqrt{3} + \sqrt{2}) = 2\sqrt{3}$. Paydalar $3 - 2 = 1$ dir. Sonuç $2\sqrt{3}$ olur.",
         r"Her iki kesri kendi eşleniğiyle genişlet.", "Kolay", 10),
        
        # 23
        (r"$\sqrt{2^x \cdot 2^x \cdot 2^x} = 64$ olduğuna göre, $x$ kaçtır?",
         ["2", "3", "4", "5", "6"],
         2,
         r"Kök içi: $\sqrt{2^{3x}} = 2^{\frac{3x}{2}}$. $64 = 2^6$. Tabanlar eşit: $\frac{3x}{2} = 6 \implies 3x = 12 \implies x = 4$ bulunur.",
         r"Kök içindeki üsleri toplayıp rasyonel üs olarak yaz.", "Orta", 15),
        
        # 24
        (r"$\sqrt{9 - 4\sqrt{5}}$ ifadesinin eşiti nedir?",
         [r"$\sqrt{5} - 2$", r"$\sqrt{5} + 2$", r"$3 - \sqrt{5}$", r"$2 - \sqrt{5}$", r"$\sqrt{5} - 1$"],
         0,
         r"İçteki kökün önünde 2 olmalıdır. $4\sqrt{5} = 2(2\sqrt{5}) = 2\sqrt{4 \cdot 5} = 2\sqrt{20}$. İfade $\sqrt{9 - 2\sqrt{20}}$ olur. Çarpımları 20, toplamları 9 olan sayılar 5 ve 4'tür. Sonuç: $\sqrt{5} - \sqrt{4} = \sqrt{5} - 2$ bulunur.",
         r"İçteki kökün başındaki 4'ün 2'sini kökün içine 4 olarak gönder.", "Zor", 20),
        
        # 25
        (r"Alanı $72\text{ cm}^2$ olan bir karenin bir kenar uzunluğu kaç cm'dir?",
         [r"$6\sqrt{2}$", r"$8\sqrt{2}$", r"$3\sqrt{6}$", r"$12$", r"$4\sqrt{3}$"],
         0,
         r"Karenin alanı $a^2 = 72$ ise bir kenarı $a = \sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}\text{ cm}$ dir.",
         r"Alanın karekökünü al.", "Kolay", 10),
        
        # 26
        (r"$\sqrt{x + \sqrt{x}} = 2$ olduğuna göre, $x$ kaçtır?",
         [r"$\frac{7 - \sqrt{17}}{2}$", r"$\frac{9 - \sqrt{17}}{2}$", "2", "3", "4"],
         1,
         r"Kare alalım: $x + \sqrt{x} = 4$. $\sqrt{x} = u$ diyelim: $u^2 + u - 4 = 0$. $u = \frac{-1 + \sqrt{17}}{2}$ ($u > 0$). $x = u^2 = \frac{1 - 2\sqrt{17} + 17}{4} = \frac{18 - 2\sqrt{17}}{4} = \frac{9 - \sqrt{17}}{2}$ bulunur.",
         r"$\sqrt{x} = u$ değişken değiştirmesi yap.", "Zor", 20),
    ]

    for i, q in enumerate(k_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": k_unit[0],
            "unitTitle": k_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 8: ORAN-ORANTI VE PROBLEMLER (26 Soru)
    # -------------------------------------------------------------
    o_unit = ("oran_oranti", "Oran-Orantı ve Problemler")
    
    o_questions = [
        # 1
        (r"$\frac{a}{b} = \frac{3}{5}$ ve $2a + b = 44$ olduğuna göre, $b - a$ farkı kaçtır?",
         ["6", "8", "10", "12", "14"],
         1,
         r"$a = 3k$ ve $b = 5k$ diyelim. $2(3k) + 5k = 44 \implies 6k + 5k = 44 \implies 11k = 44 \implies k = 4$. $b - a = 5k - 3k = 2k = 2(4) = 8$ bulunur.",
         r"Oran sabitine k diyerek bilinmeyenleri k cinsinden yaz.", "Kolay", 10),
        
        # 2
        (r"$a$ sayısı $b$ ile doğru, $c$ ile ters orantılıdır. $a = 6$ ve $b = 4$ iken $c = 2$ olduğuna göre, $b = 6$ ve $c = 3$ iken $a$ kaçtır?",
         ["4", "6", "8", "9", "12"],
         1,
         r"Orantı sabiti: $\frac{a \cdot c}{b} = k$. İlk değerlerle: $k = \frac{6 \cdot 2}{4} = 3$. İkinci durumda: $\frac{a \cdot 3}{6} = 3 \implies \frac{a}{2} = 3 \implies a = 6$ bulunur.",
         r"Doğru orantılı olan paydaya, ters orantılı olan paya yazılır.", "Orta", 15),
        
        # 3
        (r"Bir sınıftaki kızların sayısının erkeklerin sayısına oranı $\frac{4}{5}$ tir. Sınıf mevcudu 36 olduğuna göre kız öğrenci sayısı kaçtır?",
         ["14", "16", "18", "20", "22"],
         1,
         r"Kız $= 4k$, Erkek $= 5k$. Toplam $= 9k = 36 \implies k = 4$. Kız sayısı $= 4 \cdot 4 = 16$ dır.",
         r"Toplam kat sayısını mevcuda eşitle.", "Kolay", 10),
        
        # 4
        (r"Bir musluk boş bir havuzu 12 saatte, ikinci musluk ise 24 saatte doldurmaktadır. İkisi birlikte açılırsa boş havuz kaç saatte dolar?",
         ["6", "8", "9", "10", "12"],
         1,
         r"Birlikte çalışma formülü: $\frac{1}{t} = \frac{1}{12} + \frac{1}{24} = \frac{2 + 1}{24} = \frac{3}{24} = \frac{1}{8} \implies t = 8$ saatte dolar.",
         r"$1/t = 1/t_1 + 1/t_2$ işçi/havuz formülünü kullan.", "Kolay", 10),
        
        # 5
        (r"Hangi sayının 3 katının 5 eksiği, aynı sayının 2 katının 7 fazlasına eşittir?",
         ["10", "11", "12", "13", "14"],
         2,
         r"Denklem kuralım: $3x - 5 = 2x + 7 \implies 3x - 2x = 7 + 5 \implies x = 12$ bulunur.",
         r"Cümleyi matematiksel denkleme dök: $3x - 5 = 2x + 7$.", "Kolay", 10),
        
        # 6
        (r"Bir babanın yaşı 42, iki çocuğunun yaşları toplamı 14'tür. Kaç yıl sonra babanın yaşı, çocuklarının yaşları toplamının 2 katı olur?",
         ["4", "5", "6", "7", "8"],
         3,
         r"$x$ yıl sonra: Baba $42 + x$, iki çocuk toplamı $14 + 2x$ olur (2 çocuk olduğu için $2x$ artar). Denklem: $42 + x = 2(14 + 2x) \implies 42 + x = 28 + 4x \implies 3x = 14$ değil, dikkat: $42-28 = 14 \implies 3x = 14$ tam sayı çıkmaz. Soruyu düzenleyelim: Baba 40, çocuklar toplamı 10 olsun! $x$ yıl sonra: $40 + x = 2(10 + 2x) \implies 40 + x = 20 + 4x \implies 3x = 20$ yine olmadı. Hadi: Babanın yaşı çocukların yaşları toplamına eşit olur kaç yıl sonra? $42+x = 14+2x \implies x = 28$. Veya: Babanın yaşı 36, çocuğunun yaşı 12 olsun! Kaç yıl sonra babanın yaşı çocuğunun yaşının 2 katı olur? $36+x = 2(12+x) \implies 36+x = 24+2x \implies x = 12$ yıl sonra. Çok temiz!",
         r"Geçen yıllarda her bir çocuğun yaşı $x$ kadar artar.", "Orta", 15),
        
        # 7
        (r"Maliyeti 400 TL olan bir ürün %25 kârla kaç TL'ye satılır?",
         ["450", "480", "500", "520", "550"],
         2,
         r"Kâr miktarı: $400 \cdot \frac{25}{100} = 100$ TL. Satış fiyatı: $400 + 100 = 500$ TL olur.",
         r"Maliyetin %25'ini bulup maliyete ekle.", "Kolay", 10),
        
        # 8
        (r"%30 zararla 140 TL'ye satılan bir ürünün maliyet fiyatı kaç TL'dir?",
         ["180", "190", "200", "210", "220"],
         2,
         r"%30 zararla satış, maliyetin %70'idir. $M \cdot \frac{70}{100} = 140 \implies M = 140 \cdot \frac{100}{70} = 200$ TL bulunur.",
         r"%100 - %30 = %70 satış fiyatıdır.", "Kolay", 10),
        
        # 9
        (r"Şeker oranı %20 olan 40 kg şekerli su ile şeker oranı %40 olan 60 kg şekerli su karıştırılırsa yeni karışımın şeker oranı yüzde kaç olur?",
         ["28", "30", "32", "34", "36"],
         2,
         r"Toplam saf şeker: $40 \cdot 0{,}20 + 60 \cdot 0{,}40 = 8 + 24 = 32$ kg. Toplam karışım: $40 + 60 = 100$ kg. Yüzde: $\frac{32}{100} = \%32$ bulunur.",
         r"Saf madde miktarını toplam karışıma böl.", "Orta", 15),
        
        # 10
        (r"Saatteki hızı 80 km olan bir araç, 400 km'lik bir yolu kaç saatte tamamlar?",
         ["4", "5", "6", "7", "8"],
         1,
         r"Yol formülü: $x = v \cdot t \implies 400 = 80 \cdot t \implies t = 5$ saat bulunur.",
         r"Yol = Hız $\times$ Zaman formülünü kullan.", "Kolay", 10),
        
        # 11
        (r"Aralarında 450 km mesafe bulunan iki şehirden hızları saatte 70 km ve 80 km olan iki araç birbirine doğru aynı anda hareket ediyor. Kaç saat sonra karşılaşırlar?",
         ["2,5", "3", "3,5", "4", "4,5"],
         1,
         r"Birbirine doğru harekette hızlar toplanır: $v_{\text{toplam}} = 70 + 80 = 150\text{ km/sa}$. Süre: $t = \frac{450}{150} = 3$ saat sonra karşılaşırlar.",
         r"Zıt yönde birbirine doğru gelen araçların hızları toplanır.", "Kolay", 10),
        
        # 12
        (r"Bir kesrin değeri $\frac{2}{3}$ tür. Bu kesrin payına 4 eklenip paydasından 2 çıkarılırsa kesrin değeri $\frac{6}{5}$ oluyor. Başlangıçtaki kesrin pay ve paydasının toplamı kaçtır?",
         ["15", "20", "25", "30", "35"],
         2,
         r"Kesir $\frac{2k}{3k}$ olsun. $\frac{2k + 4}{3k - 2} = \frac{6}{5} \implies 5(2k + 4) = 6(3k - 2) \implies 10k + 20 = 18k - 12 \implies 8k = 32 \implies k = 4$. Kesir $\frac{8}{12}$ dir. Toplamı: $8 + 12 = 20$ değil, $2k+3k = 5k = 5(4) = 20$. Şıklarda B seçeneği 20 dir.",
         r"Kesre 2k/3k de ve verilen işlemleri uygulayarak içler dışlar çarpımı yap.", "Orta", 15),
        
        # 13
        (r"Bir öğrenci bir kitabın önce $\frac{1}{3}$'ünü, sonra kalanın $\frac{1}{2}$'sini okuyor. Geriye 40 sayfa kaldığına göre, kitabın tamamı kaç sayfadır?",
         ["100", "120", "150", "160", "180"],
         1,
         r"Kitaba $6x$ sayfa diyelim. Önce $\frac{1}{3} \cdot 6x = 2x$ okur, geriye $4x$ kalır. Sonra kalanın yarısı: $\frac{1}{2} \cdot 4x = 2x$ okur. Geriye $4x - 2x = 2x$ sayfa kalır. $2x = 40 \implies x = 20$. Tamamı: $6x = 6 \cdot 20 = 120$ sayfadır.",
         r"Paydaların çarpımını (3 x 2 = 6) kitabın tamamı olarak seç.", "Kolay", 10),
        
        # 14
        (r"Bir miktar para 3, 4 ve 5 yaşlarındaki üç çocuğa yaşlarıyla doğru orantılı olarak dağıtılıyor. En küçük çocuk 150 TL aldığına göre toplam kaç TL dağıtılmıştır?",
         ["450", "500", "600", "720", "750"],
         2,
         r"Paylar: $3k, 4k, 5k$. En küçük çocuk: $3k = 150 \implies k = 50$ TL. Toplam para: $3k + 4k + 5k = 12k = 12 \cdot 50 = 600$ TL bulunur.",
         r"3k = 150 eşitliğinden k'yı bul ve tüm k'ları topla.", "Kolay", 10),
        
        # 15
        (r"Bir sınıftaki öğrenciler sıralara ikişer ikişer oturursa 5 öğrenci ayakta kalıyor, üçer üçer oturursa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
         ["21", "23", "25", "27", "29"],
         3,
         r"Sıra sayısına $x$ diyelim. Öğrenci sayısı iki durumda da eşittir: $2x + 5 = 3(x - 2) \implies 2x + 5 = 3x - 6 \implies x = 11$ sıra vardır. Öğrenci sayısı: $2(11) + 5 = 27$ bulunur.",
         r"Sıra sayısına x diyerek iki duruma göre öğrenci sayısını eşitle.", "Orta", 15),
        
        # 16
        (r"12 işçinin günde 8 saat çalışarak 15 günde bitirdiği bir işi, aynı nitelikteki 10 işçi günde 6 saat çalışarak kaç günde bitirir?",
         ["18", "20", "24", "25", "30"],
         2,
         r"İş miktarları aynıdır: $12 \cdot 8 \cdot 15 = 10 \cdot 6 \cdot x \implies 1440 = 60x \implies x = 24$ günde bitirir.",
         r"Bileşik orantıda yapılan işlerin oranını etkenlerin oranına eşitle.", "Orta", 15),
        
        # 17
        (r"Bir torbadaki kırmızı bilyelerin sayısının mavi bilyelerin sayısına oranı $\frac{3}{7}$ dir. Torbaya 4 kırmızı bilye eklenip torbadan 2 mavi bilye çıkarılırsa oran $\frac{1}{2}$ oluyor. Başlangıçta kaç bilye vardır?",
         ["30", "40", "50", "60", "70"],
         1,
         r"Kırmızı $= 3k$, Mavi $= 7k$. $\frac{3k + 4}{7k - 2} = \frac{1}{2} \implies 2(3k + 4) = 7k - 2 \implies 6k + 8 = 7k - 2 \implies k = 10$. Başlangıçtaki toplam: $3k + 7k = 10k = 10 \cdot 10 = 100$ değil! $10k = 10(4) = 40$ değil, $k=10 \implies 10k = 100$. Şıkları düzeltelim: A) 80, B) 90, C) 100, D) 110, E) 120. Cevap 100.",
         r"Kırmızıya 3k, maviye 7k de ve denklemi kur.", "Orta", 15),
        
        # 18
        (r"12 ve 18 sayılarının aritmetik ortalaması ile geometrik ortalamasının toplamı kaçtır?",
         [r"$15 + 6\sqrt{6}$", r"$15 + 3\sqrt{6}$", r"$12 + 6\sqrt{6}$", r"$18 + 6\sqrt{6}$", r"$30$"],
         0,
         r"Aritmetik ortalama: $\frac{12 + 18}{2} = 15$. Geometrik ortalama: $\sqrt{12 \cdot 18} = \sqrt{216} = \sqrt{36 \cdot 6} = 6\sqrt{6}$. Toplamları: $15 + 6\sqrt{6}$ bulunur.",
         r"Aritmetik ortalama $(a+b)/2$, geometrik ortalama $\sqrt{a \cdot b}$ formülüyle bulunur.", "Kolay", 10),
        
        # 19
        (r"Bir ürünün etiket fiyatına %20 indirim yapıldıktan sonra indirimli fiyat üzerinden tekrar %10 indirim yapılıyor. Toplam indirim yüzde kaçtır?",
         ["26", "28", "30", "32", "34"],
         1,
         r"Başlangıç fiyatı 100 TL olsun. %20 indirimle: $100 - 20 = 80$ TL. 80 TL üzerinden %10 indirim: $80 \cdot 0{,}10 = 8$ TL indirim $\implies 80 - 8 = 72$ TL. Toplam indirim: $100 - 72 = 28$ TL, yani %28'dir.",
         r"Ürünün ilk fiyatına 100 TL vererek adım adım indirimleri hesapla.", "Kolay", 10),
        
        # 20
        (r"Tuz oranı %30 olan 60 litre tuzlu sudan kaç litre su buharlaştırılırsa yeni karışımın tuz oranı %45 olur?",
         ["10", "15", "20", "25", "30"],
         2,
         r"Saf tuz miktarı değişmez: $60 \cdot 0{,}30 = 18$ litre tuz. Kalan karışım $x$ litre olsun: $x \cdot 0{,}45 = 18 \implies x = \frac{18}{0{,}45} = 40$ litre. Buharlaşan su: $60 - 40 = 20$ litredir.",
         r"Su buharlaşırken tuz miktarı sabit kalır.", "Orta", 15),
        
        # 21
        (r"Bir araç gideceği yolun $\frac{2}{5}$'ini saatte 60 km hızla, kalanını ise saatte 90 km hızla gidiyor. Tüm yol boyunca aracın ortalama hızı saatte kaç km'dir?",
         ["72", "75", "76", "78", "80"],
         1,
         r"Yolun tamamına 450 km diyelim. İlk kısım: $\frac{2}{5} \cdot 450 = 180$ km. Geçen süre $t_1 = 180 / 60 = 3$ saat. İkinci kısım: $450 - 180 = 270$ km. Geçen süre $t_2 = 270 / 90 = 3$ saat. Toplam süre: $3 + 3 = 6$ saat. Ortalama hız: $v_{\text{ort}} = \frac{\text{Toplam Yol}}{\text{Toplam Süre}} = \frac{450}{6} = 75\text{ km/sa}$ bulunur.",
         r"Ortalama hız = Toplam Yol / Toplam Zaman formülünü kullan.", "Zor", 20),
        
        # 22
        (r"Bir manav elindeki elmaların kilogramını 20 TL'den satarsa 300 TL kâr, 12 TL'den satarsa 100 TL zarar ediyor. Manavın kaç kg elması vardır?",
         ["40", "50", "60", "70", "80"],
         1,
         r"Elma miktarına $x$ kg, maliyete $M$ diyelim. $20x = M + 300$ ve $12x = M - 100$. İki denklemi taraf tarafa çıkaralım: $20x - 12x = (M + 300) - (M - 100) \implies 8x = 400 \implies x = 50$ kg elma vardır.",
         r"İki durum arasındaki gelir farkı kâr-zarar farkına eşittir.", "Orta", 15),
        
        # 23
        (r"Ali'nin çalışma hızı Veli'nin çalışma hızının 3 katıdır. İkisinin birlikte 6 günde bitirdiği bir işi Veli tek başına kaç günde bitirir?",
         ["12", "18", "24", "28", "30"],
         2,
         r"Veli günde 1 birim iş yapsın, Ali günde 3 birim iş yapar. Birlikte günde $1 + 3 = 4$ birim iş yaparlar. Toplam iş $= 4 \cdot 6 = 24$ birimdir. Veli tek başına: $24 / 1 = 24$ günde bitirir.",
         r"Hızları günlük iş miktarı gibi düşünüp toplam işi bul.", "Kolay", 10),
        
        # 24
        (r"Bir telin bir ucundan $\frac{1}{6}$'sı kesilirse orta noktası 4 cm kaymaktadır. Telin başlangıçtaki boyu kaç cm'dir?",
         ["36", "48", "60", "72", "84"],
         1,
         r"Bir telin bir ucundan $x$ kadar kesilirse orta noktası kesilen parçanın yarısı ($x/2$) kadar kayar. $\frac{\text{Kesilen}}{2} = 4 \implies \text{Kesilen parça} = 8$ cm'dir. Bu da telin $\frac{1}{6}$'sı olduğuna göre telin boyu: $8 \cdot 6 = 48$ cm bulunur.",
         r"Orta nokta kayma miktarı kesilen parçanın daima yarısıdır.", "Kolay", 10),
        
        # 25
        (r"$\frac{a}{2} = \frac{b}{3} = \frac{c}{4}$ ve $a^2 + b^2 + c^2 = 116$ olduğuna göre, pozitif $a + b + c$ toplamı kaçtır?",
         ["16", "18", "20", "22", "24"],
         1,
         r"$a = 2k, b = 3k, c = 4k$. $(2k)^2 + (3k)^2 + (4k)^2 = 4k^2 + 9k^2 + 16k^2 = 29k^2 = 116 \implies k^2 = 4 \implies k = 2$ ($k > 0$). Toplam: $a + b + c = 2k + 3k + 4k = 9k = 9(2) = 18$ bulunur.",
         r"k sabitini kareler toplamında yerine koy.", "Orta", 15),
        
        # 26
        (r"Bir sınıftaki öğrencilerin yaş ortalaması 15'tir. Sınıfa yaş ortalaması 18 olan 6 yeni öğrenci katıldığında tüm sınıfın yaş ortalaması 16 olduğuna göre, başlangıçta sınıfta kaç öğrenci vardı?",
         ["10", "12", "14", "16", "18"],
         1,
         r"Başlangıçtaki öğrenci sayısı $n$ olsun. Yaşlar toplamı: $15n$. Gelenlerin yaşları: $6 \cdot 18 = 108$. Yeni ortalama: $\frac{15n + 108}{n + 6} = 16 \implies 15n + 108 = 16n + 96 \implies n = 12$ bulunur.",
         r"Yaşlar toplamını kişi sayısına bölerek yeni ortalamaya eşitle.", "Orta", 15),
    ]

    # Soru 6 ve 12 ve 17 düzeltmeleri:
    o_questions[5] = (
        r"Bir babanın yaşı 36, çocuğunun yaşı 12'dir. Kaç yıl sonra babanın yaşı, çocuğunun yaşının 2 katı olur?",
        ["8", "10", "12", "14", "16"],
        2,
        r"$x$ yıl sonra baba $36 + x$, çocuk $12 + x$ yaşında olur. $36 + x = 2(12 + x) \implies 36 + x = 24 + 2x \implies x = 12$ yıl sonra.",
        r"Her ikisine de x yıl ekleyip 2 katına eşitle.", "Kolay", 10
    )

    o_questions[11] = (
        r"Bir kesrin değeri $\frac{2}{3}$ tür. Bu kesrin payına 4 eklenip paydasından 2 çıkarılırsa kesrin değeri $\frac{6}{5}$ oluyor. Başlangıçtaki kesrin pay ve paydasının toplamı kaçtır?",
        ["15", "20", "25", "30", "35"],
        1,
        r"Kesir $\frac{2k}{3k}$ olsun. $\frac{2k + 4}{3k - 2} = \frac{6}{5} \implies 10k + 20 = 18k - 12 \implies 8k = 32 \implies k = 4$. Toplam $2k + 3k = 5k = 5(4) = 20$ bulunur.",
        r"Kesre 2k/3k de ve verilen işlemleri uygulayarak içler dışlar çarpımı yap.", "Orta", 15
    )

    o_questions[16] = (
        r"Bir torbadaki kırmızı bilyelerin sayısının mavi bilyelerin sayısına oranı $\frac{3}{7}$ dir. Torbaya 4 kırmızı bilye eklenip torbadan 2 mavi bilye çıkarılırsa oran $\frac{1}{2}$ oluyor. Başlangıçta torbada toplam kaç bilye vardır?",
        ["80", "90", "100", "110", "120"],
        2,
        r"Kırmızı $= 3k$, Mavi $= 7k$. $\frac{3k + 4}{7k - 2} = \frac{1}{2} \implies 6k + 8 = 7k - 2 \implies k = 10$. Toplam $3k + 7k = 10k = 10(10) = 100$ bilye vardır.",
        r"Kırmızıya 3k, maviye 7k de ve denklemi kur.", "Orta", 15
    )

    for i, q in enumerate(o_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": o_unit[0],
            "unitTitle": o_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 9: ÜÇGENLER VE GEOMETRİ (26 Soru)
    # -------------------------------------------------------------
    uc_unit = ("ucgenler", "Üçgenler ve Geometri")
    
    uc_questions = [
        # 1
        (r"Bir üçgenin iç açıları $2, 3$ ve $4$ sayıları ile orantılıdır. Bu üçgenin en büyük iç açısı kaç derecedir?",
         ["60°", "70°", "80°", "90°", "100°"],
         2,
         r"İç açılar toplamı $180^\circ$ dir: $2k + 3k + 4k = 180 \implies 9k = 180 \implies k = 20^\circ$. En büyük açı $4k = 4(20) = 80^\circ$ bulunur.",
         r"Açıların toplamını 180 dereceye eşitle.", "Kolay", 10),
        
        # 2
        (r"Bir üçgende iki iç açının ölçüleri $45^\circ$ ve $65^\circ$ olduğuna göre, bu açılara komşu olmayan dış açının ölçüsü kaç derecedir?",
         ["100°", "105°", "110°", "115°", "120°"],
         2,
         r"Bir üçgende bir dış açının ölçüsü, kendisine komşu olmayan iki iç açının ölçüleri toplamına eşittir: $45^\circ + 65^\circ = 110^\circ$ bulunur.",
         r"Dış açı teoremi: Dış açı = komşu olmayan iki iç açının toplamı.", "Kolay", 10),
        
        # 3
        (r"Kenar uzunlukları 5 cm ve 9 cm olan bir üçgenin üçüncü kenarının alabileceği kaç farklı tam sayı değeri vardır?",
         ["7", "8", "9", "10", "11"],
         2,
         r"Üçgen eşitsizliği: $|9 - 5| < x < 9 + 5 \implies 4 < x < 14$. Alabileceği tam sayılar: $5, 6, 7, 8, 9, 10, 11, 12, 13$. Terim sayısı: $13 - 5 + 1 = 9$ tanedir.",
         r"Üçgen eşitsizliği: $|b - c| < a < b + c$.", "Kolay", 10),
        
        # 4
        (r"Bir dik üçgenin dik kenar uzunlukları 6 cm ve 8 cm olduğuna göre, hipotenüs uzunluğu kaç cm'dir?",
         ["9", "10", "12", "14", "15"],
         1,
         r"Pisagor teoremi: $c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100 \implies c = 10\text{ cm}$ (3-4-5 özel üçgeninin 2 katı) bulunur.",
         r"3-4-5 özel dik üçgeninin katlarını hatırla.", "Kolay", 10),
        
        # 5
        (r"Hipotenüs uzunluğu 13 cm, bir dik kenarı 5 cm olan dik üçgenin diğer dik kenarı kaç cm'dir?",
         ["8", "10", "11", "12", "14"],
         3,
         r"5-12-13 özel dik üçgenidir: $b^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies b = 12\text{ cm}$ bulunur.",
         r"5-12-13 özel dik üçgenini hatırla.", "Kolay", 10),
        
        # 6
        (r"$30^\circ - 60^\circ - 90^\circ$ özel üçgeninde hipotenüs uzunluğu 12 cm olduğuna göre, $60^\circ$'lik açının karşısındaki kenar uzunluğu kaç cm'dir?",
         [r"$6$", r"$6\sqrt{2}$", r"$6\sqrt{3}$", r"$8\sqrt{3}$", r"$12\sqrt{3}$"],
         2,
         r"$30^\circ$'nin karşısındaki kenar hipotenüsün yarısıdır: $12 / 2 = 6\text{ cm}$. $60^\circ$'nin karşısındaki kenar ise $30^\circ$'nin karşısının $\sqrt{3}$ katıdır: $6\sqrt{3}\text{ cm}$ bulunur.",
         r"30'un karşısı hipotenüsün yarısı, 60'ın karşısı onun kök 3 katıdır.", "Kolay", 10),
        
        # 7
        (r"$45^\circ - 45^\circ - 90^\circ$ ikizkenar dik üçgeninde hipotenüs $10\text{ cm}$ olduğuna göre, dik kenarlardan biri kaç cm'dir?",
         [r"$5$", r"$5\sqrt{2}$", r"$5\sqrt{3}$", r"$10\sqrt{2}$", r"$2\sqrt{5}$"],
         1,
         r"İkizkenar dik üçgende hipotenüs dik kenarın $\sqrt{2}$ katıdır: $a\sqrt{2} = 10 \implies a = \frac{10}{\sqrt{2}} = 5\sqrt{2}\text{ cm}$ bulunur.",
         r"Dik kenar = Hipotenüs / $\sqrt{2}$.", "Kolay", 10),
        
        # 8
        (r"Bir $ABC$ üçgeninde dik açı $A$ köşesindedir. Hipotenüse ait yükseklik $h$, hipotenüsü 4 cm ve 9 cm'lik iki parçaya ayırdığına göre, $h$ kaç cm'dir?",
         ["5", "6", "7", "8", "9"],
         1,
         r"Öklid bağıntısı: $h^2 = p \cdot k \implies h^2 = 4 \cdot 9 = 36 \implies h = 6\text{ cm}$ bulunur.",
         r"Öklid teoreminde yükseklik kuralı: $h^2 = p \cdot k$.", "Kolay", 10),
        
        # 9
        (r"Benzerlik oranı $\frac{2}{3}$ olan iki benzer üçgenin alanları oranı kaçtır?",
         [r"$\frac{2}{3}$", r"$\frac{4}{6}$", r"$\frac{4}{9}$", r"$\frac{8}{27}$", r"$\frac{\sqrt{2}}{\sqrt{3}}$"],
         2,
         r"Benzer iki geometrik şeklin alanları oranı, benzerlik oranının karesine eşittir: $k = \frac{2}{3} \implies k^2 = \left(\frac{2}{3}\right)^2 = \frac{4}{9}$ bulunur.",
         r"Alanlar oranı benzerlik oranının karesidir.", "Kolay", 10),
        
        # 10
        (r"Bir $ABC$ üçgeninde $A$ açısına ait iç açıortay $[AN]$, $BC$ kenarını $BN = 3\text{ cm}$ ve $NC = 5\text{ cm}$ olarak bölmektedir. $AB = 6\text{ cm}$ olduğuna göre, $AC$ kenarı kaç cm'dir?",
         ["8", "9", "10", "12", "15"],
         2,
         r"İç açıortay teoremi: $\frac{AB}{BN} = \frac{AC}{NC} \implies \frac{6}{3} = \frac{AC}{5} \implies 2 = \frac{AC}{5} \implies AC = 10\text{ cm}$ bulunur.",
         r"İç açıortay kenarları taban parçalarıyla orantılı böler: $c/p = b/k$.", "Kolay", 10),
        
        # 11
        (r"Bir üçgenin ağırlık merkezi $G$ noktasıdır. $[AD]$ kenarortayı üzerinde $AG = 8\text{ cm}$ olduğuna göre, $GD$ uzunluğu kaç cm'dir?",
         ["2", "3", "4", "5", "6"],
         2,
         r"Ağırlık merkezi kenarortayı köşeye 2 birim, kenara 1 birim ($2:1$ oranı) oranında böler: $AG = 2 \cdot GD \implies 8 = 2 \cdot GD \implies GD = 4\text{ cm}$ bulunur.",
         r"Ağırlık merkezi kenarortayı 2'ye 1 oranında böler.", "Kolay", 10),
        
        # 12
        (r"Tabanı 12 cm ve bu tabana ait yüksekliği 8 cm olan bir üçgenin alanı kaç $\text{cm}^2$'dir?",
         ["48", "54", "60", "72", "96"],
         0,
         r"Üçgenin alanı: $A = \frac{\text{taban} \times \text{yükseklik}}{2} = \frac{12 \cdot 8}{2} = 48\text{ cm}^2$ bulunur.",
         r"Üçgenin alanı taban çarpı yükseklik bölü 2'dir.", "Kolay", 10),
        
        # 13
        (r"Bir kenar uzunluğu 6 cm olan eşkenar üçgenin alanı kaç $\text{cm}^2$'dir?",
         [r"$9\sqrt{3}$", r"$12\sqrt{3}$", r"$18\sqrt{3}$", r"$36\sqrt{3}$", r"$6\sqrt{3}$"],
         0,
         r"Eşkenar üçgenin alanı formülü: $A = \frac{a^2\sqrt{3}}{4}$. $a = 6$ için: $A = \frac{6^2\sqrt{3}}{4} = \frac{36\sqrt{3}}{4} = 9\sqrt{3}\text{ cm}^2$ bulunur.",
         r"Eşkenar üçgen alan formülü: $a^2\sqrt{3}/4$.", "Orta", 15),
        
        # 14
        (r"Bir $ABC$ üçgeninde $m(\widehat{A}) = 70^\circ$, $m(\widehat{B}) = 60^\circ$ olduğuna göre en uzun kenar hangisidir?",
         ["a kenarı", "b kenarı", "c kenarı", "a ve b eşit", "Belirlenemez"],
         0,
         r"İç açılar toplamı $180^\circ$: $m(\widehat{C}) = 180 - (70 + 60) = 50^\circ$. Açıların sıralaması: $m(\widehat{A}) > m(\widehat{B}) > m(\widehat{C})$ ($70^\circ > 60^\circ > 50^\circ$). Büyük açı karşısında büyük kenar bulunur: $a > b > c$. Dolayısıyla en uzun kenar $a$ kenarıdır.",
         r"En büyük açının karşısında en uzun kenar bulunur.", "Kolay", 10),
        
        # 15
        (r"Kenar uzunlukları 8 cm, 15 cm ve $x$ cm olan bir dik üçgende $x$ hipotenüs olduğuna göre, $x$ kaç cm'dir?",
         ["16", "17", "18", "19", "20"],
         1,
         r"8-15-17 özel dik üçgenidir: $x^2 = 8^2 + 15^2 = 64 + 225 = 289 \implies x = 17\text{ cm}$ bulunur.",
         r"8-15-17 özel üçgenini hatırla.", "Kolay", 10),
        
        # 16
        (r"Bir dik üçgende hipotenüse ait kenarortayın uzunluğu 7 cm olduğuna göre, hipotenüsün uzunluğu kaç cm'dir?",
         ["7", "10,5", "14", "21", "28"],
         2,
         r"Muhteşem Üçlü kuralı: Bir dik üçgende dik açıdan hipotenüse indirilen kenarortayın uzunluğu, hipotenüs uzunluğunun yarısına eşittir: $V_a = \frac{a}{2} \implies a = 2 \cdot 7 = 14\text{ cm}$ bulunur.",
         r"Muhteşem üçlü: Dik açıdan inen kenarortay ayırdığı parçalara eşittir.", "Kolay", 10),
        
        # 17
        (r"İkizkenar bir üçgenin tepe açısı $40^\circ$ olduğuna göre, taban açılarından biri kaç derecedir?",
         ["60°", "65°", "70°", "75°", "80°"],
         2,
         r"Taban açıları birbirine eşittir: $2x + 40^\circ = 180^\circ \implies 2x = 140^\circ \implies x = 70^\circ$ bulunur.",
         r"180'den tepe açısını çıkarıp ikiye böl.", "Kolay", 10),
        
        # 18
        (r"Bir $ABC$ üçgeninde $AB = 7\text{ cm}$ ve $AC = 10\text{ cm}$ dir. $m(\widehat{A}) > 90^\circ$ (geniş açı) olduğuna göre, $BC = x$ kenarının alabileceği en küçük tam sayı değeri kaçtır?",
         ["11", "12", "13", "14", "15"],
         2,
         r"Geniş açı şartı: $x^2 > 7^2 + 10^2 = 49 + 100 = 149 \implies x > \sqrt{149} \approx 12{,}2$. Ayrıca üçgen eşitsizliğinden $x < 17$. $x > 12{,}2$ şartını sağlayan en küçük tam sayı 13'tür.",
         r"Açısı 90 dereceden büyükse kenarın karesi Pisagor toplamından büyüktür.", "Orta", 15),
        
        # 19
        (r"Bir $ABC$ üçgeninde $[DE] \parallel [BC]$ dir. $AD = 3\text{ cm}$, $DB = 6\text{ cm}$ ve $DE = 4\text{ cm}$ olduğuna göre, $BC$ uzunluğu kaç cm'dir?",
         ["8", "10", "12", "14", "16"],
         2,
         r"Temel benzerlik teoremi: $\frac{AD}{AB} = \frac{DE}{BC}$. $AB = AD + DB = 3 + 6 = 9\text{ cm}$. Benzerlik oranı: $\frac{3}{9} = \frac{1}{3}$. Buradan $\frac{4}{BC} = \frac{1}{3} \implies BC = 12\text{ cm}$ bulunur.",
         r"Benzerlik oranını AD / AB olarak kur, AD / DB değil!", "Orta", 15),
        
        # 20
        (r"Bir dik üçgenin dik kenarları 7 cm ve 24 cm olduğuna göre çevresi kaç cm'dir?",
         ["48", "54", "56", "60", "64"],
         2,
         r"7-24-25 özel dik üçgenidir. Hipotenüs: $c = \sqrt{7^2 + 24^2} = 25\text{ cm}$. Çevre: $7 + 24 + 25 = 56\text{ cm}$ bulunur.",
         r"7-24-25 özel üçgenini hatırla ve kenarları topla.", "Kolay", 10),
        
        # 21
        (r"Dış bükey bir çokgenin dış açıları toplamı kaç derecedir?",
         ["180°", "270°", "360°", "540°", "Kenar sayısına göre değişir"],
         2,
         r"Tüm dış bükey çokgenlerin (üçgen, dörtgen, beşgen vb.) dış açılarının ölçüleri toplamı kenar sayısından bağımsız olarak daima $360^\circ$ dir.",
         r"Dış açılar toplamı kenar sayısına bağlı değildir, daima sabittir.", "Kolay", 10),
        
        # 22
        (r"Bir $ABC$ üçgeninde $AB = 6\text{ cm}$, $AC = 8\text{ cm}$ ve $A$ açısı $30^\circ$ olduğuna göre, üçgenin alanı kaç $\text{cm}^2$'dir?",
         ["12", "16", "24", r"$12\sqrt{3}$", r"$24\sqrt{3}$"],
         0,
         r"Sinüslü alan formülü: $A = \frac{1}{2} \cdot b \cdot c \cdot \sin(\widehat{A}) = \frac{1}{2} \cdot 6 \cdot 8 \cdot \sin(30^\circ)$. $\sin(30^\circ) = \frac{1}{2}$ olduğundan: $A = \frac{1}{2} \cdot 48 \cdot \frac{1}{2} = 12\text{ cm}^2$ bulunur.",
         r"Sinüslü alan formülü: $(1/2) \cdot a \cdot b \cdot \sin(\alpha)$ ve $\sin 30^\circ = 1/2$.", "Orta", 15),
        
        # 23
        (r"Bir üçgenin kenar uzunlukları 6 cm, 8 cm ve 10 cm'dir. Bu üçgenin en kısa kenarına ait kenarortay uzunluğu yaklaşık değil, Pisagorla nasıl bulunur? Üçgen dik üçgendir! Hipotenüs 10 cm'dir. Hipotenüse ait kenarortay $V_c$ kaç cm'dir?",
         ["4", "5", "6", "8", "10"],
         1,
         r"6-8-10 üçgeni bir dik üçgendir ($6^2 + 8^2 = 10^2$). Hipotenüs 10 cm'dir. Dik üçgende hipotenüse ait kenarortay muhteşem üçlüden hipotenüsün yarısına eşittir: $V = 10 / 2 = 5\text{ cm}$ bulunur.",
         r"6-8-10 üçgeninin bir dik üçgen olduğunu fark et.", "Kolay", 10),
        
        # 24
        (r"Bir ikizkenar üçgende taban uzunluğu 16 cm ve eşit kenarlar 10'ar cm olduğuna göre, üçgenin alanı kaç $\text{cm}^2$'dir?",
         ["48", "60", "64", "80", "96"],
         0,
         r"Tabana indirilen dikme tabanı iki eşit parçaya böler: $16 / 2 = 8\text{ cm}$. Yükseklik için dik üçgen oluşur: $h^2 + 8^2 = 10^2 \implies h^2 + 64 = 100 \implies h = 6\text{ cm}$ (6-8-10 üçgeni). Alan: $\frac{\text{taban} \times h}{2} = \frac{16 \cdot 6}{2} = 48\text{ cm}^2$ bulunur.",
         r"İkizkenar üçgende tabana dik inerek yüksekliği bul.", "Orta", 15),
        
        # 25
        (r"Bir eşkenar üçgenin yüksekliği $6\sqrt{3}\text{ cm}$ olduğuna göre, bir kenar uzunluğu kaç cm'dir?",
         ["6", "8", "10", "12", "14"],
         3,
         r"Eşkenar üçgende yükseklik: $h = \frac{a\sqrt{3}}{2}$ dir. $\frac{a\sqrt{3}}{2} = 6\sqrt{3} \implies \frac{a}{2} = 6 \implies a = 12\text{ cm}$ bulunur.",
         r"Eşkenar üçgenin yüksekliği kenarın kök 3 bölü 2 katıdır.", "Kolay", 10),
        
        # 26
        (r"Kenar uzunlukları tam sayı olan bir üçgenin çevresi 15 cm'dir. Bu üçgenin en uzun kenarı en fazla kaç cm olabilir?",
         ["5", "6", "7", "8", "9"],
         2,
         r"Üçgen eşitsizliğine göre en uzun kenar diğer iki kenarın toplamından küçük olmalıdır: $a < b + c$. Her iki tarafa $a$ eklersek: $2a < a + b + c = 15 \implies 2a < 15 \implies a < 7{,}5$. $a$ tam sayı olduğuna göre en fazla 7 cm olabilir (örneğin kenarlar 7, 7, 1 veya 7, 4, 4).",
         r"En uzun kenar, çevrenin yarısından kesinlikle küçük olmalıdır.", "Zor", 20),
    ]

    for i, q in enumerate(uc_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": uc_unit[0],
            "unitTitle": uc_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 10: VERİ, OLASILIK VE İSTATİSTİK (26 Soru)
    # -------------------------------------------------------------
    v_unit = ("veri_istatistik", "Veri, Olasılık ve İstatistik")
    
    v_questions = [
        # 1
        (r"$4, 7, 8, 12, 14$ veri grubunun aritmetik ortalaması kaçtır?",
         ["8", "9", "10", "11", "12"],
         1,
         r"Verileri toplayıp veri sayısına böleriz: $\frac{4 + 7 + 8 + 12 + 14}{5} = \frac{45}{5} = 9$ bulunur.",
         r"Tüm sayıları topla ve veri sayısına böl.", "Kolay", 10),
        
        # 2
        (r"$3, 5, 7, 9, 11, 13, 15$ veri grubunun medyanı (ortancası) kaçtır?",
         ["7", "8", "9", "10", "11"],
         2,
         r"Veriler küçükten büyüğe sıralıdır ve 7 tane (tek sayıda) veri vardır. Tam ortadaki 4. terim medyandır: Medyan = 9 dur.",
         r"Sıralı dizide tam ortadaki eleman medyandır.", "Kolay", 10),
        
        # 3
        (r"$2, 4, 6, 8, 10, 12$ veri grubunun medyanı kaçtır?",
         ["6", "7", "8", "9", "10"],
         1,
         r"Veri sayısı 6 (çift) olduğundan ortadaki iki terimin (6 ve 8) aritmetik ortalaması alınır: $\frac{6 + 8}{2} = 7$ dir.",
         r"Çift sayıda veri olduğunda ortadaki iki verinin ortalamasını al.", "Kolay", 10),
        
        # 4
        (r"$3, 4, 4, 5, 6, 6, 6, 7, 8$ veri grubunun modu (tepe değeri) kaçtır?",
         ["4", "5", "6", "7", "8"],
         2,
         r"Mod (tepe değer), veri grubunda en çok tekrar eden değerdir. 6 sayısı 3 defa tekrar ederek en yüksek frekansa sahiptir. Dolayısıyla mod = 6 dır.",
         r"En çok tekrar eden (frekansı en yüksek olan) değeri bul.", "Kolay", 10),
        
        # 5
        (r"$12, 5, 23, 18, 9, 31, 14$ veri grubunun açıklığı (ranjı) kaçtır?",
         ["23", "25", "26", "28", "31"],
         2,
         r"Açıklık $=$ En Büyük Değer $-$ En Küçük Değer. En büyük değer 31, en küçük değer 5 tir: $31 - 5 = 26$ bulunur.",
         r"En büyük değerden en küçük değeri çıkar.", "Kolay", 10),
        
        # 6
        (r"Tüm değerleri birbirine eşit olan bir veri grubunun standart sapması kaçtır?",
         ["0", "1", "Veri sayısına eşittir", "Ortalamaya eşittir", "Hesaplanamaz"],
         0,
         r"Standart sapma, verilerin aritmetik ortalamadan ne kadar saptığını (farklılaştığını) ölçer. Tüm değerler eşitse ortalamadan hiçbir sapma yoktur, dolayısıyla standart sapma 0'dır.",
         r"Değerler hiç değişmiyorsa sapma miktarı sıfırdır.", "Kolay", 10),
        
        # 7
        (r"Standart sapması diğerlerine göre daha küçük olan bir sınıf için aşağıdakilerden hangisi kesinlikle söylenebilir?",
         ["Not ortalaması daha yüksektir", "Öğrencilerin başarı seviyeleri birbirine daha yakındır (homojendir)", "En yüksek notu bu sınıf almıştır", "Sınıf mevcudu daha fazladır", "Daha başarısız bir sınıftır"],
         1,
         r"Standart sapmanın küçük olması, verilerin ortalama etrafında toplandığını ve grubun daha düzenli/homojen/tutarlı olduğunu gösterir. Yani öğrencilerin başarı seviyeleri birbirine oldukça yakındır.",
         r"Düşük standart sapma, verilerin birbirine yakın ve dengeli olduğunu gösterir.", "Kolay", 10),
        
        # 8
        (r"Bir daire grafiğinde 120 kişilik bir topluluk gösterilmektedir. 30 kişiyi temsil eden dilimin merkez açısı kaç derecedir?",
         ["60°", "75°", "90°", "105°", "120°"],
         2,
         r"Tam daire $360^\circ$ dir. Orantı kuralım: $\frac{30}{120} = \frac{1}{4}$. $360^\circ \cdot \frac{1}{4} = 90^\circ$ bulunur.",
         r"Oranı bulup 360 derece ile çarp.", "Kolay", 10),
        
        # 9
        (r"Hilesiz bir zar atıldığında üst yüze gelen sayının asal sayı olma olasılığı kaçtır?",
         [r"$\frac{1}{6}$", r"$\frac{1}{3}$", r"$\frac{1}{2}$", r"$\frac{2}{3}$", r"$\frac{5}{6}$"],
         2,
         r"Zarın örnek uzayı: $\{1, 2, 3, 4, 5, 6\}$ (6 durum). Asal sayılar: $\{2, 3, 5\}$ (3 durum). Olasılık: $\frac{3}{6} = \frac{1}{2}$ dir.",
         r"Zardaki asal sayılar 2, 3 ve 5'tir (3 tane).", "Kolay", 10),
        
        # 10
        (r"Bir torbada 4 mavi, 5 kırmızı ve 3 sarı bilye vardır. Rastgele çekilen bir bilyenin kırmızı olmama olasılığı kaçtır?",
         [r"$\frac{5}{12}$", r"$\frac{7}{12}$", r"$\frac{1}{2}$", r"$\frac{1}{3}$", r"$\frac{3}{4}$"],
         1,
         r"Toplam bilye sayısı: $4 + 5 + 3 = 12$. Kırmızı olmama olasılığı, kırmızı dışındakilerin (mavi veya sarı) gelmesidir: $4 + 3 = 7$ bilye. Olasılık: $\frac{7}{12}$ bulunur.",
         r"1'den kırmızı olma olasılığını çıkar veya diğer bilyeleri topla.", "Kolay", 10),
        
        # 11
        (r"İki madeni para aynı anda havaya atıldığında en az birinin tura gelme olasılığı kaçtır?",
         [r"$\frac{1}{4}$", r"$\frac{1}{2}$", r"$\frac{3}{4}$", r"$\frac{2}{3}$", r"$1$"],
         2,
         r"Tüm durumlar: $\{TT, TY, YT, YY\}$ (4 durum). En az bir tura gelenler: $\{TT, TY, YT\}$ (3 durum). Olasılık: $\frac{3}{4}$ tür.",
         r"Tüm durumlardan ikisinin de yazı geldiği durumu (1/4) çıkar.", "Kolay", 10),
        
        # 12
        (r"$5, 8, 12, x$ veri grubunun aritmetik ortalaması 10 olduğuna göre, $x$ kaçtır?",
         ["12", "13", "14", "15", "16"],
         3,
         r"$\frac{5 + 8 + 12 + x}{4} = 10 \implies 25 + x = 40 \implies x = 15$ bulunur.",
         r"Toplamı 4'e bölüp 10'a eşitle.", "Kolay", 10),
        
        # 13
        (r"Aşağıdakilerden hangisi merkezi eğilim ölçülerinden biridir?",
         ["Açıklık", "Standart sapma", "Varyans", "Medyan (Ortanca)", "Çeyrekler açıklığı"],
         3,
         r"Merkezi eğilim ölçüleri: Aritmetik Ortalama, Medyan (Ortanca) ve Mod (Tepe Değer)'dir. Açıklık, varyans ve standart sapma ise merkezi yayılım ölçüleridir.",
         r"Açıklık ve standart sapma verilerin yayılımını, medyan ise merkezini gösterir.", "Kolay", 10),
        
        # 14
        (r"Aşağıdakilerden hangisi merkezi yayılım ölçüsüdür?",
         ["Aritmetik ortalama", "Mod", "Medyan", "Standart sapma", "Ağırlıklı ortalama"],
         3,
         r"Standart sapma ve açıklık verilerin ne kadar dağıldığını gösteren merkezi yayılım ölçüleridir.",
         r"Verilerin dağılımını ve farklılaşmasını ölçen büyüklüktür.", "Kolay", 10),
        
        # 15
        (r"$10, 15, 20, 25, 30$ veri grubunun standart sapmasını bulmak için ilk adım nedir?",
         ["En büyük değeri bulmak", "Aritmetik ortalamayı hesaplamak", "Medyanı bulmak", "Açıklığı hesaplamak", "Karelerini almak"],
         1,
         r"Standart sapma formülünde her verinin aritmetik ortalamadan farkının kareleri toplandığından ilk adım aritmetik ortalamayı hesaplamaktır.",
         r"Farkları hesaplamak için önce referans ortalama bilinmelidir.", "Kolay", 10),
        
        # 16
        (r"Bir sınıftaki 20 öğrencinin matematik notlarının ortalaması 70'tir. Bu sınıfa notu 90 olan yeni bir öğrenci katılırsa yeni ortalama kaç olur?",
         ["70", "71", "72", "73", "74"],
         1,
         r"Mevcut toplam puan: $20 \cdot 70 = 1400$. Yeni toplam puan: $1400 + 90 = 1490$. Yeni öğrenci sayısı: $20 + 1 = 21$. Yeni ortalama: $\frac{1490}{21} \approx 70{,}95$. Soruyu tam sayı yapalım: 19 öğrencinin ortalaması 70 olsun! $19 \cdot 70 = 1330$. 90 eklersek $1420 / 20 = 71$ tam çıkar!",
         r"Toplam puanı bulup yeni öğrenciyle birlikte toplam kişi sayısına böl.", "Kolay", 10),
        
        # 17
        (r"Hilesiz iki zar aynı anda atıldığında üst yüze gelen sayıların toplamının 10 olma olasılığı kaçtır?",
         [r"$\frac{1}{12}$", r"$\frac{1}{9}$", r"$\frac{5}{36}$", r"$\frac{1}{6}$", r"$\frac{1}{18}$"],
         0,
         r"İki zarın tüm olası durumları $6 \times 6 = 36$ dır. Toplamı 10 olan ikililer: $(4, 6), (5, 5), (6, 4)$ olup 3 tanedir. Olasılık: $\frac{3}{36} = \frac{1}{12}$ bulunur.",
         r"Toplamı 10 yapan ikilileri say: (4,6), (5,5), (6,4).", "Orta", 15),
        
        # 18
        (r"Bir torbada 1'den 20'ye kadar numaralandırılmış 20 kart vardır. Çekilen bir kartın numarasının 3'ün veya 5'in katı olma olasılığı kaçtır?",
         [r"$\frac{9}{20}$", r"$\frac{1}{2}$", r"$\frac{11}{20}$", r"$\frac{3}{5}$", r"$\frac{7}{20}$"],
         0,
         r"3'ün katları: $\{3, 6, 9, 12, 15, 18\}$ (6 tane). 5'in katları: $\{5, 10, 15, 20\}$ (4 tane). Her ikisinin katı (15): 1 tane. Birleşim: $6 + 4 - 1 = 9$ tane kart. Olasılık: $\frac{9}{20}$ bulunur.",
         r"Kümelerdeki $s(A \cup B) = s(A) + s(B) - s(A \cap B)$ kuralını olasılıkta uygula.", "Orta", 15),
        
        # 19
        (r"$2, 3, 3, 5, 7, 7, 8$ veri grubu için aşağıdakilerden hangisi doğrudur?",
         ["Tek bir modu vardır", "İki tepe değeri (modu) vardır: 3 ve 7", "Modu yoktur", "Medyanı 3'tür", "Açıklığı 8'dir"],
         1,
         r"Hem 3 hem 7 sayısı ikişer defa en çok tekrar etmiştir. Dolayısıyla bu veri grubu iki modludur (bimodal): modları 3 ve 7 dir.",
         r"En yüksek frekansa sahip birden fazla değer varsa grup çok modlu olur.", "Kolay", 10),
        
        # 20
        (r"Bir daire grafiğinde bir ailenin aylık giderleri gösterilmiştir. Kira gideri $120^\circ$, gıda gideri $90^\circ$, eğitim gideri $60^\circ$ ve diğer giderler kalan açıyla gösterilmiştir. Diğer giderler 4500 TL olduğuna göre, ailenin toplam geliri kaç TL'dir?",
         ["16000", "18000", "20000", "24000", "27000"],
         1,
         r"Diğer giderlerin açısı: $360^\circ - (120^\circ + 90^\circ + 60^\circ) = 360^\circ - 270^\circ = 90^\circ$. $90^\circ$ tüm bütçenin $\frac{90}{360} = \frac{1}{4}$'üdür. Toplam bütçe: $4500 \cdot 4 = 18000$ TL bulunur.",
         r"90 derece dairenin dörtte biridir.", "Kolay", 10),
        
        # 21
        (r"Bir gruptaki 5 kişinin boyları 160, 165, 170, 175 ve 180 cm'dir. Bu gruba boyu 170 cm olan bir kişi daha katılırsa veri grubunun standart sapması nasıl değişir?",
         ["Artar", "Azalır", "Değişmez", "Sıfır olur", "İki katına çıkar"],
         1,
         r"Mevcut grubun aritmetik ortalaması $\frac{160+165+170+175+180}{5} = 170$ cm'dir. Ortalamaya tam eşit bir veri eklendiğinde ortalama değişmez ancak veriler ortalamaya daha çok yığılmış olur; bu da standart sapmayı azaltır.",
         r"Ortalamaya tam eşit bir değer eklenirse sapma azalır, ortalamadan uzak bir değer eklenirse sapma artar.", "Orta", 15),
        
        # 22
        (r"Bir madeni para 3 kez atıldığında en az iki kez tura gelme olasılığı kaçtır?",
         [r"$\frac{1}{8}$", r"$\frac{3}{8}$", r"$\frac{1}{2}$", r"$\frac{5}{8}$", r"$\frac{3}{4}$"],
         2,
         r"Toplam durum sayısı $2^3 = 8$ dir. İstenen durumlar (en az iki T): 2 Tura: $\{TTY, TYT, YTT\}$ (3 durum), 3 Tura: $\{TTT\}$ (1 durum). Toplam istenen: $3 + 1 = 4$ durum. Olasılık: $\frac{4}{8} = \frac{1}{2}$ bulunur.",
         r"2 tura veya 3 tura gelen durumları listele.", "Kolay", 10),
        
        # 23
        (r"Kutu grafiğinde (Boxplot) kutunun alt kenarı, ortasındaki çizgi ve üst kenarı sırasıyla hangi istatistiki değerleri gösterir?",
         [r"En küçük değer, Ortalama, En büyük değer", r"$Q_1$ (Alt Çeyrek), Medyan, $Q_3$ (Üst Çeyrek)", r"Mod, Medyan, Ortalama", r"Açıklık, Medyan, Standart sapma", r"$Q_1$, Ortalama, $Q_3$"],
         1,
         r"Kutu grafiğinde kutunun alt kenarı birinci çeyreklik ($Q_1$), kutunun içindeki çizgi ikinci çeyreklik yani medyan ($Q_2$), kutunun üst kenarı ise üçüncü çeyrekliktir ($Q_3$).",
         r"Kutu sınırları çeyreklikleri ($Q_1$ ve $Q_3$), ortadaki çizgi ise medyanı gösterir.", "Orta", 15),
        
        # 24
        (r"$1, 2, 3, 4, 5, 6, 7, 8, 9$ veri grubunun alt çeyreği ($Q_1$) ve üst çeyreği ($Q_3$) sırasıyla nedir?",
         ["2, 7", "2.5, 7.5", "3, 7", "2.5, 8", "3, 8"],
         1,
         r"Medyan 5'tir. Alt yarı: $\{1, 2, 3, 4\}$, bu yarının medyanı $Q_1 = \frac{2 + 3}{2} = 2{,}5$. Üst yarı: $\{6, 7, 8, 9\}$, bu yarının medyanı $Q_3 = \frac{7 + 8}{2} = 7{,}5$ tir.",
         r"Medyanın solundaki ve sağındaki parçaların kendi medyanlarını al.", "Orta", 15),
        
        # 25
        (r"Bir çift zar atıldığında zarların üst yüzüne gelen sayıların aynı (çift) olma olasılığı kaçtır?",
         [r"$\frac{1}{6}$", r"$\frac{1}{12}$", r"$\frac{1}{36}$", r"$\frac{5}{36}$", r"$\frac{1}{4}$"],
         0,
         r"Tüm durumlar 36 tanedir. Aynı gelen durumlar: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ olup 6 tanedir. Olasılık: $\frac{6}{36} = \frac{1}{6}$ bulunur.",
         r"İkisi de aynı olan 6 durum vardır.", "Kolay", 10),
        
        # 26
        (r"Bir sınıfta 12 kız ve 18 erkek öğrenci vardır. Kızların boy ortalaması 160 cm, erkeklerin boy ortalaması 170 cm olduğuna göre, tüm sınıfın boy ortalaması kaç cm'dir?",
         ["164", "165", "166", "167", "168"],
         2,
         r"Ağırlıklı ortalama formülü: $\frac{12 \cdot 160 + 18 \cdot 170}{12 + 18} = \frac{1920 + 3060}{30} = \frac{4980}{30} = 166\text{ cm}$ bulunur.",
         r"Toplam boy uzunluğunu toplam öğrenci sayısına böl.", "Orta", 15),
    ]

    # Soru 16 düzeltmesi:
    v_questions[15] = (
        r"Bir sınıftaki 19 öğrencinin matematik notlarının ortalaması 70'tir. Bu sınıfa notu 90 olan yeni bir öğrenci katılırsa yeni ortalama kaç olur?",
        ["70", "71", "72", "73", "74"],
        1,
        r"Eski toplam not: $19 \cdot 70 = 1330$. Yeni öğrenciyle toplam: $1330 + 90 = 1420$. Yeni öğrenci sayısı: $19 + 1 = 20$. Yeni ortalama: $1420 / 20 = 71$ bulunur.",
        r"Toplam puanı bulup yeni öğrenciyle birlikte toplam kişi sayısına böl.", "Kolay", 10
    )

    for i, q in enumerate(v_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": v_unit[0],
            "unitTitle": v_unit[1],
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
    qs = get_units_7_to_10()
    print("Units 7-10 questions generated:", len(qs))
