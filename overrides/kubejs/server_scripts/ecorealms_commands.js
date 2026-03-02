// Admin and player commands for interacting with EcoRealms world state.

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(
    Commands.literal('eco')
      .then(
        Commands.literal('status').executes(ctx => {
          const source = ctx.source
          const snapshot = global.EcoRealmsState.snapshot(source.server.overworld())
          source.player.tell(Text.aqua(`[Eco] Corruption ${snapshot.eco_corruption} | Biodiversity ${snapshot.eco_biodiversity} | Air ${snapshot.eco_air_quality} | Water ${snapshot.eco_water_quality} | Prosperity ${snapshot.eco_settlement_prosperity} | Tier ${snapshot.eco_world_tier}`))
          return 1
        })
      )
      .then(
        Commands.literal('debug')
          .requires(source => source.hasPermission(2))
          .then(
            Commands.literal('set')
              .then(Commands.argument('key', Arguments.STRING.create(event)).then(
                Commands.argument('value', Arguments.INTEGER.create(event)).executes(ctx => {
                  const key = Arguments.STRING.getResult(ctx, 'key')
                  const value = Arguments.INTEGER.getResult(ctx, 'value')
                  const level = ctx.source.server.overworld()

                  global.EcoRealmsState.set(level, key, value)
                  const tier = global.EcoRealmsState.recomputeTier(level)
                  ctx.source.sendSuccess(() => Text.of(`[EcoRealms] ${key} set to ${value}. Tier now ${tier}.`), true)
                  return 1
                })
              ))
          )
      )
  )
})
