# EcoRealms: Rise & Restore — Production Implementation Pack

## 1) Concrete Mod Shortlist by Minecraft Version

This shortlist is intentionally **curated for stability and maintainability**, not just feature breadth. It prioritizes widely-used mods with active communities and good datapack/KubeJS integration.

## Required Mods from the Pack Concept

These are the required anchor mods from the original EcoRealms concept, explicitly included so the pack vision is preserved.

### Required Gameplay Anchors
- **Mekanism** (tech progression backbone)
- **Immersive Engineering** (infrastructure + immersive power)
- **Botania** (nature-magic restoration path)
- **MineColonies** (civilization progression)
- **Waystones** (exploration routing + world traversal)
- **Valhelsia Structures** (adventure content density)

### Required Progression/UX Anchors
- **FTB Quests** (or HQM equivalent if you intentionally swap frameworks)
- **Better Advancements**
- **JEI**
- **Jade**

### Required Supporting Dependencies
- **Structurize** (MineColonies dependency)
- **FTB Teams** (for party quest behavior)
- **FTB Chunks** (multiplayer land-claim baseline)
- **KubeJS** (state-driven progression logic)

> Note: If a required mod is unavailable/stable for your exact target version, keep the gameplay pillar and replace with a functionally equivalent mod while preserving quest gates and balance assumptions.

---

## Option A (Recommended): Minecraft **1.20.1 Forge**

Rationale: strongest current ecosystem balance for modern content + tooling.

### Core Framework & Library Layer
- Forge 47.x
- Architectury API (cross-loader dependencies)
- Cloth Config API (for some client mods)
- Curios API
- Kotlin for Forge (when required by dependency chain)

### World, Biomes, Weather, and Ecology Fantasy
- **Regions Unexplored** (biome diversity)
- **Nature’s Compass** (biome discovery utility)
- **Serene Seasons** (seasonal gameplay loop)
- **Weather, Storms & Tornadoes** (extreme weather event layer)
- **Pollution of the Realms** (pollution pressure and remediation gameplay)

### Restoration / Environmental Loop Support
- **Farmer’s Delight** (+ ecosystem-friendly food progression)
- **Supplementaries** (world interactivity and settlement flavor)
- **Alex’s Mobs** (wildlife return fantasy)
- **Productive Bees** (biodiversity + renewable automation tie-ins)

### Technology Branch
- **Mekanism** (+ Generators, Tools)
- **Immersive Engineering**
- **Create** (+ ecosystem-conscious low-tech automation alternative)
- **Powah!** (power progression smoothing)

### Magic / Nature Branch
- **Botania**
- **Ars Nouveau**
- **Occultism**
- **Nature’s Aura**

### Civilization, NPC, and Settlement Layer
- **MineColonies**
- **Structurize** (required dependency)
- **Guard Villagers**
- **Valhelsia Structures**

### Exploration and Discovery
- **YUNG’s API + structure suite** (Better Dungeons, Better Desert Temples, etc.)
- **Waystones**
- **Lootr** (multiplayer-friendly loot)
- **Artifacts**

### Quests, Progression, and Scripting
- **FTB Quests**
- **FTB Teams**
- **FTB Chunks**
- **KubeJS**
- **KubeJS Create** / **KubeJS Mekanism** (if available for selected versions)
- **CraftTweaker** (optional, only where KubeJS coverage is insufficient)

### QoL and Performance Baseline
- **JEI**
- **Jade**
- **AppleSkin**
- **Embeddium**
- **FerriteCore**
- **ModernFix**
- **Starlight (Forge port if stable for your exact stack)**

### Risk Notes (1.20.1 Forge)
- **MineColonies + heavy worldgen + weather mods** can increase TPS volatility in multiplayer.
- **Mekanism + Create + MineColonies** can inflate pack RAM footprint (recommend 8–10 GB client profile).
- Weather/tornado mods can conflict with protected-claim logic; validate chunk-claim interaction early.
- KubeJS addon coverage varies by exact mod versions; pin versions after first working script pass.

---

## Option B (Alternative Stability): Minecraft **1.19.2 Forge**

Rationale: broad “known stable” mod compatibility for larger curated packs.

### Suggested Core Changes vs 1.20.1
- Keep the same design architecture, but expect slightly older feature sets.
- Prefer mature versions of MineColonies/Mekanism/Create with known modpack references.
- If weather stack is unstable on your target hardware, keep seasonal effects and defer destructive storms to scripted events.

### Risk Notes (1.19.2 Forge)
- Long-term discoverability and “new content” marketing is weaker than 1.20.1.
- Some modern QOL/perf updates are better in 1.20.1 branches.

---

## 2) KubeJS + FTB Quests Implementation Plan

Goal: Make restoration state mechanically real through quest gates, world events, and branch progression.

## Architecture

### Data Model (stored in KubeJS persistent data)
Global variables:
- `eco_corruption` (0–100)
- `eco_biodiversity` (0–100)
- `eco_air_quality` (0–100)
- `eco_water_quality` (0–100)
- `eco_settlement_prosperity` (0–100)
- `eco_world_tier` (0–5)

