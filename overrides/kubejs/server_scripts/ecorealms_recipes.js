// Early playable loop recipes for restoration tools.

ServerEvents.recipes(event => {
  event.shaped('minecraft:compass', [' L ', 'RIR', ' L '], {
    L: 'minecraft:oak_leaves',
    R: 'minecraft:rotten_flesh',
    I: 'minecraft:iron_ingot'
  }).id('ecorealms:restoration_compass')

  event.shaped('minecraft:heart_of_the_sea', ['WBW', 'BDB', 'WBW'], {
    W: 'minecraft:water_bucket',
    B: 'minecraft:bone_meal',
    D: 'minecraft:diamond'
  }).id('ecorealms:water_purifier_core')
})
