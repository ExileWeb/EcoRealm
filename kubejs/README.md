# KubeJS Starter

## Script Layout
- `startup_scripts/`: constants, item registrations, global bootstrap.
- `server_scripts/`: progression logic, event handlers, environmental state updates.

## Current Starter Scripts
- `startup_scripts/ecorealms_globals.js`: default world-state values.
- `server_scripts/ecorealms_events.js`: placeholder hooks for pollution/restoration logic.

## Conventions
- Keep global state keys prefixed with `eco_`.
- Keep debug/admin commands under `/eco debug ...`.
