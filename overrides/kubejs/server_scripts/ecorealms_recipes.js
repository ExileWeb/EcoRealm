// Create-focused restoration recipes.
// All custom progression recipes in this file are gated through Create components only.

ServerEvents.recipes(event => {
  // Restoration Compass: early scouting tool tied to Create progression.
  event.shaped('minecraft:compass', [' C ', 'SAS', ' B '], {
    C: 'create:cogwheel',
    S: 'create:shaft',
    A: 'create:andesite_alloy',
    B: 'minecraft:copper_ingot'
  }).id('ecorealms:restoration_compass_create')

  // Water Purifier Core: recovery milestone tied to midgame Create infrastructure.
  event.shaped('minecraft:heart_of_the_sea', ['TCT', 'BGB', 'TCT'], {
    T: 'create:fluid_tank',
    C: 'create:copper_casing',
    B: 'create:andesite_alloy',
    G: 'create:precision_mechanism'
  }).id('ecorealms:water_purifier_core_create')
})
