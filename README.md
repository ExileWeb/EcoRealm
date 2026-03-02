# EcoRealms: Rise & Restore

Playable vertical-slice starter for the EcoRealms modpack.

## Target Runtime
- Minecraft: **1.20.1**
- Mod Loader: **Forge 47.2.0**

## Implemented Playable Features
- Persistent eco-state model (`eco_corruption`, biodiversity, air/water quality, prosperity, world tier).
- Passive world decay loop with restoration feedback broadcasts.
- Restoration interactions: tree planting and bonemeal use improve world metrics.
- Player/admin commands:
  - `/eco status`
  - `/eco debug set <key> <value>` (op only)
- Starter progression recipes:
  - `ecorealms:restoration_compass`
  - `ecorealms:water_purifier_core`
- Starter quest chapter definitions for first 3-chapter progression arc.
- Server balancing defaults in `overrides/config/defaultconfigs/ecorealms-server.toml`.

## Included Starter Pieces
- `EcoRealms_Plan.md` production roadmap and system design.
- `manifest.json` for CurseForge metadata.
- `modlist/required-mods.md` and `modlist/recommended-mods-expanded.md` for required and expanded mod sets.
- `overrides/` content ready for packaging (KubeJS scripts, configs, quests, resources).
- `scripts/check_manifest.py` utility for local validation.

## Next Steps
1. Populate `manifest.json.files` with exact CurseForge project/file IDs.
2. Export quest docs into final FTB Quests SNBT format.
3. Bind eco events to installed tech/magic mods (Mekanism, Botania, IE, MineColonies).
4. Add curated defaults for weather/season/pollution mods after version lock.


## Publishing
- CurseForge listing copy: `CURSEFORGE_DESCRIPTION.md`
