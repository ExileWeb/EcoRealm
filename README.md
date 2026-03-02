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
- New login welcome message with quick-start guidance and version display.
- Create-only progression recipes:
  - `ecorealms:restoration_compass_create`
  - `ecorealms:water_purifier_core_create`
- Starter quest chapter definitions for first 3-chapter progression arc.
- Custom world preset where all mapped biomes are grey, dead, and devastation-forward.
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


## World Creation
- Select the `EcoRealms` world preset when creating a new world.
- Preset source: `overrides/kubejs/data/minecraft/worldgen/world_preset/ecorealms.json`.
- Includes custom biomes in `overrides/kubejs/data/ecorealms/worldgen/biome/`.
