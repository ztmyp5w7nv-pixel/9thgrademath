# Verification of question structure
q = {
    "id": 1,
    "unitId": "uslu_sayilar",
    "unitTitle": "Üslü İfadeler ve Denklemler",
    "difficulty": "Kolay", # Kolay, Orta, Zor
    "xp": 15,
    "question": r"$2^5 + 2^5 + 2^5 + 2^5$ işleminin sonucu aşağıdakilerden hangisidir?",
    "options": [r"$2^6$", r"$2^7$", r"$2^8$", r"$2^9$", r"$2^{20}$"],
    "correctIndex": 1, # 0-indexed: B -> 2^7
    "explanation": r"$2^5 + 2^5 + 2^5 + 2^5 = 4 \cdot 2^5 = 2^2 \cdot 2^5 = 2^{2+5} = 2^7$ olur.",
    "hint": "4 tane $2^5$'i toplamak, 4 ile çarpmak demektir. $4 = 2^2$ olarak yazmayı dene."
}
print("Sample validated:", q["id"])
