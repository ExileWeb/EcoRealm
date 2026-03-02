// EcoRealms global defaults and balancing constants.

global.ECOREALMS_VERSION = '0.2.1-playable-slice'

global.ECOREALMS_DEFAULTS = {
  eco_corruption: 55,
  eco_biodiversity: 18,
  eco_air_quality: 40,
  eco_water_quality: 40,
  eco_settlement_prosperity: 8,
  eco_world_tier: 0
}

global.ECOREALMS_LIMITS = {
  min: 0,
  max: 100
}

global.ECOREALMS_TICK_RATE = 1200 // 60s @ 20 tps

global.ECOREALMS_EVENTS = {
  corruptionWarning: 70,
  restorationTier1: 35,
  restorationTier2: 65,
  restorationTier3: 85
}
