# EcoRealms KubeJS (Playable Starter)

This folder contains a playable vertical-slice implementation for EcoRealms world-state mechanics.

## Implemented Features
- Persistent eco state bootstrap and helpers (`ecorealms_state.js`).
- Passive world decay + restoration feedback loop (`ecorealms_gameplay.js`).
- Player/admin command surface (`/eco status`, `/eco debug set ...`) (`ecorealms_commands.js`).
- Starter recipes for restoration-oriented progression (`ecorealms_recipes.js`).

## Notes
- Scripts are intentionally loader-safe and can be expanded with mod-specific hooks
  once mod versions are pinned.
