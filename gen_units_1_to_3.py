# -*- coding: utf-8 -*-

def get_units_1_to_3():
    questions = []
    
    # -------------------------------------------------------------
    # BÖLÜM 1: MANTIK (26 Soru)
    # -------------------------------------------------------------
    m_unit = ("mantik", "Mantık")
    
    m_questions = [
        # 1
        ("Aşağıdaki ifadelerden hangisi bir önerme bildirir?",
         ["Bugün hava çok güzel.", "Ödevlerini bitirdin mi?", "Türkiye'nin başkenti Ankara'dır.", "Lütfen kapıyı kapat.", "Keşke tatile gitsek."],
         2,
         "Kesin bir hüküm (doğru veya yanlış) bildiren ifadelere önerme denir. 'Türkiye'nin başkenti Ankara'dır' kesin bir doğruluk değeri taşıyan doğru (1) bir önermedir. Diğerleri soru, istek veya duygu cümleleridir.",
         "Önermeler kesin doğru veya kesin yanlış bir yargı bildirmelidir; kişisel görüş, soru veya emir cümleleri önerme olamaz.", "Kolay", 10),
        
        # 2
        (r"$p: '(-3)^2 = -9'$ ve $q: 'En küçük asal sayı 2 dir.'$ önermeleri veriliyor. Buna göre $p$ ve $q$ önermelerinin doğruluk değerleri sırasıyla aşağıdakilerden hangisidir?",
         ["1, 1", "1, 0", "0, 1", "0, 0", "Belirlenemez"],
         2,
         r"$(-3)^2 = 9$ olduğundan $p$ önermesi yanlıştır ($p \equiv 0$). En küçük asal sayı gerçekten 2'dir, dolayısıyla $q$ önermesi doğrudur ($q \equiv 1$). Sırasıyla (0, 1) olur.",
         r"Negatif sayının çift kuvveti parantez içindeyse pozitiftir. Asal sayılar 2'den başlar.", "Kolay", 10),
        
        # 3
        (r"5 farklı önermenin birbirine göre en fazla kaç farklı doğruluk durumu vardır?",
         ["10", "16", "25", "32", "64"],
         3,
         r"$n$ tane farklı önermenin birbirine göre $2^n$ farklı doğruluk durumu vardır. Burada $n = 5$ olduğuna göre $2^5 = 32$ farklı durum bulunur.",
         r"Her önermenin 2 durumu (1 veya 0) olduğu için çarpma kuralından $2^n$ formülü kullanılır.", "Kolay", 10),
        
        # 4
        (r"$p \equiv 1$ ve $q \equiv 0$ olduğuna göre, $(p \land q') \lor (p' \land q)$ bileşik önermesinin doğruluk değeri kaçtır?",
         ["0", "1", "p'", "q", "Belirsiz"],
         1,
         r"$q \equiv 0 \implies q' \equiv 1$ ve $p \equiv 1 \implies p' \equiv 0$ olur. Yerine yazarsak: $(1 \land 1) \lor (0 \land 0) \equiv 1 \lor 0 \equiv 1$ bulunur.",
         r"Ve ($\land$) işleminde her ikisi de 1 ise sonuç 1'dir. Veya ($\lor$) işleminde en az biri 1 ise sonuç 1'dir.", "Kolay", 10),
        
        # 5
        (r"$(p \lor q') \equiv 0$ olduğuna göre, $p$ ve $q$ önermelerinin doğruluk değerleri sırasıyla nedir?",
         ["1, 1", "1, 0", "0, 1", "0, 0", "0, belirlenemez"],
         2,
         r"Veya ($\lor$) bağlacının sonucu 0 ise her iki bileşen de 0 olmalıdır. Buradan $p \equiv 0$ ve $q' \equiv 0 \implies q \equiv 1$ elde edilir. Sırasıyla (0, 1) olur.",
         r"$A \lor B \equiv 0$ ise ancak ve ancak $A \equiv 0$ ve $B \equiv 0$ olmalıdır.", "Kolay", 10),
        
        # 6
        (r"$(p \land q)'$ ifadesinin De Morgan kuralına göre dengi aşağıdakilerden hangisidir?",
         [r"$p' \land q'$", r"$p' \lor q'$", r"$p \lor q'$", r"$(p \lor q)'$", r"$p' \land q$"],
         1,
         r"De Morgan kuralına göre: $(p \land q)' \equiv p' \lor q'$ şeklindedir. Parantez değili alınırken ve bağlacı veya bağlacına dönüşür.",
         r"De Morgan kuralında parantez içindeki değiller dağıtılırken $\land$ bağlacı $\lor$'ya, $\lor$ bağlacı $\land$'ye dönüşür.", "Kolay", 10),
        
        # 7
        (r"$[p \lor (p \land q)]$ bileşik önermesinin en sade şekli aşağıdakilerden hangisidir?",
         ["1", "0", "p", "q", "p'"],
         2,
         r"Soğurma (Yutma) kuralına göre $p \lor (p \land q) \equiv p$ olur. Doğruluk tablosuyla da test edilirse: $p=1$ iken $1 \lor (1 \land q) = 1$; $p=0$ iken $0 \lor (0 \land q) = 0$ olup sonuç daima $p$'ye denktir.",
         r"Soğurma (absorption) özelliğini hatırla: $p \lor (p \land q) \equiv p$ ve $p \land (p \lor q) \equiv p$.", "Orta", 15),
        
        # 8
        (r"$(p \implies q) \equiv 0$ olduğuna göre, aşağıdaki bileşik önermelerden hangisinin doğruluk değeri 1'dir?",
         [r"$p \land q$", r"$p \iff q$", r"$p' \lor q$", r"$p \lor q$", r"$q \implies p'$"],
         3,
         r"Koşullu önermede $p \implies q \equiv 0$ yalnızca $1 \implies 0$ durumunda mümkündür (100 kuralı). Yani $p \equiv 1$ ve $q \equiv 0$ olur. Seçenekleri denersek: D seçeneğinde $p \lor q \equiv 1 \lor 0 \equiv 1$ bulunur.",
         r"İse ($\implies$) bağlacında sonucun 0 olması tek bir durumda geçerlidir: 1 ise 0 denktir 0.", "Orta", 15),
        
        # 9
        (r"$p \implies q$ önermesinin karşıt tersi aşağıdakilerden hangisidir?",
         [r"$q \implies p$", r"$p' \implies q'$", r"$q' \implies p'$", r"$p' \lor q$", r"$q \implies p'$"],
         2,
         r"Bir $p \implies q$ koşullu önermesinin; Karşıtı: $q \implies p$, Tersi: $p' \implies q'$, Karşıt Tersi: $q' \implies p'$ dir. Ayrıca bir önerme karşıt tersine her zaman denktir.",
         r"Karşıt ters için hem yerler değişir hem de değilleri alınır.", "Kolay", 10),
        
        # 10
        (r"$(p \implies q)' \lor p$ önermesinin en sade hali aşağıdakilerden hangisidir?",
         ["0", "1", "p", "q", "p'"],
         2,
         r"$p \implies q \equiv p' \lor q$ olduğunu biliyoruz. Değili: $(p' \lor q)' \equiv p \land q'$ olur. İfade: $(p \land q') \lor p$ haline gelir. Dağılma veya yutma kuralından bu ifade daima $p$'ye denktir.",
         r"$p \implies q \equiv p' \lor q$ kuralını kullan ve ardından De Morgan uygula.", "Orta", 15),
        
        # 11
        (r"Aşağıdakilerden hangisi bir totolojidir (daima 1'e denktir)?",
         [r"$p \land p'$", r"$p \underline{\lor} p$", r"$p \lor p'$", r"$p \implies 0$", r"$p \iff p'$"],
         2,
         r"$p \lor p'$ ifadesinde $p$ ister 1 ister 0 olsun, bileşenlerden biri mutlaka 1 olacağından $1 \lor 0 \equiv 1$ olur. Her durumda 1 olan önermelere totoloji denir.",
         r"Totoloji her zaman doğru (1), çelişki her zaman yanlış (0) çıkan önermedir.", "Kolay", 10),
        
        # 12
        (r"$p \underline{\lor} q$ (Ya da) bağlacı hakkında aşağıdakilerden hangisi yanlıştır?",
         [r"$1 \underline{\lor} 0 \equiv 1$", r"$0 \underline{\lor} 1 \equiv 1$", r"$1 \underline{\lor} 1 \equiv 0$", r"$0 \underline{\lor} 0 \equiv 0$", r"$p \underline{\lor} p \equiv 1$"],
         4,
         r"Ya da ($\underline{\lor}$) bağlacında bileşenlerin doğruluk değerleri farklı iken 1, aynı iken 0 olur. Dolayısıyla $p \underline{\lor} p \equiv 0$ olmalıdır, 1 olamaz.",
         r"Ya da bağlacı 'biri veya diğeri ama ikisi birden değil' anlamına gelir; ikisi aynıysa sonuç 0'dır.", "Kolay", 10),
        
        # 13
        (r"$p \iff q$ iki yönlü koşullu önermesi aşağıdakilerden hangisine denktir?",
         [r"$(p \implies q) \lor (q \implies p)$", r"$(p \implies q) \land (q \implies p)$", r"$p \lor q$", r"$p' \land q'$", r"$(p \land q) \lor (p' \land q)$"],
         1,
         r"Ancak ve ancak ($\iff$) bağlacı çift yönlü gerektirmedir: $p \iff q \equiv (p \implies q) \land (q \implies p)$ şeklindedir.",
         r"İki yönlü koşullu önerme, her iki yöndeki 'ise' önermelerinin 've' ile bağlanmasıdır.", "Kolay", 10),
        
        # 14
        (r"$' \forall x \in \mathbb{R}, x^2 \ge 0 '$ açık önermesinin olumsuzu (değili) aşağıdakilerden hangisidir?",
         [r"$\forall x \in \mathbb{R}, x^2 < 0$", r"$\exists x \in \mathbb{R}, x^2 < 0$", r"$\exists x \in \mathbb{R}, x^2 \le 0$", r"$\forall x \in \mathbb{R}, x^2 \le 0$", r"$\exists x \in \mathbb{R}, x^2 > 0$"],
         1,
         r"$\forall$ (her) niceleyicisinin olumsuzu $\exists$ (en az bir) olur. $\ge$ sembolünün olumsuzu ise kesin küçüktür ($<$) sembolüdür. Dolayısıyla değili: $\exists x \in \mathbb{R}, x^2 < 0$ olur.",
         r"Her ($\forall$) değili $\exists$, $\ge$ sembolünün değili $<$ olur.", "Orta", 15),
        
        # 15
        (r"$p(x): 'x \in \mathbb{Z}, 2x + 1 = 9'$ açık önermesinin doğruluk kümesi aşağıdakilerden hangisidir?",
         [r"$\{-4\}$", r"$\{4\}$", r"$\{5\}$", r"$\{3, 4\}$", r"$\emptyset$"],
         1,
         r"$2x + 1 = 9 \implies 2x = 8 \implies x = 4$. $4 \in \mathbb{Z}$ olduğundan doğruluk kümesi tek elemanlı $\{4\}$ kümesidir.",
         r"Denklemi çözüp çıkan kökün belirtilen sayı kümesinde (tam sayılar) olup olmadığını kontrol et.", "Kolay", 10),
        
        # 16
        (r"$[(p \implies q) \land p] \implies q$ önermesi için aşağıdakilerden hangisi daima doğrudur?",
         ["Çelişkidir", "Totolojidir", "p önermesine denktir", "q önermesine denktir", "Doğruluk değeri p ve q'ya göre değişir"],
         1,
         r"Modus Ponens kuralıdır: $(p \implies q) \land p \equiv (p' \lor q) \land p \equiv (p \land p') \lor (p \land q) \equiv 0 \lor (p \land q) \equiv p \land q$. İfade $(p \land q) \implies q \equiv (p \land q)' \lor q \equiv p' \lor q' \lor q \equiv p' \lor 1 \equiv 1$ çıkar. Daima 1'dir, yani totolojidir.",
         r"Önermeyi 'veya' biçimine dönüştürüp sadeleştirmeyi dene.", "Zor", 20),
        
        # 17
        (r"$p \equiv 1, q \equiv 0, r \equiv 1$ olduğuna göre, $(p \land q') \implies (q \lor r')$ ifadesinin doğruluk değeri kaçtır?",
         ["0", "1", "Belirlenemez", "r", "p'"],
         0,
         r"Sol taraf: $p \land q' = 1 \land 1 = 1$. Sağ taraf: $q \lor r' = 0 \lor 0 = 0$. Böylece $1 \implies 0 \equiv 0$ elde edilir.",
         r"1 ise 0 denktir 0 kuralını hatırla.", "Orta", 15),
        
        # 18
        (r"$p \implies (q \lor r) \equiv 0$ olduğuna göre, $p, q, r$ önermelerinin doğruluk değerleri sırasıyla nedir?",
         ["1, 0, 0", "1, 1, 0", "0, 1, 1", "1, 0, 1", "0, 0, 0"],
         0,
         r"İse önermesi 0 ise sol taraf 1, sağ taraf 0 olmalıdır. Buradan $p \equiv 1$ ve $q \lor r \equiv 0$ çıkar. Veya 0 ise her ikisi de 0 olmalıdır, yani $q \equiv 0$ ve $r \equiv 0$. Sırasıyla (1, 0, 0) olur.",
         r"Sol taraf 1 ve sağ taraf 0 olmalıdır.", "Kolay", 10),
        
        # 19
        (r"$(p \lor q)' \land (p \lor q')$ ifadesinin en sade hali nedir?",
         [r"$p'$", r"$q'$", r"$0$", r"$1$", r"$p \land q$"],
         2,
         r"$(p \lor q)' \equiv p' \land q'$ dir. İfade $(p' \land q') \land (p \lor q')$ olur. Burada $(p' \land p) = 0$ ve $(p' \land q') \land q' = p' \land q'$ dağıtıldığında veya $p \lor q$ ile $(p \lor q)'$ birbirinin değili olduğundan çarpımları 0'dır: Aslında $A' \land A = 0$ mantığıyla, $p \lor q'$ ve $p' \land q'$ incelendiğinde: $q'=0 \implies 0$, $q'=1 \implies p' \land (p \lor 1) = p' \land 1 = p'$. Ancak $p' \land q'$ ifadesinde $p=1$ olamaz. Daha basitçe: $(p' \land q') \land p \lor (p' \land q') \land q' = 0 \lor (p' \land q') = p' \land q'$. Seçenekleri incelediğimizde C seçeneği 0. Hadi doğru sadeleştirelim: $(p' \land q') \land (p \lor q') = (p' \land q' \land p) \lor (p' \land q' \land q') = 0 \lor (p' \land q') = p' \land q'$. Şıklarda $p' \land q'$ yerine daha net bir soru soralım.",
         r"İfadeyi adım adım dağıt.", "Orta", 15),
        
        # 20
        (r"Aşağıdaki önermelerden hangisinin doğruluk değeri 0'dır?",
         [r"$\exists x \in \mathbb{N}, x - 5 = 0$", r"$\forall x \in \mathbb{R}, x^2 \ge 0$", r"$\exists x \in \mathbb{Z}, x^2 = 2$", r"$\forall x \in \mathbb{N}, x + 1 > 0$", r"$\exists x \in \mathbb{Q}, 2x = 3$"],
         2,
         r"$\mathbb{Z}$ tam sayılar kümesidir. Karesi 2 olan bir tam sayı ($x^2 = 2 \implies x = \pm\sqrt{2}$) yoktur, çünkü $\sqrt{2}$ bir irrasyonel sayıdır. Dolayısıyla bu önerme yanlıştır ($0$).",
         r"Karesi 2 olan sayılar $\sqrt{2}$ ve $-\sqrt{2}$'dir, bunlar tam sayı mıdır?", "Orta", 15),
        
        # 21
        (r"$'x = 3 \implies x^2 = 9'$ önermesinin tersi aşağıdakilerden hangisidir?",
         [r"$x^2 = 9 \implies x = 3$", r"$x \neq 3 \implies x^2 \neq 9$", r"$x^2 \neq 9 \implies x \neq 3$", r"$x = 3 \land x^2 \neq 9$", r"$x \neq 3 \implies x^2 = 9$"],
         1,
         r"$p \implies q$ önermesinin tersi $p' \implies q'$ önermesidir. $p: x = 3$ ise $p': x \neq 3$ ve $q: x^2 = 9$ ise $q': x^2 \neq 9$ olur. Dolayısıyla tersi $x \neq 3 \implies x^2 \neq 9$ dur.",
         r"Tersini alırken hipotez ve hükmün sadece değilleri alınır, yerleri değiştirilmez.", "Kolay", 10),
        
        # 22
        (r"$(p \land q) \implies (p \lor q)$ koşullu önermesinin en sade dengi nedir?",
         ["1", "0", "p", "q", "p'"],
         0,
         r"$A \implies B \equiv A' \lor B$ dir. Buradan $(p \land q)' \lor (p \lor q) \equiv (p' \lor q') \lor (p \lor q) \equiv (p' \lor p) \lor (q' \lor q) \equiv 1 \lor 1 \equiv 1$ çıkar. Yani daima 1'dir.",
         r"İse bağlacını veya bağlacına çevirip birleşme özelliğini kullan.", "Kolay", 10),
        
        # 23
        (r"Aşağıdaki teorem ispat yöntemlerinden hangisi doğrudan (direkt) ispat yöntemidir?",
         ["Çelişki yöntemi", "Karşıt ters yöntemi", "Doğrudan ispat", "Aksine örnek verme yöntemi", "Olmayana ergi yöntemi"],
         2,
         r"Matematikte doğrudan ispat, hipotezin doğru olduğu kabul edilip mantık kuralları ve aksiyomlar adım adım uygulanarak hükme ulaşılan yöntemdir. Çelişki, karşıt ters ve olmayana ergi dolaylı ispat yöntemleridir.",
         r"Hipotezden yola çıkıp doğrudan hükme varılan yöntemin adı kendi içinde saklıdır.", "Kolay", 10),
        
        # 24
        (r"$p \implies p'$ ifadesinin en sade dengi aşağıdakilerden hangisidir?",
         ["1", "0", "p", "p'", "q"],
         3,
         r"$p \implies p' \equiv p' \lor p' \equiv p'$ olur. Dolayısıyla ifadenin dengi $p'$ dir.",
         r"$a \implies b \equiv a' \lor b$ kuralını uygula.", "Orta", 15),
        
        # 25
        (r"$(p \lor q') \land p' \equiv 1$ olduğuna göre, $p$ ve $q$ değerleri nedir?",
         ["p=0, q=0", "p=0, q=1", "p=1, q=0", "p=1, q=1", "Belirlenemez"],
         0,
         r"Ve ($\land$) sonucu 1 ise her iki parça da 1 olmalıdır: $p' \equiv 1 \implies p \equiv 0$. Sol taraf: $(p \lor q') \equiv 1 \implies (0 \lor q') \equiv 1 \implies q' \equiv 1 \implies q \equiv 0$. Buradan $p=0, q=0$ elde edilir.",
         r"Ve bağlacının 1 olması için sağdaki $p'$ de 1 olmalıdır.", "Orta", 15),
        
        # 26
        (r"$'Her tam sayının karesi pozitiftir.'$ önermesini çürüten karşıt örnek aşağıdakilerden hangisidir?",
         ["x = -2", "x = 1", "x = 0", "x = 3", "x = -1"],
         2,
         r"$0$ bir tam sayıdır ve $0^2 = 0$ dır. Sıfır pozitif bir sayı olmadığından (nötrdür), 'her tam sayının karesi pozitiftir' iddiasını çürüten karşıt örnek $x = 0$ dır.",
         r"Sıfırın pozitif mi yoksa nötr mü olduğunu hatırla.", "Kolay", 10),
    ]
    
    # Düzeltme: Soru 19'u tertemiz yapalım
    m_questions[18] = (
        r"$(p \lor q)' \land p$ ifadesinin en sade hali nedir?",
        ["0", "1", "p", "q", "p'"],
        0,
        r"$(p \lor q)' \equiv p' \land q'$ olur. İfade $(p' \land q') \land p \equiv (p' \land p) \land q' \equiv 0 \land q' \equiv 0$ çıkar.",
        r"De Morgan uygulayıp $p' \land p \equiv 0$ özelliğini kullan.", "Orta", 15
    )

    for i, q in enumerate(m_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": m_unit[0],
            "unitTitle": m_unit[1],
            "question": q[0],
            "options": q[1],
            "correctIndex": q[2],
            "explanation": q[3],
            "hint": q[4],
            "difficulty": q[5],
            "xp": q[6]
        })

    # -------------------------------------------------------------
    # BÖLÜM 2: KÜMELER (26 Soru)
    # -------------------------------------------------------------
    k_unit = ("kumeler", "Kümeler")
    
    k_questions = [
        # 1
        (r"$A = \{x \mid -2 \le x < 3, x \in \mathbb{Z}\}$ kümesinin eleman sayısı $s(A)$ kaçtır?",
         ["3", "4", "5", "6", "7"],
         2,
         r"Kümeyi liste biçiminde yazalım: $A = \{-2, -1, 0, 1, 2\}$. Görüldüğü gibi 5 tane tam sayı elemanı vardır. $s(A) = 5$.",
         r"Aralıktaki tam sayıları tek tek listele: -2 dahil, 3 dahil değil.", "Kolay", 10),
        
        # 2
        (r"$A = \{a, b, \{c\}, \{d, e\}\}$ kümesi için aşağıdakilerden hangisi yanlıştır?",
         [r"$s(A) = 4$", r"$b \in A$", r"$\{c\} \in A$", r"$d \in A$", r"$\{a, b\} \subseteq A$"],
         3,
         r"$A$ kümesinin elemanları $a$, $b$, $\{c\}$ ve $\{d, e\}$ dir. $d$ tek başına $A$'nın bir elemanı değildir; $A$'nın elemanı $\{d, e\}$ kümesidir. Dolayısıyla $d \in A$ ifadesi yanlıştır.",
         r"Küme parantezi içindeki kümeler bütün birer eleman olarak sayılır.", "Kolay", 10),
        
        # 3
        (r"Eleman sayısı 6 olan bir kümenin alt küme sayısı kaçtır?",
         ["12", "32", "64", "128", "256"],
         2,
         r"$n$ elemanlı bir kümenin alt küme sayısı $2^n$ dir. $n = 6$ için $2^6 = 64$ alt kümesi vardır.",
         r"Alt küme sayısı $2^n$ formülü ile hesaplanır.", "Kolay", 10),
        
        # 4
        (r"Öz alt küme sayısı 127 olan bir kümenin eleman sayısı kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"Öz alt küme sayısı $2^n - 1$ formülü ile bulunur. $2^n - 1 = 127 \implies 2^n = 128 \implies 2^7 = 128$, yani $n = 7$ dir.",
         r"Öz alt küme sayısı, kendisi hariç tüm alt kümeleridir ($2^n - 1$).", "Kolay", 10),
        
        # 5
        (r"$A = \{1, 2, 3, 4, 5, 6\}$ kümesinin alt kümelerinin kaç tanesinde $2$ elemanı bulunur?",
         ["16", "32", "64", "8", "12"],
         1,
         r"Bir elemanın mutlaka bulunması isteniyorsa, o eleman cebe konur ve kalan $6 - 1 = 5$ elemanla oluşturulabilecek alt küme sayısı hesaplanır: $2^5 = 32$ tanesinde 2 elemanı bulunur.",
         r"İstenen elemanı bir kenara ayır, kalan elemanlarla alt küme oluştur.", "Orta", 15),
        
        # 6
        (r"$A = \{a, b, c, d, e\}$ kümesinin alt kümelerinin kaç tanesinde $a$ bulunur ama $b$ bulunmaz?",
         ["4", "8", "16", "32", "2"],
         1,
         r"$a$ kümede bulunacak, $b$ ise bulunmayacaktır. Her iki elemanı da kümeden çıkarırız: Kalan elemanlar $\{c, d, e\}$ olup 3 tanedir. $2^3 = 8$ farklı alt küme yazılabilir.",
         r"Hem 'bulunur' hem 'bulunmaz' denilen elemanlar dışarı alınır, kalan eleman sayısı ile $2^k$ hesaplanır.", "Orta", 15),
        
        # 7
        (r"$s(A) = 8$, $s(B) = 6$ ve $s(A \cap B) = 3$ olduğuna göre, $s(A \cup B)$ kaçtır?",
         ["11", "14", "17", "9", "12"],
         0,
         r"Birleşim formülü: $s(A \cup B) = s(A) + s(B) - s(A \cap B)$. Sayıları yerine koyarsak: $s(A \cup B) = 8 + 6 - 3 = 11$ bulunur.",
         r"$s(A \cup B) = s(A) + s(B) - s(A \cap B)$ kuralını hatırla.", "Kolay", 10),
        
        # 8
        (r"$A \setminus B$ kümesi aşağıdakilerden hangisine eşittir?",
         [r"$A \cap B'$", r"$A' \cap B$", r"$A \cup B'$", r"$(A \cap B)'$", r"$A' \cup B$"],
         0,
         r"Kümeler teorisinde fark işlemi: $A \setminus B = A \cap B'$ olarak ifade edilir. Yani $A$'da olan ve $B$'de olmayan elemanlar.",
         r"Fark işleminin tümleyen ile kesişim karşılığı $A \cap B'$ dir.", "Kolay", 10),
        
        # 9
        (r"$E$ evrensel küme olmak üzere, $s(A) + s(A') = 14$ ve $s(B') = 5$ ise $s(B)$ kaçtır?",
         ["7", "8", "9", "10", "11"],
         2,
         r"Bir küme ile tümleyeninin eleman sayıları toplamı evrensel kümenin eleman sayısını verir: $s(E) = s(A) + s(A') = 14$. Buradan $s(E) = s(B) + s(B') = 14 \implies s(B) + 5 = 14 \implies s(B) = 9$ bulunur.",
         r"$s(A) + s(A') = s(E)$ bağıntısını kullan.", "Kolay", 10),
        
        # 10
        (r"$(A \cup B)'$ kümesinin De Morgan dengi aşağıdakilerden hangisidir?",
         [r"$A' \cap B'$", r"$A' \cup B'$", r"$A \cap B'$", r"$A' \cap B$", r"$E \setminus A$"],
         0,
         r"Kümelerde De Morgan kuralı: $(A \cup B)' = A' \cap B'$ ve $(A \cap B)' = A' \cup B'$ dir.",
         r"Birleşimin tümleyeni, tümleyenlerin kesişimidir.", "Kolay", 10),
        
        # 11
        (r"35 kişilik bir sınıfta 20 kişi İngilizce, 15 kişi Almanca bilmektedir. 5 kişi her iki dili de bildiğine göre, bu dillerden hiçbirini bilmeyen kaç kişi vardır?",
         ["3", "5", "7", "8", "10"],
         1,
         r"En az bir dil bilenler: $s(\text{İng} \cup \text{Alm}) = 20 + 15 - 5 = 30$ kişi. Sınıf mevcudu 35 kişi olduğuna göre hiçbirini bilmeyenler: $35 - 30 = 5$ kişidir.",
         r"Önce birleşimi bul ($s(A) + s(B) - s(A \cap B)$), sonra toplam mevcuttan çıkar.", "Orta", 15),
        
        # 12
        (r"$A = \{1, 2, 3\}$ ve $B = \{a, b\}$ olduğuna göre, $A \times B$ kartezyen çarpım kümesinin eleman sayısı $s(A \times B)$ kaçtır?",
         ["5", "6", "8", "9", "12"],
         1,
         r"Kartezyen çarpımın eleman sayısı: $s(A \times B) = s(A) \cdot s(B) = 3 \cdot 2 = 6$ dır.",
         r"Kartezyen çarpımın eleman sayısı, kümelerin eleman sayılarının çarpımıdır.", "Kolay", 10),
        
        # 13
        (r"$s(A \times B) = 24$ ve $s(B \times C) = 32$ olduğuna göre, $s(B)$ en fazla kaç olabilir?",
         ["4", "6", "8", "12", "16"],
         2,
         r"$s(B)$, hem 24'ün hem de 32'nin bir böleni olmalıdır. $s(B)$'nin en büyük değeri $\text{EBOB}(24, 32)$ ile bulunur. $\text{EBOB}(24, 32) = 8$ dir.",
         r"B kümesinin eleman sayısı her iki sayının da ortak böleni olmalıdır.", "Orta", 15),
        
        # 14
        (r"$A \subseteq B$ olduğuna göre, aşağıdakilerden hangisi daima doğrudur?",
         [r"$A \cap B = B$", r"$A \cup B = A$", r"$A \setminus B = \emptyset$", r"$A' \subseteq B'$", r"$s(A) > s(B)$"],
         2,
         r"$A$, $B$'nin bir alt kümesi ise $A$'nın tüm elemanları $B$'nin de elemanıdır. Dolayısıyla $A$'da olup $B$'de olmayan hiçbir eleman bulunmaz: $A \setminus B = \emptyset$ dir.",
         r"$A$ tamamen $B$'nin içinde olduğuna göre $A$'dan $B$'yi çıkartırsan geriye ne kalır?", "Kolay", 10),
        
        # 15
        (r"$A = \{x \mid x < 100, x = 3k, k \in \mathbb{N}^+\}$ kümesinin eleman sayısı kaçtır?",
         ["32", "33", "34", "35", "36"],
         1,
         r"$x$ değerleri 3, 6, 9, ..., 99'dur. Terim sayısı formülü: $\frac{\text{Son Terim} - \text{İlk Terim}}{\text{Artış Miktarı}} + 1 = \frac{99 - 3}{3} + 1 = \frac{96}{3} + 1 = 32 + 1 = 33$ bulunur.",
         r"Pozitif doğal sayılar 1'den başlar, $k=1, 2, \dots$ için $3k < 100$ olacak en büyük $k$'yı bul.", "Kolay", 10),
        
        # 16
        (r"$A$ ve $B$ ayrık iki kümedir. $s(A) = 7$ ve $s(B) = 5$ olduğuna göre, $s(A \cup B)$ kaçtır?",
         ["2", "10", "12", "35", "Belirlenemez"],
         2,
         r"Ayrık kümelerin ortak elemanı yoktur, yani $A \cap B = \emptyset \implies s(A \cap B) = 0$. Dolayısıyla $s(A \cup B) = s(A) + s(B) = 7 + 5 = 12$ olur.",
         r"Ayrık kümelerin kesişimi boştur.", "Kolay", 10),
        
        # 17
        (r"$A$ kümesinin alt küme sayısı ile öz alt küme sayısının toplamı 63 olduğuna göre, $s(A)$ kaçtır?",
         ["4", "5", "6", "7", "8"],
         1,
         r"$2^n + (2^n - 1) = 63 \implies 2 \cdot 2^n - 1 = 63 \implies 2^{n+1} = 64 \implies 2^6 = 64 \implies n + 1 = 6 \implies n = 5$ bulunur.",
         r"Alt küme sayısı $2^n$, öz alt küme sayısı $2^n - 1$ dir. İkisini topla.", "Orta", 15),
        
        # 18
        (r"$s(A \setminus B) = 5$, $s(B \setminus A) = 4$ ve $s(A \cup B) = 12$ olduğuna göre, $s(A \cap B)$ kaçtır?",
         ["2", "3", "4", "5", "6"],
         1,
         r"Birleşim formülü: $s(A \cup B) = s(A \setminus B) + s(B \setminus A) + s(A \cap B)$ dir. Değerleri yazarsak: $12 = 5 + 4 + s(A \cap B) \implies 12 = 9 + s(A \cap B) \implies s(A \cap B) = 3$ olur.",
         r"Venn şemasındaki üç ayrık bölgenin toplamı birleşime eşittir.", "Orta", 15),
        
        # 19
        (r"$A = \{1, 2\}$ ve $B = \{2, 3, 4\}$ kümeleri için $(A \times B) \cap (A \times A)$ kümesinin eleman sayısı kaçtır?",
         ["2", "3", "4", "6", "1"],
         0,
         r"$(A \times B) \cap (A \times A) = A \times (B \cap A)$ dağılma özelliğidir. $B \cap A = \{2\}$ olup eleman sayısı 1'dir. $s(A) = 2$ olduğuna göre, eleman sayısı $s(A) \cdot s(B \cap A) = 2 \cdot 1 = 2$ bulunur.",
         r"Kartezyen çarpımın kesişim üzerine dağılma özelliğini kullan.", "Zor", 20),
        
        # 20
        (r"Futbol veya voleybol oynayanlardan oluşan bir grupta, futbol oynayanların sayısı voleybol oynayanların sayısının 2 katıdır. Her iki sporu da yapan 4 kişi, sadece futbol oynayan 12 kişi olduğuna göre grupta kaç kişi vardır?",
         ["18", "20", "22", "24", "26"],
         1,
         r"Futbol oynayanlar: Sadece futbol + Her ikisi = $12 + 4 = 16$ kişi. Futbol oynayanlar voleybolun 2 katı olduğuna göre voleybol oynayanlar $16 / 2 = 8$ kişidir. Voleybol oynayan 8 kişinin 4'ü her ikisini oynadığına göre sadece voleybol oynayan $8 - 4 = 4$ kişidir. Toplam grup mevcudu: $12 (\text{sadece F}) + 4 (\text{her ikisi}) + 4 (\text{sadece V}) = 20$ kişi.",
         r"Venn şeması çizerek bilinen sayıları bölgelere yerleştir.", "Orta", 15),
        
        # 21
        (r"$A = \{x \mid x^2 < 17, x \in \mathbb{Z}\}$ kümesinin en çok 2 elemanlı alt küme sayısı kaçtır?",
         ["9", "37", "46", "72", "128"],
         1,
         r"$x^2 < 17$ eşitsizliğini sağlayan tam sayılar: $-4, -3, -2, -1, 0, 1, 2, 3, 4$ olup toplam 9 elemandır ($s(A) = 9$). En çok 2 elemanlı alt kümeler: 0 elemanlı: $\binom{9}{0} = 1$, 1 elemanlı: $\binom{9}{1} = 9$, 2 elemanlı: $\binom{9}{2} = \frac{9 \cdot 8}{2} = 36$. Toplam: $1 + 9 + 36 = 46$ bulunur.",
         r"En çok 2 elemanlı demek; 0, 1 veya 2 elemanlı alt kümeler demektir.", "Zor", 20),
        
        # 22
        (r"$A \cap B = A$ olması aşağıdakilerden hangisini gerektirir?",
         [r"$A = B$", r"$A \subseteq B$", r"$B \subseteq A$", r"$A \cap B = \emptyset$", r"$A = \emptyset$"],
         1,
         r"İki kümenin kesişimi $A$'ya eşitse, $A$'nın tüm elemanları aynı zamanda $B$'nin de içinde yer almaktadır. Bu da $A \subseteq B$ ($A$, $B$'nin alt kümesidir) anlamına gelir.",
         r"Kesişim küçük kümeye eşit çıkıyorsa o küme diğerinin alt kümesidir.", "Kolay", 10),
        
        # 23
        (r"$(A \setminus B) \cup (A \cap B)$ birleşimi aşağıdakilerden hangisine daima eşittir?",
         [r"$B$", r"$A$", r"$A \cup B$", r"$A'$", r"$\emptyset$"],
         1,
         r"Venn şemasını düşünürsek: $A \setminus B$ sadece $A$'ya ait olan bölgedir, $A \cap B$ ise $A$ ile $B$'nin ortak bölgesidir. Bu iki ayrık bölgenin birleşimi doğrudan $A$ kümesini oluşturur.",
         r"Venn şemasında 'sadece A' ile 'kesişim' alanlarını birleştirdiğinde hangi küme oluşur?", "Kolay", 10),
        
        # 24
        (r"$s(A) = 4$ olduğuna göre, $A$ kümesinin en az 1 elemanlı alt küme sayısı kaçtır?",
         ["14", "15", "16", "17", "31"],
         1,
         r"Tüm alt kümelerin sayısı $2^4 = 16$ dır. En az 1 elemanlı demek, 0 elemanlı olan boş kümenin hariç tutulması demektir: $16 - 1 = 15$ tane en az bir elemanlı alt kümesi vardır.",
         r"Tüm alt kümelerden boş kümeyi (0 elemanlı alt kümeyi) çıkar.", "Kolay", 10),
        
        # 25
        (r"$A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5\}$ ve $C = \{1, 5, 6\}$ olduğuna göre, $(A \setminus B) \cup (B \setminus C)$ kümesi nedir?",
         [r"$\{1, 2, 3, 4\}$", r"$\{1, 2, 3\}$", r"$\{1, 2, 4\}$", r"$\{1, 2, 3, 4, 5\}$", r"$\{2, 3, 4\}$"],
         0,
         r"$A \setminus B = \{1, 2\}$ dir. $B \setminus C = \{3, 4\}$ dir. Birleşimleri: $\{1, 2\} \cup \{3, 4\} = \{1, 2, 3, 4\}$ olur.",
         r"Önce her iki fark kümesinin elemanlarını bul, ardından birleştir.", "Orta", 15),
        
        # 26
        (r"$A$ ve $B$ kümeleri için $s(A) = 2 \cdot s(B)$, $s(A \cap B) = 3$ ve $s(A \cup B) = 18$ olduğuna göre, $s(A)$ kaçtır?",
         ["10", "12", "14", "16", "18"],
         2,
         r"$s(A \cup B) = s(A) + s(B) - s(A \cap B) \implies 18 = 2x + x - 3 \implies 3x - 3 = 18 \implies 3x = 21 \implies x = 7$. Buradan $s(A) = 2x = 14$ bulunur.",
         r"$s(B) = x$ ve $s(A) = 2x$ deyip birleşim formülünde yerine koy.", "Orta", 15),
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
    # BÖLÜM 3: SAYI KÜMELERİ & BÖLÜNEBİLME (26 Soru)
    # -------------------------------------------------------------
    s_unit = ("sayilar", "Sayı Kümeleri & Bölünebilme")
    
    s_questions = [
        # 1
        (r"Aşağıdaki sayılardan hangisi bir irrasyonel ($\mathbb{Q}'$) sayıdır?",
         [r"$\frac{3}{5}$", r"$-7$", r"$\sqrt{16}$", r"$\sqrt{7}$", r"$0{,}333\dots$"],
         3,
         r"$\sqrt{16} = 4$ olup rasyoneldir. $0{,}333\dots = 1/3$ devirli rasyoneldir. Ancak $\sqrt{7}$ tam kare olmadığından kök dışına çıkamaz ve virgülden sonrası düzensiz sonsuza gider, dolayısıyla irrasyonel bir sayıdır.",
         r"Kök dışına tam olarak çıkamayan sayılar irrasyoneldir.", "Kolay", 10),
        
        # 2
        (r"Dört basamaklı $4a72$ sayısı 3 ile tam bölünebildiğine göre, $a$'nın alabileceği farklı değerlerin toplamı kaçtır?",
         ["12", "15", "18", "21", "24"],
         1,
         r"3 ile bölünebilme kuralı: Rakamları toplamı 3'ün katı olmalıdır. $4 + a + 7 + 2 = 13 + a$. $13 + a$ ifadesinin 3'ün katı olması için $a \in \{2, 5, 8\}$ olabilir. Toplamları: $2 + 5 + 8 = 15$ bulunur.",
         r"Rakamları topla ve 3'ün katı yapacak rakamları belirle.", "Kolay", 10),
        
        # 3
        (r"Beş basamaklı $73x4y$ sayısı 10 ile bölündüğünde 6 kalanını vermektedir. Bu sayı 9 ile tam bölündüğüne göre, $x$ kaçtır?",
         ["5", "6", "7", "8", "9"],
         2,
         r"10 ile bölündüğünde 6 kalanını veriyorsa birler basamağı $y = 6$ dır. Sayı $73x46$ olur. 9 ile tam bölünebilmesi için rakamlar toplamı 9'un katı olmalıdır: $7 + 3 + x + 4 + 6 = 20 + x$. Buradan $20 + x = 27 \implies x = 7$ bulunur.",
         r"10 ile bölümünden kalan birler basamağını verir, ardından 9 ile bölünebilmeyi uygula.", "Orta", 15),
        
        # 4
        (r"Aralarında asal iki pozitif sayının EKOK'u 120'dir. Bu sayılardan biri 8 olduğuna göre, diğeri kaçtır?",
         ["12", "15", "16", "20", "24"],
         1,
         r"Aralarında asal iki sayının EKOK'u bu sayıların çarpımına eşittir: $a \cdot b = \text{EKOK}(a, b) = 120$. Biri 8 olduğuna göre: $8 \cdot b = 120 \implies b = 15$ bulunur.",
         r"Aralarında asal sayıların EBOB'u 1, EKOK'u ise çarpımlarıdır.", "Kolay", 10),
        
        # 5
        (r"$\text{EBOB}(48, 72)$ ve $\text{EKOK}(48, 72)$ değerleri sırasıyla aşağıdakilerden hangisidir?",
         ["12, 144", "24, 144", "24, 288", "16, 144", "24, 216"],
         1,
         r"Asal çarpanlarına ayıralım: $48 = 2^4 \cdot 3^1$, $72 = 2^3 \cdot 3^2$. $\text{EBOB} = 2^3 \cdot 3^1 = 24$. $\text{EKOK} = 2^4 \cdot 3^2 = 16 \cdot 9 = 144$. Sırasıyla 24 ve 144 olur.",
         r"EBOB ortak olanların en küçük üssü, EKOK ise tüm çarpanların en büyük üssüdür.", "Kolay", 10),
        
        # 6
        (r"Boyutları $24\text{ m}$ ve $36\text{ m}$ olan dikdörtgen şeklindeki bir bahçenin etrafına ve köşelerine eşit aralıklarla fidan dikilecektir. En az kaç fidana ihtiyaç vardır?",
         ["8", "10", "12", "14", "16"],
         1,
         r"Fidan sayısının en az olması için iki fidan arasındaki mesafe en büyük olmalıdır, yani $\text{EBOB}(24, 36) = 12\text{ m}$ dir. Çevre $= 2 \cdot (24 + 36) = 120\text{ m}$. Fidan sayısı $= \text{Çevre} / \text{EBOB} = 120 / 12 = 10$ fidan gerekir.",
         r"Bütünden eşit parçalara giderken EBOB kullanılır.", "Orta", 15),
        
        # 7
        (r"Bir limandaki üç gemi 6, 8 ve 12 günde bir sefere çıkmaktadır. Bu gemiler aynı gün sefere çıktıktan en az kaç gün sonra tekrar birlikte sefere çıkarlar?",
         ["24", "36", "48", "60", "72"],
         0,
         r"Birlikte tekrar sefere çıkacakları gün sayısı bu periyotların en küçük ortak katıdır: $\text{EKOK}(6, 8, 12)$. $6 = 2 \cdot 3$, $8 = 2^3$, $12 = 2^2 \cdot 3$. $\text{EKOK} = 2^3 \cdot 3 = 24$ gün sonra tekrar birlikte çıkarlar.",
         r"Parçadan bütüne veya tekrarlayan periyotlara giderken EKOK kullanılır.", "Kolay", 10),
        
        # 8
        (r"Bugün günlerden Salı olduğuna göre, 100 gün sonra hangi gün olur?",
         ["Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
         1,
         r"Günler 7 günde bir tekrar eder. 100'ü 7'ye böleriz: $100 = 7 \cdot 14 + 2$, kalan 2'dir. Salı gününün üzerine 2 gün sayarız: Salı + 1 = Çarşamba, Salı + 2 = Perşembe.",
         r"Günler haftalık periyotta (7 günde bir) tekrar eder, kalanı bulup say.", "Kolay", 10),
        
        # 9
        (r"Dört basamaklı $5a4b$ sayısı 5 ve 9 ile tam bölünebilen bir çift sayıdır. Buna göre $a$ kaçtır?",
         ["0", "4", "5", "9", "7"],
         1,
         r"5 ile bölünebilen çift sayıların son basamağı $b = 0$ olmak zorundadır. Sayımız $5a40$ olur. 9 ile tam bölünmesi için rakamlar toplamı 9'un katı olmalıdır: $5 + a + 4 + 0 = 9 + a$. $a$ rakam olduğuna göre $a = 0$ veya $a = 9$ olabilir. Fakat $a=0$ olursa $5040$ rakamlar toplamı 9, $a=9$ olursa 18 olur. Şıklarda $a=4$ ve $a=0$ var; soru köküne göre $5+a+4+0 = 9+a$. $a=0$ durumunda $5040$ rakamlar toplamı 9'dur ve 9'a bölünür; $a=9$ için de bölünür. Eğer rakamları farklı denseydi... Hadi soruyu netleştirelim: Rakamları farklı $5a4b$ sayısı diyelim! $a$ 0 ve 5 olamaz, dolayısıyla $a = 9$ olur.",
         r"Çift ve 5'e bölünen sayının son basamağı 0'dır.", "Orta", 15),
        
        # 10
        (r"Bir sepetteki güller dörder, beşer ve altışar sayıldığında her seferinde 2 gül artmaktadır. Sepetteki gül sayısı 100'den fazla olduğuna göre en az kaç gül vardır?",
         ["120", "122", "124", "182", "242"],
         1,
         r"Gül sayısı $G = \text{EKOK}(4, 5, 6) \cdot k + 2$ dir. $\text{EKOK}(4, 5, 6) = 60$. $k = 2$ alırsak $G = 60 \cdot 2 + 2 = 120 + 2 = 122$ gül olur (100'den fazla en küçük değer).",
         r"Önce bölenlerin EKOK'unu bul, 100'ü geçecek katını alıp kalanı ekle.", "Orta", 15),
        
        # 11
        (r"Aşağıdaki sayılardan hangisi aralarında asaldır?",
         ["9 ile 15", "14 ile 21", "12 ile 35", "18 ile 27", "26 ile 39"],
         2,
         r"Birden başka pozitif ortak böleni olmayan sayılara aralarında asal sayılar denir. $12 = 2^2 \cdot 3$ ve $35 = 5 \cdot 7$ sayılarının 1 dışında hiçbir ortak böleni yoktur ($\text{EBOB}(12, 35) = 1$). Diğerlerinin ortak bölenleri vardır (3, 7, 9, 13).",
         r"İki sayının 1'den başka hiçbir ortak böleni olmamalıdır.", "Kolay", 10),
        
        # 12
        (r"Dört basamaklı $2x7y$ sayısının 4 ile bölümünden kalan 2 olduğuna göre, $y$ yerine kaç farklı tek rakam gelemez?",
         ["Hiçbiri gelemez", "1", "3", "5", "Hepsi gelebilir"],
         0,
         r"4 ile bölünebilme son iki basamağa bağlıdır. 4 ile bölündüğünde 2 kalanını veren sayılar daima çift sayılardır ($4k+2$ çifttir). Dolayısıyla $y$ hiçbir zaman tek rakam olamaz; tek sayıların 4 ile bölümünden kalan 1 veya 3 olur.",
         r"4 ile tam bölünen veya 2 kalanı veren sayılar daima çift midir tek midir?", "Orta", 15),
        
        # 13
        (r"11 ile bölünebilme kuralına göre $6a341$ sayısının 11 ile tam bölünebilmesi için $a$ rakamı kaç olmalıdır?",
         ["1", "3", "5", "7", "8"],
         1,
         r"Sağdan sola $+ - + - +$ işaretleri konur: $+1 -4 +3 -a +6 = (1 + 3 + 6) - (4 + a) = 10 - 4 - a = 6 - a$. Bu ifadenin 11'in katı olması için $6 - a = 0 \implies a = 3$ değil, $6 - a = 0 \implies a = 6$ dır. Tekrar hesaplayalım: $+1 -4 +3 -a +6 = (1+3+6) - (4+a) = 10 - 4 - a = 6 - a = 0 \implies a = 6$. Şıklara 6 koyalım!",
         r"Sağdan sola +, -, +, -, + koyup topla.", "Orta", 15),
        
        # 14
        (r"Bir hemşire 4 günde bir, bir doktor ise 6 günde bir nöbet tutmaktadır. İkisi birlikte ilk nöbetlerini Çarşamba günü tuttuklarına göre, birlikte 3. nöbetlerini hangi gün tutarlar?",
         ["Pazartesi", "Salı", "Çarşamba", "Cuma", "Pazar"],
         1,
         r"Birlikte nöbet tutma periyodu $\text{EKOK}(4, 6) = 12$ gündür. 1. nöbeti zaten tuttular. 3. nöbet için 2 periyot daha geçmelidir: $2 \cdot 12 = 24$ gün geçer. $24 = 7 \cdot 3 + 3$, kalan 3'tür. Çarşamba + 3 gün = Cumartesi olur. Şıkları güncelleyelim.",
         r"1. nöbet tutulduğu için 3. nöbete kadar 2 periyot geçer.", "Zor", 20),
        
        # 15
        (r"Dört basamaklı $8a2b$ sayısı 36 ile tam bölünebildiğine göre, $a$'nın alabileceği değerler toplamı kaçtır?",
         ["8", "12", "14", "16", "18"],
         2,
         r"$36 = 4 \cdot 9$ (aralarında asal çarpanlar). 4 ile bölünebilmesi için son iki basamak $2b$: $20, 24, 28$ olabilir, yani $b \in \{0, 4, 8\}$. $b=0$ ise $8a20 \implies 8+a+2+0 = 10+a \implies a=8$. $b=4$ ise $8a24 \implies 14+a \implies a=4$. $b=8$ ise $8a28 \implies 18+a \implies a=0$ veya $a=9$. $a$'nın alabileceği değerler: $8 + 4 + 0 + 9 = 21$. Soruyu sadeleştirelim.",
         r"36 ile bölünebilme için hem 4 hem 9 ile bölünebilmelidir.", "Zor", 20),
        
        # 16
        (r"$x$ ve $y$ pozitif tam sayılardır. $\text{EBOB}(x, y) = 6$ ve $x/y = 3/4$ olduğuna göre, $x + y$ toplamı kaçtır?",
         ["36", "42", "48", "54", "60"],
         1,
         r"$x/y = 3/4$ olduğuna göre aralarında asal katlar $3k$ ve $4k$ dır. Ortak bölen $\text{EBOB}(3k, 4k) = k = 6$ dır. Buradan $x = 3 \cdot 6 = 18$ ve $y = 4 \cdot 6 = 24$ olur. Toplamları: $18 + 24 = 42$ bulunur.",
         r"Oran $3/4$ ise sayıları $3k$ ve $4k$ olarak yaz, $k$ EBOB'a eşittir.", "Kolay", 10),
        
        # 17
        (r"$120$ sayısının pozitif tam sayı bölenlerinin sayısı kaçtır?",
         ["12", "16", "18", "20", "24"],
         1,
         r"$120$ sayısını asal çarpanlarına ayıralım: $120 = 2^3 \cdot 3^1 \cdot 5^1$. Pozitif bölen sayısı, asal çarpanların üslerinin birer fazlasının çarpımıdır: $(3+1)(1+1)(1+1) = 4 \cdot 2 \cdot 2 = 16$ bulunur.",
         r"Asal çarpanların kuvvetlerini 1 artırıp çarp.", "Orta", 15),
        
        # 18
        (r"Saat 14:00'ı gösterirken çalışan bir saat, 150 saat sonra kaçı gösterir?",
         ["18:00", "20:00", "22:00", "08:00", "10:00"],
         1,
         r"Saatler 24 saatte bir aynı saati gösterir. $150 = 24 \cdot 6 + 6$, kalan 6 saattir. 14:00'a 6 saat eklersek: $14 + 6 = 20:00$ olur.",
         r"Saat periyodu 24 saattir, 150'yi 24'e bölüp kalanı saate ekle.", "Kolay", 10),
        
        # 19
        (r"$a$ ve $b$ ardışık iki pozitif tam sayıdır. $\text{EBOB}(a, b) + \text{EKOK}(a, b) = 73$ olduğuna göre, $a + b$ kaçtır?",
         ["15", "17", "19", "21", "23"],
         1,
         r"Ardışık tam sayılar daima aralarında asaldır. Dolayısıyla $\text{EBOB}(a, b) = 1$ ve $\text{EKOK}(a, b) = a \cdot b$ dir. $1 + a \cdot b = 73 \implies a \cdot b = 72$. Çarpımları 72 olan ardışık sayılar 8 ve 9'dur. Toplamları: $8 + 9 = 17$ bulunur.",
         r"Ardışık iki pozitif sayının EBOB'u 1'dir.", "Orta", 15),
        
        # 20
        (r"3 basamaklı $5a2$ sayısı 4 ile tam bölünebildiğine göre, $a$ yerine gelebilecek rakamların toplamı kaçtır?",
         ["20", "25", "30", "15", "10"],
         1,
         r"4 ile bölünebilme için son iki basamak $a2$ sayısı 4'ün katı olmalıdır: $12, 32, 52, 72, 92$ olabilir. Dolayısıyla $a \in \{1, 3, 5, 7, 9\}$. Rakamlar toplamı: $1 + 3 + 5 + 7 + 9 = 25$ bulunur.",
         r"Son iki basamağı incele: Hangi onlar basamağı 2 ile bittiğinde 4'e bölünür?", "Kolay", 10),
        
        # 21
        (r"$\text{EKOK}(a, b) = 60$ olan iki farklı doğal sayının toplamı en çok kaç olabilir?",
         ["60", "90", "120", "150", "180"],
         1,
         r"Toplamın en büyük olması için sayıların kendisi ve en büyük böleni seçilir: Birinci sayı 60, ikinci sayı ise 60'ın kendisinden farklı en büyük böleni olan $60 / 2 = 30$ seçilir. Toplam: $60 + 30 = 90$ olur.",
         r"Farklı dendiği için biri EKOK'un kendisi, diğeri EKOK'un en büyük böleni alınır.", "Orta", 15),
        
        # 22
        (r"$\frac{4x + 12}{x}$ ifadesini tam sayı yapan kaç farklı $x$ tam sayı değeri vardır?",
         ["6", "8", "12", "14", "16"],
         2,
         r"İfadeyi parçalayalım: $\frac{4x + 12}{x} = 4 + \frac{12}{x}$. Bu ifadenin tam sayı olması için $x$'in 12'yi tam bölmesi gerekir. 12'nin tam sayı bölenleri: Pozitif bölenleri $12 = 2^2 \cdot 3^1 \implies (2+1)(1+1) = 6$ tane, negatif bölenleri de 6 tane olmak üzere toplam $6 + 6 = 12$ tanedir.",
         r"Paydayı paya ayrı ayrı bölerek $4 + 12/x$ şeklinde yaz ve 12'nin pozitif/negatif bölenlerini say.", "Orta", 15),
        
        # 23
        (r"Aşağıdakilerden hangisi daima bir rasyonel sayıdır?",
         [r"İki irrasyonel sayının toplamı", r"İki irrasyonel sayının çarpımı", r"İki rasyonel sayının çarpımı", r"Bir rasyonel ile bir irrasyonelin toplamı", r"Bir irrasyonel sayının karesi"],
         2,
         r"İki rasyonel sayının çarpımı daima bir rasyonel sayıdır ($\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd} \in \mathbb{Q}$). Diğerlerinde: $\sqrt{2} + (-\sqrt{2}) = 0$ rasyonel olabilirken $\sqrt{2} + \sqrt{3}$ irrasyoneldir; $\sqrt{2} \cdot \sqrt{3} = \sqrt{6}$ irrasyoneldir; $\pi^2$ irrasyoneldir.",
         r"Rasyonel sayılar kümesi dört işlem altında kapalıdır.", "Kolay", 10),
        
        # 24
        (r"Aralarında asal iki sayının çarpımı 70'tir. Bu iki sayının toplamı en az kaç olabilir?",
         ["17", "19", "21", "37", "71"],
         0,
         r"Çarpımları 70 olan aralarında asal sayı çiftleri: $(1, 70) \implies 71$, $(2, 35) \implies 37$, $(7, 10) \implies 17$. Toplamın en küçük olması için sayılar birbirine en yakın seçilmelidir: $7 + 10 = 17$ dir.",
         r"Toplamın en küçük olması için çarpanları birbirine mümkün olduğunca yakın seç.", "Orta", 15),
        
        # 25
        (r"Bir $A$ sayısı 8 ile bölündüğünde kalan 5'tir. Buna göre $A^2 + 3A$ sayısının 8 ile bölümünden kalan kaçtır?",
         ["0", "1", "4", "5", "7"],
         0,
         r"Kalan aritmetiğinde $A$ yerine doğrudan kalanı yazabiliriz ($A = 5$): $A^2 + 3A \implies 5^2 + 3(5) = 25 + 15 = 40$. 40 sayısı 8'e tam bölünür ($40 = 8 \cdot 5 + 0$). Kalan 0 olur.",
         r"İfadede sayı yerine doğrudan kalanı yazarak işlem yap.", "Kolay", 10),
        
        # 26
        (r"3 basamaklı $2ab$ sayısı 15 ile tam bölünebilmektedir. Buna göre $a$'nın alabileceği kaç farklı değer vardır?",
         ["3", "4", "6", "7", "8"],
         3,
         r"$15 = 3 \cdot 5$. 5 ile bölünebilme için $b = 0$ veya $b = 5$ olmalıdır. Durum 1 ($b=0$): $2a0 \implies 2+a$ 3'ün katı olmalı $\implies a \in \{1, 4, 7\}$ (3 tane). Durum 2 ($b=5$): $2a5 \implies 7+a$ 3'ün katı olmalı $\implies a \in \{2, 5, 8\}$ (3 tane). Toplam $3 + 3 = 6$ değil, tekrar kontrol edelim: $1,4,7$ ve $2,5,8$ birbirinden farklı rakamlardır, toplam 6 farklı değer alır. Hadi şıkları güncelleyelim: A) 3, B) 4, C) 5, D) 6, E) 7. Doğru cevap 6 (D).",
         r"15 ile bölünebilmesi için hem 3'e hem 5'e bölünmelidir.", "Orta", 15),
    ]

    # Soru 9 düzeltmesi:
    s_questions[8] = (
        r"Dört basamaklı $5a4b$ sayısı 5 ve 9 ile tam bölünebilen rakamları farklı bir çift sayıdır. Buna göre $a$ kaçtır?",
        ["0", "4", "7", "8", "9"],
        4,
        r"Çift ve 5'e bölündüğü için son basamak $b = 0$ dır. Sayı $5a40$ olur. 9'a bölünebilmesi için $5 + a + 4 + 0 = 9 + a$ ifadesi 9'un katı olmalıdır. $a = 0$ veya $a = 9$ olabilir. Rakamları farklı dendiği için $a=0$ olamaz (0 sonda var). Dolayısıyla $a = 9$ dur.",
        r"Rakamları farklı kuralına dikkat et; son basamak 0 olduğu için a sıfır olamaz.", "Orta", 15
    )

    # Soru 13 düzeltmesi:
    s_questions[12] = (
        r"11 ile bölünebilme kuralına göre $6a341$ sayısının 11 ile tam bölünebilmesi için $a$ rakamı kaç olmalıdır?",
        ["2", "4", "5", "6", "8"],
        3,
        r"Sağdan sola $+ - + - +$ işaretleri konur: $+1 -4 +3 -a +6 = 10 - 4 - a = 6 - a$. Bu sonucun 11'in katı (yani 0) olması için $6 - a = 0 \implies a = 6$ olmalıdır.",
        r"Sağdan sola +, -, +, -, + koyup topla.", "Orta", 15
    )

    # Soru 14 düzeltmesi:
    s_questions[13] = (
        r"Bir hemşire 4 günde bir, bir doktor ise 6 günde bir nöbet tutmaktadır. İkisi birlikte ilk nöbetlerini Çarşamba günü tuttuklarına göre, birlikte 3. nöbetlerini hangi gün tutarlar?",
        ["Pazartesi", "Salı", "Çarşamba", "Cumartesi", "Pazar"],
        3,
        r"Birlikte nöbet periyodu $\text{EKOK}(4, 6) = 12$ gündür. 1. nöbet tutulmuştur, 3. nöbet için 2 periyot ($2 \cdot 12 = 24$ gün) geçmelidir. $24 = 7 \cdot 3 + 3$ (kalan 3). Çarşamba gününe 3 gün eklenirse Cumartesi olur.",
        r"1. nöbet tutulduğu için 3. nöbete kadar 2 periyot geçer.", "Zor", 20
    )

    # Soru 15 düzeltmesi:
    s_questions[14] = (
        r"Dört basamaklı $8a20$ sayısı hem 4 hem de 9 ile tam bölünebildiğine göre $a$ rakamı kaçtır?",
        ["4", "6", "8", "9", "0"],
        2,
        r"Son iki basamak $20$ olup 4'e tam bölünür. 9 ile tam bölünebilmesi için rakamlar toplamı 9'un katı olmalıdır: $8 + a + 2 + 0 = 10 + a$. Buradan $10 + a = 18 \implies a = 8$ bulunur.",
        r"Rakamları toplayıp 9'un katına eşitle.", "Kolay", 10
    )

    # Soru 26 şık düzeltmesi:
    s_questions[25] = (
        r"3 basamaklı $2ab$ sayısı 15 ile tam bölünebilmektedir. Buna göre $a$'nın alabileceği kaç farklı değer vardır?",
        ["3", "4", "5", "6", "7"],
        3,
        r"$15 = 3 \cdot 5$. $b = 0$ iken $2a0 \implies 2+a$ 3'ün katı olmalı $\implies a \in \{1, 4, 7\}$ (3 değer). $b = 5$ iken $2a5 \implies 7+a$ 3'ün katı olmalı $\implies a \in \{2, 5, 8\}$ (3 değer). Toplam $3 + 3 = 6$ farklı değer alır.",
        r"15 ile bölünebilmesi için hem 3'e hem 5'e bölünmelidir.", "Orta", 15
    )

    for i, q in enumerate(s_questions):
        questions.append({
            "id": len(questions) + 1,
            "unitId": s_unit[0],
            "unitTitle": s_unit[1],
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
    qs = get_units_1_to_3()
    print("Units 1-3 questions generated:", len(qs))
