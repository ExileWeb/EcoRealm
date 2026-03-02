// Shared world-state helpers for EcoRealms.

const ECO_KEYS = [
  'eco_corruption',
  'eco_biodiversity',
  'eco_air_quality',
  'eco_water_quality',
  'eco_settlement_prosperity',
  'eco_world_tier'
]

const clamp = value => Math.max(global.ECOREALMS_LIMITS.min, Math.min(global.ECOREALMS_LIMITS.max, value))

const ensureWorldState = level => {
  const data = level.persistentData
  ECO_KEYS.forEach(key => {
    if (data[key] === undefined || data[key] === null) {
      data[key] = global.ECOREALMS_DEFAULTS[key]
    }
  })
}

global.EcoRealmsState = {
  ensure(level) {
    ensureWorldState(level)
  },

  get(level, key) {
    ensureWorldState(level)
    return level.persistentData[key]
  },

  set(level, key, value) {
    ensureWorldState(level)
    level.persistentData[key] = clamp(value)
  },

  add(level, key, delta) {
    ensureWorldState(level)
    const next = clamp(level.persistentData[key] + delta)
    level.persistentData[key] = next
    return next
  },

  snapshot(level) {
    ensureWorldState(level)
    return {
      eco_corruption: level.persistentData.eco_corruption,
      eco_biodiversity: level.persistentData.eco_biodiversity,
      eco_air_quality: level.persistentData.eco_air_quality,
      eco_water_quality: level.persistentData.eco_water_quality,
      eco_settlement_prosperity: level.persistentData.eco_settlement_prosperity,
      eco_world_tier: level.persistentData.eco_world_tier
    }
  },

  recomputeTier(level) {
    ensureWorldState(level)
    const score = (
      (100 - level.persistentData.eco_corruption) +
      level.persistentData.eco_biodiversity +
      level.persistentData.eco_air_quality +
      level.persistentData.eco_water_quality +
      level.persistentData.eco_settlement_prosperity
    ) / 5

    let tier = 0
    if (score >= 25) tier = 1
    if (score >= 45) tier = 2
    if (score >= 60) tier = 3
    if (score >= 75) tier = 4
    if (score >= 90) tier = 5

    level.persistentData.eco_world_tier = tier
    return tier
  }
}
