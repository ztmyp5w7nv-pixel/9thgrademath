// 9. SINIF MATEMATİK TÜM MÜFREDAT VE ÜSLÜ SAYILAR SORU BANKASI (269 SORU)
window.QUESTIONS_DATA = [
  {
    "id": 1,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "Aşağıdaki ifadelerden hangisi bir önerme bildirir?",
    "options": [
      "Bugün hava çok güzel.",
      "Ödevlerini bitirdin mi?",
      "Türkiye'nin başkenti Ankara'dır.",
      "Lütfen kapıyı kapat.",
      "Keşke tatile gitsek."
    ],
    "correctIndex": 2,
    "explanation": "Kesin bir hüküm (doğru veya yanlış) bildiren ifadelere önerme denir. 'Türkiye'nin başkenti Ankara'dır' kesin bir doğruluk değeri taşıyan doğru (1) bir önermedir. Diğerleri soru, istek veya duygu cümleleridir.",
    "hint": "Önermeler kesin doğru veya kesin yanlış bir yargı bildirmelidir; kişisel görüş, soru veya emir cümleleri önerme olamaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 2,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p: '(-3)^2 = -9'$ ve $q: 'En küçük asal sayı 2 dir.'$ önermeleri veriliyor. Buna göre $p$ ve $q$ önermelerinin doğruluk değerleri sırasıyla aşağıdakilerden hangisidir?",
    "options": [
      "1, 1",
      "1, 0",
      "0, 1",
      "0, 0",
      "Belirlenemez"
    ],
    "correctIndex": 2,
    "explanation": "$(-3)^2 = 9$ olduğundan $p$ önermesi yanlıştır ($p \\equiv 0$). En küçük asal sayı gerçekten 2'dir, dolayısıyla $q$ önermesi doğrudur ($q \\equiv 1$). Sırasıyla (0, 1) olur.",
    "hint": "Negatif sayının çift kuvveti parantez içindeyse pozitiftir. Asal sayılar 2'den başlar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 3,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "5 farklı önermenin birbirine göre en fazla kaç farklı doğruluk durumu vardır?",
    "options": [
      "10",
      "16",
      "25",
      "32",
      "64"
    ],
    "correctIndex": 3,
    "explanation": "$n$ tane farklı önermenin birbirine göre $2^n$ farklı doğruluk durumu vardır. Burada $n = 5$ olduğuna göre $2^5 = 32$ farklı durum bulunur.",
    "hint": "Her önermenin 2 durumu (1 veya 0) olduğu için çarpma kuralından $2^n$ formülü kullanılır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 4,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\equiv 1$ ve $q \\equiv 0$ olduğuna göre, $(p \\land q') \\lor (p' \\land q)$ bileşik önermesinin doğruluk değeri kaçtır?",
    "options": [
      "0",
      "1",
      "p'",
      "q",
      "Belirsiz"
    ],
    "correctIndex": 1,
    "explanation": "$q \\equiv 0 \\implies q' \\equiv 1$ ve $p \\equiv 1 \\implies p' \\equiv 0$ olur. Yerine yazarsak: $(1 \\land 1) \\lor (0 \\land 0) \\equiv 1 \\lor 0 \\equiv 1$ bulunur.",
    "hint": "Ve ($\\land$) işleminde her ikisi de 1 ise sonuç 1'dir. Veya ($\\lor$) işleminde en az biri 1 ise sonuç 1'dir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 5,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\lor q') \\equiv 0$ olduğuna göre, $p$ ve $q$ önermelerinin doğruluk değerleri sırasıyla nedir?",
    "options": [
      "1, 1",
      "1, 0",
      "0, 1",
      "0, 0",
      "0, belirlenemez"
    ],
    "correctIndex": 2,
    "explanation": "Veya ($\\lor$) bağlacının sonucu 0 ise her iki bileşen de 0 olmalıdır. Buradan $p \\equiv 0$ ve $q' \\equiv 0 \\implies q \\equiv 1$ elde edilir. Sırasıyla (0, 1) olur.",
    "hint": "$A \\lor B \\equiv 0$ ise ancak ve ancak $A \\equiv 0$ ve $B \\equiv 0$ olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 6,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\land q)'$ ifadesinin De Morgan kuralına göre dengi aşağıdakilerden hangisidir?",
    "options": [
      "$p' \\land q'$",
      "$p' \\lor q'$",
      "$p \\lor q'$",
      "$(p \\lor q)'$",
      "$p' \\land q$"
    ],
    "correctIndex": 1,
    "explanation": "De Morgan kuralına göre: $(p \\land q)' \\equiv p' \\lor q'$ şeklindedir. Parantez değili alınırken ve bağlacı veya bağlacına dönüşür.",
    "hint": "De Morgan kuralında parantez içindeki değiller dağıtılırken $\\land$ bağlacı $\\lor$'ya, $\\lor$ bağlacı $\\land$'ye dönüşür.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 7,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$[p \\lor (p \\land q)]$ bileşik önermesinin en sade şekli aşağıdakilerden hangisidir?",
    "options": [
      "1",
      "0",
      "p",
      "q",
      "p'"
    ],
    "correctIndex": 2,
    "explanation": "Soğurma (Yutma) kuralına göre $p \\lor (p \\land q) \\equiv p$ olur. Doğruluk tablosuyla da test edilirse: $p=1$ iken $1 \\lor (1 \\land q) = 1$; $p=0$ iken $0 \\lor (0 \\land q) = 0$ olup sonuç daima $p$'ye denktir.",
    "hint": "Soğurma (absorption) özelliğini hatırla: $p \\lor (p \\land q) \\equiv p$ ve $p \\land (p \\lor q) \\equiv p$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 8,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\implies q) \\equiv 0$ olduğuna göre, aşağıdaki bileşik önermelerden hangisinin doğruluk değeri 1'dir?",
    "options": [
      "$p \\land q$",
      "$p \\iff q$",
      "$p' \\lor q$",
      "$p \\lor q$",
      "$q \\implies p'$"
    ],
    "correctIndex": 3,
    "explanation": "Koşullu önermede $p \\implies q \\equiv 0$ yalnızca $1 \\implies 0$ durumunda mümkündür (100 kuralı). Yani $p \\equiv 1$ ve $q \\equiv 0$ olur. Seçenekleri denersek: D seçeneğinde $p \\lor q \\equiv 1 \\lor 0 \\equiv 1$ bulunur.",
    "hint": "İse ($\\implies$) bağlacında sonucun 0 olması tek bir durumda geçerlidir: 1 ise 0 denktir 0.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 9,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\implies q$ önermesinin karşıt tersi aşağıdakilerden hangisidir?",
    "options": [
      "$q \\implies p$",
      "$p' \\implies q'$",
      "$q' \\implies p'$",
      "$p' \\lor q$",
      "$q \\implies p'$"
    ],
    "correctIndex": 2,
    "explanation": "Bir $p \\implies q$ koşullu önermesinin; Karşıtı: $q \\implies p$, Tersi: $p' \\implies q'$, Karşıt Tersi: $q' \\implies p'$ dir. Ayrıca bir önerme karşıt tersine her zaman denktir.",
    "hint": "Karşıt ters için hem yerler değişir hem de değilleri alınır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 10,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\implies q)' \\lor p$ önermesinin en sade hali aşağıdakilerden hangisidir?",
    "options": [
      "0",
      "1",
      "p",
      "q",
      "p'"
    ],
    "correctIndex": 2,
    "explanation": "$p \\implies q \\equiv p' \\lor q$ olduğunu biliyoruz. Değili: $(p' \\lor q)' \\equiv p \\land q'$ olur. İfade: $(p \\land q') \\lor p$ haline gelir. Dağılma veya yutma kuralından bu ifade daima $p$'ye denktir.",
    "hint": "$p \\implies q \\equiv p' \\lor q$ kuralını kullan ve ardından De Morgan uygula.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 11,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "Aşağıdakilerden hangisi bir totolojidir (daima 1'e denktir)?",
    "options": [
      "$p \\land p'$",
      "$p \\underline{\\lor} p$",
      "$p \\lor p'$",
      "$p \\implies 0$",
      "$p \\iff p'$"
    ],
    "correctIndex": 2,
    "explanation": "$p \\lor p'$ ifadesinde $p$ ister 1 ister 0 olsun, bileşenlerden biri mutlaka 1 olacağından $1 \\lor 0 \\equiv 1$ olur. Her durumda 1 olan önermelere totoloji denir.",
    "hint": "Totoloji her zaman doğru (1), çelişki her zaman yanlış (0) çıkan önermedir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 12,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\underline{\\lor} q$ (Ya da) bağlacı hakkında aşağıdakilerden hangisi yanlıştır?",
    "options": [
      "$1 \\underline{\\lor} 0 \\equiv 1$",
      "$0 \\underline{\\lor} 1 \\equiv 1$",
      "$1 \\underline{\\lor} 1 \\equiv 0$",
      "$0 \\underline{\\lor} 0 \\equiv 0$",
      "$p \\underline{\\lor} p \\equiv 1$"
    ],
    "correctIndex": 4,
    "explanation": "Ya da ($\\underline{\\lor}$) bağlacında bileşenlerin doğruluk değerleri farklı iken 1, aynı iken 0 olur. Dolayısıyla $p \\underline{\\lor} p \\equiv 0$ olmalıdır, 1 olamaz.",
    "hint": "Ya da bağlacı 'biri veya diğeri ama ikisi birden değil' anlamına gelir; ikisi aynıysa sonuç 0'dır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 13,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\iff q$ iki yönlü koşullu önermesi aşağıdakilerden hangisine denktir?",
    "options": [
      "$(p \\implies q) \\lor (q \\implies p)$",
      "$(p \\implies q) \\land (q \\implies p)$",
      "$p \\lor q$",
      "$p' \\land q'$",
      "$(p \\land q) \\lor (p' \\land q)$"
    ],
    "correctIndex": 1,
    "explanation": "Ancak ve ancak ($\\iff$) bağlacı çift yönlü gerektirmedir: $p \\iff q \\equiv (p \\implies q) \\land (q \\implies p)$ şeklindedir.",
    "hint": "İki yönlü koşullu önerme, her iki yöndeki 'ise' önermelerinin 've' ile bağlanmasıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 14,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$' \\forall x \\in \\mathbb{R}, x^2 \\ge 0 '$ açık önermesinin olumsuzu (değili) aşağıdakilerden hangisidir?",
    "options": [
      "$\\forall x \\in \\mathbb{R}, x^2 < 0$",
      "$\\exists x \\in \\mathbb{R}, x^2 < 0$",
      "$\\exists x \\in \\mathbb{R}, x^2 \\le 0$",
      "$\\forall x \\in \\mathbb{R}, x^2 \\le 0$",
      "$\\exists x \\in \\mathbb{R}, x^2 > 0$"
    ],
    "correctIndex": 1,
    "explanation": "$\\forall$ (her) niceleyicisinin olumsuzu $\\exists$ (en az bir) olur. $\\ge$ sembolünün olumsuzu ise kesin küçüktür ($<$) sembolüdür. Dolayısıyla değili: $\\exists x \\in \\mathbb{R}, x^2 < 0$ olur.",
    "hint": "Her ($\\forall$) değili $\\exists$, $\\ge$ sembolünün değili $<$ olur.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 15,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p(x): 'x \\in \\mathbb{Z}, 2x + 1 = 9'$ açık önermesinin doğruluk kümesi aşağıdakilerden hangisidir?",
    "options": [
      "$\\{-4\\}$",
      "$\\{4\\}$",
      "$\\{5\\}$",
      "$\\{3, 4\\}$",
      "$\\emptyset$"
    ],
    "correctIndex": 1,
    "explanation": "$2x + 1 = 9 \\implies 2x = 8 \\implies x = 4$. $4 \\in \\mathbb{Z}$ olduğundan doğruluk kümesi tek elemanlı $\\{4\\}$ kümesidir.",
    "hint": "Denklemi çözüp çıkan kökün belirtilen sayı kümesinde (tam sayılar) olup olmadığını kontrol et.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 16,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$[(p \\implies q) \\land p] \\implies q$ önermesi için aşağıdakilerden hangisi daima doğrudur?",
    "options": [
      "Çelişkidir",
      "Totolojidir",
      "p önermesine denktir",
      "q önermesine denktir",
      "Doğruluk değeri p ve q'ya göre değişir"
    ],
    "correctIndex": 1,
    "explanation": "Modus Ponens kuralıdır: $(p \\implies q) \\land p \\equiv (p' \\lor q) \\land p \\equiv (p \\land p') \\lor (p \\land q) \\equiv 0 \\lor (p \\land q) \\equiv p \\land q$. İfade $(p \\land q) \\implies q \\equiv (p \\land q)' \\lor q \\equiv p' \\lor q' \\lor q \\equiv p' \\lor 1 \\equiv 1$ çıkar. Daima 1'dir, yani totolojidir.",
    "hint": "Önermeyi 'veya' biçimine dönüştürüp sadeleştirmeyi dene.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 17,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\equiv 1, q \\equiv 0, r \\equiv 1$ olduğuna göre, $(p \\land q') \\implies (q \\lor r')$ ifadesinin doğruluk değeri kaçtır?",
    "options": [
      "0",
      "1",
      "Belirlenemez",
      "r",
      "p'"
    ],
    "correctIndex": 0,
    "explanation": "Sol taraf: $p \\land q' = 1 \\land 1 = 1$. Sağ taraf: $q \\lor r' = 0 \\lor 0 = 0$. Böylece $1 \\implies 0 \\equiv 0$ elde edilir.",
    "hint": "1 ise 0 denktir 0 kuralını hatırla.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 18,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\implies (q \\lor r) \\equiv 0$ olduğuna göre, $p, q, r$ önermelerinin doğruluk değerleri sırasıyla nedir?",
    "options": [
      "1, 0, 0",
      "1, 1, 0",
      "0, 1, 1",
      "1, 0, 1",
      "0, 0, 0"
    ],
    "correctIndex": 0,
    "explanation": "İse önermesi 0 ise sol taraf 1, sağ taraf 0 olmalıdır. Buradan $p \\equiv 1$ ve $q \\lor r \\equiv 0$ çıkar. Veya 0 ise her ikisi de 0 olmalıdır, yani $q \\equiv 0$ ve $r \\equiv 0$. Sırasıyla (1, 0, 0) olur.",
    "hint": "Sol taraf 1 ve sağ taraf 0 olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 19,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\lor q)' \\land p$ ifadesinin en sade hali nedir?",
    "options": [
      "0",
      "1",
      "p",
      "q",
      "p'"
    ],
    "correctIndex": 0,
    "explanation": "$(p \\lor q)' \\equiv p' \\land q'$ olur. İfade $(p' \\land q') \\land p \\equiv (p' \\land p) \\land q' \\equiv 0 \\land q' \\equiv 0$ çıkar.",
    "hint": "De Morgan uygulayıp $p' \\land p \\equiv 0$ özelliğini kullan.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 20,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "Aşağıdaki önermelerden hangisinin doğruluk değeri 0'dır?",
    "options": [
      "$\\exists x \\in \\mathbb{N}, x - 5 = 0$",
      "$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$",
      "$\\exists x \\in \\mathbb{Z}, x^2 = 2$",
      "$\\forall x \\in \\mathbb{N}, x + 1 > 0$",
      "$\\exists x \\in \\mathbb{Q}, 2x = 3$"
    ],
    "correctIndex": 2,
    "explanation": "$\\mathbb{Z}$ tam sayılar kümesidir. Karesi 2 olan bir tam sayı ($x^2 = 2 \\implies x = \\pm\\sqrt{2}$) yoktur, çünkü $\\sqrt{2}$ bir irrasyonel sayıdır. Dolayısıyla bu önerme yanlıştır ($0$).",
    "hint": "Karesi 2 olan sayılar $\\sqrt{2}$ ve $-\\sqrt{2}$'dir, bunlar tam sayı mıdır?",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 21,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$'x = 3 \\implies x^2 = 9'$ önermesinin tersi aşağıdakilerden hangisidir?",
    "options": [
      "$x^2 = 9 \\implies x = 3$",
      "$x \\neq 3 \\implies x^2 \\neq 9$",
      "$x^2 \\neq 9 \\implies x \\neq 3$",
      "$x = 3 \\land x^2 \\neq 9$",
      "$x \\neq 3 \\implies x^2 = 9$"
    ],
    "correctIndex": 1,
    "explanation": "$p \\implies q$ önermesinin tersi $p' \\implies q'$ önermesidir. $p: x = 3$ ise $p': x \\neq 3$ ve $q: x^2 = 9$ ise $q': x^2 \\neq 9$ olur. Dolayısıyla tersi $x \\neq 3 \\implies x^2 \\neq 9$ dur.",
    "hint": "Tersini alırken hipotez ve hükmün sadece değilleri alınır, yerleri değiştirilmez.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 22,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\land q) \\implies (p \\lor q)$ koşullu önermesinin en sade dengi nedir?",
    "options": [
      "1",
      "0",
      "p",
      "q",
      "p'"
    ],
    "correctIndex": 0,
    "explanation": "$A \\implies B \\equiv A' \\lor B$ dir. Buradan $(p \\land q)' \\lor (p \\lor q) \\equiv (p' \\lor q') \\lor (p \\lor q) \\equiv (p' \\lor p) \\lor (q' \\lor q) \\equiv 1 \\lor 1 \\equiv 1$ çıkar. Yani daima 1'dir.",
    "hint": "İse bağlacını veya bağlacına çevirip birleşme özelliğini kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 23,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "Aşağıdaki teorem ispat yöntemlerinden hangisi doğrudan (direkt) ispat yöntemidir?",
    "options": [
      "Çelişki yöntemi",
      "Karşıt ters yöntemi",
      "Doğrudan ispat",
      "Aksine örnek verme yöntemi",
      "Olmayana ergi yöntemi"
    ],
    "correctIndex": 2,
    "explanation": "Matematikte doğrudan ispat, hipotezin doğru olduğu kabul edilip mantık kuralları ve aksiyomlar adım adım uygulanarak hükme ulaşılan yöntemdir. Çelişki, karşıt ters ve olmayana ergi dolaylı ispat yöntemleridir.",
    "hint": "Hipotezden yola çıkıp doğrudan hükme varılan yöntemin adı kendi içinde saklıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 24,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$p \\implies p'$ ifadesinin en sade dengi aşağıdakilerden hangisidir?",
    "options": [
      "1",
      "0",
      "p",
      "p'",
      "q"
    ],
    "correctIndex": 3,
    "explanation": "$p \\implies p' \\equiv p' \\lor p' \\equiv p'$ olur. Dolayısıyla ifadenin dengi $p'$ dir.",
    "hint": "$a \\implies b \\equiv a' \\lor b$ kuralını uygula.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 25,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$(p \\lor q') \\land p' \\equiv 1$ olduğuna göre, $p$ ve $q$ değerleri nedir?",
    "options": [
      "p=0, q=0",
      "p=0, q=1",
      "p=1, q=0",
      "p=1, q=1",
      "Belirlenemez"
    ],
    "correctIndex": 0,
    "explanation": "Ve ($\\land$) sonucu 1 ise her iki parça da 1 olmalıdır: $p' \\equiv 1 \\implies p \\equiv 0$. Sol taraf: $(p \\lor q') \\equiv 1 \\implies (0 \\lor q') \\equiv 1 \\implies q' \\equiv 1 \\implies q \\equiv 0$. Buradan $p=0, q=0$ elde edilir.",
    "hint": "Ve bağlacının 1 olması için sağdaki $p'$ de 1 olmalıdır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 26,
    "unitId": "mantik",
    "unitTitle": "Mantık",
    "question": "$'Her tam sayının karesi pozitiftir.'$ önermesini çürüten karşıt örnek aşağıdakilerden hangisidir?",
    "options": [
      "x = -2",
      "x = 1",
      "x = 0",
      "x = 3",
      "x = -1"
    ],
    "correctIndex": 2,
    "explanation": "$0$ bir tam sayıdır ve $0^2 = 0$ dır. Sıfır pozitif bir sayı olmadığından (nötrdür), 'her tam sayının karesi pozitiftir' iddiasını çürüten karşıt örnek $x = 0$ dır.",
    "hint": "Sıfırın pozitif mi yoksa nötr mü olduğunu hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 27,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{x \\mid -2 \\le x < 3, x \\in \\mathbb{Z}\\}$ kümesinin eleman sayısı $s(A)$ kaçtır?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "Kümeyi liste biçiminde yazalım: $A = \\{-2, -1, 0, 1, 2\\}$. Görüldüğü gibi 5 tane tam sayı elemanı vardır. $s(A) = 5$.",
    "hint": "Aralıktaki tam sayıları tek tek listele: -2 dahil, 3 dahil değil.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 28,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{a, b, \\{c\\}, \\{d, e\\}\\}$ kümesi için aşağıdakilerden hangisi yanlıştır?",
    "options": [
      "$s(A) = 4$",
      "$b \\in A$",
      "$\\{c\\} \\in A$",
      "$d \\in A$",
      "$\\{a, b\\} \\subseteq A$"
    ],
    "correctIndex": 3,
    "explanation": "$A$ kümesinin elemanları $a$, $b$, $\\{c\\}$ ve $\\{d, e\\}$ dir. $d$ tek başına $A$'nın bir elemanı değildir; $A$'nın elemanı $\\{d, e\\}$ kümesidir. Dolayısıyla $d \\in A$ ifadesi yanlıştır.",
    "hint": "Küme parantezi içindeki kümeler bütün birer eleman olarak sayılır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 29,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "Eleman sayısı 6 olan bir kümenin alt küme sayısı kaçtır?",
    "options": [
      "12",
      "32",
      "64",
      "128",
      "256"
    ],
    "correctIndex": 2,
    "explanation": "$n$ elemanlı bir kümenin alt küme sayısı $2^n$ dir. $n = 6$ için $2^6 = 64$ alt kümesi vardır.",
    "hint": "Alt küme sayısı $2^n$ formülü ile hesaplanır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 30,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "Öz alt küme sayısı 127 olan bir kümenin eleman sayısı kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "Öz alt küme sayısı $2^n - 1$ formülü ile bulunur. $2^n - 1 = 127 \\implies 2^n = 128 \\implies 2^7 = 128$, yani $n = 7$ dir.",
    "hint": "Öz alt küme sayısı, kendisi hariç tüm alt kümeleridir ($2^n - 1$).",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 31,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{1, 2, 3, 4, 5, 6\\}$ kümesinin alt kümelerinin kaç tanesinde $2$ elemanı bulunur?",
    "options": [
      "16",
      "32",
      "64",
      "8",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Bir elemanın mutlaka bulunması isteniyorsa, o eleman cebe konur ve kalan $6 - 1 = 5$ elemanla oluşturulabilecek alt küme sayısı hesaplanır: $2^5 = 32$ tanesinde 2 elemanı bulunur.",
    "hint": "İstenen elemanı bir kenara ayır, kalan elemanlarla alt küme oluştur.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 32,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{a, b, c, d, e\\}$ kümesinin alt kümelerinin kaç tanesinde $a$ bulunur ama $b$ bulunmaz?",
    "options": [
      "4",
      "8",
      "16",
      "32",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "$a$ kümede bulunacak, $b$ ise bulunmayacaktır. Her iki elemanı da kümeden çıkarırız: Kalan elemanlar $\\{c, d, e\\}$ olup 3 tanedir. $2^3 = 8$ farklı alt küme yazılabilir.",
    "hint": "Hem 'bulunur' hem 'bulunmaz' denilen elemanlar dışarı alınır, kalan eleman sayısı ile $2^k$ hesaplanır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 33,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$s(A) = 8$, $s(B) = 6$ ve $s(A \\cap B) = 3$ olduğuna göre, $s(A \\cup B)$ kaçtır?",
    "options": [
      "11",
      "14",
      "17",
      "9",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Birleşim formülü: $s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$. Sayıları yerine koyarsak: $s(A \\cup B) = 8 + 6 - 3 = 11$ bulunur.",
    "hint": "$s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$ kuralını hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 34,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A \\setminus B$ kümesi aşağıdakilerden hangisine eşittir?",
    "options": [
      "$A \\cap B'$",
      "$A' \\cap B$",
      "$A \\cup B'$",
      "$(A \\cap B)'$",
      "$A' \\cup B$"
    ],
    "correctIndex": 0,
    "explanation": "Kümeler teorisinde fark işlemi: $A \\setminus B = A \\cap B'$ olarak ifade edilir. Yani $A$'da olan ve $B$'de olmayan elemanlar.",
    "hint": "Fark işleminin tümleyen ile kesişim karşılığı $A \\cap B'$ dir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 35,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$E$ evrensel küme olmak üzere, $s(A) + s(A') = 14$ ve $s(B') = 5$ ise $s(B)$ kaçtır?",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "Bir küme ile tümleyeninin eleman sayıları toplamı evrensel kümenin eleman sayısını verir: $s(E) = s(A) + s(A') = 14$. Buradan $s(E) = s(B) + s(B') = 14 \\implies s(B) + 5 = 14 \\implies s(B) = 9$ bulunur.",
    "hint": "$s(A) + s(A') = s(E)$ bağıntısını kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 36,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$(A \\cup B)'$ kümesinin De Morgan dengi aşağıdakilerden hangisidir?",
    "options": [
      "$A' \\cap B'$",
      "$A' \\cup B'$",
      "$A \\cap B'$",
      "$A' \\cap B$",
      "$E \\setminus A$"
    ],
    "correctIndex": 0,
    "explanation": "Kümelerde De Morgan kuralı: $(A \\cup B)' = A' \\cap B'$ ve $(A \\cap B)' = A' \\cup B'$ dir.",
    "hint": "Birleşimin tümleyeni, tümleyenlerin kesişimidir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 37,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "35 kişilik bir sınıfta 20 kişi İngilizce, 15 kişi Almanca bilmektedir. 5 kişi her iki dili de bildiğine göre, bu dillerden hiçbirini bilmeyen kaç kişi vardır?",
    "options": [
      "3",
      "5",
      "7",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "En az bir dil bilenler: $s(\\text{İng} \\cup \\text{Alm}) = 20 + 15 - 5 = 30$ kişi. Sınıf mevcudu 35 kişi olduğuna göre hiçbirini bilmeyenler: $35 - 30 = 5$ kişidir.",
    "hint": "Önce birleşimi bul ($s(A) + s(B) - s(A \\cap B)$), sonra toplam mevcuttan çıkar.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 38,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{1, 2, 3\\}$ ve $B = \\{a, b\\}$ olduğuna göre, $A \\times B$ kartezyen çarpım kümesinin eleman sayısı $s(A \\times B)$ kaçtır?",
    "options": [
      "5",
      "6",
      "8",
      "9",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Kartezyen çarpımın eleman sayısı: $s(A \\times B) = s(A) \\cdot s(B) = 3 \\cdot 2 = 6$ dır.",
    "hint": "Kartezyen çarpımın eleman sayısı, kümelerin eleman sayılarının çarpımıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 39,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$s(A \\times B) = 24$ ve $s(B \\times C) = 32$ olduğuna göre, $s(B)$ en fazla kaç olabilir?",
    "options": [
      "4",
      "6",
      "8",
      "12",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "$s(B)$, hem 24'ün hem de 32'nin bir böleni olmalıdır. $s(B)$'nin en büyük değeri $\\text{EBOB}(24, 32)$ ile bulunur. $\\text{EBOB}(24, 32) = 8$ dir.",
    "hint": "B kümesinin eleman sayısı her iki sayının da ortak böleni olmalıdır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 40,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A \\subseteq B$ olduğuna göre, aşağıdakilerden hangisi daima doğrudur?",
    "options": [
      "$A \\cap B = B$",
      "$A \\cup B = A$",
      "$A \\setminus B = \\emptyset$",
      "$A' \\subseteq B'$",
      "$s(A) > s(B)$"
    ],
    "correctIndex": 2,
    "explanation": "$A$, $B$'nin bir alt kümesi ise $A$'nın tüm elemanları $B$'nin de elemanıdır. Dolayısıyla $A$'da olup $B$'de olmayan hiçbir eleman bulunmaz: $A \\setminus B = \\emptyset$ dir.",
    "hint": "$A$ tamamen $B$'nin içinde olduğuna göre $A$'dan $B$'yi çıkartırsan geriye ne kalır?",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 41,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{x \\mid x < 100, x = 3k, k \\in \\mathbb{N}^+\\}$ kümesinin eleman sayısı kaçtır?",
    "options": [
      "32",
      "33",
      "34",
      "35",
      "36"
    ],
    "correctIndex": 1,
    "explanation": "$x$ değerleri 3, 6, 9, ..., 99'dur. Terim sayısı formülü: $\\frac{\\text{Son Terim} - \\text{İlk Terim}}{\\text{Artış Miktarı}} + 1 = \\frac{99 - 3}{3} + 1 = \\frac{96}{3} + 1 = 32 + 1 = 33$ bulunur.",
    "hint": "Pozitif doğal sayılar 1'den başlar, $k=1, 2, \\dots$ için $3k < 100$ olacak en büyük $k$'yı bul.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 42,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A$ ve $B$ ayrık iki kümedir. $s(A) = 7$ ve $s(B) = 5$ olduğuna göre, $s(A \\cup B)$ kaçtır?",
    "options": [
      "2",
      "10",
      "12",
      "35",
      "Belirlenemez"
    ],
    "correctIndex": 2,
    "explanation": "Ayrık kümelerin ortak elemanı yoktur, yani $A \\cap B = \\emptyset \\implies s(A \\cap B) = 0$. Dolayısıyla $s(A \\cup B) = s(A) + s(B) = 7 + 5 = 12$ olur.",
    "hint": "Ayrık kümelerin kesişimi boştur.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 43,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A$ kümesinin alt küme sayısı ile öz alt küme sayısının toplamı 63 olduğuna göre, $s(A)$ kaçtır?",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 1,
    "explanation": "$2^n + (2^n - 1) = 63 \\implies 2 \\cdot 2^n - 1 = 63 \\implies 2^{n+1} = 64 \\implies 2^6 = 64 \\implies n + 1 = 6 \\implies n = 5$ bulunur.",
    "hint": "Alt küme sayısı $2^n$, öz alt küme sayısı $2^n - 1$ dir. İkisini topla.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 44,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$s(A \\setminus B) = 5$, $s(B \\setminus A) = 4$ ve $s(A \\cup B) = 12$ olduğuna göre, $s(A \\cap B)$ kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "explanation": "Birleşim formülü: $s(A \\cup B) = s(A \\setminus B) + s(B \\setminus A) + s(A \\cap B)$ dir. Değerleri yazarsak: $12 = 5 + 4 + s(A \\cap B) \\implies 12 = 9 + s(A \\cap B) \\implies s(A \\cap B) = 3$ olur.",
    "hint": "Venn şemasındaki üç ayrık bölgenin toplamı birleşime eşittir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 45,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{1, 2\\}$ ve $B = \\{2, 3, 4\\}$ kümeleri için $(A \\times B) \\cap (A \\times A)$ kümesinin eleman sayısı kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "6",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "$(A \\times B) \\cap (A \\times A) = A \\times (B \\cap A)$ dağılma özelliğidir. $B \\cap A = \\{2\\}$ olup eleman sayısı 1'dir. $s(A) = 2$ olduğuna göre, eleman sayısı $s(A) \\cdot s(B \\cap A) = 2 \\cdot 1 = 2$ bulunur.",
    "hint": "Kartezyen çarpımın kesişim üzerine dağılma özelliğini kullan.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 46,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "Futbol veya voleybol oynayanlardan oluşan bir grupta, futbol oynayanların sayısı voleybol oynayanların sayısının 2 katıdır. Her iki sporu da yapan 4 kişi, sadece futbol oynayan 12 kişi olduğuna göre grupta kaç kişi vardır?",
    "options": [
      "18",
      "20",
      "22",
      "24",
      "26"
    ],
    "correctIndex": 1,
    "explanation": "Futbol oynayanlar: Sadece futbol + Her ikisi = $12 + 4 = 16$ kişi. Futbol oynayanlar voleybolun 2 katı olduğuna göre voleybol oynayanlar $16 / 2 = 8$ kişidir. Voleybol oynayan 8 kişinin 4'ü her ikisini oynadığına göre sadece voleybol oynayan $8 - 4 = 4$ kişidir. Toplam grup mevcudu: $12 (\\text{sadece F}) + 4 (\\text{her ikisi}) + 4 (\\text{sadece V}) = 20$ kişi.",
    "hint": "Venn şeması çizerek bilinen sayıları bölgelere yerleştir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 47,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{x \\mid x^2 < 17, x \\in \\mathbb{Z}\\}$ kümesinin en çok 2 elemanlı alt küme sayısı kaçtır?",
    "options": [
      "9",
      "37",
      "46",
      "72",
      "128"
    ],
    "correctIndex": 1,
    "explanation": "$x^2 < 17$ eşitsizliğini sağlayan tam sayılar: $-4, -3, -2, -1, 0, 1, 2, 3, 4$ olup toplam 9 elemandır ($s(A) = 9$). En çok 2 elemanlı alt kümeler: 0 elemanlı: $\\binom{9}{0} = 1$, 1 elemanlı: $\\binom{9}{1} = 9$, 2 elemanlı: $\\binom{9}{2} = \\frac{9 \\cdot 8}{2} = 36$. Toplam: $1 + 9 + 36 = 46$ bulunur.",
    "hint": "En çok 2 elemanlı demek; 0, 1 veya 2 elemanlı alt kümeler demektir.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 48,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A \\cap B = A$ olması aşağıdakilerden hangisini gerektirir?",
    "options": [
      "$A = B$",
      "$A \\subseteq B$",
      "$B \\subseteq A$",
      "$A \\cap B = \\emptyset$",
      "$A = \\emptyset$"
    ],
    "correctIndex": 1,
    "explanation": "İki kümenin kesişimi $A$'ya eşitse, $A$'nın tüm elemanları aynı zamanda $B$'nin de içinde yer almaktadır. Bu da $A \\subseteq B$ ($A$, $B$'nin alt kümesidir) anlamına gelir.",
    "hint": "Kesişim küçük kümeye eşit çıkıyorsa o küme diğerinin alt kümesidir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 49,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$(A \\setminus B) \\cup (A \\cap B)$ birleşimi aşağıdakilerden hangisine daima eşittir?",
    "options": [
      "$B$",
      "$A$",
      "$A \\cup B$",
      "$A'$",
      "$\\emptyset$"
    ],
    "correctIndex": 1,
    "explanation": "Venn şemasını düşünürsek: $A \\setminus B$ sadece $A$'ya ait olan bölgedir, $A \\cap B$ ise $A$ ile $B$'nin ortak bölgesidir. Bu iki ayrık bölgenin birleşimi doğrudan $A$ kümesini oluşturur.",
    "hint": "Venn şemasında 'sadece A' ile 'kesişim' alanlarını birleştirdiğinde hangi küme oluşur?",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 50,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$s(A) = 4$ olduğuna göre, $A$ kümesinin en az 1 elemanlı alt küme sayısı kaçtır?",
    "options": [
      "14",
      "15",
      "16",
      "17",
      "31"
    ],
    "correctIndex": 1,
    "explanation": "Tüm alt kümelerin sayısı $2^4 = 16$ dır. En az 1 elemanlı demek, 0 elemanlı olan boş kümenin hariç tutulması demektir: $16 - 1 = 15$ tane en az bir elemanlı alt kümesi vardır.",
    "hint": "Tüm alt kümelerden boş kümeyi (0 elemanlı alt kümeyi) çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 51,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5\\}$ ve $C = \\{1, 5, 6\\}$ olduğuna göre, $(A \\setminus B) \\cup (B \\setminus C)$ kümesi nedir?",
    "options": [
      "$\\{1, 2, 3, 4\\}$",
      "$\\{1, 2, 3\\}$",
      "$\\{1, 2, 4\\}$",
      "$\\{1, 2, 3, 4, 5\\}$",
      "$\\{2, 3, 4\\}$"
    ],
    "correctIndex": 0,
    "explanation": "$A \\setminus B = \\{1, 2\\}$ dir. $B \\setminus C = \\{3, 4\\}$ dir. Birleşimleri: $\\{1, 2\\} \\cup \\{3, 4\\} = \\{1, 2, 3, 4\\}$ olur.",
    "hint": "Önce her iki fark kümesinin elemanlarını bul, ardından birleştir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 52,
    "unitId": "kumeler",
    "unitTitle": "Kümeler",
    "question": "$A$ ve $B$ kümeleri için $s(A) = 2 \\cdot s(B)$, $s(A \\cap B) = 3$ ve $s(A \\cup B) = 18$ olduğuna göre, $s(A)$ kaçtır?",
    "options": [
      "10",
      "12",
      "14",
      "16",
      "18"
    ],
    "correctIndex": 2,
    "explanation": "$s(A \\cup B) = s(A) + s(B) - s(A \\cap B) \\implies 18 = 2x + x - 3 \\implies 3x - 3 = 18 \\implies 3x = 21 \\implies x = 7$. Buradan $s(A) = 2x = 14$ bulunur.",
    "hint": "$s(B) = x$ ve $s(A) = 2x$ deyip birleşim formülünde yerine koy.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 53,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Aşağıdaki sayılardan hangisi bir irrasyonel ($\\mathbb{Q}'$) sayıdır?",
    "options": [
      "$\\frac{3}{5}$",
      "$-7$",
      "$\\sqrt{16}$",
      "$\\sqrt{7}$",
      "$0{,}333\\dots$"
    ],
    "correctIndex": 3,
    "explanation": "$\\sqrt{16} = 4$ olup rasyoneldir. $0{,}333\\dots = 1/3$ devirli rasyoneldir. Ancak $\\sqrt{7}$ tam kare olmadığından kök dışına çıkamaz ve virgülden sonrası düzensiz sonsuza gider, dolayısıyla irrasyonel bir sayıdır.",
    "hint": "Kök dışına tam olarak çıkamayan sayılar irrasyoneldir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 54,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Dört basamaklı $4a72$ sayısı 3 ile tam bölünebildiğine göre, $a$'nın alabileceği farklı değerlerin toplamı kaçtır?",
    "options": [
      "12",
      "15",
      "18",
      "21",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "3 ile bölünebilme kuralı: Rakamları toplamı 3'ün katı olmalıdır. $4 + a + 7 + 2 = 13 + a$. $13 + a$ ifadesinin 3'ün katı olması için $a \\in \\{2, 5, 8\\}$ olabilir. Toplamları: $2 + 5 + 8 = 15$ bulunur.",
    "hint": "Rakamları topla ve 3'ün katı yapacak rakamları belirle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 55,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Beş basamaklı $73x4y$ sayısı 10 ile bölündüğünde 6 kalanını vermektedir. Bu sayı 9 ile tam bölündüğüne göre, $x$ kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "10 ile bölündüğünde 6 kalanını veriyorsa birler basamağı $y = 6$ dır. Sayı $73x46$ olur. 9 ile tam bölünebilmesi için rakamlar toplamı 9'un katı olmalıdır: $7 + 3 + x + 4 + 6 = 20 + x$. Buradan $20 + x = 27 \\implies x = 7$ bulunur.",
    "hint": "10 ile bölümünden kalan birler basamağını verir, ardından 9 ile bölünebilmeyi uygula.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 56,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Aralarında asal iki pozitif sayının EKOK'u 120'dir. Bu sayılardan biri 8 olduğuna göre, diğeri kaçtır?",
    "options": [
      "12",
      "15",
      "16",
      "20",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "Aralarında asal iki sayının EKOK'u bu sayıların çarpımına eşittir: $a \\cdot b = \\text{EKOK}(a, b) = 120$. Biri 8 olduğuna göre: $8 \\cdot b = 120 \\implies b = 15$ bulunur.",
    "hint": "Aralarında asal sayıların EBOB'u 1, EKOK'u ise çarpımlarıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 57,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$\\text{EBOB}(48, 72)$ ve $\\text{EKOK}(48, 72)$ değerleri sırasıyla aşağıdakilerden hangisidir?",
    "options": [
      "12, 144",
      "24, 144",
      "24, 288",
      "16, 144",
      "24, 216"
    ],
    "correctIndex": 1,
    "explanation": "Asal çarpanlarına ayıralım: $48 = 2^4 \\cdot 3^1$, $72 = 2^3 \\cdot 3^2$. $\\text{EBOB} = 2^3 \\cdot 3^1 = 24$. $\\text{EKOK} = 2^4 \\cdot 3^2 = 16 \\cdot 9 = 144$. Sırasıyla 24 ve 144 olur.",
    "hint": "EBOB ortak olanların en küçük üssü, EKOK ise tüm çarpanların en büyük üssüdür.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 58,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Boyutları $24\\text{ m}$ ve $36\\text{ m}$ olan dikdörtgen şeklindeki bir bahçenin etrafına ve köşelerine eşit aralıklarla fidan dikilecektir. En az kaç fidana ihtiyaç vardır?",
    "options": [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 1,
    "explanation": "Fidan sayısının en az olması için iki fidan arasındaki mesafe en büyük olmalıdır, yani $\\text{EBOB}(24, 36) = 12\\text{ m}$ dir. Çevre $= 2 \\cdot (24 + 36) = 120\\text{ m}$. Fidan sayısı $= \\text{Çevre} / \\text{EBOB} = 120 / 12 = 10$ fidan gerekir.",
    "hint": "Bütünden eşit parçalara giderken EBOB kullanılır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 59,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Bir limandaki üç gemi 6, 8 ve 12 günde bir sefere çıkmaktadır. Bu gemiler aynı gün sefere çıktıktan en az kaç gün sonra tekrar birlikte sefere çıkarlar?",
    "options": [
      "24",
      "36",
      "48",
      "60",
      "72"
    ],
    "correctIndex": 0,
    "explanation": "Birlikte tekrar sefere çıkacakları gün sayısı bu periyotların en küçük ortak katıdır: $\\text{EKOK}(6, 8, 12)$. $6 = 2 \\cdot 3$, $8 = 2^3$, $12 = 2^2 \\cdot 3$. $\\text{EKOK} = 2^3 \\cdot 3 = 24$ gün sonra tekrar birlikte çıkarlar.",
    "hint": "Parçadan bütüne veya tekrarlayan periyotlara giderken EKOK kullanılır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 60,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Bugün günlerden Salı olduğuna göre, 100 gün sonra hangi gün olur?",
    "options": [
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar"
    ],
    "correctIndex": 1,
    "explanation": "Günler 7 günde bir tekrar eder. 100'ü 7'ye böleriz: $100 = 7 \\cdot 14 + 2$, kalan 2'dir. Salı gününün üzerine 2 gün sayarız: Salı + 1 = Çarşamba, Salı + 2 = Perşembe.",
    "hint": "Günler haftalık periyotta (7 günde bir) tekrar eder, kalanı bulup say.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 61,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Dört basamaklı $5a4b$ sayısı 5 ve 9 ile tam bölünebilen rakamları farklı bir çift sayıdır. Buna göre $a$ kaçtır?",
    "options": [
      "0",
      "4",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 4,
    "explanation": "Çift ve 5'e bölündüğü için son basamak $b = 0$ dır. Sayı $5a40$ olur. 9'a bölünebilmesi için $5 + a + 4 + 0 = 9 + a$ ifadesi 9'un katı olmalıdır. $a = 0$ veya $a = 9$ olabilir. Rakamları farklı dendiği için $a=0$ olamaz (0 sonda var). Dolayısıyla $a = 9$ dur.",
    "hint": "Rakamları farklı kuralına dikkat et; son basamak 0 olduğu için a sıfır olamaz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 62,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Bir sepetteki güller dörder, beşer ve altışar sayıldığında her seferinde 2 gül artmaktadır. Sepetteki gül sayısı 100'den fazla olduğuna göre en az kaç gül vardır?",
    "options": [
      "120",
      "122",
      "124",
      "182",
      "242"
    ],
    "correctIndex": 1,
    "explanation": "Gül sayısı $G = \\text{EKOK}(4, 5, 6) \\cdot k + 2$ dir. $\\text{EKOK}(4, 5, 6) = 60$. $k = 2$ alırsak $G = 60 \\cdot 2 + 2 = 120 + 2 = 122$ gül olur (100'den fazla en küçük değer).",
    "hint": "Önce bölenlerin EKOK'unu bul, 100'ü geçecek katını alıp kalanı ekle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 63,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Aşağıdaki sayılardan hangisi aralarında asaldır?",
    "options": [
      "9 ile 15",
      "14 ile 21",
      "12 ile 35",
      "18 ile 27",
      "26 ile 39"
    ],
    "correctIndex": 2,
    "explanation": "Birden başka pozitif ortak böleni olmayan sayılara aralarında asal sayılar denir. $12 = 2^2 \\cdot 3$ ve $35 = 5 \\cdot 7$ sayılarının 1 dışında hiçbir ortak böleni yoktur ($\\text{EBOB}(12, 35) = 1$). Diğerlerinin ortak bölenleri vardır (3, 7, 9, 13).",
    "hint": "İki sayının 1'den başka hiçbir ortak böleni olmamalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 64,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Dört basamaklı $2x7y$ sayısının 4 ile bölümünden kalan 2 olduğuna göre, $y$ yerine kaç farklı tek rakam gelemez?",
    "options": [
      "Hiçbiri gelemez",
      "1",
      "3",
      "5",
      "Hepsi gelebilir"
    ],
    "correctIndex": 0,
    "explanation": "4 ile bölünebilme son iki basamağa bağlıdır. 4 ile bölündüğünde 2 kalanını veren sayılar daima çift sayılardır ($4k+2$ çifttir). Dolayısıyla $y$ hiçbir zaman tek rakam olamaz; tek sayıların 4 ile bölümünden kalan 1 veya 3 olur.",
    "hint": "4 ile tam bölünen veya 2 kalanı veren sayılar daima çift midir tek midir?",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 65,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "11 ile bölünebilme kuralına göre $6a341$ sayısının 11 ile tam bölünebilmesi için $a$ rakamı kaç olmalıdır?",
    "options": [
      "2",
      "4",
      "5",
      "6",
      "8"
    ],
    "correctIndex": 3,
    "explanation": "Sağdan sola $+ - + - +$ işaretleri konur: $+1 -4 +3 -a +6 = 10 - 4 - a = 6 - a$. Bu sonucun 11'in katı (yani 0) olması için $6 - a = 0 \\implies a = 6$ olmalıdır.",
    "hint": "Sağdan sola +, -, +, -, + koyup topla.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 66,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Bir hemşire 4 günde bir, bir doktor ise 6 günde bir nöbet tutmaktadır. İkisi birlikte ilk nöbetlerini Çarşamba günü tuttuklarına göre, birlikte 3. nöbetlerini hangi gün tutarlar?",
    "options": [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Cumartesi",
      "Pazar"
    ],
    "correctIndex": 3,
    "explanation": "Birlikte nöbet periyodu $\\text{EKOK}(4, 6) = 12$ gündür. 1. nöbet tutulmuştur, 3. nöbet için 2 periyot ($2 \\cdot 12 = 24$ gün) geçmelidir. $24 = 7 \\cdot 3 + 3$ (kalan 3). Çarşamba gününe 3 gün eklenirse Cumartesi olur.",
    "hint": "1. nöbet tutulduğu için 3. nöbete kadar 2 periyot geçer.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 67,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Dört basamaklı $8a20$ sayısı hem 4 hem de 9 ile tam bölünebildiğine göre $a$ rakamı kaçtır?",
    "options": [
      "4",
      "6",
      "8",
      "9",
      "0"
    ],
    "correctIndex": 2,
    "explanation": "Son iki basamak $20$ olup 4'e tam bölünür. 9 ile tam bölünebilmesi için rakamlar toplamı 9'un katı olmalıdır: $8 + a + 2 + 0 = 10 + a$. Buradan $10 + a = 18 \\implies a = 8$ bulunur.",
    "hint": "Rakamları toplayıp 9'un katına eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 68,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$x$ ve $y$ pozitif tam sayılardır. $\\text{EBOB}(x, y) = 6$ ve $x/y = 3/4$ olduğuna göre, $x + y$ toplamı kaçtır?",
    "options": [
      "36",
      "42",
      "48",
      "54",
      "60"
    ],
    "correctIndex": 1,
    "explanation": "$x/y = 3/4$ olduğuna göre aralarında asal katlar $3k$ ve $4k$ dır. Ortak bölen $\\text{EBOB}(3k, 4k) = k = 6$ dır. Buradan $x = 3 \\cdot 6 = 18$ ve $y = 4 \\cdot 6 = 24$ olur. Toplamları: $18 + 24 = 42$ bulunur.",
    "hint": "Oran $3/4$ ise sayıları $3k$ ve $4k$ olarak yaz, $k$ EBOB'a eşittir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 69,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$120$ sayısının pozitif tam sayı bölenlerinin sayısı kaçtır?",
    "options": [
      "12",
      "16",
      "18",
      "20",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "$120$ sayısını asal çarpanlarına ayıralım: $120 = 2^3 \\cdot 3^1 \\cdot 5^1$. Pozitif bölen sayısı, asal çarpanların üslerinin birer fazlasının çarpımıdır: $(3+1)(1+1)(1+1) = 4 \\cdot 2 \\cdot 2 = 16$ bulunur.",
    "hint": "Asal çarpanların kuvvetlerini 1 artırıp çarp.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 70,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Saat 14:00'ı gösterirken çalışan bir saat, 150 saat sonra kaçı gösterir?",
    "options": [
      "18:00",
      "20:00",
      "22:00",
      "08:00",
      "10:00"
    ],
    "correctIndex": 1,
    "explanation": "Saatler 24 saatte bir aynı saati gösterir. $150 = 24 \\cdot 6 + 6$, kalan 6 saattir. 14:00'a 6 saat eklersek: $14 + 6 = 20:00$ olur.",
    "hint": "Saat periyodu 24 saattir, 150'yi 24'e bölüp kalanı saate ekle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 71,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$a$ ve $b$ ardışık iki pozitif tam sayıdır. $\\text{EBOB}(a, b) + \\text{EKOK}(a, b) = 73$ olduğuna göre, $a + b$ kaçtır?",
    "options": [
      "15",
      "17",
      "19",
      "21",
      "23"
    ],
    "correctIndex": 1,
    "explanation": "Ardışık tam sayılar daima aralarında asaldır. Dolayısıyla $\\text{EBOB}(a, b) = 1$ ve $\\text{EKOK}(a, b) = a \\cdot b$ dir. $1 + a \\cdot b = 73 \\implies a \\cdot b = 72$. Çarpımları 72 olan ardışık sayılar 8 ve 9'dur. Toplamları: $8 + 9 = 17$ bulunur.",
    "hint": "Ardışık iki pozitif sayının EBOB'u 1'dir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 72,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "3 basamaklı $5a2$ sayısı 4 ile tam bölünebildiğine göre, $a$ yerine gelebilecek rakamların toplamı kaçtır?",
    "options": [
      "20",
      "25",
      "30",
      "15",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "4 ile bölünebilme için son iki basamak $a2$ sayısı 4'ün katı olmalıdır: $12, 32, 52, 72, 92$ olabilir. Dolayısıyla $a \\in \\{1, 3, 5, 7, 9\\}$. Rakamlar toplamı: $1 + 3 + 5 + 7 + 9 = 25$ bulunur.",
    "hint": "Son iki basamağı incele: Hangi onlar basamağı 2 ile bittiğinde 4'e bölünür?",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 73,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$\\text{EKOK}(a, b) = 60$ olan iki farklı doğal sayının toplamı en çok kaç olabilir?",
    "options": [
      "60",
      "90",
      "120",
      "150",
      "180"
    ],
    "correctIndex": 1,
    "explanation": "Toplamın en büyük olması için sayıların kendisi ve en büyük böleni seçilir: Birinci sayı 60, ikinci sayı ise 60'ın kendisinden farklı en büyük böleni olan $60 / 2 = 30$ seçilir. Toplam: $60 + 30 = 90$ olur.",
    "hint": "Farklı dendiği için biri EKOK'un kendisi, diğeri EKOK'un en büyük böleni alınır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 74,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "$\\frac{4x + 12}{x}$ ifadesini tam sayı yapan kaç farklı $x$ tam sayı değeri vardır?",
    "options": [
      "6",
      "8",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "İfadeyi parçalayalım: $\\frac{4x + 12}{x} = 4 + \\frac{12}{x}$. Bu ifadenin tam sayı olması için $x$'in 12'yi tam bölmesi gerekir. 12'nin tam sayı bölenleri: Pozitif bölenleri $12 = 2^2 \\cdot 3^1 \\implies (2+1)(1+1) = 6$ tane, negatif bölenleri de 6 tane olmak üzere toplam $6 + 6 = 12$ tanedir.",
    "hint": "Paydayı paya ayrı ayrı bölerek $4 + 12/x$ şeklinde yaz ve 12'nin pozitif/negatif bölenlerini say.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 75,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Aşağıdakilerden hangisi daima bir rasyonel sayıdır?",
    "options": [
      "İki irrasyonel sayının toplamı",
      "İki irrasyonel sayının çarpımı",
      "İki rasyonel sayının çarpımı",
      "Bir rasyonel ile bir irrasyonelin toplamı",
      "Bir irrasyonel sayının karesi"
    ],
    "correctIndex": 2,
    "explanation": "İki rasyonel sayının çarpımı daima bir rasyonel sayıdır ($\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd} \\in \\mathbb{Q}$). Diğerlerinde: $\\sqrt{2} + (-\\sqrt{2}) = 0$ rasyonel olabilirken $\\sqrt{2} + \\sqrt{3}$ irrasyoneldir; $\\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}$ irrasyoneldir; $\\pi^2$ irrasyoneldir.",
    "hint": "Rasyonel sayılar kümesi dört işlem altında kapalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 76,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Aralarında asal iki sayının çarpımı 70'tir. Bu iki sayının toplamı en az kaç olabilir?",
    "options": [
      "17",
      "19",
      "21",
      "37",
      "71"
    ],
    "correctIndex": 0,
    "explanation": "Çarpımları 70 olan aralarında asal sayı çiftleri: $(1, 70) \\implies 71$, $(2, 35) \\implies 37$, $(7, 10) \\implies 17$. Toplamın en küçük olması için sayılar birbirine en yakın seçilmelidir: $7 + 10 = 17$ dir.",
    "hint": "Toplamın en küçük olması için çarpanları birbirine mümkün olduğunca yakın seç.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 77,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "Bir $A$ sayısı 8 ile bölündüğünde kalan 5'tir. Buna göre $A^2 + 3A$ sayısının 8 ile bölümünden kalan kaçtır?",
    "options": [
      "0",
      "1",
      "4",
      "5",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Kalan aritmetiğinde $A$ yerine doğrudan kalanı yazabiliriz ($A = 5$): $A^2 + 3A \\implies 5^2 + 3(5) = 25 + 15 = 40$. 40 sayısı 8'e tam bölünür ($40 = 8 \\cdot 5 + 0$). Kalan 0 olur.",
    "hint": "İfadede sayı yerine doğrudan kalanı yazarak işlem yap.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 78,
    "unitId": "sayilar",
    "unitTitle": "Sayı Kümeleri & Bölünebilme",
    "question": "3 basamaklı $2ab$ sayısı 15 ile tam bölünebilmektedir. Buna göre $a$'nın alabileceği kaç farklı değer vardır?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "explanation": "$15 = 3 \\cdot 5$. $b = 0$ iken $2a0 \\implies 2+a$ 3'ün katı olmalı $\\implies a \\in \\{1, 4, 7\\}$ (3 değer). $b = 5$ iken $2a5 \\implies 7+a$ 3'ün katı olmalı $\\implies a \\in \\{2, 5, 8\\}$ (3 değer). Toplam $3 + 3 = 6$ farklı değer alır.",
    "hint": "15 ile bölünebilmesi için hem 3'e hem 5'e bölünmelidir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 79,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$3(2x - 1) - 2(x + 4) = 17$ denklemini sağlayan $x$ değeri kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "Parantezleri dağıtalım: $6x - 3 - 2x - 8 = 17 \\implies 4x - 11 = 17 \\implies 4x = 28 \\implies x = 7$ bulunur.",
    "hint": "Parantezleri dikkatlice aç ve benzer terimleri bir araya topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 80,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$\\frac{x + 2}{3} - \\frac{x - 1}{2} = 1$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{-1\\}$",
      "$\\{1\\}$",
      "$\\{5\\}$",
      "$\\{-5\\}$",
      "$\\{7\\}$"
    ],
    "correctIndex": 0,
    "explanation": "Paydaları 6'da eşitleyelim: $2(x + 2) - 3(x - 1) = 6 \\cdot 1 \\implies 2x + 4 - 3x + 3 = 6 \\implies -x + 7 = 6 \\implies -x = -1 \\implies x = 1$ değil, dikkat: $-x = -1 \\implies x = 1$. Tekrar kontrol edelim: $2(1+2)/3 - (1-1)/2 = 2 - 0 = 2 \\neq 1$. Hadi çözelim: $2(x+2) - 3(x-1) = 2x+4-3x+3 = -x+7$. $-x+7 = 6 \\implies -x = 6-7 = -1 \\implies x = 1$. $x=1$ için: $(1+2)/3 = 3/3 = 1$; $(1-1)/2 = 0$. $1 - 0 = 1$! Evet, $x = 1$. Çözüm kümesi $\\{1\\}$ dir.",
    "hint": "Paydaları eşitleyip ortak paydada topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 81,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$a x + 6 = 2x + b$ denkleminin çözüm kümesi tüm gerçek sayılar ($\\mathbb{R}$) olduğuna göre, $a + b$ kaçtır?",
    "options": [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 2,
    "explanation": "Birinci dereceden $Ax + B = 0$ denkleminin çözüm kümesi tüm reel sayılar ise hem $x$'in katsayısı hem sabit terim sıfır olmalıdır. $(a - 2)x + (6 - b) = 0 \\implies a - 2 = 0 \\implies a = 2$ ve $6 - b = 0 \\implies b = 6$ dır. Buradan $a + b = 2 + 6 = 8$ bulunur.",
    "hint": "Çözüm kümesi sonsuz elemanlıysa $0 \\cdot x = 0$ olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 82,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$(2m - 6)x + 5 = 0$ denkleminin çözüm kümesi boş küme ($\\emptyset$) olduğuna göre, $m$ kaçtır?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "Denklemde $x$'in katsayısı sıfır iken sabit sayı sıfırdan farklıysa denklem $0 \\cdot x = -5$ şeklini alır ve hiçbir $x$ değeri sağlamaz, yani çözüm kümesi boş küme olur. $2m - 6 = 0 \\implies 2m = 6 \\implies m = 3$ bulunur.",
    "hint": "Boş küme için $0 \\cdot x = k$ ($k \\neq 0$) durumu aranır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 83,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$3x - 5 \\le 2x + 4$ eşitsizliğinin gerçek sayılardaki çözüm aralığı aşağıdakilerden hangisidir?",
    "options": [
      "$(-\\infty, 9]$",
      "$(-\\infty, 9)$",
      "$[9, \\infty)$",
      "$(-9, 9)$",
      "$\\emptyset$"
    ],
    "correctIndex": 0,
    "explanation": "$x$'leri sol tarafa, sayıları sağ tarafa alalım: $3x - 2x \\le 4 + 5 \\implies x \\le 9$. Bu aralık $(-\\infty, 9]$ olarak gösterilir.",
    "hint": "Küçük eşit ($\\le$) işareti kapalı köşeli parantez gerektirir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 84,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$-3 < 2x + 1 \\le 7$ eşitsizliğini sağlayan $x$ tam sayılarının toplamı kaçtır?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "Her taraftan 1 çıkaralım: $-4 < 2x \\le 6$. Her tarafı 2'ye bölelim: $-2 < x \\le 3$. Bu aralıktaki tam sayılar: $-1, 0, 1, 2, 3$ tür. Toplamları: $(-1) + 0 + 1 + 2 + 3 = 5$ bulunur.",
    "hint": "Tüm taraflara aynı işlemleri uygula ve tam sayıları topla.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 85,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x \\in \\mathbb{R}$ olmak üzere, $-2 < x \\le 4$ olduğuna göre, $3 - 2x$ ifadesinin alabileceği en geniş değer aralığı nedir?",
    "options": [
      "$[-5, 7)$",
      "$(-5, 7]$",
      "$[-7, 5)$",
      "$(-7, 5]$",
      "$(-5, 5)$"
    ],
    "correctIndex": 0,
    "explanation": "Eşitsizliği $-2$ ile çarpalım (negatifle çarpınca eşitsizlik yön değiştirir): $(-2) \\cdot 4 \\le -2x < (-2) \\cdot (-2) \\implies -8 \\le -2x < 4$. Her tarafa 3 ekleyelim: $3 - 8 \\le 3 - 2x < 3 + 4 \\implies -5 \\le 3 - 2x < 7$. Yani $[-5, 7)$ aralığıdır.",
    "hint": "Negatif sayıyla çarparken eşitsizliğin yön değiştirdiğine dikkat et.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 86,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$2x + y = 11$ ve $x - y = 1$ denklem sisteminin çözüm ikilisi $(x, y)$ nedir?",
    "options": [
      "(4, 3)",
      "(3, 5)",
      "(5, 1)",
      "(4, 2)",
      "(2, 7)"
    ],
    "correctIndex": 0,
    "explanation": "İki denklemi taraf tarafa toplayalım: $(2x + y) + (x - y) = 11 + 1 \\implies 3x = 12 \\implies x = 4$. $x = 4$'ü yerine koyalım: $4 - y = 1 \\implies y = 3$. Çözüm $(4, 3)$ olur.",
    "hint": "Yok etme yöntemini kullan; taraf tarafa topladığında y'ler sadeleşir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 87,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$\\frac{1}{x} + \\frac{1}{y} = 5$ ve $\\frac{1}{x} - \\frac{1}{y} = 1$ olduğuna göre, $x \\cdot y$ çarpımı kaçtır?",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{8}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{4}$",
      "$6$"
    ],
    "correctIndex": 0,
    "explanation": "Taraf tarafa toplarsak: $\\frac{2}{x} = 6 \\implies \\frac{1}{x} = 3 \\implies x = \\frac{1}{3}$. Taraf tarafa çıkarırsak: $\\frac{2}{y} = 4 \\implies \\frac{1}{y} = 2 \\implies y = \\frac{1}{2}$. Çarpımları: $x \\cdot y = \\frac{1}{3} \\cdot \\frac{1}{2} = \\frac{1}{6}$ bulunur.",
    "hint": "Taraf tarafa toplayarak $1/x$ değerini bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 88,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x, y \\in \\mathbb{R}$ olmak üzere, $-3 < x < 4$ ve $-1 < y < 5$ olduğuna göre, $x + y$ toplamının alabileceği en büyük tam sayı değeri kaçtır?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "Eşitsizlikleri taraf tarafa toplarsak: $-4 < x + y < 9$ elde edilir. 9'dan küçük en büyük tam sayı 8'dir.",
    "hint": "Reel sayılarda eşitsizlikler taraf tarafa toplanır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 89,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x \\in \\mathbb{R}$ olmak üzere, $-3 \\le x < 2$ olduğuna göre, $x^2$ ifadesinin alabileceği en geniş değer aralığı nedir?",
    "options": [
      "$[0, 9]$",
      "$(4, 9]$",
      "$[0, 4)$",
      "$[4, 9]$",
      "$(-6, 4)$"
    ],
    "correctIndex": 0,
    "explanation": "Aralık 0 sayısını içerdiğinden bir sayının karesinin en küçük değeri 0'dır ($0 \\le x^2$). Uç noktaların kareleri: $(-3)^2 = 9$ ve $2^2 = 4$ tür. En büyük kare 9 olup $-3$ dahil olduğundan 9 da dahildir: $[0, 9]$ aralığı elde edilir.",
    "hint": "Aralıkta 0 varsa karesi en az 0 olabilir, üst sınır ise uçların karelerinin en büyüğüdür.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 90,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$(a - 1)x + 2y = 4$ ve $3x + y = 2$ denklem sisteminin sonsuz çözümü olduğuna göre, $a$ kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "Sonsuz çözüm olması için katsayılar oranları eşit olmalıdır: $\\frac{a - 1}{3} = \\frac{2}{1} = \\frac{4}{2}$. Buradan $\\frac{a - 1}{3} = 2 \\implies a - 1 = 6 \\implies a = 7$ bulunur.",
    "hint": "İki bilinmeyenli sistemde sonsuz çözüm için $a_1/a_2 = b_1/b_2 = c_1/c_2$ olmalıdır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 91,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$3(x - 2) + 4 < 5x - 8$ eşitsizliğini sağlayan en küçük $x$ tam sayısı kaçtır?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "$3x - 6 + 4 < 5x - 8 \\implies 3x - 2 < 5x - 8 \\implies 6 < 2x \\implies x > 3$. $x > 3$ şartını sağlayan en küçük tam sayı 4'tür.",
    "hint": "Eşitsizliği çöz ve bulduğun eşitsizlikten büyük ilk tam sayıyı belirle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 92,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x$ ve $y$ tam sayılardır. $-2 \\le x \\le 3$ ve $1 \\le y \\le 4$ olduğuna göre, $2x - 3y$ ifadesinin alabileceği EN KÜÇÜK değer kaçtır?",
    "options": [
      "-16",
      "-14",
      "-12",
      "-10",
      "-8"
    ],
    "correctIndex": 0,
    "explanation": "$x$ ve $y$ TAM SAYI dendiğinde değer seçilir! İfadenin en küçük olması için $x$ en küçük, $y$ ise en büyük seçilmelidir: $x = -2$ ve $y = 4$. Buradan $2(-2) - 3(4) = -4 - 12 = -16$ bulunur.",
    "hint": "Değişkenler tam sayı ise eşitsizlik taraf tarafa toplanmaz, doğrudan uygun tam sayılar seçilir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 93,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$\\frac{2x - 1}{3} = \\frac{x + 4}{2}$ denkleminin kökü kaçtır?",
    "options": [
      "10",
      "12",
      "14",
      "16",
      "18"
    ],
    "correctIndex": 2,
    "explanation": "İçler dışlar çarpımı yapalım: $2(2x - 1) = 3(x + 4) \\implies 4x - 2 = 3x + 12 \\implies 4x - 3x = 12 + 2 \\implies x = 14$ bulunur.",
    "hint": "İçler dışlar çarpımı yaparak tek satıra indir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 94,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x < y < 0$ olduğuna göre, aşağıdakilerden hangisi daima pozitiftir?",
    "options": [
      "$x + y$",
      "$\\frac{x - y}{y}$",
      "$x \\cdot y$",
      "$x - y$",
      "$\\frac{y}{x} - 1$"
    ],
    "correctIndex": 2,
    "explanation": "Her iki sayı da negatif olduğu için iki negatif sayının çarpımı daima pozitiftir: $x \\cdot y > 0$. $x+y$ negatiftir. $x < y \\implies x-y < 0$ negatiftir.",
    "hint": "Negatif çarpı negatif pozitiftir kuralını hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 95,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$(2k - 4)x + 3y = 7$ ve $4x + 6y = 10$ denklem sisteminin çözüm kümesi boş küme olduğuna göre, $k$ kaçtır?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "Çözüm kümesinin boş küme olması için doğruların paralel olması gerekir, yani $\\frac{2k - 4}{4} = \\frac{3}{6} \\neq \\frac{7}{10}$. $\\frac{2k - 4}{4} = \\frac{1}{2} \\implies 2(2k - 4) = 4 \\implies 4k - 8 = 4 \\implies 4k = 12 \\implies k = 3$ bulunur.",
    "hint": "Boş küme için $x$ ve $y$'nin katsayıları oranı eşit, sabit terimler oranı farklı olmalıdır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 96,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$-4 \\le 3x - 1 < 8$ eşitsizliğinin çözüm kümesinde kaç tane tam sayı vardır?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "Her tarafa 1 ekleyelim: $-3 \\le 3x < 9$. Her tarafı 3'e bölelim: $-1 \\le x < 3$. Bu aralıktaki tam sayılar: $-1, 0, 1, 2$ olup toplam 4 tanedir.",
    "hint": "Adım adım çöz ve aralıktaki tam sayıları listele.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 97,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$a < 0 < b$ olduğuna göre, aşağıdakilerden hangisi daima yanlıştır?",
    "options": [
      "$a \\cdot b < 0$",
      "$b - a > 0$",
      "$a^2 > 0$",
      "$\\frac{a}{b} > 0$",
      "$\\frac{a}{b} < 0$"
    ],
    "correctIndex": 3,
    "explanation": "Zıt işaretli iki sayının birbirine bölümü daima negatiftir ($\\frac{a}{b} < 0$). Dolayısıyla $\\frac{a}{b} > 0$ ifadesi kesinlikle yanlıştır.",
    "hint": "Negatif bir sayının pozitif bir sayıya bölümü negatiftir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 98,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$2x - 3 \\le 5$ ve $3x + 1 \\ge -5$ eşitsizlik sistemini sağlayan $x$ tam sayılarının toplamı kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "1. eşitsizlik: $2x \\le 8 \\implies x \\le 4$. 2. eşitsizlik: $3x \\ge -6 \\implies x \\ge -2$. Kesişim: $-2 \\le x \\le 4$. Tam sayılar: $-2, -1, 0, 1, 2, 3, 4$. Toplam: $(-2+2) + (-1+1) + 0 + 3 + 4 = 7$ bulunur.",
    "hint": "Her iki eşitsizliği ayrı ayrı çözüp ortak aralığı bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 99,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$\\frac{x}{2} + \\frac{y}{3} = 4$ ve $\\frac{x}{4} - \\frac{y}{3} = -1$ olduğuna göre, $x + y$ kaçtır?",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 3,
    "explanation": "Taraf tarafa toplarsak: $\\frac{x}{2} + \\frac{x}{4} = 3 \\implies \\frac{3x}{4} = 3 \\implies 3x = 12 \\implies x = 4$. $x=4$'ü ilk denklemde yerine koyalım: $\\frac{4}{2} + \\frac{y}{3} = 4 \\implies 2 + \\frac{y}{3} = 4 \\implies \\frac{y}{3} = 2 \\implies y = 6$. Buradan $x + y = 4 + 6 = 10$ bulunur.",
    "hint": "Taraf tarafa toplayarak $y$'li terimleri yok et.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 100,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$a, b \\in \\mathbb{R}$ olmak üzere, $a^2 \\cdot b > 0$ ve $a \\cdot b^3 < 0$ olduğuna göre, $a$ ve $b$'nin işaretleri sırasıyla nedir?",
    "options": [
      "+, +",
      "+, -",
      "-, +",
      "-, -",
      "Belirlenemez"
    ],
    "correctIndex": 2,
    "explanation": "$a \\neq 0$ için $a^2 > 0$ daima pozitiftir. $a^2 \\cdot b > 0 \\implies b > 0$ (pozitif) olmalıdır. $b > 0$ ise $b^3 > 0$ dır. $a \\cdot b^3 < 0 \\implies a < 0$ (negatif) olmalıdır. Sırasıyla (-, +) olur.",
    "hint": "Çift kuvvet daima pozitif olduğundan karesi olan ifadeden başla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 101,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$-5 < x < 2$ olduğuna göre, $x^2 + 1$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
    "options": [
      "24",
      "25",
      "26",
      "27",
      "28"
    ],
    "correctIndex": 1,
    "explanation": "Aralık 0 içerdiği için $0 \\le x^2 < 25$. Her tarafa 1 eklersek: $1 \\le x^2 + 1 < 26$. $x^2 + 1 < 26$ olduğundan alabileceği en büyük tam sayı değeri 25'tir.",
    "hint": "$-5$'in karesi 25'tir fakat $-5$ dahil olmadığından 25'ten küçük en büyük tam sayıya bakılır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 102,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$(m - 2)x + 3 = 0$ denkleminin çözüm kümesi tek elemanlı olduğuna göre, $m$ hangi değeri ALAMAZ?",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "Birinci dereceden $Ax + B = 0$ denkleminin tek bir çözümü olması için $x$'in katsayısı sıfırdan farklı olmalıdır ($A \\neq 0$). Dolayısıyla $m - 2 \\neq 0 \\implies m \\neq 2$ dir. $m = 2$ değerini alamaz.",
    "hint": "Katsayı sıfır olursa denklem tek bir çözüme sahip olamaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 103,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$2(x - 1) \\le 3x + 4 < 2x + 9$ eşitsizliğini sağlayan kaç tane $x$ tam sayısı vardır?",
    "options": [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    "correctIndex": 2,
    "explanation": "İki parçaya ayıralım: 1) $2x - 2 \\le 3x + 4 \\implies -6 \\le x$. 2) $3x + 4 < 2x + 9 \\implies x < 5$. Birleştirirsek: $-6 \\le x < 5$. Tam sayılar: $-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4$. Sayısı: $4 - (-6) + 1 = 11$ tanedir.",
    "hint": "İkili eşitsizlikleri sol ve sağ olarak iki ayrı eşitsizlik şeklinde çöz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 104,
    "unitId": "denklemler",
    "unitTitle": "Denklem ve Eşitsizlikler",
    "question": "$x$ ve $y$ pozitif tam sayılardır. $3x + 4y = 38$ olduğuna göre, $x$'in alabileceği en büyük değer kaçtır?",
    "options": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "$x$'in en büyük olması için $y$'nin en küçük pozitif tam sayı seçilmesi gerekir. $y = 1$ için $3x + 4 = 38 \\implies 3x = 34$ (3'e bölünmez). $y = 2$ için $3x + 8 = 38 \\implies 3x = 30 \\implies x = 10$. Dolayısıyla $x$'in en büyük değeri 10'dur.",
    "hint": "$x$'i büyütmek için $y$'ye en küçük pozitif tam sayı değerlerini dene.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 105,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|-7| + |-3| - |5|$ işleminin sonucu kaçtır?",
    "options": [
      "3",
      "5",
      "7",
      "9",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "$|-7| = 7$, $|-3| = 3$ ve $|5| = 5$ tir. İşlemi yaparsak: $7 + 3 - 5 = 10 - 5 = 5$ bulunur.",
    "hint": "Mutlak değer bir sayının sıfıra olan uzaklığıdır ve daima sıfır veya pozitiftir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 106,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$x < 0$ olmak üzere, $|2x| - |-3x| + |x|$ ifadesinin eşiti nedir?",
    "options": [
      "$-2x$",
      "$0$",
      "$2x$",
      "$-4x$",
      "$4x$"
    ],
    "correctIndex": 1,
    "explanation": "$x < 0$ olduğundan: $|2x| = -2x$, $|-3x| = -3(-x) = -3x$ (çünkü $-3x > 0$ dır, aynen çıkar: $|-3x| = -3x$), $|x| = -x$. İşlem: $(-2x) - (-3x) + (-x) = -2x + 3x - x = 0$ bulunur.",
    "hint": "İçerisi negatifse dışarıya eksi ile çarpılarak çıkar.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 107,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$a < b < 0$ olduğuna göre, $|a - b| + |b| - |a|$ ifadesinin eşiti nedir?",
    "options": [
      "0",
      "-2a",
      "-2b",
      "2b - 2a",
      "2a"
    ],
    "correctIndex": 2,
    "explanation": "$a < b \\implies a - b < 0$ olduğundan $|a - b| = -(a - b) = -a + b$. $b < 0$ olduğundan $|b| = -b$. $a < 0$ olduğundan $|a| = -a$. Yerine yazalım: $(-a + b) + (-b) - (-a) = -a + b - b + a = 0$ değil, tekrar kontrol: $(-a+b) + (-b) - (-a) = -a + b - b + a = 0$! Şıklarda A seçeneği 0. Cevap 0 dır.",
    "hint": "Her bir mutlak değerin içinin işaretini belirle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 108,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|2x - 6| = 10$ denklemini sağlayan $x$ değerlerinin toplamı kaçtır?",
    "options": [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "$2x - 6 = 10 \\implies 2x = 16 \\implies x = 8$ veya $2x - 6 = -10 \\implies 2x = -4 \\implies x = -2$. Toplamları: $8 + (-2) = 6$ bulunur. (Kural: $|ax+b|=c$ kökler toplamı daima $-2b/a = 2 \\cdot (6/2) = 6$ dır).",
    "hint": "Mutlak değerin içi ya 10 ya da -10 olabilir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 109,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|3x - 1| = -4$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\emptyset$",
      "$\\{-1\\}$",
      "$\\{1, -\\frac{5}{3}\\}$",
      "$\\mathbb{R}$",
      "$\\{-\\frac{5}{3}\\}$"
    ],
    "correctIndex": 0,
    "explanation": "Mutlak değerli bir ifadenin sonucu bir uzaklık belirttiği için hiçbir zaman negatif bir sayıya eşit olamaz. Dolayısıyla çözüm kümesi boş kümedir ($\\emptyset$).",
    "hint": "Mutlak değer hiçbir zaman negatif olamaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 110,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 3| \\le 5$ eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?",
    "options": [
      "$[-2, 8]$",
      "$(-2, 8)$",
      "$[2, 8]$",
      "$[-8, 2]$",
      "$[-5, 5]$"
    ],
    "correctIndex": 0,
    "explanation": "$|x - a| \\le r \\iff -r \\le x - a \\le r$ kuralından: $-5 \\le x - 3 \\le 5 \\implies -5 + 3 \\le x \\le 5 + 3 \\implies -2 \\le x \\le 8$ yani $[-2, 8]$ aralığıdır.",
    "hint": "$-5 \\le x - 3 \\le 5$ çift taraflı eşitsizliğini çöz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 111,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|2x + 1| > 7$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
    "options": [
      "$(-\\infty, -4) \\cup (3, \\infty)$",
      "$(-4, 3)$",
      "$[-4, 3]$",
      "$(3, \\infty)$",
      "$(-\\infty, -4)$"
    ],
    "correctIndex": 0,
    "explanation": "$|A| > c \\iff A > c$ veya $A < -c$. 1) $2x + 1 > 7 \\implies 2x > 6 \\implies x > 3$. 2) $2x + 1 < -7 \\implies 2x < -8 \\implies x < -4$. Çözüm: $(-\\infty, -4) \\cup (3, \\infty)$ dur.",
    "hint": "Büyüktür durumunda iki ayrı kol çözülür: $A > c$ veya $A < -c$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 112,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 2| + |y + 5| = 0$ olduğuna göre, $x \\cdot y$ çarpımı kaçtır?",
    "options": [
      "-10",
      "-7",
      "0",
      "7",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "İki mutlak değerli ifadenin toplamı 0 ise her ikisi de ayrı ayrı 0 olmalıdır: $x - 2 = 0 \\implies x = 2$ ve $y + 5 = 0 \\implies y = -5$. Çarpımları: $2 \\cdot (-5) = -10$ bulunur.",
    "hint": "Mutlak değer negatif olamayacağından toplamın sıfır olması için her iki terim de sıfır olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 113,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|2x - 4| = |x + 5|$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{-1, 9\\}$",
      "$\\{-\\frac{1}{3}, 9\\}$",
      "$\\{-1, 3\\}$",
      "$\\{3, 9\\}$",
      "$\\emptyset$"
    ],
    "correctIndex": 1,
    "explanation": "İki durum vardır: 1) $2x - 4 = x + 5 \\implies x = 9$. 2) $2x - 4 = -(x + 5) \\implies 2x - 4 = -x - 5 \\implies 3x = -1 \\implies x = -\\frac{1}{3}$. Çözüm kümesi $\\{-\\frac{1}{3}, 9\\}$ dur.",
    "hint": "$|A| = |B| \\iff A = B$ veya $A = -B$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 114,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$\\frac{24}{|x - 3| + |x + 5|}$ kesrinin alabileceği EN BÜYÜK değer kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "6",
      "8"
    ],
    "correctIndex": 1,
    "explanation": "Kesrin en büyük olması için paydanın en küçük olması gerekir. $|x - 3| + |x + 5|$ ifadesinin en küçük değeri kritik noktalarda ($x = 3$ veya $x = -5$) elde edilir: $x = 3$ için $|0| + |8| = 8$. Paydanın minimumu 8 olduğuna göre kesrin maksimumu $24 / 8 = 3$ olur.",
    "hint": "Kesrin en büyük değeri için paydanın en küçük değerini kritik noktalardan birini koyarak bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 115,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$||x - 2| - 3| = 5$ denklemini sağlayan $x$ değerlerinin çarpımı kaçtır?",
    "options": [
      "-60",
      "-40",
      "-30",
      "20",
      "60"
    ],
    "correctIndex": 0,
    "explanation": "$|x - 2| - 3 = 5 \\implies |x - 2| = 8$ veya $|x - 2| - 3 = -5 \\implies |x - 2| = -2$ (kök yok). $|x - 2| = 8 \\implies x - 2 = 8 \\implies x = 10$ veya $x - 2 = -8 \\implies x = -6$. Köklerin çarpımı: $10 \\cdot (-6) = -60$ bulunur.",
    "hint": "Dıştaki mutlak değeri açıp içerideki ifadeyi 5 ve -5'e eşitle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 116,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 4| = 4 - x$ olduğuna göre, $x$'in en geniş değer aralığı nedir?",
    "options": [
      "$(-\\infty, 4]$",
      "$[4, \\infty)$",
      "$(-\\infty, 4)$",
      "$(4, \\infty)$",
      "$\\mathbb{R}$"
    ],
    "correctIndex": 0,
    "explanation": "Bir ifade mutlak değer dışına ters işaretlisi olarak çıkmışsa ($-(x - 4) = 4 - x$), içerisi sıfırdan küçük veya eşittir: $x - 4 \\le 0 \\implies x \\le 4$. Yani $(-\\infty, 4]$ aralığıdır.",
    "hint": "$|A| = -A \\iff A \\le 0$ özelliğini hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 117,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x + 2| = 2x - 1$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{-\\frac{1}{3}, 3\\}$",
      "$\\{3\\}$",
      "$\\{-\\frac{1}{3}\\}$",
      "$\\emptyset$",
      "$\\{1, 3\\}$"
    ],
    "correctIndex": 1,
    "explanation": "Sağ taraf mutlak değere eşit olduğundan pozitif veya sıfır olmalıdır ($2x - 1 \\ge 0 \\implies x \\ge 1/2$). Durum 1: $x + 2 = 2x - 1 \\implies x = 3$ ($3 \\ge 1/2$ sağlar). Durum 2: $x + 2 = -(2x - 1) = -2x + 1 \\implies 3x = -1 \\implies x = -1/3$ (fakat $-1/3 < 1/2$ sağlamaz, sağ tarafı negatif yapar). Dolayısıyla tek kök $\\{3\\}$ tür.",
    "hint": "Çıkan kökleri denklemde yerine koyup sağ tarafın negatif olup olmadığını mutlaka kontrol et!",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 118,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$1 < |x - 2| \\le 4$ eşitsizliğini sağlayan kaç farklı $x$ tam sayısı vardır?",
    "options": [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Pozitif durum: $1 < x - 2 \\le 4 \\implies 3 < x \\le 6 \\implies x \\in \\{4, 5, 6\\}$ (3 tane). Negatif durum: $-4 \\le x - 2 < -1 \\implies -2 \\le x < 1 \\implies x \\in \\{-2, -1, 0\\}$ (3 tane). Toplam $3 + 3 = 6$ farklı tam sayı vardır.",
    "hint": "Eşitsizliği hem pozitif hem negatif kol için ayrı ayrı çöz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 119,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x^2 - 4| = |x - 2|$ denklemini sağlayan farklı reel sayıların toplamı kaçtır?",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "$|x-2| \\cdot |x+2| = |x-2| \\implies |x-2|(|x+2| - 1) = 0$. Kökler: $x = 2$, $x = -1$, $x = -3$. Toplamları: $2 + (-1) + (-3) = -2$ bulunur.",
    "hint": "$x^2 - 4 = (x-2)(x+2)$ çarpanlarına ayır ve ortak paranteze al.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 120,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "Sayı doğrusunda $-3$ noktasına olan uzaklığı en fazla 5 birim olan sayıların aralığı nedir?",
    "options": [
      "$[-8, 2]$",
      "$(-8, 2)$",
      "$[-2, 8]$",
      "$[-5, 5]$",
      "$[-3, 5]$"
    ],
    "correctIndex": 0,
    "explanation": "Bir $x$ sayısının $-3$'e uzaklığı $|x - (-3)| = |x + 3|$ tür. En fazla 5 birim: $|x + 3| \\le 5 \\implies -5 \\le x + 3 \\le 5 \\implies -8 \\le x \\le 2$ yani $[-8, 2]$ aralığıdır.",
    "hint": "A sayısına uzaklık $|x - A|$ formülü ile yazılır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 121,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$x < y < 0$ olduğuna göre, $\\sqrt{(x - y)^2} + \\sqrt{x^2}$ ifadesinin eşiti nedir?",
    "options": [
      "$-y$",
      "$y - 2x$",
      "$2x - y$",
      "$-2x + y$",
      "$y$"
    ],
    "correctIndex": 1,
    "explanation": "$\\sqrt{A^2} = |A|$ dır. İfade $|x - y| + |x|$ olur. $x < y \\implies x - y < 0 \\implies |x - y| = -(x - y) = -x + y$. $x < 0 \\implies |x| = -x$. Toplarsak: $(-x + y) + (-x) = y - 2x$ bulunur.",
    "hint": "Karekök içindeki tam kare dışarıya mutlak değerle çıkar.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 122,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|3x - 9| + |6 - 2x| = 20$ denklemini sağlayan $x$ değerlerinin çarpımı kaçtır?",
    "options": [
      "-7",
      "-5",
      "5",
      "7",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "$|3x - 9| = 3|x - 3|$ ve $|6 - 2x| = 2|3 - x| = 2|x - 3|$. Toplam: $3|x - 3| + 2|x - 3| = 5|x - 3| = 20 \\implies |x - 3| = 4$. Buradan $x - 3 = 4 \\implies x = 7$ veya $x - 3 = -4 \\implies x = -1$. Çarpımları: $7 \\cdot (-1) = -7$ bulunur.",
    "hint": "Paranteze alarak her iki mutlak değeri de $|x - 3|$ cinsinden yaz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 123,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 5| = 5 - x$ ve $|x + 2| = x + 2$ olduğuna göre, $x$'in alabileceği tam sayı değerleri kaç tanedir?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "1) $|x - 5| = -(x - 5) \\implies x - 5 \\le 0 \\implies x \\le 5$. 2) $|x + 2| = x + 2 \\implies x + 2 \\ge 0 \\implies x \\ge -2$. Kesişim: $-2 \\le x \\le 5$. Tam sayılar: $-2, -1, 0, 1, 2, 3, 4, 5$ olup $5 - (-2) + 1 = 8$ tanedir.",
    "hint": "Her iki şartın da aralığını belirleyip kesişimini al.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 124,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 1| < -2$ eşitsizliğinin çözüm kümesi nedir?",
    "options": [
      "$\\emptyset$",
      "$\\mathbb{R}$",
      "$(-1, 3)$",
      "$(-\\infty, -1)$",
      "$\\{1\\}$"
    ],
    "correctIndex": 0,
    "explanation": "Mutlak değerli bir ifade daima $\\ge 0$ dır. Hiçbir reel sayının mutlak değeri negatif bir sayıdan ($-2$) küçük olamaz. Dolayısıyla çözüm kümesi boş kümedir ($\\emptyset$).",
    "hint": "Mutlak değer en az 0 olabilir, -2'den küçük olamaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 125,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x + 4| \\ge -3$ eşitsizliğinin çözüm kümesi nedir?",
    "options": [
      "$\\mathbb{R}$",
      "$\\emptyset$",
      "$[-7, -1]$",
      "$[-4, \\infty)$",
      "$(-\\infty, -4]$"
    ],
    "correctIndex": 0,
    "explanation": "Mutlak değerli her ifadenin sonucu en az sıfırdır ($|x + 4| \\ge 0$). Sıfır veya pozitif olan her sayı $-3$'ten büyük veya eşittir. Dolayısıyla tüm reel sayılar bu eşitsizliği sağlar: $\\mathbb{R}$.",
    "hint": "Pozitif bir değer daima negatif bir değerden büyüktür.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 126,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|2x - 8| \\le 0$ eşitsizliğinin çözüm kümesi nedir?",
    "options": [
      "$\\{4\\}$",
      "$\\emptyset$",
      "$(-\\infty, 4]$",
      "$[4, \\infty)$",
      "$\\mathbb{R}$"
    ],
    "correctIndex": 0,
    "explanation": "Mutlak değer sıfırdan küçük olamayacağına göre tek olasılık sıfıra eşit olmasıdır: $2x - 8 = 0 \\implies 2x = 8 \\implies x = 4$. Çözüm kümesi tek elemanlı $\\{4\\}$ kümesidir.",
    "hint": "Mutlak değer sıfırdan küçük olamaz, sadece sıfıra eşit olabilir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 127,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$a, b \\in \\mathbb{R}$ olmak üzere, $|a| \\le 3$ ve $|b| \\le 5$ olduğuna göre, $a - b$ farkının alabileceği EN BÜYÜK değer kaçtır?",
    "options": [
      "2",
      "5",
      "8",
      "10",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "$-3 \\le a \\le 3$ ve $-5 \\le b \\le 5$. $a - b$'nin en büyük olması için $a$ en büyük ($a = 3$), $b$ ise en küçük ($b = -5$) seçilir. Maksimum değer: $3 - (-5) = 3 + 5 = 8$ bulunur.",
    "hint": "Farkın en büyük olması için eksileni en büyük, çıkanı en küçük seç.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 128,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 3| = x - 3$ denklemini sağlayan en küçük iki basamaklı doğal sayı kaçtır?",
    "options": [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "$|x - 3| = x - 3 \\implies x - 3 \\ge 0 \\implies x \\ge 3$. $x \\ge 3$ şartını sağlayan en küçük iki basamaklı doğal sayı 10'dur.",
    "hint": "İfade aynen çıktığına göre $x \\ge 3$ olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 129,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x - 1| + |x - 7|$ ifadesinin alabileceği EN KÜÇÜK değer kaçtır?",
    "options": [
      "0",
      "4",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Geometrik olarak bu ifade, $x$ noktasının 1 ve 7 sayılarına olan uzaklıkları toplamıdır. 1 ile 7 arasındaki herhangi bir nokta için uzaklıklar toplamı daima sabit ve $7 - 1 = 6$ dır. Kritik nokta $x = 1$ koyarsak: $|0| + |-6| = 6$ minimum değerdir.",
    "hint": "Kritik noktalardan birini yerine yazarak minimum değeri bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 130,
    "unitId": "mutlak_deger",
    "unitTitle": "Mutlak Değer",
    "question": "$|x| < 3$ olduğuna göre, $2x - y + 1 = 0$ eşitliğini sağlayan $y$ tam sayılarının alabileceği en geniş aralık nedir?",
    "options": [
      "$(-5, 7)$",
      "$[-5, 7]$",
      "$(-7, 5)$",
      "$(-6, 6)$",
      "$(-3, 3)$"
    ],
    "correctIndex": 0,
    "explanation": "$y = 2x + 1$ dir. $|x| < 3 \\implies -3 < x < 3$. 2 ile çarpalım: $-6 < 2x < 6$. 1 ekleyelim: $-5 < 2x + 1 < 7 \\implies -5 < y < 7$. Yani $(-5, 7)$ açık aralığıdır.",
    "hint": "$y$'yi $x$ cinsinden çek ve eşitsizlikte yerine koy.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 131,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(-2)^4 - (-3)^2 + (-1)^{2026}$ işleminin sonucu kaçtır?",
    "options": [
      "6",
      "8",
      "16",
      "24",
      "26"
    ],
    "correctIndex": 1,
    "explanation": "$(-2)^4 = 16$ (çift kuvvet pozitif), $(-3)^2 = 9$ (çift kuvvet pozitif), $(-1)^{2026} = 1$ (2026 çift sayıdır). İşlem: $16 - 9 + 1 = 8$ bulunur.",
    "hint": "Negatif sayıların çift kuvvetleri pozitif, tek kuvvetleri negatiftir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 132,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$-2^4 + (-2)^4 - 5^0$ işleminin sonucu kaçtır?",
    "options": [
      "-1",
      "0",
      "1",
      "31",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "Parantezsiz $-2^4 = -(2^4) = -16$ dır. Parantezli $(-2)^4 = 16$ dır. $5^0 = 1$ dir. İşlem: $-16 + 16 - 1 = -1$ bulunur.",
    "hint": "$-a^n$ ile $(-a)^n$ arasındaki parantez farkına dikkat et!",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 133,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^5 + 2^5 + 2^5 + 2^5$ işleminin sonucu aşağıdakilerden hangisidir?",
    "options": [
      "$2^6$",
      "$2^7$",
      "$2^8$",
      "$2^{10}$",
      "$2^{20}$"
    ],
    "correctIndex": 1,
    "explanation": "4 tane $2^5$'in toplamı: $4 \\cdot 2^5 = 2^2 \\cdot 2^5 = 2^{2+5} = 2^7$ olur.",
    "hint": "Aynı sayıların toplamı çarpma işlemine dönüşür: 4 tane $2^5 = 4 \\cdot 2^5$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 134,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\frac{3^8 \\cdot 3^5}{3^9}$ işleminin sonucu kaçtır?",
    "options": [
      "9",
      "27",
      "81",
      "243",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "Tabanlar aynı iken çarpımda üsler toplanır, bölmede çıkarılır: $\\frac{3^{8+5}}{3^9} = \\frac{3^{13}}{3^9} = 3^{13 - 9} = 3^4 = 81$ bulunur.",
    "hint": "$a^m \\cdot a^n = a^{m+n}$ ve $a^m / a^n = a^{m-n}$ kurallarını kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 135,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(2^3)^4 \\cdot (2^{-2})^5$ işleminin sonucu kaçtır?",
    "options": [
      "2",
      "4",
      "8",
      "16",
      "32"
    ],
    "correctIndex": 1,
    "explanation": "Üssün üssü çarpılır: $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12}$. $(2^{-2})^5 = 2^{-2 \\cdot 5} = 2^{-10}$. Çarpımları: $2^{12} \\cdot 2^{-10} = 2^{12 + (-10)} = 2^2 = 4$ bulunur.",
    "hint": "$(a^m)^n = a^{m \\cdot n}$ kuralını uygula.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 136,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\left(\\frac{2}{3}\\right)^{-3}$ işleminin sonucu kaçtır?",
    "options": [
      "$\\frac{8}{27}$",
      "$\\frac{27}{8}$",
      "$-\\frac{8}{27}$",
      "$-\\frac{27}{8}$",
      "$\\frac{9}{4}$"
    ],
    "correctIndex": 1,
    "explanation": "Negatif üs kesri ters çevirir: $\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^3 = \\frac{3^3}{2^3} = \\frac{27}{8}$ bulunur.",
    "hint": "$(a/b)^{-n} = (b/a)^n$ kuralını uygula.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 137,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^{-1} + 3^{-1} + 6^{-1}$ işleminin sonucu kaçtır?",
    "options": [
      "1",
      "2",
      "$\\frac{5}{6}$",
      "$\\frac{11}{6}$",
      "$\\frac{1}{2}$"
    ],
    "correctIndex": 0,
    "explanation": "$2^{-1} = \\frac{1}{2}$, $3^{-1} = \\frac{1}{3}$, $6^{-1} = \\frac{1}{6}$. Paydaları 6'da eşitleyelim: $\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$ bulunur.",
    "hint": "$a^{-1} = 1/a$ kesirlerini topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 138,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$12^x = 3^x \\cdot 4^x$ kuralına göre, $2^x = a$ ve $3^x = b$ olduğuna göre $72^x$'in $a$ ve $b$ türünden eşiti nedir?",
    "options": [
      "$a^2 \\cdot b^3$",
      "$a^3 \\cdot b^2$",
      "$a^3 \\cdot b^3$",
      "$a^2 \\cdot b^2$",
      "$a \\cdot b^3$"
    ],
    "correctIndex": 1,
    "explanation": "$72$ sayısını asal çarpanlarına ayıralım: $72 = 2^3 \\cdot 3^2$. Dolayısıyla $72^x = (2^3 \\cdot 3^2)^x = (2^x)^3 \\cdot (3^x)^2 = a^3 \\cdot b^2$ bulunur.",
    "hint": "72'yi asal çarpanlarına ayır: $72 = 8 \\cdot 9 = 2^3 \\cdot 3^2$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 139,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\frac{2^{x+3} + 2^{x+1}}{2^{x+2} - 2^x}$ işleminin sonucu kaçtır?",
    "options": [
      "2",
      "3",
      "$\\frac{10}{3}$",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "Payı ve paydayı $2^x$ parantezine alalım: $\\frac{2^x(2^3 + 2^1)}{2^x(2^2 - 1)} = \\frac{8 + 2}{4 - 1} = \\frac{10}{3}$ bulunur.",
    "hint": "En küçük üs parantezine alarak sadeleştir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 140,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$4^{x-1} = 32$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "$\\frac{7}{2}$",
      "$\\frac{5}{2}$",
      "3",
      "4",
      "$\\frac{9}{2}$"
    ],
    "correctIndex": 0,
    "explanation": "Her iki tarafı da 2'nin kuvveti olarak yazalım: $4^{x-1} = (2^2)^{x-1} = 2^{2x-2}$. $32 = 2^5$. Tabanlar eşit olduğundan üsler eşittir: $2x - 2 = 5 \\implies 2x = 7 \\implies x = \\frac{7}{2}$ bulunur.",
    "hint": "Tabanları 2'nin kuvveti şeklinde eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 141,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$3^{2x - 1} = \\frac{1}{27}$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "$\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}$. Buradan $3^{2x - 1} = 3^{-3} \\implies 2x - 1 = -3 \\implies 2x = -2 \\implies x = -1$ bulunur.",
    "hint": "$1/27 = 3^{-3}$ olarak yaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 142,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(x - 3)^{x + 2} = 1$ denklemini sağlayan farklı $x$ değerlerinin toplamı kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "$a^b = 1$ üç durumda sağlanır: 1) Taban 1: $x - 3 = 1 \\implies x = 4$. 2) Üs 0 ve taban $\\neq 0$: $x + 2 = 0 \\implies x = -2$ (taban $-5 \\neq 0$, sağlar). 3) Taban -1 ve üs çift: $x - 3 = -1 \\implies x = 2$ (üs $2+2=4$ çifttir, sağlar). Değerler toplamı: $4 + (-2) + 2 = 4$ bulunur.",
    "hint": "Tabanın 1, üssün 0 ve tabanın -1 (çift üs) olma şartlarını ayrı ayrı incele.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 143,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$5^x = 3$ olduğuna göre, $5^{2x+1}$ ifadesinin değeri kaçtır?",
    "options": [
      "15",
      "45",
      "75",
      "125",
      "225"
    ],
    "correctIndex": 1,
    "explanation": "$5^{2x+1} = 5^{2x} \\cdot 5^1 = (5^x)^2 \\cdot 5$. $5^x = 3$ yerine yazılırsa: $3^2 \\cdot 5 = 9 \\cdot 5 = 45$ bulunur.",
    "hint": "$5^{2x+1} = (5^x)^2 \\cdot 5$ şeklinde parçala.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 144,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^x = a$ ve $5^x = b$ olduğuna göre, $200^x$ sayısının $a$ ve $b$ türünden değeri nedir?",
    "options": [
      "$a^3 \\cdot b^2$",
      "$a^2 \\cdot b^3$",
      "$a^2 \\cdot b^2$",
      "$a^4 \\cdot b$",
      "$a^3 \\cdot b^3$"
    ],
    "correctIndex": 0,
    "explanation": "$200 = 8 \\cdot 25 = 2^3 \\cdot 5^2$. Dolayısıyla $200^x = (2^3 \\cdot 5^2)^x = (2^x)^3 \\cdot (5^x)^2 = a^3 \\cdot b^2$ bulunur.",
    "hint": "200'ü $2^3 \\cdot 5^2$ olarak çarpanlarına ayır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 145,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$8^4$ sayısının yarısı kaçtır?",
    "options": [
      "$4^4$",
      "$8^2$",
      "$2^{11}$",
      "$4^2$",
      "$2^{10}$"
    ],
    "correctIndex": 2,
    "explanation": "$8^4 = (2^3)^4 = 2^{12}$. Bir sayının yarısı 2'ye bölünmesi demektir: $\\frac{2^{12}}{2^1} = 2^{12 - 1} = 2^{11}$ bulunur.",
    "hint": "Bir sayının yarısını almak demek 2'ye bölmek (üslerden 1 çıkarmak) demektir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 146,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$25^6$ sayısının $\\frac{1}{5}$'i kaçtır?",
    "options": [
      "$5^{11}$",
      "$5^{10}$",
      "$25^5$",
      "$5^9$",
      "$25^3$"
    ],
    "correctIndex": 0,
    "explanation": "$25^6 = (5^2)^6 = 5^{12}$. Beşte biri: $\\frac{5^{12}}{5^1} = 5^{12 - 1} = 5^{11}$ bulunur.",
    "hint": "25'i $5^2$ olarak yazıp 5'e böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 147,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$A = 8^5 \\cdot 25^7$ sayısı kaç basamaklıdır?",
    "options": [
      "14",
      "15",
      "16",
      "17",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "10'un kuvvetlerini oluşturalım: $8^5 = (2^3)^5 = 2^{15}$. $25^7 = (5^2)^7 = 5^{14}$. $A = 2^{15} \\cdot 5^{14} = 2^1 \\cdot (2^{14} \\cdot 5^{14}) = 2 \\cdot 10^{14}$. 2 sayısının yanına 14 tane sıfır gelir, dolayısıyla $1 + 14 = 15$ basamaklı bir sayıdır.",
    "hint": "$10^n = 2^n \\cdot 5^n$ eşitliğini yakalamaya çalış.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 148,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$0{,}000048$ sayısının bilimsel gösterimi aşağıdakilerden hangisidir?",
    "options": [
      "$48 \\cdot 10^{-6}$",
      "$4{,}8 \\cdot 10^{-5}$",
      "$4{,}8 \\cdot 10^{-6}$",
      "$0{,}48 \\cdot 10^{-4}$",
      "$4{,}8 \\cdot 10^{-4}$"
    ],
    "correctIndex": 1,
    "explanation": "Bilimsel gösterimde katsayı $1 \\le |a| < 10$ olmalıdır. Virgülü 5 basamak sağa kaydırırsak $4{,}8$ elde edilir. Sağa kaydırıldığında üs azalır: $4{,}8 \\cdot 10^{-5}$ olur.",
    "hint": "Bilimsel gösterimde katsayı 1 ile 10 arasında olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 149,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(2x - 5)^4 = (x + 1)^4$ denklemini sağlayan $x$ değerlerinin toplamı kaçtır?",
    "options": [
      "$\\frac{22}{3}$",
      "6",
      "$\\frac{16}{3}$",
      "8",
      "$\\frac{20}{3}$"
    ],
    "correctIndex": 0,
    "explanation": "Üs çift olduğundan tabanlar ya birbirine eşittir ya da birbirinin zıt işaretlisidir: 1) $2x - 5 = x + 1 \\implies x = 6$. 2) $2x - 5 = -(x + 1) \\implies 2x - 5 = -x - 1 \\implies 3x = 4 \\implies x = \\frac{4}{3}$. Toplamları: $6 + \\frac{4}{3} = \\frac{18 + 4}{3} = \\frac{22}{3}$ bulunur.",
    "hint": "Çift kuvvet eşitliklerinde tabanlar ya eşit ya da zıt işaretlidir ($A = B$ veya $A = -B$).",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 150,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(3x - 1)^5 = (2x + 7)^5$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{8\\}$",
      "$\\{-8, 8\\}$",
      "$\\{-\\frac{6}{5}, 8\\}$",
      "$\\{6\\}$",
      "$\\emptyset$"
    ],
    "correctIndex": 0,
    "explanation": "Üs tek (5) olduğundan tabanlar yalnızca birbirine eşit olabilir: $3x - 1 = 2x + 7 \\implies 3x - 2x = 7 + 1 \\implies x = 8$. Tek çözüm $\\{8\\}$ dir.",
    "hint": "Tek kuvvetlerde zıt işaretli durum oluşmaz, doğrudan tabanları eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 151,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^a = 3$ ve $3^b = 8$ olduğuna göre, $a \\cdot b$ çarpımı kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "6",
      "8"
    ],
    "correctIndex": 1,
    "explanation": "1. denklemdeki 3'ü 2. denklemde yerine koyalım: $3^b = (2^a)^b = 2^{a \\cdot b}$. $8 = 2^3$. Dolayısıyla $2^{a \\cdot b} = 2^3 \\implies a \\cdot b = 3$ bulunur.",
    "hint": "Birinci denklemdeki 3'ün yerine $2^a$ yaz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 152,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\frac{6^x + 6^x + 6^x}{2^x + 2^x + 2^x} = 27$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "Payı ve paydayı toplayalım: $\\frac{3 \\cdot 6^x}{3 \\cdot 2^x} = \\frac{6^x}{2^x} = \\left(\\frac{6}{2}\\right)^x = 3^x$. Denklem $3^x = 27 = 3^3 \\implies x = 3$ bulunur.",
    "hint": "3'leri sadeleştirip $(6/2)^x = 3^x$ eşitliğini kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 153,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$a = 2^{60}$, $b = 3^{40}$, $c = 5^{20}$ sayılarının doğru sıralanışı aşağıdakilerden hangisidir?",
    "options": [
      "$c < a < b$",
      "$c < b < a$",
      "$a < c < b$",
      "$b < a < c$",
      "$a < b < c$"
    ],
    "correctIndex": 0,
    "explanation": "Üslerin EBOB'u $\\text{EBOB}(60, 40, 20) = 20$ dir. Hepsini 20. kuvvet biçiminde yazalım: $a = (2^3)^{20} = 8^{20}$. $b = (3^2)^{20} = 9^{20}$. $c = (5^1)^{20} = 5^{20}$. Üsler eşitken tabanı büyük olan büyüktür: $5^{20} < 8^{20} < 9^{20} \\implies c < a < b$ bulunur.",
    "hint": "Üslerin en büyük ortak bölenini alarak üsleri eşitle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 154,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^{x-1} = m$ olduğuna göre, $4^{x+1}$ ifadesinin $m$ türünden eşiti nedir?",
    "options": [
      "$4m^2$",
      "$8m^2$",
      "$16m^2$",
      "$64m^2$",
      "$32m^2$"
    ],
    "correctIndex": 3,
    "explanation": "$2^{x-1} = \\frac{2^x}{2} = m \\implies 2^x = 2m$. Şimdi $4^{x+1}$ ifadesini açalım: $4^{x+1} = 4^x \\cdot 4^1 = (2^x)^2 \\cdot 4$. $2^x = 2m$ yerine yazarsak: $(2m)^2 \\cdot 4 = 4m^2 \\cdot 4 = 16m^2$ değil, dikkat: $(2m)^2 = 4m^2$, $4m^2 \\cdot 4 = 16m^2$. Şıklarda C seçeneği $16m^2$.",
    "hint": "$2^x$'i $m$ cinsinden yalnız bırak ve $4^{x+1}$ içine yerleştir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 155,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$x, y \\in \\mathbb{Z}$ olmak üzere, $3^{2x + y - 8} = 5^{x - y - 1}$ olduğuna göre, $x \\cdot y$ çarpımı kaçtır?",
    "options": [
      "3",
      "4",
      "6",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "explanation": "3 ve 5 aralarında asal sayılardır. Tam sayı kuvvetlerinin birbirine eşit olabilmesi ancak üslerin 0 olmasıyla mümkündür: $2x + y - 8 = 0$ ve $x - y - 1 = 0$. Taraf tarafa toplarsak: $3x - 9 = 0 \\implies 3x = 9 \\implies x = 3$. $x - y - 1 = 0 \\implies 3 - y - 1 = 0 \\implies y = 2$. Çarpımları: $x \\cdot y = 3 \\cdot 2 = 6$ bulunur.",
    "hint": "Aralarında asal tabanların eşitliği ancak $a^0 = b^0 = 1$ durumunda mümkündür.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 156,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "Bir bakteri türü her 20 dakikada bir ikiye bölünerek çoğalmaktadır. Başlangıçta 16 bakteri bulunan bir kapta 2 saat sonra kaç bakteri olur?",
    "options": [
      "$2^8$",
      "$2^9$",
      "$2^{10}$",
      "$2^{11}$",
      "$2^{12}$"
    ],
    "correctIndex": 2,
    "explanation": "2 saat $= 120$ dakikadır. 20 dakikalık periyot sayısı: $120 / 20 = 6$ defa bölünür. Başlangıçtaki bakteri sayısı $16 = 2^4$ tür. Her bölünmede 2 katına çıktığından: $2^4 \\cdot 2^6 = 2^{4+6} = 2^{10}$ bakteri olur.",
    "hint": "Geçen toplam sürede kaç periyot olduğunu hesapla ve üs olarak ekle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 157,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\frac{1}{1 + 3^x} + \\frac{1}{1 + 3^{-x}}$ işleminin sonucu kaçtır?",
    "options": [
      "1",
      "2",
      "$3^x$",
      "$3^{-x}$",
      "$\\frac{1}{3}$"
    ],
    "correctIndex": 0,
    "explanation": "İkinci kesri düzenleyelim: $3^{-x} = \\frac{1}{3^x}$. $\\frac{1}{1 + \\frac{1}{3^x}} = \\frac{1}{\\frac{3^x + 1}{3^x}} = \\frac{3^x}{3^x + 1}$. İki kesri toplayalım: $\\frac{1}{3^x + 1} + \\frac{3^x}{3^x + 1} = \\frac{1 + 3^x}{3^x + 1} = 1$ bulunur.",
    "hint": "$3^{-x} = 1/3^x$ yazıp payda eşitle.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 158,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$x = 2^{a+1}$ ve $y = 2^{a-1}$ olduğuna göre, $x$'in $y$ türünden eşiti nedir?",
    "options": [
      "$2y$",
      "$4y$",
      "$8y$",
      "$y/2$",
      "$y/4$"
    ],
    "correctIndex": 1,
    "explanation": "İki ifadeyi taraf tarafa bölelim: $\\frac{x}{y} = \\frac{2^{a+1}}{2^{a-1}} = 2^{(a+1) - (a-1)} = 2^2 = 4$. Buradan $x = 4y$ bulunur.",
    "hint": "İki eşitliği taraf tarafa bölerek a bilinmeyenini yok et.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 159,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(0{,}25)^{x-2} = 8^{x+1}$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "-1",
      "$-\\frac{1}{5}$",
      "$\\frac{1}{5}$",
      "1",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "$0{,}25 = \\frac{25}{100} = \\frac{1}{4} = 2^{-2}$. Sol taraf: $(2^{-2})^{x-2} = 2^{-2x+4}$. Sağ taraf: $8^{x+1} = (2^3)^{x+1} = 2^{3x+3}$. Tabanlar eşit olduğundan: $-2x + 4 = 3x + 3 \\implies 5x = 1 \\implies x = \\frac{1}{5}$ dir! Şıklarda C seçeneği $1/5$.",
    "hint": "$0{,}25 = 2^{-2}$ ve $8 = 2^3$ dönüşümlerini yap.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 160,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$10^{12}$ baytlık bir sabit diskin kapasitesi kaç terabayttır ($1 \\text{ TB} = 10^{12} \\text{ bayt}$)?",
    "options": [
      "1",
      "10",
      "100",
      "1000",
      "0,1"
    ],
    "correctIndex": 0,
    "explanation": "Bilgi teknolojilerinde $1 \\text{ TB} = 10^{12} \\text{ bayt}$ kabul edildiğinde $10^{12} / 10^{12} = 1 \\text{ TB}$ olur.",
    "hint": "Birim dönüşümünde verilen üslü oranları birbirine böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 161,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(-1)^{101} + (-1)^{102} - (-1)^{103}$ işleminin sonucu kaçtır?",
    "options": [
      "-1",
      "0",
      "1",
      "2",
      "-2"
    ],
    "correctIndex": 2,
    "explanation": "$(-1)^{101} = -1$ (tek üs), $(-1)^{102} = 1$ (çift üs), $(-1)^{103} = -1$ (tek üs). İşlem: $(-1) + 1 - (-1) = 0 + 1 = 1$ bulunur.",
    "hint": "Negatif 1'in tek kuvvetleri -1, çift kuvvetleri +1'dir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 162,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$\\frac{10^5 \\cdot 10^{-2}}{10^{-4}}$ işleminin sonucu kaçtır?",
    "options": [
      "$10^7$",
      "$10^3$",
      "$10^{-1}$",
      "$10^{11}$",
      "$10^6$"
    ],
    "correctIndex": 0,
    "explanation": "Pay: $10^{5 + (-2)} = 10^3$. Bölme işlemi: $\\frac{10^3}{10^{-4}} = 10^{3 - (-4)} = 10^{3 + 4} = 10^7$ bulunur.",
    "hint": "Paydadaki negatif üs yukarıya artı olarak çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 163,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$2^x = 5$ olduğuna göre, $4^x + 2^{x+2}$ ifadesinin değeri kaçtır?",
    "options": [
      "25",
      "35",
      "45",
      "50",
      "65"
    ],
    "correctIndex": 2,
    "explanation": "$4^x = (2^x)^2 = 5^2 = 25$. $2^{x+2} = 2^x \\cdot 2^2 = 5 \\cdot 4 = 20$. Toplamları: $25 + 20 = 45$ bulunur.",
    "hint": "İfadeyi $2^x$ cinsinden parçalara ayır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 164,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$(x + 1)^3 = -64$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "-5",
      "-4",
      "-3",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "$-64 = (-4)^3$ tür. Üs tek (3) olduğundan tabanlar doğrudan eşittir: $x + 1 = -4 \\implies x = -5$ bulunur.",
    "hint": "-64 sayısı -4'ün küpüdür.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 165,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "question": "$3^x = a$ olduğuna göre, $9^{x-1}$ ifadesinin $a$ türünden eşiti nedir?",
    "options": [
      "$\\frac{a^2}{9}$",
      "$\\frac{a^2}{3}$",
      "$9a^2$",
      "$\\frac{a}{9}$",
      "$3a^2$"
    ],
    "correctIndex": 0,
    "explanation": "$9^{x-1} = \\frac{9^x}{9^1} = \\frac{(3^2)^x}{9} = \\frac{(3^x)^2}{9} = \\frac{a^2}{9}$ bulunur.",
    "hint": "$9^{x-1} = (3^x)^2 / 9$ olarak parçala.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 166,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{75} - \\sqrt{27} + \\sqrt{12}$ işleminin sonucu kaçtır?",
    "options": [
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "$5\\sqrt{3}$",
      "$6\\sqrt{3}$"
    ],
    "correctIndex": 2,
    "explanation": "Kök içlerini $a\\sqrt{b}$ biçiminde yazalım: $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$, $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$, $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$. İşlem: $5\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3} = 4\\sqrt{3}$ bulunur.",
    "hint": "Sayıları tam kare çarpanlarına ayırarak kök dışına çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 167,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{(-4)^2} + \\sqrt[3]{-27} - \\sqrt[4]{16}$ işleminin sonucu kaçtır?",
    "options": [
      "-1",
      "0",
      "1",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Çift dereceli kök dışarı mutlak değerle çıkar: $\\sqrt{(-4)^2} = |-4| = 4$. Tek dereceli kök işaretini korur: $\\sqrt[3]{-27} = -3$. $\\sqrt[4]{16} = 2$. İşlem: $4 + (-3) - 2 = 1 - 2 = -1$ bulunur.",
    "hint": "Çift dereceli köklerde $\\sqrt[2n]{x^{2n}} = |x|$ kuralına dikkat et.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 168,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\frac{\\sqrt{3} \\cdot \\sqrt{6}}{\\sqrt{2}}$ işleminin sonucu kaçtır?",
    "options": [
      "2",
      "3",
      "$\\sqrt{6}$",
      "$\\sqrt{3}$",
      "6"
    ],
    "correctIndex": 1,
    "explanation": "Ortak kök içinde yazalım: $\\sqrt{\\frac{3 \\cdot 6}{2}} = \\sqrt{\\frac{18}{2}} = \\sqrt{9} = 3$ bulunur.",
    "hint": "Aynı dereceli kökleri tek bir kök altında çarp ve böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 169,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\frac{6}{\\sqrt{3}}$ kesrinin paydasını rasyonel yaptığımızda elde edilen sonuç nedir?",
    "options": [
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "Pay ve paydayı $\\sqrt{3}$ ile çarpalım: $\\frac{6 \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$ bulunur.",
    "hint": "Paydadaki kökten kurtulmak için eşleniği olan $\\sqrt{3}$ ile genişlet.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 170,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\frac{1}{\\sqrt{5} - 2}$ ifadesinin eşiti aşağıdakilerden hangisidir?",
    "options": [
      "$\\sqrt{5} + 2$",
      "$\\sqrt{5} - 2$",
      "$2 - \\sqrt{5}$",
      "$\\frac{\\sqrt{5}+2}{3}$",
      "$5 + 2\\sqrt{5}$"
    ],
    "correctIndex": 0,
    "explanation": "Pay ve paydayı eşlenik olan $(\\sqrt{5} + 2)$ ile çarpalım: $\\frac{\\sqrt{5} + 2}{(\\sqrt{5} - 2)(\\sqrt{5} + 2)} = \\frac{\\sqrt{5} + 2}{5 - 4} = \\frac{\\sqrt{5} + 2}{1} = \\sqrt{5} + 2$ bulunur.",
    "hint": "İki kare farkından $(a-b)(a+b) = a^2 - b^2$ elde edilir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 171,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{x - 3}$ ifadesi bir gerçek sayı belirttiğine göre, $x$'in en geniş değer aralığı nedir?",
    "options": [
      "$[3, \\infty)$",
      "$(3, \\infty)$",
      "$(-\\infty, 3]$",
      "$[-3, \\infty)$",
      "$\\mathbb{R}$"
    ],
    "correctIndex": 0,
    "explanation": "Çift dereceli köklü ifadelerin reel sayı belirtmesi için kök içinin sıfırdan büyük veya eşit olması gerekir: $x - 3 \\ge 0 \\implies x \\ge 3$. Yani $[3, \\infty)$ aralığıdır.",
    "hint": "Karekök içi negatif olamaz: içi $\\ge 0$ olmalıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 172,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{8 + 2\\sqrt{15}}$ ifadesinin en sade hali aşağıdakilerden hangisidir?",
    "options": [
      "$\\sqrt{5} + \\sqrt{3}$",
      "$\\sqrt{5} - \\sqrt{3}$",
      "$\\sqrt{6} + \\sqrt{2}$",
      "$\\sqrt{15} + 1$",
      "$2\\sqrt{2} + \\sqrt{15}$"
    ],
    "correctIndex": 0,
    "explanation": "$\\sqrt{a + 2\\sqrt{b}}$ kuralına göre çarpımları 15, toplamları 8 olan iki sayı $5$ ve $3$'tür ($5 \\cdot 3 = 15$ ve $5 + 3 = 8$). Dolayısıyla $\\sqrt{8 + 2\\sqrt{15}} = \\sqrt{5} + \\sqrt{3}$ olur.",
    "hint": "Çarpımları 15, toplamları 8 olan iki pozitif sayıyı bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 173,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{2x - 1} = 5$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{13\\}$",
      "$\\{12\\}$",
      "$\\{11\\}$",
      "$\\{14\\}$",
      "$\\{26\\}$"
    ],
    "correctIndex": 0,
    "explanation": "Her iki tarafın karesini alalım: $(\\sqrt{2x - 1})^2 = 5^2 \\implies 2x - 1 = 25 \\implies 2x = 26 \\implies x = 13$ bulunur.",
    "hint": "Kökten kurtulmak için iki tarafın da karesini al.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 174,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$2\\sqrt{3}$ sayısı kök içine alındığında aşağıdakilerden hangisine eşit olur?",
    "options": [
      "$\\sqrt{6}$",
      "$\\sqrt{12}$",
      "$\\sqrt{18}$",
      "$\\sqrt{24}$",
      "$\\sqrt{36}$"
    ],
    "correctIndex": 1,
    "explanation": "Dışarıdaki sayı kök derecesi kadar üs alarak içeri girer: $2\\sqrt{3} = \\sqrt{2^2 \\cdot 3} = \\sqrt{4 \\cdot 3} = \\sqrt{12}$ olur.",
    "hint": "Katsayı içeri girerken karesi alınarak girer.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 175,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{7 - 2\\sqrt{10}}$ ifadesinin eşiti nedir?",
    "options": [
      "$\\sqrt{5} - \\sqrt{2}$",
      "$\\sqrt{5} + \\sqrt{2}$",
      "$\\sqrt{10} - 1$",
      "$5 - \\sqrt{2}$",
      "$\\sqrt{7} - \\sqrt{10}$"
    ],
    "correctIndex": 0,
    "explanation": "Çarpımları 10, toplamları 7 olan sayılar 5 ve 2'dir. Arada eksi işareti olduğundan büyük olan öne yazılır: $\\sqrt{5} - \\sqrt{2}$ bulunur.",
    "hint": "$\\sqrt{a - 2\\sqrt{b}} = \\sqrt{x} - \\sqrt{y}$ ($x > y$) kuralını hatırla.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 176,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{2} \\cdot \\sqrt[3]{2}$ çarpımının tek kök altında ifadesi nedir?",
    "options": [
      "$\\sqrt[5]{4}$",
      "$\\sqrt[6]{32}$",
      "$\\sqrt[6]{8}$",
      "$\\sqrt[6]{16}$",
      "$\\sqrt[5]{2}$"
    ],
    "correctIndex": 1,
    "explanation": "Kök derecelerini EKOK(2, 3) = 6'da eşitleyelim: $\\sqrt{2} = \\sqrt[6]{2^3} = \\sqrt[6]{8}$. $\\sqrt[3]{2} = \\sqrt[6]{2^2} = \\sqrt[6]{4}$. Çarpımları: $\\sqrt[6]{8 \\cdot 4} = \\sqrt[6]{32}$ bulunur.",
    "hint": "Kök derecelerini genişleterek aynı dereceye getir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 177,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{x + 2} = x$ denkleminin çözüm kümesi nedir?",
    "options": [
      "$\\{-1, 2\\}$",
      "$\\{2\\}$",
      "$\\{-1\\}$",
      "$\\emptyset$",
      "$\\{4\\}$"
    ],
    "correctIndex": 1,
    "explanation": "Kare alalım: $x + 2 = x^2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$. $x = 2$ veya $x = -1$. Kök denklemlerinde sağ taraf negatif olamaz ($x \\ge 0$). $x = -1$ için $\\sqrt{1} \\neq -1$ elenir. Tek kök $x = 2$ dir.",
    "hint": "Kök dışı negatif olamaz; bulduğun kökleri orijinal denklemde test et.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 178,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\frac{\\sqrt{50} + \\sqrt{18}}{\\sqrt{8}}$ işleminin sonucu kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Tüm kökleri $\\sqrt{2}$ cinsinden yazalım: $\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$. İşlem: $\\frac{5\\sqrt{2} + 3\\sqrt{2}}{2\\sqrt{2}} = \\frac{8\\sqrt{2}}{2\\sqrt{2}} = 4$ bulunur.",
    "hint": "Her terimi $a\\sqrt{2}$ şeklinde açıp $\\sqrt{2}$'leri sadeleştir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 179,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{1 - \\frac{9}{25}}$ işleminin sonucu kaçtır?",
    "options": [
      "$\\frac{4}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{16}{25}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{5}$"
    ],
    "correctIndex": 0,
    "explanation": "Kök içini payda eşitleyerek toplayalım: $\\sqrt{\\frac{25 - 9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{\\sqrt{16}}{\\sqrt{25}} = \\frac{4}{5}$ bulunur.",
    "hint": "Önce kök içindeki çıkarma işlemini yap, sonra kök dışına çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 180,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$a = \\sqrt{2}$, $b = \\sqrt[3]{3}$, $c = \\sqrt[6]{6}$ olduğuna göre doğru sıralama nedir?",
    "options": [
      "$a < c < b$",
      "$c < a < b$",
      "$b < a < c$",
      "$a < b < c$",
      "$c < b < a$"
    ],
    "correctIndex": 1,
    "explanation": "Kök derecelerini 6'da eşitleyelim: $a = \\sqrt[6]{2^3} = \\sqrt[6]{8}$, $b = \\sqrt[6]{3^2} = \\sqrt[6]{9}$, $c = \\sqrt[6]{6}$. Kök içi küçük olan küçüktür: $6 < 8 < 9 \\implies c < a < b$ bulunur.",
    "hint": "Tüm sayıları 6. dereceden kök içine alarak kök içlerini karşılaştır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 181,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\dots}}}$ sonsuz kök ifadesinin değeri kaçtır?",
    "options": [
      "4",
      "5",
      "6",
      "10",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "İfadeye $x$ diyelim: $\\sqrt{20 + x} = x \\implies 20 + x = x^2 \\implies x^2 - x - 20 = 0 \\implies (x - 5)(x + 4) = 0$. $x > 0$ olduğundan $x = 5$ tir. (Kural: Ardışık iki çarpan $4 \\cdot 5 = 20$, arada artı varsa büyük olan yani 5 cevap olur).",
    "hint": "Tüm ifadeye x deyip karesini al.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 182,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt[3]{2^{x-1}} = 4$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "Rasyonel üs olarak yazalım: $2^{\\frac{x-1}{3}} = 4 = 2^2$. Üsleri eşitleyelim: $\\frac{x - 1}{3} = 2 \\implies x - 1 = 6 \\implies x = 7$ bulunur.",
    "hint": "$\\sqrt[n]{a^m} = a^{m/n}$ rasyonel üs kuralını kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 183,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$(\\sqrt{3} + \\sqrt{2})^2 - 2\\sqrt{6}$ işleminin sonucu kaçtır?",
    "options": [
      "1",
      "5",
      "6",
      "$2\\sqrt{6}$",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "Tam kare açılımı: $(\\sqrt{3} + \\sqrt{2})^2 = (\\sqrt{3})^2 + 2\\sqrt{3}\\sqrt{2} + (\\sqrt{2})^2 = 3 + 2\\sqrt{6} + 2 = 5 + 2\\sqrt{6}$. $2\\sqrt{6}$ çıkarırsak: $5 + 2\\sqrt{6} - 2\\sqrt{6} = 5$ bulunur.",
    "hint": "$(a+b)^2 = a^2 + 2ab + b^2$ özdeşliğini kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 184,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{4{,}9 \\cdot 10^{-1}}$ işleminin sonucu kaçtır?",
    "options": [
      "0,07",
      "0,7",
      "7",
      "0,49",
      "0,049"
    ],
    "correctIndex": 1,
    "explanation": "$4{,}9 \\cdot 10^{-1} = 0{,}49 = \\frac{49}{100}$. Kök dışına çıkarırsak: $\\sqrt{\\frac{49}{100}} = \\frac{7}{10} = 0{,}7$ bulunur.",
    "hint": "Sayıyı rasyonel kesir olarak yazıp kök al.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 185,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{x + 1} - \\sqrt{x - 2} = 1$ denklemini sağlayan $x$ değeri kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "explanation": "$\\sqrt{x + 1} = 1 + \\sqrt{x - 2}$. Kare alalım: $x + 1 = 1 + 2\\sqrt{x - 2} + (x - 2) \\implies x + 1 = x - 1 + 2\\sqrt{x - 2} \\implies 2 = 2\\sqrt{x - 2} \\implies 1 = \\sqrt{x - 2} \\implies 1 = x - 2 \\implies x = 3$ bulunur.",
    "hint": "Köklü terimlerden birini diğer tarafa atıp her iki tarafın karesini al.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 186,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{18} + \\sqrt{32} - \\sqrt{50}$ işleminin sonucu kaçtır?",
    "options": [
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$3\\sqrt{2}$",
      "$4\\sqrt{2}$",
      "$0$"
    ],
    "correctIndex": 1,
    "explanation": "$\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{32} = 4\\sqrt{2}$, $\\sqrt{50} = 5\\sqrt{2}$. İşlem: $3\\sqrt{2} + 4\\sqrt{2} - 5\\sqrt{2} = 2\\sqrt{2}$ bulunur.",
    "hint": "Tüm sayıları $a\\sqrt{2}$ olarak yaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 187,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\frac{1}{\\sqrt{3} + \\sqrt{2}} + \\frac{1}{\\sqrt{3} - \\sqrt{2}}$ işleminin sonucu kaçtır?",
    "options": [
      "$2\\sqrt{3}$",
      "$2\\sqrt{2}$",
      "$\\sqrt{6}$",
      "2",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Eşleniklerle çarpalım: $(\\sqrt{3} - \\sqrt{2}) + (\\sqrt{3} + \\sqrt{2}) = 2\\sqrt{3}$. Paydalar $3 - 2 = 1$ dir. Sonuç $2\\sqrt{3}$ olur.",
    "hint": "Her iki kesri kendi eşleniğiyle genişlet.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 188,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{2^x \\cdot 2^x \\cdot 2^x} = 64$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Kök içi: $\\sqrt{2^{3x}} = 2^{\\frac{3x}{2}}$. $64 = 2^6$. Tabanlar eşit: $\\frac{3x}{2} = 6 \\implies 3x = 12 \\implies x = 4$ bulunur.",
    "hint": "Kök içindeki üsleri toplayıp rasyonel üs olarak yaz.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 189,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{9 - 4\\sqrt{5}}$ ifadesinin eşiti nedir?",
    "options": [
      "$\\sqrt{5} - 2$",
      "$\\sqrt{5} + 2$",
      "$3 - \\sqrt{5}$",
      "$2 - \\sqrt{5}$",
      "$\\sqrt{5} - 1$"
    ],
    "correctIndex": 0,
    "explanation": "İçteki kökün önünde 2 olmalıdır. $4\\sqrt{5} = 2(2\\sqrt{5}) = 2\\sqrt{4 \\cdot 5} = 2\\sqrt{20}$. İfade $\\sqrt{9 - 2\\sqrt{20}}$ olur. Çarpımları 20, toplamları 9 olan sayılar 5 ve 4'tür. Sonuç: $\\sqrt{5} - \\sqrt{4} = \\sqrt{5} - 2$ bulunur.",
    "hint": "İçteki kökün başındaki 4'ün 2'sini kökün içine 4 olarak gönder.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 190,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "Alanı $72\\text{ cm}^2$ olan bir karenin bir kenar uzunluğu kaç cm'dir?",
    "options": [
      "$6\\sqrt{2}$",
      "$8\\sqrt{2}$",
      "$3\\sqrt{6}$",
      "$12$",
      "$4\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "explanation": "Karenin alanı $a^2 = 72$ ise bir kenarı $a = \\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}\\text{ cm}$ dir.",
    "hint": "Alanın karekökünü al.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 191,
    "unitId": "koklu_sayilar",
    "unitTitle": "Köklü İfadeler ve Denklemler",
    "question": "$\\sqrt{x + \\sqrt{x}} = 2$ olduğuna göre, $x$ kaçtır?",
    "options": [
      "$\\frac{7 - \\sqrt{17}}{2}$",
      "$\\frac{9 - \\sqrt{17}}{2}$",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "Kare alalım: $x + \\sqrt{x} = 4$. $\\sqrt{x} = u$ diyelim: $u^2 + u - 4 = 0$. $u = \\frac{-1 + \\sqrt{17}}{2}$ ($u > 0$). $x = u^2 = \\frac{1 - 2\\sqrt{17} + 17}{4} = \\frac{18 - 2\\sqrt{17}}{4} = \\frac{9 - \\sqrt{17}}{2}$ bulunur.",
    "hint": "$\\sqrt{x} = u$ değişken değiştirmesi yap.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 192,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "$\\frac{a}{b} = \\frac{3}{5}$ ve $2a + b = 44$ olduğuna göre, $b - a$ farkı kaçtır?",
    "options": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "correctIndex": 1,
    "explanation": "$a = 3k$ ve $b = 5k$ diyelim. $2(3k) + 5k = 44 \\implies 6k + 5k = 44 \\implies 11k = 44 \\implies k = 4$. $b - a = 5k - 3k = 2k = 2(4) = 8$ bulunur.",
    "hint": "Oran sabitine k diyerek bilinmeyenleri k cinsinden yaz.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 193,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "$a$ sayısı $b$ ile doğru, $c$ ile ters orantılıdır. $a = 6$ ve $b = 4$ iken $c = 2$ olduğuna göre, $b = 6$ ve $c = 3$ iken $a$ kaçtır?",
    "options": [
      "4",
      "6",
      "8",
      "9",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Orantı sabiti: $\\frac{a \\cdot c}{b} = k$. İlk değerlerle: $k = \\frac{6 \\cdot 2}{4} = 3$. İkinci durumda: $\\frac{a \\cdot 3}{6} = 3 \\implies \\frac{a}{2} = 3 \\implies a = 6$ bulunur.",
    "hint": "Doğru orantılı olan paydaya, ters orantılı olan paya yazılır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 194,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir sınıftaki kızların sayısının erkeklerin sayısına oranı $\\frac{4}{5}$ tir. Sınıf mevcudu 36 olduğuna göre kız öğrenci sayısı kaçtır?",
    "options": [
      "14",
      "16",
      "18",
      "20",
      "22"
    ],
    "correctIndex": 1,
    "explanation": "Kız $= 4k$, Erkek $= 5k$. Toplam $= 9k = 36 \\implies k = 4$. Kız sayısı $= 4 \\cdot 4 = 16$ dır.",
    "hint": "Toplam kat sayısını mevcuda eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 195,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir musluk boş bir havuzu 12 saatte, ikinci musluk ise 24 saatte doldurmaktadır. İkisi birlikte açılırsa boş havuz kaç saatte dolar?",
    "options": [
      "6",
      "8",
      "9",
      "10",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Birlikte çalışma formülü: $\\frac{1}{t} = \\frac{1}{12} + \\frac{1}{24} = \\frac{2 + 1}{24} = \\frac{3}{24} = \\frac{1}{8} \\implies t = 8$ saatte dolar.",
    "hint": "$1/t = 1/t_1 + 1/t_2$ işçi/havuz formülünü kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 196,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Hangi sayının 3 katının 5 eksiği, aynı sayının 2 katının 7 fazlasına eşittir?",
    "options": [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "Denklem kuralım: $3x - 5 = 2x + 7 \\implies 3x - 2x = 7 + 5 \\implies x = 12$ bulunur.",
    "hint": "Cümleyi matematiksel denkleme dök: $3x - 5 = 2x + 7$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 197,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir babanın yaşı 36, çocuğunun yaşı 12'dir. Kaç yıl sonra babanın yaşı, çocuğunun yaşının 2 katı olur?",
    "options": [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "$x$ yıl sonra baba $36 + x$, çocuk $12 + x$ yaşında olur. $36 + x = 2(12 + x) \\implies 36 + x = 24 + 2x \\implies x = 12$ yıl sonra.",
    "hint": "Her ikisine de x yıl ekleyip 2 katına eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 198,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Maliyeti 400 TL olan bir ürün %25 kârla kaç TL'ye satılır?",
    "options": [
      "450",
      "480",
      "500",
      "520",
      "550"
    ],
    "correctIndex": 2,
    "explanation": "Kâr miktarı: $400 \\cdot \\frac{25}{100} = 100$ TL. Satış fiyatı: $400 + 100 = 500$ TL olur.",
    "hint": "Maliyetin %25'ini bulup maliyete ekle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 199,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "%30 zararla 140 TL'ye satılan bir ürünün maliyet fiyatı kaç TL'dir?",
    "options": [
      "180",
      "190",
      "200",
      "210",
      "220"
    ],
    "correctIndex": 2,
    "explanation": "%30 zararla satış, maliyetin %70'idir. $M \\cdot \\frac{70}{100} = 140 \\implies M = 140 \\cdot \\frac{100}{70} = 200$ TL bulunur.",
    "hint": "%100 - %30 = %70 satış fiyatıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 200,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Şeker oranı %20 olan 40 kg şekerli su ile şeker oranı %40 olan 60 kg şekerli su karıştırılırsa yeni karışımın şeker oranı yüzde kaç olur?",
    "options": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "correctIndex": 2,
    "explanation": "Toplam saf şeker: $40 \\cdot 0{,}20 + 60 \\cdot 0{,}40 = 8 + 24 = 32$ kg. Toplam karışım: $40 + 60 = 100$ kg. Yüzde: $\\frac{32}{100} = \\%32$ bulunur.",
    "hint": "Saf madde miktarını toplam karışıma böl.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 201,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Saatteki hızı 80 km olan bir araç, 400 km'lik bir yolu kaç saatte tamamlar?",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 1,
    "explanation": "Yol formülü: $x = v \\cdot t \\implies 400 = 80 \\cdot t \\implies t = 5$ saat bulunur.",
    "hint": "Yol = Hız $\\times$ Zaman formülünü kullan.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 202,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Aralarında 450 km mesafe bulunan iki şehirden hızları saatte 70 km ve 80 km olan iki araç birbirine doğru aynı anda hareket ediyor. Kaç saat sonra karşılaşırlar?",
    "options": [
      "2,5",
      "3",
      "3,5",
      "4",
      "4,5"
    ],
    "correctIndex": 1,
    "explanation": "Birbirine doğru harekette hızlar toplanır: $v_{\\text{toplam}} = 70 + 80 = 150\\text{ km/sa}$. Süre: $t = \\frac{450}{150} = 3$ saat sonra karşılaşırlar.",
    "hint": "Zıt yönde birbirine doğru gelen araçların hızları toplanır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 203,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir kesrin değeri $\\frac{2}{3}$ tür. Bu kesrin payına 4 eklenip paydasından 2 çıkarılırsa kesrin değeri $\\frac{6}{5}$ oluyor. Başlangıçtaki kesrin pay ve paydasının toplamı kaçtır?",
    "options": [
      "15",
      "20",
      "25",
      "30",
      "35"
    ],
    "correctIndex": 1,
    "explanation": "Kesir $\\frac{2k}{3k}$ olsun. $\\frac{2k + 4}{3k - 2} = \\frac{6}{5} \\implies 10k + 20 = 18k - 12 \\implies 8k = 32 \\implies k = 4$. Toplam $2k + 3k = 5k = 5(4) = 20$ bulunur.",
    "hint": "Kesre 2k/3k de ve verilen işlemleri uygulayarak içler dışlar çarpımı yap.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 204,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir öğrenci bir kitabın önce $\\frac{1}{3}$'ünü, sonra kalanın $\\frac{1}{2}$'sini okuyor. Geriye 40 sayfa kaldığına göre, kitabın tamamı kaç sayfadır?",
    "options": [
      "100",
      "120",
      "150",
      "160",
      "180"
    ],
    "correctIndex": 1,
    "explanation": "Kitaba $6x$ sayfa diyelim. Önce $\\frac{1}{3} \\cdot 6x = 2x$ okur, geriye $4x$ kalır. Sonra kalanın yarısı: $\\frac{1}{2} \\cdot 4x = 2x$ okur. Geriye $4x - 2x = 2x$ sayfa kalır. $2x = 40 \\implies x = 20$. Tamamı: $6x = 6 \\cdot 20 = 120$ sayfadır.",
    "hint": "Paydaların çarpımını (3 x 2 = 6) kitabın tamamı olarak seç.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 205,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir miktar para 3, 4 ve 5 yaşlarındaki üç çocuğa yaşlarıyla doğru orantılı olarak dağıtılıyor. En küçük çocuk 150 TL aldığına göre toplam kaç TL dağıtılmıştır?",
    "options": [
      "450",
      "500",
      "600",
      "720",
      "750"
    ],
    "correctIndex": 2,
    "explanation": "Paylar: $3k, 4k, 5k$. En küçük çocuk: $3k = 150 \\implies k = 50$ TL. Toplam para: $3k + 4k + 5k = 12k = 12 \\cdot 50 = 600$ TL bulunur.",
    "hint": "3k = 150 eşitliğinden k'yı bul ve tüm k'ları topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 206,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir sınıftaki öğrenciler sıralara ikişer ikişer oturursa 5 öğrenci ayakta kalıyor, üçer üçer oturursa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
    "options": [
      "21",
      "23",
      "25",
      "27",
      "29"
    ],
    "correctIndex": 3,
    "explanation": "Sıra sayısına $x$ diyelim. Öğrenci sayısı iki durumda da eşittir: $2x + 5 = 3(x - 2) \\implies 2x + 5 = 3x - 6 \\implies x = 11$ sıra vardır. Öğrenci sayısı: $2(11) + 5 = 27$ bulunur.",
    "hint": "Sıra sayısına x diyerek iki duruma göre öğrenci sayısını eşitle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 207,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "12 işçinin günde 8 saat çalışarak 15 günde bitirdiği bir işi, aynı nitelikteki 10 işçi günde 6 saat çalışarak kaç günde bitirir?",
    "options": [
      "18",
      "20",
      "24",
      "25",
      "30"
    ],
    "correctIndex": 2,
    "explanation": "İş miktarları aynıdır: $12 \\cdot 8 \\cdot 15 = 10 \\cdot 6 \\cdot x \\implies 1440 = 60x \\implies x = 24$ günde bitirir.",
    "hint": "Bileşik orantıda yapılan işlerin oranını etkenlerin oranına eşitle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 208,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir torbadaki kırmızı bilyelerin sayısının mavi bilyelerin sayısına oranı $\\frac{3}{7}$ dir. Torbaya 4 kırmızı bilye eklenip torbadan 2 mavi bilye çıkarılırsa oran $\\frac{1}{2}$ oluyor. Başlangıçta torbada toplam kaç bilye vardır?",
    "options": [
      "80",
      "90",
      "100",
      "110",
      "120"
    ],
    "correctIndex": 2,
    "explanation": "Kırmızı $= 3k$, Mavi $= 7k$. $\\frac{3k + 4}{7k - 2} = \\frac{1}{2} \\implies 6k + 8 = 7k - 2 \\implies k = 10$. Toplam $3k + 7k = 10k = 10(10) = 100$ bilye vardır.",
    "hint": "Kırmızıya 3k, maviye 7k de ve denklemi kur.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 209,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "12 ve 18 sayılarının aritmetik ortalaması ile geometrik ortalamasının toplamı kaçtır?",
    "options": [
      "$15 + 6\\sqrt{6}$",
      "$15 + 3\\sqrt{6}$",
      "$12 + 6\\sqrt{6}$",
      "$18 + 6\\sqrt{6}$",
      "$30$"
    ],
    "correctIndex": 0,
    "explanation": "Aritmetik ortalama: $\\frac{12 + 18}{2} = 15$. Geometrik ortalama: $\\sqrt{12 \\cdot 18} = \\sqrt{216} = \\sqrt{36 \\cdot 6} = 6\\sqrt{6}$. Toplamları: $15 + 6\\sqrt{6}$ bulunur.",
    "hint": "Aritmetik ortalama $(a+b)/2$, geometrik ortalama $\\sqrt{a \\cdot b}$ formülüyle bulunur.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 210,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir ürünün etiket fiyatına %20 indirim yapıldıktan sonra indirimli fiyat üzerinden tekrar %10 indirim yapılıyor. Toplam indirim yüzde kaçtır?",
    "options": [
      "26",
      "28",
      "30",
      "32",
      "34"
    ],
    "correctIndex": 1,
    "explanation": "Başlangıç fiyatı 100 TL olsun. %20 indirimle: $100 - 20 = 80$ TL. 80 TL üzerinden %10 indirim: $80 \\cdot 0{,}10 = 8$ TL indirim $\\implies 80 - 8 = 72$ TL. Toplam indirim: $100 - 72 = 28$ TL, yani %28'dir.",
    "hint": "Ürünün ilk fiyatına 100 TL vererek adım adım indirimleri hesapla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 211,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Tuz oranı %30 olan 60 litre tuzlu sudan kaç litre su buharlaştırılırsa yeni karışımın tuz oranı %45 olur?",
    "options": [
      "10",
      "15",
      "20",
      "25",
      "30"
    ],
    "correctIndex": 2,
    "explanation": "Saf tuz miktarı değişmez: $60 \\cdot 0{,}30 = 18$ litre tuz. Kalan karışım $x$ litre olsun: $x \\cdot 0{,}45 = 18 \\implies x = \\frac{18}{0{,}45} = 40$ litre. Buharlaşan su: $60 - 40 = 20$ litredir.",
    "hint": "Su buharlaşırken tuz miktarı sabit kalır.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 212,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir araç gideceği yolun $\\frac{2}{5}$'ini saatte 60 km hızla, kalanını ise saatte 90 km hızla gidiyor. Tüm yol boyunca aracın ortalama hızı saatte kaç km'dir?",
    "options": [
      "72",
      "75",
      "76",
      "78",
      "80"
    ],
    "correctIndex": 1,
    "explanation": "Yolun tamamına 450 km diyelim. İlk kısım: $\\frac{2}{5} \\cdot 450 = 180$ km. Geçen süre $t_1 = 180 / 60 = 3$ saat. İkinci kısım: $450 - 180 = 270$ km. Geçen süre $t_2 = 270 / 90 = 3$ saat. Toplam süre: $3 + 3 = 6$ saat. Ortalama hız: $v_{\\text{ort}} = \\frac{\\text{Toplam Yol}}{\\text{Toplam Süre}} = \\frac{450}{6} = 75\\text{ km/sa}$ bulunur.",
    "hint": "Ortalama hız = Toplam Yol / Toplam Zaman formülünü kullan.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 213,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir manav elindeki elmaların kilogramını 20 TL'den satarsa 300 TL kâr, 12 TL'den satarsa 100 TL zarar ediyor. Manavın kaç kg elması vardır?",
    "options": [
      "40",
      "50",
      "60",
      "70",
      "80"
    ],
    "correctIndex": 1,
    "explanation": "Elma miktarına $x$ kg, maliyete $M$ diyelim. $20x = M + 300$ ve $12x = M - 100$. İki denklemi taraf tarafa çıkaralım: $20x - 12x = (M + 300) - (M - 100) \\implies 8x = 400 \\implies x = 50$ kg elma vardır.",
    "hint": "İki durum arasındaki gelir farkı kâr-zarar farkına eşittir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 214,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Ali'nin çalışma hızı Veli'nin çalışma hızının 3 katıdır. İkisinin birlikte 6 günde bitirdiği bir işi Veli tek başına kaç günde bitirir?",
    "options": [
      "12",
      "18",
      "24",
      "28",
      "30"
    ],
    "correctIndex": 2,
    "explanation": "Veli günde 1 birim iş yapsın, Ali günde 3 birim iş yapar. Birlikte günde $1 + 3 = 4$ birim iş yaparlar. Toplam iş $= 4 \\cdot 6 = 24$ birimdir. Veli tek başına: $24 / 1 = 24$ günde bitirir.",
    "hint": "Hızları günlük iş miktarı gibi düşünüp toplam işi bul.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 215,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir telin bir ucundan $\\frac{1}{6}$'sı kesilirse orta noktası 4 cm kaymaktadır. Telin başlangıçtaki boyu kaç cm'dir?",
    "options": [
      "36",
      "48",
      "60",
      "72",
      "84"
    ],
    "correctIndex": 1,
    "explanation": "Bir telin bir ucundan $x$ kadar kesilirse orta noktası kesilen parçanın yarısı ($x/2$) kadar kayar. $\\frac{\\text{Kesilen}}{2} = 4 \\implies \\text{Kesilen parça} = 8$ cm'dir. Bu da telin $\\frac{1}{6}$'sı olduğuna göre telin boyu: $8 \\cdot 6 = 48$ cm bulunur.",
    "hint": "Orta nokta kayma miktarı kesilen parçanın daima yarısıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 216,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "$\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{4}$ ve $a^2 + b^2 + c^2 = 116$ olduğuna göre, pozitif $a + b + c$ toplamı kaçtır?",
    "options": [
      "16",
      "18",
      "20",
      "22",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "$a = 2k, b = 3k, c = 4k$. $(2k)^2 + (3k)^2 + (4k)^2 = 4k^2 + 9k^2 + 16k^2 = 29k^2 = 116 \\implies k^2 = 4 \\implies k = 2$ ($k > 0$). Toplam: $a + b + c = 2k + 3k + 4k = 9k = 9(2) = 18$ bulunur.",
    "hint": "k sabitini kareler toplamında yerine koy.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 217,
    "unitId": "oran_oranti",
    "unitTitle": "Oran-Orantı ve Problemler",
    "question": "Bir sınıftaki öğrencilerin yaş ortalaması 15'tir. Sınıfa yaş ortalaması 18 olan 6 yeni öğrenci katıldığında tüm sınıfın yaş ortalaması 16 olduğuna göre, başlangıçta sınıfta kaç öğrenci vardı?",
    "options": [
      "10",
      "12",
      "14",
      "16",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "Başlangıçtaki öğrenci sayısı $n$ olsun. Yaşlar toplamı: $15n$. Gelenlerin yaşları: $6 \\cdot 18 = 108$. Yeni ortalama: $\\frac{15n + 108}{n + 6} = 16 \\implies 15n + 108 = 16n + 96 \\implies n = 12$ bulunur.",
    "hint": "Yaşlar toplamını kişi sayısına bölerek yeni ortalamaya eşitle.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 218,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir üçgenin iç açıları $2, 3$ ve $4$ sayıları ile orantılıdır. Bu üçgenin en büyük iç açısı kaç derecedir?",
    "options": [
      "60°",
      "70°",
      "80°",
      "90°",
      "100°"
    ],
    "correctIndex": 2,
    "explanation": "İç açılar toplamı $180^\\circ$ dir: $2k + 3k + 4k = 180 \\implies 9k = 180 \\implies k = 20^\\circ$. En büyük açı $4k = 4(20) = 80^\\circ$ bulunur.",
    "hint": "Açıların toplamını 180 dereceye eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 219,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir üçgende iki iç açının ölçüleri $45^\\circ$ ve $65^\\circ$ olduğuna göre, bu açılara komşu olmayan dış açının ölçüsü kaç derecedir?",
    "options": [
      "100°",
      "105°",
      "110°",
      "115°",
      "120°"
    ],
    "correctIndex": 2,
    "explanation": "Bir üçgende bir dış açının ölçüsü, kendisine komşu olmayan iki iç açının ölçüleri toplamına eşittir: $45^\\circ + 65^\\circ = 110^\\circ$ bulunur.",
    "hint": "Dış açı teoremi: Dış açı = komşu olmayan iki iç açının toplamı.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 220,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Kenar uzunlukları 5 cm ve 9 cm olan bir üçgenin üçüncü kenarının alabileceği kaç farklı tam sayı değeri vardır?",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "Üçgen eşitsizliği: $|9 - 5| < x < 9 + 5 \\implies 4 < x < 14$. Alabileceği tam sayılar: $5, 6, 7, 8, 9, 10, 11, 12, 13$. Terim sayısı: $13 - 5 + 1 = 9$ tanedir.",
    "hint": "Üçgen eşitsizliği: $|b - c| < a < b + c$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 221,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir dik üçgenin dik kenar uzunlukları 6 cm ve 8 cm olduğuna göre, hipotenüs uzunluğu kaç cm'dir?",
    "options": [
      "9",
      "10",
      "12",
      "14",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Pisagor teoremi: $c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100 \\implies c = 10\\text{ cm}$ (3-4-5 özel üçgeninin 2 katı) bulunur.",
    "hint": "3-4-5 özel dik üçgeninin katlarını hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 222,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Hipotenüs uzunluğu 13 cm, bir dik kenarı 5 cm olan dik üçgenin diğer dik kenarı kaç cm'dir?",
    "options": [
      "8",
      "10",
      "11",
      "12",
      "14"
    ],
    "correctIndex": 3,
    "explanation": "5-12-13 özel dik üçgenidir: $b^2 = 13^2 - 5^2 = 169 - 25 = 144 \\implies b = 12\\text{ cm}$ bulunur.",
    "hint": "5-12-13 özel dik üçgenini hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 223,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "$30^\\circ - 60^\\circ - 90^\\circ$ özel üçgeninde hipotenüs uzunluğu 12 cm olduğuna göre, $60^\\circ$'lik açının karşısındaki kenar uzunluğu kaç cm'dir?",
    "options": [
      "$6$",
      "$6\\sqrt{2}$",
      "$6\\sqrt{3}$",
      "$8\\sqrt{3}$",
      "$12\\sqrt{3}$"
    ],
    "correctIndex": 2,
    "explanation": "$30^\\circ$'nin karşısındaki kenar hipotenüsün yarısıdır: $12 / 2 = 6\\text{ cm}$. $60^\\circ$'nin karşısındaki kenar ise $30^\\circ$'nin karşısının $\\sqrt{3}$ katıdır: $6\\sqrt{3}\\text{ cm}$ bulunur.",
    "hint": "30'un karşısı hipotenüsün yarısı, 60'ın karşısı onun kök 3 katıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 224,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "$45^\\circ - 45^\\circ - 90^\\circ$ ikizkenar dik üçgeninde hipotenüs $10\\text{ cm}$ olduğuna göre, dik kenarlardan biri kaç cm'dir?",
    "options": [
      "$5$",
      "$5\\sqrt{2}$",
      "$5\\sqrt{3}$",
      "$10\\sqrt{2}$",
      "$2\\sqrt{5}$"
    ],
    "correctIndex": 1,
    "explanation": "İkizkenar dik üçgende hipotenüs dik kenarın $\\sqrt{2}$ katıdır: $a\\sqrt{2} = 10 \\implies a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}\\text{ cm}$ bulunur.",
    "hint": "Dik kenar = Hipotenüs / $\\sqrt{2}$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 225,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde dik açı $A$ köşesindedir. Hipotenüse ait yükseklik $h$, hipotenüsü 4 cm ve 9 cm'lik iki parçaya ayırdığına göre, $h$ kaç cm'dir?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "explanation": "Öklid bağıntısı: $h^2 = p \\cdot k \\implies h^2 = 4 \\cdot 9 = 36 \\implies h = 6\\text{ cm}$ bulunur.",
    "hint": "Öklid teoreminde yükseklik kuralı: $h^2 = p \\cdot k$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 226,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Benzerlik oranı $\\frac{2}{3}$ olan iki benzer üçgenin alanları oranı kaçtır?",
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{4}{9}$",
      "$\\frac{8}{27}$",
      "$\\frac{\\sqrt{2}}{\\sqrt{3}}$"
    ],
    "correctIndex": 2,
    "explanation": "Benzer iki geometrik şeklin alanları oranı, benzerlik oranının karesine eşittir: $k = \\frac{2}{3} \\implies k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ bulunur.",
    "hint": "Alanlar oranı benzerlik oranının karesidir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 227,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde $A$ açısına ait iç açıortay $[AN]$, $BC$ kenarını $BN = 3\\text{ cm}$ ve $NC = 5\\text{ cm}$ olarak bölmektedir. $AB = 6\\text{ cm}$ olduğuna göre, $AC$ kenarı kaç cm'dir?",
    "options": [
      "8",
      "9",
      "10",
      "12",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "İç açıortay teoremi: $\\frac{AB}{BN} = \\frac{AC}{NC} \\implies \\frac{6}{3} = \\frac{AC}{5} \\implies 2 = \\frac{AC}{5} \\implies AC = 10\\text{ cm}$ bulunur.",
    "hint": "İç açıortay kenarları taban parçalarıyla orantılı böler: $c/p = b/k$.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 228,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir üçgenin ağırlık merkezi $G$ noktasıdır. $[AD]$ kenarortayı üzerinde $AG = 8\\text{ cm}$ olduğuna göre, $GD$ uzunluğu kaç cm'dir?",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Ağırlık merkezi kenarortayı köşeye 2 birim, kenara 1 birim ($2:1$ oranı) oranında böler: $AG = 2 \\cdot GD \\implies 8 = 2 \\cdot GD \\implies GD = 4\\text{ cm}$ bulunur.",
    "hint": "Ağırlık merkezi kenarortayı 2'ye 1 oranında böler.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 229,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Tabanı 12 cm ve bu tabana ait yüksekliği 8 cm olan bir üçgenin alanı kaç $\\text{cm}^2$'dir?",
    "options": [
      "48",
      "54",
      "60",
      "72",
      "96"
    ],
    "correctIndex": 0,
    "explanation": "Üçgenin alanı: $A = \\frac{\\text{taban} \\times \\text{yükseklik}}{2} = \\frac{12 \\cdot 8}{2} = 48\\text{ cm}^2$ bulunur.",
    "hint": "Üçgenin alanı taban çarpı yükseklik bölü 2'dir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 230,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir kenar uzunluğu 6 cm olan eşkenar üçgenin alanı kaç $\\text{cm}^2$'dir?",
    "options": [
      "$9\\sqrt{3}$",
      "$12\\sqrt{3}$",
      "$18\\sqrt{3}$",
      "$36\\sqrt{3}$",
      "$6\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "explanation": "Eşkenar üçgenin alanı formülü: $A = \\frac{a^2\\sqrt{3}}{4}$. $a = 6$ için: $A = \\frac{6^2\\sqrt{3}}{4} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}\\text{ cm}^2$ bulunur.",
    "hint": "Eşkenar üçgen alan formülü: $a^2\\sqrt{3}/4$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 231,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde $m(\\widehat{A}) = 70^\\circ$, $m(\\widehat{B}) = 60^\\circ$ olduğuna göre en uzun kenar hangisidir?",
    "options": [
      "a kenarı",
      "b kenarı",
      "c kenarı",
      "a ve b eşit",
      "Belirlenemez"
    ],
    "correctIndex": 0,
    "explanation": "İç açılar toplamı $180^\\circ$: $m(\\widehat{C}) = 180 - (70 + 60) = 50^\\circ$. Açıların sıralaması: $m(\\widehat{A}) > m(\\widehat{B}) > m(\\widehat{C})$ ($70^\\circ > 60^\\circ > 50^\\circ$). Büyük açı karşısında büyük kenar bulunur: $a > b > c$. Dolayısıyla en uzun kenar $a$ kenarıdır.",
    "hint": "En büyük açının karşısında en uzun kenar bulunur.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 232,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Kenar uzunlukları 8 cm, 15 cm ve $x$ cm olan bir dik üçgende $x$ hipotenüs olduğuna göre, $x$ kaç cm'dir?",
    "options": [
      "16",
      "17",
      "18",
      "19",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "8-15-17 özel dik üçgenidir: $x^2 = 8^2 + 15^2 = 64 + 225 = 289 \\implies x = 17\\text{ cm}$ bulunur.",
    "hint": "8-15-17 özel üçgenini hatırla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 233,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir dik üçgende hipotenüse ait kenarortayın uzunluğu 7 cm olduğuna göre, hipotenüsün uzunluğu kaç cm'dir?",
    "options": [
      "7",
      "10,5",
      "14",
      "21",
      "28"
    ],
    "correctIndex": 2,
    "explanation": "Muhteşem Üçlü kuralı: Bir dik üçgende dik açıdan hipotenüse indirilen kenarortayın uzunluğu, hipotenüs uzunluğunun yarısına eşittir: $V_a = \\frac{a}{2} \\implies a = 2 \\cdot 7 = 14\\text{ cm}$ bulunur.",
    "hint": "Muhteşem üçlü: Dik açıdan inen kenarortay ayırdığı parçalara eşittir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 234,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "İkizkenar bir üçgenin tepe açısı $40^\\circ$ olduğuna göre, taban açılarından biri kaç derecedir?",
    "options": [
      "60°",
      "65°",
      "70°",
      "75°",
      "80°"
    ],
    "correctIndex": 2,
    "explanation": "Taban açıları birbirine eşittir: $2x + 40^\\circ = 180^\\circ \\implies 2x = 140^\\circ \\implies x = 70^\\circ$ bulunur.",
    "hint": "180'den tepe açısını çıkarıp ikiye böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 235,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde $AB = 7\\text{ cm}$ ve $AC = 10\\text{ cm}$ dir. $m(\\widehat{A}) > 90^\\circ$ (geniş açı) olduğuna göre, $BC = x$ kenarının alabileceği en küçük tam sayı değeri kaçtır?",
    "options": [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "Geniş açı şartı: $x^2 > 7^2 + 10^2 = 49 + 100 = 149 \\implies x > \\sqrt{149} \\approx 12{,}2$. Ayrıca üçgen eşitsizliğinden $x < 17$. $x > 12{,}2$ şartını sağlayan en küçük tam sayı 13'tür.",
    "hint": "Açısı 90 dereceden büyükse kenarın karesi Pisagor toplamından büyüktür.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 236,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde $[DE] \\parallel [BC]$ dir. $AD = 3\\text{ cm}$, $DB = 6\\text{ cm}$ ve $DE = 4\\text{ cm}$ olduğuna göre, $BC$ uzunluğu kaç cm'dir?",
    "options": [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "Temel benzerlik teoremi: $\\frac{AD}{AB} = \\frac{DE}{BC}$. $AB = AD + DB = 3 + 6 = 9\\text{ cm}$. Benzerlik oranı: $\\frac{3}{9} = \\frac{1}{3}$. Buradan $\\frac{4}{BC} = \\frac{1}{3} \\implies BC = 12\\text{ cm}$ bulunur.",
    "hint": "Benzerlik oranını AD / AB olarak kur, AD / DB değil!",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 237,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir dik üçgenin dik kenarları 7 cm ve 24 cm olduğuna göre çevresi kaç cm'dir?",
    "options": [
      "48",
      "54",
      "56",
      "60",
      "64"
    ],
    "correctIndex": 2,
    "explanation": "7-24-25 özel dik üçgenidir. Hipotenüs: $c = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Çevre: $7 + 24 + 25 = 56\\text{ cm}$ bulunur.",
    "hint": "7-24-25 özel üçgenini hatırla ve kenarları topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 238,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Dış bükey bir çokgenin dış açıları toplamı kaç derecedir?",
    "options": [
      "180°",
      "270°",
      "360°",
      "540°",
      "Kenar sayısına göre değişir"
    ],
    "correctIndex": 2,
    "explanation": "Tüm dış bükey çokgenlerin (üçgen, dörtgen, beşgen vb.) dış açılarının ölçüleri toplamı kenar sayısından bağımsız olarak daima $360^\\circ$ dir.",
    "hint": "Dış açılar toplamı kenar sayısına bağlı değildir, daima sabittir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 239,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir $ABC$ üçgeninde $AB = 6\\text{ cm}$, $AC = 8\\text{ cm}$ ve $A$ açısı $30^\\circ$ olduğuna göre, üçgenin alanı kaç $\\text{cm}^2$'dir?",
    "options": [
      "12",
      "16",
      "24",
      "$12\\sqrt{3}$",
      "$24\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "explanation": "Sinüslü alan formülü: $A = \\frac{1}{2} \\cdot b \\cdot c \\cdot \\sin(\\widehat{A}) = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin(30^\\circ)$. $\\sin(30^\\circ) = \\frac{1}{2}$ olduğundan: $A = \\frac{1}{2} \\cdot 48 \\cdot \\frac{1}{2} = 12\\text{ cm}^2$ bulunur.",
    "hint": "Sinüslü alan formülü: $(1/2) \\cdot a \\cdot b \\cdot \\sin(\\alpha)$ ve $\\sin 30^\\circ = 1/2$.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 240,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir üçgenin kenar uzunlukları 6 cm, 8 cm ve 10 cm'dir. Bu üçgenin en kısa kenarına ait kenarortay uzunluğu yaklaşık değil, Pisagorla nasıl bulunur? Üçgen dik üçgendir! Hipotenüs 10 cm'dir. Hipotenüse ait kenarortay $V_c$ kaç cm'dir?",
    "options": [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "6-8-10 üçgeni bir dik üçgendir ($6^2 + 8^2 = 10^2$). Hipotenüs 10 cm'dir. Dik üçgende hipotenüse ait kenarortay muhteşem üçlüden hipotenüsün yarısına eşittir: $V = 10 / 2 = 5\\text{ cm}$ bulunur.",
    "hint": "6-8-10 üçgeninin bir dik üçgen olduğunu fark et.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 241,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir ikizkenar üçgende taban uzunluğu 16 cm ve eşit kenarlar 10'ar cm olduğuna göre, üçgenin alanı kaç $\\text{cm}^2$'dir?",
    "options": [
      "48",
      "60",
      "64",
      "80",
      "96"
    ],
    "correctIndex": 0,
    "explanation": "Tabana indirilen dikme tabanı iki eşit parçaya böler: $16 / 2 = 8\\text{ cm}$. Yükseklik için dik üçgen oluşur: $h^2 + 8^2 = 10^2 \\implies h^2 + 64 = 100 \\implies h = 6\\text{ cm}$ (6-8-10 üçgeni). Alan: $\\frac{\\text{taban} \\times h}{2} = \\frac{16 \\cdot 6}{2} = 48\\text{ cm}^2$ bulunur.",
    "hint": "İkizkenar üçgende tabana dik inerek yüksekliği bul.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 242,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Bir eşkenar üçgenin yüksekliği $6\\sqrt{3}\\text{ cm}$ olduğuna göre, bir kenar uzunluğu kaç cm'dir?",
    "options": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "correctIndex": 3,
    "explanation": "Eşkenar üçgende yükseklik: $h = \\frac{a\\sqrt{3}}{2}$ dir. $\\frac{a\\sqrt{3}}{2} = 6\\sqrt{3} \\implies \\frac{a}{2} = 6 \\implies a = 12\\text{ cm}$ bulunur.",
    "hint": "Eşkenar üçgenin yüksekliği kenarın kök 3 bölü 2 katıdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 243,
    "unitId": "ucgenler",
    "unitTitle": "Üçgenler ve Geometri",
    "question": "Kenar uzunlukları tam sayı olan bir üçgenin çevresi 15 cm'dir. Bu üçgenin en uzun kenarı en fazla kaç cm olabilir?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "Üçgen eşitsizliğine göre en uzun kenar diğer iki kenarın toplamından küçük olmalıdır: $a < b + c$. Her iki tarafa $a$ eklersek: $2a < a + b + c = 15 \\implies 2a < 15 \\implies a < 7{,}5$. $a$ tam sayı olduğuna göre en fazla 7 cm olabilir (örneğin kenarlar 7, 7, 1 veya 7, 4, 4).",
    "hint": "En uzun kenar, çevrenin yarısından kesinlikle küçük olmalıdır.",
    "difficulty": "Zor",
    "xp": 20
  },
  {
    "id": 244,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$4, 7, 8, 12, 14$ veri grubunun aritmetik ortalaması kaçtır?",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Verileri toplayıp veri sayısına böleriz: $\\frac{4 + 7 + 8 + 12 + 14}{5} = \\frac{45}{5} = 9$ bulunur.",
    "hint": "Tüm sayıları topla ve veri sayısına böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 245,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$3, 5, 7, 9, 11, 13, 15$ veri grubunun medyanı (ortancası) kaçtır?",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "Veriler küçükten büyüğe sıralıdır ve 7 tane (tek sayıda) veri vardır. Tam ortadaki 4. terim medyandır: Medyan = 9 dur.",
    "hint": "Sıralı dizide tam ortadaki eleman medyandır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 246,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$2, 4, 6, 8, 10, 12$ veri grubunun medyanı kaçtır?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "Veri sayısı 6 (çift) olduğundan ortadaki iki terimin (6 ve 8) aritmetik ortalaması alınır: $\\frac{6 + 8}{2} = 7$ dir.",
    "hint": "Çift sayıda veri olduğunda ortadaki iki verinin ortalamasını al.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 247,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$3, 4, 4, 5, 6, 6, 6, 7, 8$ veri grubunun modu (tepe değeri) kaçtır?",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Mod (tepe değer), veri grubunda en çok tekrar eden değerdir. 6 sayısı 3 defa tekrar ederek en yüksek frekansa sahiptir. Dolayısıyla mod = 6 dır.",
    "hint": "En çok tekrar eden (frekansı en yüksek olan) değeri bul.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 248,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$12, 5, 23, 18, 9, 31, 14$ veri grubunun açıklığı (ranjı) kaçtır?",
    "options": [
      "23",
      "25",
      "26",
      "28",
      "31"
    ],
    "correctIndex": 2,
    "explanation": "Açıklık $=$ En Büyük Değer $-$ En Küçük Değer. En büyük değer 31, en küçük değer 5 tir: $31 - 5 = 26$ bulunur.",
    "hint": "En büyük değerden en küçük değeri çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 249,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Tüm değerleri birbirine eşit olan bir veri grubunun standart sapması kaçtır?",
    "options": [
      "0",
      "1",
      "Veri sayısına eşittir",
      "Ortalamaya eşittir",
      "Hesaplanamaz"
    ],
    "correctIndex": 0,
    "explanation": "Standart sapma, verilerin aritmetik ortalamadan ne kadar saptığını (farklılaştığını) ölçer. Tüm değerler eşitse ortalamadan hiçbir sapma yoktur, dolayısıyla standart sapma 0'dır.",
    "hint": "Değerler hiç değişmiyorsa sapma miktarı sıfırdır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 250,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Standart sapması diğerlerine göre daha küçük olan bir sınıf için aşağıdakilerden hangisi kesinlikle söylenebilir?",
    "options": [
      "Not ortalaması daha yüksektir",
      "Öğrencilerin başarı seviyeleri birbirine daha yakındır (homojendir)",
      "En yüksek notu bu sınıf almıştır",
      "Sınıf mevcudu daha fazladır",
      "Daha başarısız bir sınıftır"
    ],
    "correctIndex": 1,
    "explanation": "Standart sapmanın küçük olması, verilerin ortalama etrafında toplandığını ve grubun daha düzenli/homojen/tutarlı olduğunu gösterir. Yani öğrencilerin başarı seviyeleri birbirine oldukça yakındır.",
    "hint": "Düşük standart sapma, verilerin birbirine yakın ve dengeli olduğunu gösterir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 251,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir daire grafiğinde 120 kişilik bir topluluk gösterilmektedir. 30 kişiyi temsil eden dilimin merkez açısı kaç derecedir?",
    "options": [
      "60°",
      "75°",
      "90°",
      "105°",
      "120°"
    ],
    "correctIndex": 2,
    "explanation": "Tam daire $360^\\circ$ dir. Orantı kuralım: $\\frac{30}{120} = \\frac{1}{4}$. $360^\\circ \\cdot \\frac{1}{4} = 90^\\circ$ bulunur.",
    "hint": "Oranı bulup 360 derece ile çarp.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 252,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Hilesiz bir zar atıldığında üst yüze gelen sayının asal sayı olma olasılığı kaçtır?",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{5}{6}$"
    ],
    "correctIndex": 2,
    "explanation": "Zarın örnek uzayı: $\\{1, 2, 3, 4, 5, 6\\}$ (6 durum). Asal sayılar: $\\{2, 3, 5\\}$ (3 durum). Olasılık: $\\frac{3}{6} = \\frac{1}{2}$ dir.",
    "hint": "Zardaki asal sayılar 2, 3 ve 5'tir (3 tane).",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 253,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir torbada 4 mavi, 5 kırmızı ve 3 sarı bilye vardır. Rastgele çekilen bir bilyenin kırmızı olmama olasılığı kaçtır?",
    "options": [
      "$\\frac{5}{12}$",
      "$\\frac{7}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{3}{4}$"
    ],
    "correctIndex": 1,
    "explanation": "Toplam bilye sayısı: $4 + 5 + 3 = 12$. Kırmızı olmama olasılığı, kırmızı dışındakilerin (mavi veya sarı) gelmesidir: $4 + 3 = 7$ bilye. Olasılık: $\\frac{7}{12}$ bulunur.",
    "hint": "1'den kırmızı olma olasılığını çıkar veya diğer bilyeleri topla.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 254,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "İki madeni para aynı anda havaya atıldığında en az birinin tura gelme olasılığı kaçtır?",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{2}{3}$",
      "$1$"
    ],
    "correctIndex": 2,
    "explanation": "Tüm durumlar: $\\{TT, TY, YT, YY\\}$ (4 durum). En az bir tura gelenler: $\\{TT, TY, YT\\}$ (3 durum). Olasılık: $\\frac{3}{4}$ tür.",
    "hint": "Tüm durumlardan ikisinin de yazı geldiği durumu (1/4) çıkar.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 255,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$5, 8, 12, x$ veri grubunun aritmetik ortalaması 10 olduğuna göre, $x$ kaçtır?",
    "options": [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    "correctIndex": 3,
    "explanation": "$\\frac{5 + 8 + 12 + x}{4} = 10 \\implies 25 + x = 40 \\implies x = 15$ bulunur.",
    "hint": "Toplamı 4'e bölüp 10'a eşitle.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 256,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Aşağıdakilerden hangisi merkezi eğilim ölçülerinden biridir?",
    "options": [
      "Açıklık",
      "Standart sapma",
      "Varyans",
      "Medyan (Ortanca)",
      "Çeyrekler açıklığı"
    ],
    "correctIndex": 3,
    "explanation": "Merkezi eğilim ölçüleri: Aritmetik Ortalama, Medyan (Ortanca) ve Mod (Tepe Değer)'dir. Açıklık, varyans ve standart sapma ise merkezi yayılım ölçüleridir.",
    "hint": "Açıklık ve standart sapma verilerin yayılımını, medyan ise merkezini gösterir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 257,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Aşağıdakilerden hangisi merkezi yayılım ölçüsüdür?",
    "options": [
      "Aritmetik ortalama",
      "Mod",
      "Medyan",
      "Standart sapma",
      "Ağırlıklı ortalama"
    ],
    "correctIndex": 3,
    "explanation": "Standart sapma ve açıklık verilerin ne kadar dağıldığını gösteren merkezi yayılım ölçüleridir.",
    "hint": "Verilerin dağılımını ve farklılaşmasını ölçen büyüklüktür.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 258,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$10, 15, 20, 25, 30$ veri grubunun standart sapmasını bulmak için ilk adım nedir?",
    "options": [
      "En büyük değeri bulmak",
      "Aritmetik ortalamayı hesaplamak",
      "Medyanı bulmak",
      "Açıklığı hesaplamak",
      "Karelerini almak"
    ],
    "correctIndex": 1,
    "explanation": "Standart sapma formülünde her verinin aritmetik ortalamadan farkının kareleri toplandığından ilk adım aritmetik ortalamayı hesaplamaktır.",
    "hint": "Farkları hesaplamak için önce referans ortalama bilinmelidir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 259,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir sınıftaki 19 öğrencinin matematik notlarının ortalaması 70'tir. Bu sınıfa notu 90 olan yeni bir öğrenci katılırsa yeni ortalama kaç olur?",
    "options": [
      "70",
      "71",
      "72",
      "73",
      "74"
    ],
    "correctIndex": 1,
    "explanation": "Eski toplam not: $19 \\cdot 70 = 1330$. Yeni öğrenciyle toplam: $1330 + 90 = 1420$. Yeni öğrenci sayısı: $19 + 1 = 20$. Yeni ortalama: $1420 / 20 = 71$ bulunur.",
    "hint": "Toplam puanı bulup yeni öğrenciyle birlikte toplam kişi sayısına böl.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 260,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Hilesiz iki zar aynı anda atıldığında üst yüze gelen sayıların toplamının 10 olma olasılığı kaçtır?",
    "options": [
      "$\\frac{1}{12}$",
      "$\\frac{1}{9}$",
      "$\\frac{5}{36}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{18}$"
    ],
    "correctIndex": 0,
    "explanation": "İki zarın tüm olası durumları $6 \\times 6 = 36$ dır. Toplamı 10 olan ikililer: $(4, 6), (5, 5), (6, 4)$ olup 3 tanedir. Olasılık: $\\frac{3}{36} = \\frac{1}{12}$ bulunur.",
    "hint": "Toplamı 10 yapan ikilileri say: (4,6), (5,5), (6,4).",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 261,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir torbada 1'den 20'ye kadar numaralandırılmış 20 kart vardır. Çekilen bir kartın numarasının 3'ün veya 5'in katı olma olasılığı kaçtır?",
    "options": [
      "$\\frac{9}{20}$",
      "$\\frac{1}{2}$",
      "$\\frac{11}{20}$",
      "$\\frac{3}{5}$",
      "$\\frac{7}{20}$"
    ],
    "correctIndex": 0,
    "explanation": "3'ün katları: $\\{3, 6, 9, 12, 15, 18\\}$ (6 tane). 5'in katları: $\\{5, 10, 15, 20\\}$ (4 tane). Her ikisinin katı (15): 1 tane. Birleşim: $6 + 4 - 1 = 9$ tane kart. Olasılık: $\\frac{9}{20}$ bulunur.",
    "hint": "Kümelerdeki $s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$ kuralını olasılıkta uygula.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 262,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$2, 3, 3, 5, 7, 7, 8$ veri grubu için aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Tek bir modu vardır",
      "İki tepe değeri (modu) vardır: 3 ve 7",
      "Modu yoktur",
      "Medyanı 3'tür",
      "Açıklığı 8'dir"
    ],
    "correctIndex": 1,
    "explanation": "Hem 3 hem 7 sayısı ikişer defa en çok tekrar etmiştir. Dolayısıyla bu veri grubu iki modludur (bimodal): modları 3 ve 7 dir.",
    "hint": "En yüksek frekansa sahip birden fazla değer varsa grup çok modlu olur.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 263,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir daire grafiğinde bir ailenin aylık giderleri gösterilmiştir. Kira gideri $120^\\circ$, gıda gideri $90^\\circ$, eğitim gideri $60^\\circ$ ve diğer giderler kalan açıyla gösterilmiştir. Diğer giderler 4500 TL olduğuna göre, ailenin toplam geliri kaç TL'dir?",
    "options": [
      "16000",
      "18000",
      "20000",
      "24000",
      "27000"
    ],
    "correctIndex": 1,
    "explanation": "Diğer giderlerin açısı: $360^\\circ - (120^\\circ + 90^\\circ + 60^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$. $90^\\circ$ tüm bütçenin $\\frac{90}{360} = \\frac{1}{4}$'üdür. Toplam bütçe: $4500 \\cdot 4 = 18000$ TL bulunur.",
    "hint": "90 derece dairenin dörtte biridir.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 264,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir gruptaki 5 kişinin boyları 160, 165, 170, 175 ve 180 cm'dir. Bu gruba boyu 170 cm olan bir kişi daha katılırsa veri grubunun standart sapması nasıl değişir?",
    "options": [
      "Artar",
      "Azalır",
      "Değişmez",
      "Sıfır olur",
      "İki katına çıkar"
    ],
    "correctIndex": 1,
    "explanation": "Mevcut grubun aritmetik ortalaması $\\frac{160+165+170+175+180}{5} = 170$ cm'dir. Ortalamaya tam eşit bir veri eklendiğinde ortalama değişmez ancak veriler ortalamaya daha çok yığılmış olur; bu da standart sapmayı azaltır.",
    "hint": "Ortalamaya tam eşit bir değer eklenirse sapma azalır, ortalamadan uzak bir değer eklenirse sapma artar.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 265,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir madeni para 3 kez atıldığında en az iki kez tura gelme olasılığı kaçtır?",
    "options": [
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{4}$"
    ],
    "correctIndex": 2,
    "explanation": "Toplam durum sayısı $2^3 = 8$ dir. İstenen durumlar (en az iki T): 2 Tura: $\\{TTY, TYT, YTT\\}$ (3 durum), 3 Tura: $\\{TTT\\}$ (1 durum). Toplam istenen: $3 + 1 = 4$ durum. Olasılık: $\\frac{4}{8} = \\frac{1}{2}$ bulunur.",
    "hint": "2 tura veya 3 tura gelen durumları listele.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 266,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Kutu grafiğinde (Boxplot) kutunun alt kenarı, ortasındaki çizgi ve üst kenarı sırasıyla hangi istatistiki değerleri gösterir?",
    "options": [
      "En küçük değer, Ortalama, En büyük değer",
      "$Q_1$ (Alt Çeyrek), Medyan, $Q_3$ (Üst Çeyrek)",
      "Mod, Medyan, Ortalama",
      "Açıklık, Medyan, Standart sapma",
      "$Q_1$, Ortalama, $Q_3$"
    ],
    "correctIndex": 1,
    "explanation": "Kutu grafiğinde kutunun alt kenarı birinci çeyreklik ($Q_1$), kutunun içindeki çizgi ikinci çeyreklik yani medyan ($Q_2$), kutunun üst kenarı ise üçüncü çeyrekliktir ($Q_3$).",
    "hint": "Kutu sınırları çeyreklikleri ($Q_1$ ve $Q_3$), ortadaki çizgi ise medyanı gösterir.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 267,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "$1, 2, 3, 4, 5, 6, 7, 8, 9$ veri grubunun alt çeyreği ($Q_1$) ve üst çeyreği ($Q_3$) sırasıyla nedir?",
    "options": [
      "2, 7",
      "2.5, 7.5",
      "3, 7",
      "2.5, 8",
      "3, 8"
    ],
    "correctIndex": 1,
    "explanation": "Medyan 5'tir. Alt yarı: $\\{1, 2, 3, 4\\}$, bu yarının medyanı $Q_1 = \\frac{2 + 3}{2} = 2{,}5$. Üst yarı: $\\{6, 7, 8, 9\\}$, bu yarının medyanı $Q_3 = \\frac{7 + 8}{2} = 7{,}5$ tir.",
    "hint": "Medyanın solundaki ve sağındaki parçaların kendi medyanlarını al.",
    "difficulty": "Orta",
    "xp": 15
  },
  {
    "id": 268,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir çift zar atıldığında zarların üst yüzüne gelen sayıların aynı (çift) olma olasılığı kaçtır?",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{36}$",
      "$\\frac{5}{36}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "explanation": "Tüm durumlar 36 tanedir. Aynı gelen durumlar: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ olup 6 tanedir. Olasılık: $\\frac{6}{36} = \\frac{1}{6}$ bulunur.",
    "hint": "İkisi de aynı olan 6 durum vardır.",
    "difficulty": "Kolay",
    "xp": 10
  },
  {
    "id": 269,
    "unitId": "veri_istatistik",
    "unitTitle": "Veri, Olasılık ve İstatistik",
    "question": "Bir sınıfta 12 kız ve 18 erkek öğrenci vardır. Kızların boy ortalaması 160 cm, erkeklerin boy ortalaması 170 cm olduğuna göre, tüm sınıfın boy ortalaması kaç cm'dir?",
    "options": [
      "164",
      "165",
      "166",
      "167",
      "168"
    ],
    "correctIndex": 2,
    "explanation": "Ağırlıklı ortalama formülü: $\\frac{12 \\cdot 160 + 18 \\cdot 170}{12 + 18} = \\frac{1920 + 3060}{30} = \\frac{4980}{30} = 166\\text{ cm}$ bulunur.",
    "hint": "Toplam boy uzunluğunu toplam öğrenci sayısına böl.",
    "difficulty": "Orta",
    "xp": 15
  }
];