Per-player variables:
- `faction_choice` (`conservationist` | `industrialist` | `explorer`)
- `tech_branch_progress`
- `magic_branch_progress`

### Update Triggers
- On pollution-producing machine usage: increase `eco_corruption`, reduce air/water quality.
- On restoration actions (tree planting rituals, purification machines, biome cleanse items): reduce corruption, raise biodiversity.
- On colony milestones (population, supply chains, happiness): raise settlement prosperity.
- Daily tick / scheduled event: decay or recovery drift based on current world state.

## FTB Quests Chapter Structure

### Chapter 1 — Ashes of the Old World
- Starter lore, scanner tool, first corruption survey.
- Quest reward: “Restorer’s Kit” and first cleanse objective.

### Chapter 2 — Roots of Renewal
- Soil/water remediation tasks.
- Wildlife return milestones (biodiversity thresholds).

### Chapter 3 — Power With Consequence
- Unlock either early tech or early magic.
- Introduce pollution budget and mitigation requirements.

### Chapter 4 — Paths of Civilization
- Force faction selection with exclusive questline unlocks.
- Conservationist: restoration efficiency + diplomacy benefits.
- Industrialist: production throughput + higher environmental penalties.
- Explorer: mapping/scouting buffs + anomaly discoveries.

### Chapter 5 — Frontiers and Ruins
- Structure exploration chain (temples/bunkers/anomalies).
- Recover lore fragments and world keys.

### Chapter 6 — The Planet Responds
- Trigger world events at global thresholds.
- Example: `eco_corruption > 60` enables storm titan encounters.

### Chapter 7 — Cycle Ascendant (Prestige)
- Requires restoration thresholds in all five indices.
- Unlock new cycle modifiers and legacy rewards.

## Recommended Gating Rules
- Mid-tier Mekanism processing locked behind `eco_air_quality >= 40`.
- High-output power generation locked behind active mitigation infrastructure.
- Advanced Botania rituals locked behind biodiversity and purified biome checks.
- Settlement tier upgrades require minimum prosperity + environment thresholds.

## KubeJS Implementation Milestones
1. **Phase A**: register persistent variables + admin debug commands.
2. **Phase B**: bind core events (pollution sources, restoration actions).
3. **Phase C**: expose state to players (HUD item, quest tasks, guidebook pages).
4. **Phase D**: connect state thresholds to unlocks and event spawns.
5. **Phase E**: multiplayer tuning and anti-grief guardrails.

## Debug & QA Commands (Admin)
- `/eco debug get` (print all global values)
- `/eco debug set <key> <value>`
- `/eco debug event <storm|wildfire|bloom>`
- `/eco debug reset`

---

## 3) Milestone Production Roadmap

## Milestone 0 — Pre-Production (1–2 weeks)
Deliverables:
- Version lock (1.20.1 Forge recommended)
- Final modlist v0.1 with dependency graph
- Design brief with progression gates and faction philosophy

Exit criteria:
- Game boots cleanly in singleplayer and dedicated server
- No unresolved dependency conflicts

## Milestone 1 — Vertical Slice Prototype (2–3 weeks)
Deliverables:
- Chapters 1–2 quests playable
- Working corruption + restoration score loop
- At least one visible biome recovery mechanic

Exit criteria:
- New player can complete first 45–60 minutes with clear goals
- No blocker crashes across 3+ fresh world seeds

## Milestone 2 — Core Systems Alpha (3–4 weeks)
Deliverables:
- Tech + Magic branch gates implemented
- Faction choice with at least 2 unique quest chains
- First world event (storm/anomaly) integrated

Exit criteria:
- Branches feel mechanically distinct
- Multiplayer (4–8 players) survives 2–3 hour session without critical desync

## Milestone 3 — Content Beta (3–4 weeks)
Deliverables:
- Chapters 3–6 complete
- Settlement progression integrated
- Exploration rewards and lore chain complete

Exit criteria:
- Full progression path to late game testable
- Performance baseline documented (client RAM, server TPS under load)

## Milestone 4 — Release Candidate (2 weeks)
Deliverables:
- Prestige loop (Chapter 7)
- Balance pass on pollution/recovery rates
- Onboarding polish: starter quests, tips, and recovery guidance

Exit criteria:
- No P0/P1 issues in issue tracker
- Pack update path validated for existing saves

## Milestone 5 — Public Launch + Seasonal Ops (ongoing)
Deliverables:
- Launch event + community challenge
- Seasonal modifiers rotation
- Leaderboard process (manual or external)

Exit criteria:
- First 30 days stability target met
- Retention metrics support next content cycle

---

## Recommended Delivery Order (Practical Build Sequence)
1. Lock version/modset.
2. Implement core eco variables and visible feedback.
3. Build first two quest chapters.
4. Add faction split and branch gating.
5. Add world event and prestige cycle.
6. Run multiplayer balance pass before wide release.

This order minimizes rework while preserving the central promise: **player actions visibly heal or harm the world**.
