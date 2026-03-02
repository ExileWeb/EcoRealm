// EcoRealms gameplay hooks: passive decay, restoration actions, and feedback.

ServerEvents.loaded(event => {
  global.EcoRealmsState.ensure(event.server.overworld())
  console.info('[EcoRealms] World state initialized.')
})

ServerEvents.tick(event => {
  if (event.server.tickCount % global.ECOREALMS_TICK_RATE !== 0) return

  const level = event.server.overworld()
  const corruption = global.EcoRealmsState.get(level, 'eco_corruption')

  // Passive pressure: worlds tend to decay without intervention.
  if (corruption < 85) {
    global.EcoRealmsState.add(level, 'eco_corruption', 1)
  }

  // Passive ecosystem drift.
  global.EcoRealmsState.add(level, 'eco_air_quality', -1)
  global.EcoRealmsState.add(level, 'eco_water_quality', -1)

  const tier = global.EcoRealmsState.recomputeTier(level)

  if (corruption >= global.ECOREALMS_EVENTS.corruptionWarning) {
    event.server.tell(Text.red('[EcoRealms] Environmental instability is rising!'))
  }

  if (tier >= 3) {
    event.server.tell(Text.green('[EcoRealms] Restoration momentum is visible across nearby biomes.'))
  }
})

// Tree planting contributes to biodiversity and lowers corruption.
BlockEvents.placed(event => {
  const id = event.block.id
  if (!id.includes('sapling')) return

  const level = event.level
  global.EcoRealmsState.add(level, 'eco_biodiversity', 1)
  global.EcoRealmsState.add(level, 'eco_corruption', -1)
  global.EcoRealmsState.recomputeTier(level)
})

// Using bonemeal is treated as active restoration support.
ItemEvents.rightClicked(event => {
  if (event.item.id !== 'minecraft:bone_meal') return

  global.EcoRealmsState.add(event.level, 'eco_biodiversity', 1)
  global.EcoRealmsState.add(event.level, 'eco_water_quality', 1)
  global.EcoRealmsState.recomputeTier(event.level)
})
