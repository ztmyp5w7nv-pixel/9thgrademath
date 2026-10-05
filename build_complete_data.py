# -*- coding: utf-8 -*-
import json
from gen_units_1_to_3 import get_units_1_to_3
from gen_units_4_to_6 import get_units_4_to_6
from gen_units_7_to_10 import get_units_7_to_10

all_qs = []
all_qs.extend(get_units_1_to_3())
all_qs.extend(get_units_4_to_6())
all_qs.extend(get_units_7_to_10())

# Re-assign sequential IDs 1 to N
for idx, q in enumerate(all_qs):
    q["id"] = idx + 1
    # Check consistency
    assert 0 <= q["correctIndex"] < len(q["options"]), f"Invalid correctIndex in question {q['id']}"
    assert len(q["options"]) >= 4, f"Too few options in question {q['id']}"
    assert len(q["question"]) > 5, f"Short question in {q['id']}"
    assert len(q["explanation"]) > 5, f"Short explanation in {q['id']}"

print(f"Total questions validated: {len(all_qs)}")

# Save to js/data-questions.js
js_content = "// 9. SINIF MATEMATİK TÜM MÜFREDAT VE ÜSLÜ SAYILAR SORU BANKASI (269 SORU)\n"
js_content += "window.QUESTIONS_DATA = " + json.dumps(all_qs, ensure_ascii=False, indent=2) + ";\n"

with open("/Users/gokalpemirbas/.gemini/antigravity/scratch/matematik9-app/js/data-questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("data-questions.js written successfully.")
