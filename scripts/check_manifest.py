#!/usr/bin/env python3
import json
from pathlib import Path

manifest_path = Path('manifest.json')
if not manifest_path.exists():
    raise SystemExit('manifest.json not found')

with manifest_path.open('r', encoding='utf-8') as f:
    data = json.load(f)

required = ['minecraft', 'manifestType', 'manifestVersion', 'name', 'version', 'files', 'overrides']
missing = [k for k in required if k not in data]
if missing:
    raise SystemExit(f'Missing required keys: {missing}')

print('manifest.json structure looks valid.')
