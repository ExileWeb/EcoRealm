# EcoRealms: Rise & Restore

Starter repository structure for the EcoRealms modpack.

## Target Runtime
- Minecraft: **1.20.1**
- Mod Loader: **Forge 47.2.0**

## Included Starter Pieces
- `manifest.json` for CurseForge export/import metadata.
- `modlist/required-mods.md` with required anchor mods from the design.
- `kubejs/` starter scripts for global eco state and server event hooks.
- `ftbquests/` placeholders for chapter JSON files.
- `config/` placeholder folder tracked via `.gitkeep`.
- `scripts/` utility scripts for local validation.

## Next Steps
1. Fill `manifest.json.files` with project IDs + file IDs after version pinning.
2. Implement first quest chapter JSONs under `ftbquests/chapters/`.
3. Expand KubeJS scripts to enforce progression gates and world events.
4. Add default configs under `config/` after first integration pass.
