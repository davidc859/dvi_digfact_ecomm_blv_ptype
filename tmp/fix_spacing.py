#!/usr/bin/env python3
import re

# Lire le fichier
with open('/src/app/components/BlvPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remplacements pour les en-têtes de tableau (th)
# Pattern 1: Pour les colonnes intermédiaires (ajouter px-[8px])
content = re.sub(
    r'text-\[#9e9e9e\] py-\[10px\] text-center" style=\{\{ fontWeight: 600 \}\}',
    r'text-[#9e9e9e] px-[8px] py-[10px] text-center" style={{ fontWeight: 600 }}',
    content
)

# Pattern 2: Pour la première colonne (ajouter px-[8px] après pl-[24px])
content = re.sub(
    r'pl-\[24px\] py-\[10px\] text-center" style=\{\{ fontWeight: 600 \}\}',
    r'pl-[24px] px-[8px] py-[10px] text-center" style={{ fontWeight: 600 }}',
    content
)

# Pattern 3: Pour la dernière colonne (ajouter px-[8px] avant pr-[24px])
content = re.sub(
    r'py-\[10px\] text-center pr-\[24px\]" style=\{\{ fontWeight: 600 \}\}',
    r'px-[8px] py-[10px] text-center pr-[24px]" style={{ fontWeight: 600 }}',
    content
)

# Remplacements pour les cellules de tableau (td)
# Pattern 4: Pour la première cellule (ajouter px-[8px] après pl-[24px])
content = re.sub(
    r'pl-\[24px\] py-\[9px\]',
    r'pl-[24px] px-[8px] py-[9px]',
    content
)

# Pattern 5: Pour les cellules intermédiaires (ajouter px-[8px])
content = re.sub(
    r'(text-\[11px\] font-\[\'Roboto\',sans-serif\] text-\[#[0-9a-f]{6}\]) py-\[9px\]',
    r'\1 px-[8px] py-[9px]',
    content
)

# Pattern 6: Pour la dernière cellule (ajouter px-[8px] avant pr-[24px])
content = re.sub(
    r'py-\[9px\] text-center pr-\[24px\]',
    r'px-[8px] py-[9px] text-center pr-[24px]',
    content
)

# Pattern 7: Pour les cellules avec juste py-[9px] (comme pour les icônes)
content = re.sub(
    r'className="py-\[9px\]"',
    r'className="px-[8px] py-[9px]"',
    content
)

# Écrire le fichier
with open('/src/app/components/BlvPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Modifications appliquées avec succès!")
