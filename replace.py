import os
import re

directories_to_process = ['src/pages', 'src/components', 'src/layouts', 'src/App.tsx']

replacements = [
    (r'border border-outline-variant/15', ''),
    (r'border-t border-outline-variant/15', ''),
    (r'border-b border-outline-variant/15', ''),
    (r'border-l border-outline-variant/15', ''),
    (r'border-r border-outline-variant/15', ''),
    (r'lg:border-r lg:border-outline-variant/15', ''),
    (r'md:border-r md:border-outline-variant/15', ''),
    (r'border-t border-white/10', ''),
    (r'border border-white/\[0\.08\]', ''),
    (r'divide-y divide-outline-variant/15', 'space-y-4'),
    (r'\bborder\b', ''), # just be careful, but these are mostly class names. Actually let's just remove the explicit ones.
]

for directory in directories_to_process:
    if os.path.isfile(directory):
        files = [directory]
    elif os.path.isdir(directory):
        files = []
        for root, _, filenames in os.walk(directory):
            for filename in filenames:
                if filename.endswith('.tsx') or filename.endswith('.ts'):
                    files.append(os.path.join(root, filename))
    else:
        continue

    for filepath in files:
        with open(filepath, 'r') as f:
            content = f.read()

        new_content = content
        for pattern, replacement in replacements[:-1]:
            new_content = re.sub(pattern, replacement, new_content)
        
        # fix multiple spaces from removing classes
        new_content = re.sub(r' +', ' ', new_content)
        new_content = new_content.replace(' "', '"').replace('" ', '"')

        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
