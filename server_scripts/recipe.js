// onEvent('recipes', event => {
ServerEvents.recipes(event => {
    let nutTypes = ["peanut", "walnut", "almond", "chestnut", "hazelnut", "pistachio", "cashew", "macadamia", "pecan"]
    nutTypes.forEach(i => {
        event.recipes.thermal.insolator([Item.of(`garnished:ungarnished_${i}`, 4), Item.of(`garnished:ungarnished_${i}`, 1), Item.of('garnished:nut_log', 6), Item.of('minecraft:apple', 1).withChance(0.05)], `garnished:cracked_${i}`).id(`kubejs:${i}_from_insolator`)
    });
    nutTypes.forEach((i) => {
      let effect = ["effect", "strength", "haste", "slow_falling", "potent_speed", "night_vision", "speed", "fire_resistance", "resistance"]
      effect.forEach((k) => {
        event.remove('garnished:compacting/effect/melted_cinder_' + i + '_with_' + k)
      })
    })
    nutTypes.forEach((i) => {
      let effect = ["effect", "strength", "haste", "slow_falling", "potent_speed", "night_vision", "speed", "fire_resistance", "resistance"]
      effect.forEach((k) => {
        event.recipes.create.compacting([Item.of(`garnished:cinder_${i}_${k}`)], ['#bttk:nuggets_used_for_cinder_nuts', Fluid.of('minecraft:lava', 250), Item.of('minecraft:nether_wart', 2), Item.of('garnished:salt_compound', 1), Item.of(`garnished:cinder_${i}`)])
      })
    })

    event.remove('createaddition:mixing/netherrack')
    event.recipes.create.filling('minecraft:netherrack', [Item.of('minecraft:cobblestone'), Fluid.of('sons_of_sins:blood', 50)]).id('kubejs:filling/netherrack_from_blood')

    event.recipes.create.mixing(Fluid.of('minecraft:lava', 100), Fluid.of('kubejs:molten_soul_steel', 50)).superheated().id('kubejs:mixing/lava_from_molten_soul_steel')
    event.recipes.create.filling('kubejs:bowl_of_lava', [Item.of('minecraft:bowl'), Fluid.of('minecraft:lava', 250)]).id('kubejs:filling/lava_bowl')
    event.recipes.create.emptying([Fluid.of('minecraft:lava', 250), Item.of('minecraft:bowl')], 'kubejs:bowl_of_lava').id('kubejs:emptying/lava_from_lava_bowl')

    event.recipes.create.mixing(Fluid.of('kubejs:ghast_tears', 250), [Item.of('minecraft:ghast_tear', 2), Fluid.of('minecraft:water', 250)]).id('kubejs:mixing/ghast_tears')
    event.recipes.create.filling('kubejs:bowl_of_ghast_tears', ['minecraft:bowl', Fluid.of('kubejs:ghast_tears', 250)]).id('kubejs:filling/ghast_tears_bowl')
    event.recipes.create.emptying([Fluid.of('kubejs:ghast_tears', 250), Item.of('minecraft:bowl')], 'kubejs:bowl_of_ghast_tears').id('kubejs:emptying/ghast_tears_from_ghast_tears_bowl')

    event.recipes.create.filling('kubejs:bowl_of_spiritual_energy', ['minecraft:bowl', Fluid.of('kubejs:spiritual_energy', 250)]).id('kubejs:filling/spiritual_energy_bowl')
    event.recipes.create.emptying([Fluid.of('kubejs:spiritual_energy', 250), Item.of('minecraft:bowl')], 'kubejs:bowl_of_spiritual_energy').id('kubejs:emptying/spiritual_energy_from_spiritual_energy_bowl')

    event.shapeless('kubejs:bowl_of_senile_dust', ['4x garnished:senile_dust', '1x minecraft:bowl']).id('kubejs:bowl_of_senile_dust')

    event.recipes.create.deploying('kubejs:magma_soul', ['forbidden_arcanus:soul', 'minecraft:magma_cream']).id('kubejs:item_application/magma_cube_soul')

    event.recipes.create.pressing('kubejs:compact_cinder_flour', 'create:cinder_flour').id('kubejs:pressing/compact_cinder_flour')

    event.recipes.create.haunting('kubejs:tainted_ghast_tear', 'minecraft:ghast_tear').id('kubejs:haunting/tainted_ghast_tear')
    event.recipes.create.emptying([Fluid.of('kubejs:tainted_ghast_tears', 50)], 'kubejs:tainted_ghast_tear').id('kubejs:emptying/tainted_ghast_tears')
    event.recipes.create.mixing([Fluid.of('kubejs:resonant_tears', 200)], [Fluid.of('kubejs:tainted_ghast_tears', 250), Fluid.of('thermal:glowstone', 100), Item.of('forbidden_arcanus:corrupt_soul', 1)]).id('kubejs:mixing/tainted_ghast_tears')

    let incompleteTophetBrew = 'garnished:incomplete_tophet_brew'
    event.remove('garnished:sequenced_assembly/tophet_brew')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:tophet_brew', 1)
    ], 'kubejs:bowl_of_lava', [
      event.recipes.create.deploying(incompleteTophetBrew, [incompleteTophetBrew, 'garnished:crushed_warped_fungus']),
      event.recipes.create.deploying(incompleteTophetBrew, [incompleteTophetBrew, 'garnished:crushed_crimson_fungus'])
    ]).transitionalItem(incompleteTophetBrew).loops(3).id('kubejs:sequenced_assembly/tophet_brew')
    
    let incompleteSoulKhana = 'kubejs:incomplete_soul_khana'
    event.remove('garnished:soul_khana')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:soul_khana', 1)
    ], 'kubejs:bowl_of_spiritual_energy', [
      event.recipes.create.deploying(incompleteSoulKhana, [incompleteSoulKhana, 'garnished:soul_roots']),
      event.recipes.create.deploying(incompleteSoulKhana, [incompleteSoulKhana, 'garnished:soul_roots']),
      event.recipes.create.deploying(incompleteSoulKhana, [incompleteSoulKhana, 'garnished:crushed_sepia_fungus'])
    ]).transitionalItem(incompleteSoulKhana).loops(2).id('kubejs:sequenced_assembly/soul_khana')
    
    let incompleteGrimStew = 'kubejs:incomplete_grim_stew'
    event.remove('garnished:mechanical_crafting/grim_stew')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:grim_stew', 1)
    ], 'kubejs:bowl_of_ghast_tears', [
      event.recipes.create.deploying(incompleteGrimStew, [incompleteGrimStew, 'garnished:crushed_shroomlight']),
      event.recipes.create.deploying(incompleteGrimStew, [incompleteGrimStew, 'garnished:crushed_shroomlight']),
      event.recipes.create.deploying(incompleteGrimStew, [incompleteGrimStew, 'garnished:crushed_warped_fungus']),
      event.recipes.create.deploying(incompleteGrimStew, [incompleteGrimStew, 'garnished:crushed_crimson_fungus'])
    ]).transitionalItem(incompleteGrimStew).loops(2).id('kubejs:sequenced_assembly/grim_stew')
    
    let incompleteSpiritedConcoction = 'kubejs:incomplete_spirited_concoction'
    event.remove('garnished:spirited_concoction')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:spirited_concoction', 1)
    ], 'kubejs:bowl_of_senile_dust', [
      event.recipes.create.deploying(incompleteSpiritedConcoction, [incompleteSpiritedConcoction, 'garnished:crushed_warped_fungus']),
      event.recipes.create.deploying(incompleteSpiritedConcoction, [incompleteSpiritedConcoction, 'garnished:crushed_crimson_fungus']),
      event.recipes.create.deploying(incompleteSpiritedConcoction, [incompleteSpiritedConcoction, 'garnished:crushed_sepia_fungus']),
      event.recipes.create.deploying(incompleteSpiritedConcoction, [incompleteSpiritedConcoction, 'garnished:soul_roots'])
    ]).transitionalItem(incompleteSpiritedConcoction).loops(2).id('kubejs:sequenced_assembly/spirited_concoction')
    
    let incompleteCinderShroomRoll = 'garnished:incomplete_cinder_roll'
    event.remove('garnished:sequenced_assembly/cinder_roll')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:cinder_roll', 1)
    ], 'kubejs:compact_cinder_flour', [
      event.recipes.create.filling(incompleteCinderShroomRoll, [incompleteCinderShroomRoll, Fluid.of('kubejs:blazing_blood', 100)]),
      event.recipes.create.deploying(incompleteCinderShroomRoll, [incompleteCinderShroomRoll, 'garnished:crushed_shroomlight']),
      event.recipes.create.deploying(incompleteCinderShroomRoll, [incompleteCinderShroomRoll, 'garnished:crushed_ender_pearl'])
    ]).transitionalItem(incompleteCinderShroomRoll).loops(2).id('kubejs:sequenced_assembly/cinder_shroom_roll')
    
    let incompleteWeepingTangle = 'kubejs:incomplete_weeping_tangle'
    event.remove('garnished:sequenced_assembly/weeping_tangle')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:weeping_tangle', 1)
    ], 'garnished:almond_cheese', [
      event.recipes.create.deploying(incompleteWeepingTangle, [incompleteWeepingTangle, 'garnished:enflamed_mandible']),
      event.recipes.create.pressing(incompleteWeepingTangle, [incompleteWeepingTangle]),
      event.recipes.create.deploying(incompleteWeepingTangle, [incompleteWeepingTangle, 'garnished:crushed_warped_fungus']),
      event.recipes.create.deploying(incompleteWeepingTangle, [incompleteWeepingTangle, 'garnished:crushed_crimson_fungus']),
      event.recipes.create.deploying(incompleteWeepingTangle, [incompleteWeepingTangle, 'minecraft:ghast_tear'])
    ]).transitionalItem(incompleteWeepingTangle).loops(2).id('kubejs:sequenced_assembly/weeping_tangle')
    
    let incompleteBlazingDelight = 'kubejs:incomplete_blazing_delight'
    event.remove('garnished:mechanical_crafting/blazing_delight')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:blazing_delight', 1)
    ], 'garnished:empty_crimson_tusk', [
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'garnished:crushed_crimson_fungus']),
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'garnished:crushed_crimson_fungus']),
      event.recipes.create.filling(incompleteBlazingDelight, [incompleteBlazingDelight, Fluid.of('kubejs:blazing_blood', 500)]),
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'kubejs:magma_soul']),
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'garnished:crushed_ender_pearl'])
    ]).transitionalItem(incompleteBlazingDelight).loops(1).id('kubejs:sequenced_assembly/blazing_delight')
    
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:blazing_delight', 1)
    ], 'garnished:crimson_tusk', [
      event.recipes.create.filling(incompleteBlazingDelight, [incompleteBlazingDelight, Fluid.of('kubejs:blazing_blood', 500)]),
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'kubejs:magma_soul']),
      event.recipes.create.deploying(incompleteBlazingDelight, [incompleteBlazingDelight, 'garnished:crushed_ender_pearl'])
    ]).transitionalItem(incompleteBlazingDelight).loops(1).id('kubejs:sequenced_assembly/blazing_delight_alternate')

    let incompletePhantomSteak = 'garnished:incomplete_phantom_steak'
    event.remove('garnished:sequenced_assembly/phantom_steak')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:phantom_steak', 1)
    ], 'minecraft:cooked_beef', [
      event.recipes.create.filling(incompletePhantomSteak, [incompletePhantomSteak, Fluid.of('kubejs:resonant_tears', 250)]),
      event.recipes.create.filling(incompletePhantomSteak, [incompletePhantomSteak, Fluid.of('kubejs:spiritual_energy', 100)]),
      event.recipes.create.deploying(incompletePhantomSteak, [incompletePhantomSteak, '#minecraft:soul_fire_base_blocks']),
      event.recipes.create.deploying(incompletePhantomSteak, [incompletePhantomSteak, 'garnished:salt_compound']),
      event.recipes.create.deploying(incompletePhantomSteak, [incompletePhantomSteak, 'garnished:garnish_powder'])
    ]).transitionalItem(incompletePhantomSteak).loops(2).id('kubejs:sequenced_assembly/phantom_steak')

    event.shapeless('kubejs:bowl_of_void_dust', ['4x garnished:void_dust', '1x minecraft:bowl']).id('kubejs:bowl_of_void_dust').id('kubejs:bowl_of_void_dust')
    event.shapeless('kubejs:bowl_of_cosmic_powder', ['4x garnished:cosmic_powder', '1x minecraft:bowl']).id('kubejs:bowl_of_cosmic_powder').id('kubejs:bowl_of_cosmic_powder')
    event.recipes.create.filling('kubejs:bowl_of_resonant_tears', [Item.of('minecraft:bowl'), Fluid.of('kubejs:resonant_tears', 250)]).id('kubejs:filling/bowl_of_resonant_tears')

    event.remove('garnished:item_application/ethereal_compound')
    event.recipes.create.mixing('garnished:ethereal_compound', [Fluid.of('kubejs:ender_jelly', 100), Item.of('garnished:void_dust', 2)]).superheated().id('kubejs:mixing/ethereal_compound')

    event.recipes.create.mixing(Fluid.of('kubejs:ender_jelly', 100), Item.of('garnished:ender_jelly', 2)).heated().id('kubejs:mixing/ender_jelly_fluid')

    event.remove('garnished:bottled_ender_jelly')
    event.recipes.create.filling('garnished:ender_jelly_bottle', ['minecraft:glass_bottle', Fluid.of('kubejs:ender_jelly', 250)]).id('kubejs:filling/ender_jelly_bottle')
    event.recipes.create.emptying(Fluid.of('kubejs:ender_jelly', 250), 'garnished:ender_jelly_bottle').id('kubejs:emptying/ender_jelly')

    let incompleteDesolateStew = 'kubejs:incomplete_desolate_stew'
    event.remove('garnished:desolate_stew')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:desolate_stew', 1)
    ], 'kubejs:bowl_of_void_dust', [
      event.recipes.create.filling(incompleteDesolateStew, [incompleteDesolateStew, Fluid.of('kubejs:ender_jelly', 250)]),
      event.recipes.create.deploying(incompleteDesolateStew, [incompleteDesolateStew, 'garnished:chorus_tuft']),
      event.recipes.create.deploying(incompleteDesolateStew, [incompleteDesolateStew, 'garnished:chorus_tuft'])
    ]).transitionalItem(incompleteDesolateStew).loops(2).id('kubejs:sequenced_assembly/desolate_stew')

    let incompleteVoidMixture = 'kubejs:incomplete_void_mixture'
    event.remove('garnished:void_mixture')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:void_mixture', 1)
    ], 'kubejs:bowl_of_void_dust', [
      event.recipes.create.deploying(incompleteVoidMixture, [incompleteVoidMixture, 'garnished:chorus_tuft']),
      event.recipes.create.deploying(incompleteVoidMixture, [incompleteVoidMixture, 'garnished:chorus_tuft']),
      event.recipes.create.deploying(incompleteVoidMixture, [incompleteVoidMixture, 'garnished:nut_flour'])
    ]).transitionalItem(incompleteVoidMixture).loops(3).id('kubejs:sequenced_assembly/void_mixture')
    
    let incompleteEtherealConcoction = 'kubejs:incomplete_ethereal_concoction'
    event.remove('garnished:ethereal_concoction')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:ethereal_concoction', 1)
    ], 'kubejs:bowl_of_resonant_tears', [
      event.recipes.create.deploying(incompleteEtherealConcoction, [incompleteEtherealConcoction, 'garnished:ethereal_compound']),
      event.recipes.create.deploying(incompleteEtherealConcoction, [incompleteEtherealConcoction, 'garnished:ethereal_compound']),
      event.recipes.create.deploying(incompleteEtherealConcoction, [incompleteEtherealConcoction, 'garnished:chorus_tuft']),
      event.recipes.create.filling(incompleteEtherealConcoction, [incompleteEtherealConcoction, Fluid.of('kubejs:ender_jelly', 100)])
    ]).transitionalItem(incompleteEtherealConcoction).loops(3).id('kubejs:sequenced_assembly/ethereal_concoction')
    
    let incompleteCosmicStew = 'kubejs:incomplete_cosmic_brew'
    event.remove('garnished:cosmic_brew')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:cosmic_brew', 1)
    ], 'kubejs:bowl_of_cosmic_powder', [
      event.recipes.create.deploying(incompleteCosmicStew, [incompleteCosmicStew, 'garnished:chorus_tuft']),
      event.recipes.create.deploying(incompleteCosmicStew, [incompleteCosmicStew, 'garnished:chorus_tuft'])
    ]).transitionalItem(incompleteCosmicStew).loops(2).id('kubejs:sequenced_assembly/cosmic_brew')

    let incompleteChorusBowl = 'kubejs:incomplete_chorus_bowl'
    event.remove('garnished:chorus_bowl')
    event.recipes.create.sequenced_assembly([
      Item.of('garnished:chorus_bowl', 1)
    ], 'garnished:hollowed_chorus_fruit', [
      event.recipes.create.deploying(incompleteChorusBowl, [incompleteChorusBowl, 'garnished:chorus_tuft']),
      event.recipes.create.deploying(incompleteChorusBowl, [incompleteChorusBowl, 'garnished:void_dust']),
      event.recipes.create.deploying(incompleteChorusBowl, [incompleteChorusBowl, 'garnished:void_dust']),
      event.recipes.create.deploying(incompleteChorusBowl, [incompleteChorusBowl, 'garnished:nut_flour']),
      event.recipes.create.deploying(incompleteChorusBowl, [incompleteChorusBowl, 'garnished:soul_roots'])
    ]).transitionalItem(incompleteChorusBowl).loops(2).id('kubejs:sequenced_assembly/chorus_bowl')

    event.recipes.create.haunting('kubejs:necromatic_ashes', 'sons_of_sins:ether_ashes').id('kubejs:haunting/necromatic_ashes')
    event.recipes.create.deploying('kubejs:arcane_ashes', [Item.of('sons_of_sins:ether_ashes'), Item.of('forbidden_arcanus:rune')]).id('kubejs:item_application/arcane_ashes')
    event.recipes.create.filling('create:experience_nugget', [Item.of('create_dd:bronze_nugget'), Fluid.of('garnished:green_mastic_resin', 50)]).id('kubejs:filling/experience_nugget')
    event.recipes.create.mixing(Item.of('sons_of_sins:ether_ashes', 2), [Item.of('create:experience_nugget', 6), Item.of('forbidden_arcanus:corrupti_dust', 2)]).id('kubejs:mixing/ether_dust_from_corrupti_dust')

    let incompleteAbstruseMechanism = 'create_dd:incomplete_abstruse_mechanism'
    event.recipes.create.sequenced_assembly([
      Item.of('create_dd:abstruse_mechanism', 1)
    ], 'create_dd:shadow_steel_sheet',[
    event.recipes.create.pressing(incompleteAbstruseMechanism, [incompleteAbstruseMechanism]),
    event.recipes.create.deploying(incompleteAbstruseMechanism, [incompleteAbstruseMechanism, 'kubejs:arcane_ashes']),
    event.recipes.create.deploying(incompleteAbstruseMechanism, [incompleteAbstruseMechanism, 'kubejs:arcane_ashes']),
    event.recipes.create.filling(incompleteAbstruseMechanism, [incompleteAbstruseMechanism, Fluid.of('sons_of_sins:blood', 250)]),
    event.recipes.create.filling(incompleteAbstruseMechanism, [incompleteAbstruseMechanism, Fluid.of('kubejs:spiritual_energy', 500)]),
    event.recipes.create.deploying(incompleteAbstruseMechanism, [incompleteAbstruseMechanism, 'thermal:enderium_gear'])
  ]).transitionalItem(incompleteAbstruseMechanism).loops(2).id('kubejs:sequenced_assembly/abstruse_mechanism')

  event.recipes.create.haunting('create:rose_quartz_block', 'create_dd:spectral_ruby_block').id('kubejs:haunting/rose_quartz_block')
  event.recipes.create.mixing('forbidden_arcanus:rune', [Item.of('minecraft:amethyst_shard'), Item.of('garnished:void_dust', 2)]).superheated().id('kubejs:mixing/rune')
  event.recipes.create.crushing([Item.of('garnished:void_dust', 1).withChance(0.45), Item.of('kubejs:twinkling_void_dust', 4).withChance(0.55), Item.of('kubejs:twinkling_void_dust', 2).withChance(0.677), Item.of('kubejs:twinkling_void_dust', 3).withChance(0.366)], 'kubejs:arcane_ashes').id('kubejs:crushing/arcane_ashes')
  event.recipes.create.mixing('thermal:enderium_ingot', [Item.of('kubejs:necromatic_ashes'), '3x garnished:crushed_ender_pearl', Fluid.of('garnished:blue_mastic_resin', 100)]).superheated().id('kubejs:mixing/enderium_ingot')
  event.recipes.create.haunting('forbidden_arcanus:arcane_crystal_dust', 'kubejs:necromatic_ashes').id('kubejs:haunting/arcane_crystal_dust')
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 25), Item.of('kubejs:tattered_page')], 'garnished:antique_swathe').id('kubejs:emptying/blood_from_antique_swathe')
  event.recipes.create.filling('create:cinder_flour', [Item.of('forbidden_arcanus:mundabitur_dust'), Fluid.of('sons_of_sins:blood', 250)]).id('kubejs:filling/cinder_flour')
  event.recipes.create.deploying('garnished:antique_swathe', [Item.of('minecraft:paper'), Item.of('forbidden_arcanus:corrupti_dust')]).id('kubejs:item_application/antique_swathe_from_paper')
  event.recipes.create.haunting('minecraft:lapis_lazuli', 'create_dd:crystallized_sap').id('kubejs:haunting/lapis_lazuli_from_crystallized_sap')
  event.recipes.create.splashing([Item.of('minecraft:prismarine_crystals', 1), Item.of('minecraft:prismarine_crystals', 1).withChance(0.65)], 'minecraft:lapis_lazuli').id('kubejs:splashing/lapis_lazuli')
  event.recipes.create.pressing('minecraft:paper', 'kubejs:tattered_page').id('kubejs:pressing/paper_from_tattered_page')

  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 250), Item.of('minecraft:glass_bottle')], 'sons_of_sins:bottle_of_blood').id('kubejs:emptying/blood_from_bottle_of_blood')
  event.recipes.create.filling('sons_of_sins:bottle_of_blood', [Item.of('minecraft:glass_bottle'), Fluid.of('sons_of_sins:blood', 250)]).id('kubejs:filling/bottle_of_blood_from_filling')
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 1000), Item.of('minecraft:bucket')], 'sons_of_sins:blood_bucket').id('kubejs:emptying/blood_from_blood_bucket')

  let sonsOfSinsBaseRecipes = (result, scrap) => {
    event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 100)], Item.of(scrap))
    event.recipes.create.crushing([Item.of(result, 2), Item.of(result, 3).withChance(0.45), Item.of(scrap, 1).withChance(0.05)], scrap)
  }
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 100)], Item.of('sons_of_sins:strider_muscle'))
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 100)], Item.of('sons_of_sins:enderman_muscle'))
  event.recipes.create.crushing([Item.of('garnished:void_dust', 2), Item.of('garnished:void_dust', 1).withChance(0.35), Item.of('sons_of_sins:enderman_muscle', 1).withChance(0.05)], Item.of('sons_of_sins:enderman_muscle'))
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 75)], Item.of('sons_of_sins:flesh_of_demise'))
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 75)], Item.of('sons_of_sins:ribs'))
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 75)], Item.of('sons_of_sins:muscle'))
  event.recipes.create.emptying([Fluid.of('sons_of_sins:blood', 75)], Item.of('sons_of_sins:heart'))

  event.recipes.create.emptying([Fluid.of('kubejs:blazing_blood', 100), Item.of('sons_of_sins:blazing_heart', 1)], Item.of('sons_of_sins:block_of_blazing_hearts'))

  sonsOfSinsBaseRecipes('minecraft:gunpowder', 'sons_of_sins:creeper_ribs')
  sonsOfSinsBaseRecipes('minecraft:iron_nugget', 'sons_of_sins:golem_cuirass')
  sonsOfSinsBaseRecipes('minecraft:slime_ball', 'sons_of_sins:slime_rear')
  // sonsOfSinsBaseRecipes('minecraft:gunpowder', 'sons_of_sins:enderman_muscle')
  // sonsOfSinsBaseRecipes('minecraft:gunpowder', 'sons_of_sins:strider_muscle')
  sonsOfSinsBaseRecipes('minecraft:leather', 'sons_of_sins:ravager_muscle')
  sonsOfSinsBaseRecipes('minecraft:blaze_powder', 'sons_of_sins:blazing_heart')
  sonsOfSinsBaseRecipes('minecraft:string', 'sons_of_sins:spider_heart')
  sonsOfSinsBaseRecipes('create_dd:frozen_nugget', 'sons_of_sins:ice_heart')

  event.remove('garnished:freezing/garnished/frost_from_sugar')
  event.custom({
    type: 'create_dd:freezing',
    ingredients: [
      {
        item: 'minecraft:sugar'
      }
    ],
    results: [
      {
        item: 'garnished:frost',
        count: 1
      }
    ]
  })

  event.remove('create_dd:crushing/scorchia')
  event.remove('create_dd:crushing/scorchia_recycling')
  event.remove('garnished:crushing/brittle_dust')
  event.recipes.create.crushing([Item.of('create_dd:coal_piece', 1), Item.of('create_dd:coal_piece', 1).withChance(0.45), Item.of('create_dd:coal_piece', 1).withChance(0.15),  Item.of('garnished:brittle_dust', 1).withChance(0.80), Item.of('create:cinder_flour', 1).withChance(0.06)], '#create:stone_types/scorchia')

  event.remove('tfmg:crushing/limesand')
  event.remove('garnished:crushing/crushed_salt')
  event.remove('tfmg:milling/limesand')
  event.remove('garnished:milling/crushed_salt')
  event.recipes.create.crushing([Item.of('tfmg:limesand', 1).withChance(0.95), Item.of('garnished:crushed_salt', 1).withChance(.90), Item.of('create:zinc_nugget', 2).withChance(0.35), Item.of('minecraft:iron_nugget', 2).withChance(0.35)], '#create:stone_types/limestone')
  event.recipes.create.milling([Item.of('tfmg:limesand', 1), Item.of('garnished:crushed_salt', 1).withChance(0.85), Item.of('create:zinc_nugget', 1).withChance(0.15), Item.of('create:zinc_nugget', 1).withChance(0.05), Item.of('minecraft:iron_nugget', 1).withChance(0.15), Item.of('minecraft:iron_nugget', 1).withChance(0.05)], '#create:stone_types/limestone')

  event.remove('forbidden_arcanus:arcane_crystal_dust')

  event.shaped('create_dd:shadow_steel', [
    ' X ',
    'XAX',
    ' X '
  ], {
    X: 'kubejs:twinkling_void_dust',
    A: '#forge:ingots/steel'
  })

  event.remove('thermal:machine_frame')
  event.shaped('thermal:machine_frame', [
    'XAX',
    'ABA',
    'XAX'
  ], {
    X: '#forge:ingots/brass',
    A: '#c:glass_blocks',
    B: 'create_dd:calculation_mechanism'
  })

  event.remove('thermal:redstone_servo')
  event.shaped('thermal:redstone_servo', [
    ' A ',
    'XBX',
    ' A '
  ], {
    A: '#forge:plates/iron',
    X: 'minecraft:redstone',
    B: 'create_dd:inductive_mechanism'
  })

  event.remove('create:crushing/netherrack')
  event.remove('forbidden_arcanus:mundabitur_dust')
  event.remove('forbidden_arcanus:corrupti_dust')
  event.recipes.create.crushing([Item.of('forbidden_arcanus:mundabitur_dust', 1).withChance(0.75), Item.of('forbidden_arcanus:corrupti_dust', 1).withChance(0.35), Item.of('forbidden_arcanus:corrupti_dust', 1).withChance(0.05)], 'minecraft:netherrack')

  event.remove('forbidden_arcanus:deorum_ingot')
  event.shaped('forbidden_arcanus:deorum_ingot', [
    'XAX',
    'BEB',
    'XAX'
  ], {
    X: 'kubejs:twinkling_void_dust',
    A: 'forbidden_arcanus:arcane_crystal_dust',
    B: 'forbidden_arcanus:mundabitur_dust',
    E: 'minecraft:netherite_ingot'
  })

  event.remove('create_dd:crafting/crafting_inductive_mechanism1')
  event.remove('create_dd:crafting/crafting_inductive_mechanism2')
  event.remove('create_dd:sequenced_assembly/logistics_mechanism')
  event.remove('create_dd:sequenced_assembly/inductive_mechanism')
  let incompleteInductiveMechanism = 'create_dd:incomplete_inductive_mechanism'
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:inductive_mechanism', 1)
  ], '#forge:plates/zinc', [
    event.recipes.create.deploying(incompleteInductiveMechanism, [incompleteInductiveMechanism, 'create:cogwheel']),
    event.recipes.create.deploying(incompleteInductiveMechanism, [incompleteInductiveMechanism, 'create:large_cogwheel']),
    event.recipes.create.deploying(incompleteInductiveMechanism, [incompleteInductiveMechanism, '#forge:nuggets/zinc']),
    event.recipes.create.deploying(incompleteInductiveMechanism, [incompleteInductiveMechanism, '#forge:nuggets/tin']),
    event.recipes.create.deploying(incompleteInductiveMechanism, [incompleteInductiveMechanism, 'minecraft:slime_ball'])
  ]).transitionalItem(incompleteInductiveMechanism).loops(2)

  event.remove('create_dd:sequenced_assembly/calculation_mechanism')
  let incompleteCalculationMechanism = 'create_dd:incomplete_calculation_mechanism'
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:calculation_mechanism', 1)
  ], '#forge:plates/tin', [
    event.recipes.create.deploying(incompleteCalculationMechanism, [incompleteCalculationMechanism, 'alexscaves:copper_valve']),
    event.recipes.create.deploying(incompleteCalculationMechanism, [incompleteCalculationMechanism, 'create:large_cogwheel']),
    event.recipes.create.deploying(incompleteCalculationMechanism, [incompleteCalculationMechanism, 'createaddition:gold_wire'])
  ]).transitionalItem(incompleteCalculationMechanism).loops(2)

  event.remove('create_dd:sequenced_assembly/integrated_mechanism')
  let incompleteIntegratedMechanism = 'create_dd:incomplete_integrated_mechanism'
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:integrated_mechanism', 1)
  ], 'create:precision_mechanism', [
    event.recipes.create.pressing(incompleteIntegratedMechanism, [incompleteIntegratedMechanism]),
    event.recipes.create.deploying(incompleteIntegratedMechanism, [incompleteIntegratedMechanism, 'kubejs:polished_azure_neodymium']),
    event.recipes.create.deploying(incompleteIntegratedMechanism, [incompleteIntegratedMechanism, 'kubejs:polished_scarlet_neodymium']),
    event.recipes.create.filling(incompleteIntegratedMechanism, [incompleteIntegratedMechanism, Fluid.of('kubejs:molten_soul_steel', 250)]),
    event.recipes.create.deploying(incompleteIntegratedMechanism, [incompleteIntegratedMechanism, 'create:electron_tube'])
  ]).transitionalItem(incompleteIntegratedMechanism).loops(2)

  event.remove('create_dd:sequenced_assembly/infernal_mechanism')
  let incompleteInfernalMechanism = 'create_dd:incomplete_infernal_mechanism'
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:infernal_mechanism', 1)
  ], 'create:sturdy_sheet', [
    event.recipes.create.deploying(incompleteInfernalMechanism, [incompleteInfernalMechanism, 'thermal:signalum_gear']),
    event.recipes.create.deploying(incompleteInfernalMechanism, [incompleteInfernalMechanism, 'thermal:signalum_gear']),
    event.recipes.create.filling(incompleteInfernalMechanism, [incompleteInfernalMechanism, Fluid.of('minecraft:lava', 500)])
  ]).transitionalItem(incompleteInfernalMechanism).loops(4)

  event.remove('create_dd:sequenced_assembly/sealed_mechanism')
  let incompleteSealedMechanism = 'create_dd:incomplete_sealed_mechanism'
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:sealed_mechanism', 1)
  ], ['create_dd:rubber', 'thermal:cured_rubber'], [
    event.recipes.create.deploying(incompleteSealedMechanism, [incompleteSealedMechanism, 'thermal:copper_gear']),
    event.recipes.create.deploying(incompleteSealedMechanism, [incompleteSealedMechanism, 'thermal:copper_gear']),
    event.recipes.create.filling(incompleteSealedMechanism, [incompleteSealedMechanism, Fluid.of('tfmg:crude_oil_fluid', 500)]),
    event.recipes.create.filling(incompleteSealedMechanism, [incompleteSealedMechanism, Fluid.of('tfmg:diesel', 100)]),
    event.recipes.create.deploying(incompleteSealedMechanism, [incompleteSealedMechanism, 'create:fluid_tank'])
  ]).transitionalItem(incompleteSealedMechanism).loops(2)
  // From Thermal
  event.recipes.create.sequenced_assembly([
    Item.of('create_dd:sealed_mechanism', 1)
  ], ['create_dd:rubber', 'thermal:cured_rubber'], [
    event.recipes.create.deploying(incompleteSealedMechanism, [incompleteSealedMechanism, 'thermal:copper_gear']),
    event.recipes.create.filling(incompleteSealedMechanism, [incompleteSealedMechanism, Fluid.of('thermal:crude_oil', 1000)]),
    event.recipes.create.deploying(incompleteSealedMechanism, [incompleteSealedMechanism, 'create:fluid_tank'])
  ]).transitionalItem(incompleteSealedMechanism).loops(3)

  event.recipes.create.compacting('thermal:rubber', [Fluid.of('thermal:resin', 500)])

  event.shapeless('minecraft:paper', ['2x alexscaves:thornwood_branch'])

  event.remove('create_dd:crafting/item_interface')
  event.remove('create_dd:crafting/kinetic_motor')
  event.remove('create_dd:crafting/mechanical_roller')
  event.remove('create_dd:crafting/deployer')
  event.remove('create_dd:industrial_iron/mechanical_drill')
  event.remove('create_dd:industrial_iron/mechanical_harvester')
  event.remove('create_dd:industrial_iron/mechanical_plough')
  event.remove('create_dd:industrial_iron/mechanical_press')
  event.remove('create_dd:industrial_iron/display_board')
  event.remove('create_dd:crafting/mechanism_display_board')
  event.remove('create_dd:industrial_iron/mechanism_display_board_indust')
  event.remove('create:crafting/kinetics/display_board')
  event.shaped(Item.of('create:display_board', 4), [
    'XAX'
  ], {
    X: 'create_dd:industrial_iron_sheet',
    A: 'create_dd:calculation_mechanism'
  })

  event.remove('create:crafting/kinetics/item_vault')

  event.remove('create:crafting/kinetics/depot')
  event.remove('create:crafting/kinetics/cogwheel')
  event.remove('create:crafting/kinetics/large_cogwheel')
  event.remove('create:crafting/kinetics/gearbox')
  event.remove('create_dd:crafting/gearbox_from_vertical_gearbox')
  event.remove('create_dd:crafting/vertical_gearbox_from_gearbox')
  event.remove('create_dd:crafting/gearbox')
  event.remove('create_dd:crafting/vertical_gearbox')
  event.remove('create:crafting/kinetics/adjustable_chain_gearshift')
  event.remove('create_dd:crafting/adj_chain_gearshift')
  event.remove('create:crafting/kinetics/contraption_controls')
  event.remove('create_dd:crafting/contraption_controls')
  event.remove('create:crafting/kinetics/shaft')
  event.remove('create:crafting/kinetics/shaft')
  event.remove('create:crafting/kinetics/portable_storage_interface')
  event.remove('create:crafting/kinetics/speedometer')
  event.remove('create:crafting/kinetics/stressometer')
  event.remove('create:deploying/cogwheel')
  event.remove('create:deploying/large_cogwheel')
  event.remove('create:crafting/kinetics/large_cogwheel_from_little')
  event.stonecutting(Item.of('create:cogwheel', 4), 'create:andesite_casing')
  event.stonecutting(Item.of('create:large_cogwheel', 2), 'create:andesite_casing')
  event.stonecutting(Item.of('create:shaft', 8), 'create:andesite_casing')
  event.stonecutting(Item.of('create:gearbox', 2), 'create:andesite_casing')
  event.stonecutting(Item.of('create:depot', 2), 'create:andesite_casing')
  event.stonecutting(Item.of('create:encased_chain_drive', 2), 'create:andesite_casing')
  event.stonecutting(Item.of('create:portable_storage_interface', 1), 'create:andesite_casing')
  event.stonecutting(Item.of('create:speedometer', 1), 'create:stressometer')
  event.stonecutting(Item.of('create:stressometer', 1), 'create:speedometer')
  event.stonecutting(Item.of('create:speedometer', 1), 'create:andesite_casing')
  event.stonecutting(Item.of('create:stressometer', 1), 'create:andesite_casing')
  event.stonecutting(Item.of('create:cogwheel', 2), 'create:large_cogwheel')
  event.stonecutting(Item.of('create:rope_pulley', 1), 'create:andesite_casing')
  event.recipes.create.mechanical_crafting(Item.of('create_dd:kinetic_motor'), [
    'XXX',
    'XAB',
    'CCC'
  ], {
    A: 'create_dd:inductive_mechanism',
    B: 'create:shaft',
    C: 'create:andesite_alloy',
    X: '#minecraft:planks'
  })
  event.shaped(Item.of('create:contraption_controls', 2), [
    'X',
    'A',
    'B'
  ], {
    X: '#minecraft:buttons',
    A: 'create:andesite_casing',
    B: 'create_dd:inductive_mechanism'
  })
  event.shapeless(Item.of('create:adjustable_chain_gearshift', 2), ['create:encased_chain_drive', 'create_dd:inductive_mechanism'])

  event.remove('create:crafting/kinetics/fluid_pipe_vertical')
  event.remove('create:crafting/kinetics/fluid_pipe')
  event.remove('create:crafting/kinetics/smart_fluid_pipe')
  event.remove('create:crafting/kinetics/mechanical_pump')
  event.remove('create:crafting/kinetics/fluid_valve')
  event.remove('create:crafting/kinetics/fluid_tank')
  event.remove('create:crafting/kinetics/hose_pulley')
  event.remove('create:crafting/kinetics/item_drain')
  event.remove('create_enchantment_industry:crafting/disenchanter')
  event.remove('create:crafting/kinetics/spout')
  event.remove('create_enchantment_industry:crafting/printer')
  event.remove('create:crafting/kinetics/portable_fluid_interface')
  event.remove('create:crafting/kinetics/steam_engine')
  event.remove('create_dd:crafting/spout')
  event.remove('create_dd:crafting/fluid_interface')
  event.remove('create:crafting/kinetics/copper_valve_handle')
  event.stonecutting(Item.of('create:fluid_tank', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create:hose_pulley', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create:item_drain', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create_enchantment_industry:disenchanter', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create:spout', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create_enchantment_industry:printer', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create:portable_fluid_interface', 1), 'create:copper_casing')
  event.stonecutting(Item.of('create:fluid_pipe', 1), 'minecraft:copper_ingot')
  event.stonecutting(Item.of('create:fluid_pipe', 9), 'minecraft:copper_block')
  event.stonecutting(Item.of('create:smart_fluid_pipe', 1), 'create:fluid_pipe')
  event.stonecutting(Item.of('create:fluid_valve', 1), 'create:fluid_pipe')
  event.stonecutting(Item.of('create:mechanical_pump', 1), 'create:fluid_pipe')
  event.stonecutting(Item.of('create:copper_valve_handle', 1), 'minecraft:copper_ingot')

  event.remove('create_dd:crafting/controls')
  event.remove('create:crafting/kinetics/controls')
  event.remove('create:crafting/kinetics/track_observer')
  event.remove('create:crafting/kinetics/track_observer_from_other_plates')
  event.remove('create:crafting/kinetics/track_signal')
  event.remove('create:crafting/kinetics/track_station')
  event.stonecutting(Item.of('create:controls', 1), 'create:railway_casing')
  event.stonecutting(Item.of('create:track_observer', 1), 'create:railway_casing')
  event.stonecutting(Item.of('create:track_signal', 1), 'create:railway_casing')
  event.stonecutting(Item.of('create:track_station', 1), 'create:railway_casing')

  event.remove('create_dd:crafting/accelerator_motor')
  event.remove('create:crafting/kinetics/rotation_speed_controller')
  event.remove('create:crafting/kinetics/elevator_pulley')
  event.remove('create_dd:crafting/rotation_speed_controller')
  event.remove('create_dd:crafting/accelorator_motor')
  event.remove('createaddition:crafting/portable_energy_interface')
  event.remove('create:crafting/kinetics/mechanical_arm')
  event.remove('create_dd:crafting/mechanical_arm')
  event.shaped('create:mechanical_arm', [
    'AAX',
    'A  ',
    'BC '
  ], {
    A: '#forge:plates/brass',
    B: 'create_dd:integrated_mechanism',
    C: 'create:brass_casing',
    X: 'create_dd:steel_sheet'
  })
  event.recipes.create.deploying('create:rotation_speed_controller', [Item.of('create:brass_casing', 1), Item.of('create:precision_mechanism', 1)])
  event.stonecutting(Item.of('createaddition:portable_energy_interface', 1), 'create:brass_casing')
  event.stonecutting(Item.of('create:elevator_pulley', 1), 'create:brass_casing')
  event.recipes.create.mechanical_crafting(Item.of('create_dd:accelerator_motor'), [
    'CAB'
  ], {
    A: 'create_dd:kinetic_motor',
    B: 'create_dd:integrated_mechanism',
    C: 'create:brass_casing',
  })

  event.remove('create:splashing/thermal/crushed_raw_tin')
  event.remove('create:blasting/tin_ingot_compat_thermal')
  event.remove('create:smelting/tin_ingot_compat_thermal')

  event.remove('createaddition:pressing/zinc_ingot')
  event.remove('createdeco:pressing/zinc_sheet')

  event.remove('create:crafting/materials/andesite_alloy')
  event.remove('create:crafting/materials/andesite_alloy_from_zinc')
  event.remove('create_dd:industrial_iron/andesite_alloy')
  event.remove('create:mixing/andesite_alloy')
  event.remove('create:mixing/andesite_alloy_from_zinc')
  event.remove('create_dd:industrial_iron/andesite_alloy_mixing')
  event.shaped('create:andesite_alloy', [
    'XA',
    'AX'
  ], {
    X: ['minecraft:iron_nugget', 'create:zinc_nugget', 'create_dd:tin_nugget'],
    A: 'minecraft:andesite'
  })
  event.recipes.create.mixing('2x create:andesite_alloy', [['minecraft:iron_nugget', 'create:zinc_nugget', 'create_dd:tin_nugget'], 'minecraft:andesite'])

  event.remove('create_dd:crushing/cobble_potassic')
  event.recipes.create.crushing([Item.of('create:crushed_raw_tin', 1).withChance(0.25), Item.of('create_dd:tin_nugget', 1).withChance(0.25)], 'create_dd:potassic_cobble')

  event.recipes.powah.energizing(["create:andesite_alloy", "create_dd:chromatic_compound", "powah:crystal_niotic"], "create_dd:overcharge_alloy", 1000000)

  event.recipes.create.deploying('forbidden_arcanus:corrupt_soul', [Item.of('forbidden_arcanus:soul'), Item.of('kubejs:twinkling_void_dust')])
  event.recipes.create.haunting('minecraft:soul_sand', 'forbidden_arcanus:soulless_sand')
  event.recipes.create.crushing([Item.of('minecraft:ghast_tear', 1), Item.of('minecraft:ghast_tear', 1).withChance(0.65), Item.of('minecraft:ghast_tear', 1).withChance(0.25)], 'forbidden_arcanus:soul')
  event.remove('forbidden_arcanus:soul_extractor')
  event.shaped('forbidden_arcanus:soul_extractor', [
    'XA ',
    'BBC',
    'D  '
  ], {
    X: 'forbidden_arcanus:utrem_jar',
    A: 'forbidden_arcanus:dark_matter',
    B: 'minecraft:nether_bricks',
    C: 'minecraft:quartz_block',
    D: 'minecraft:quartz'
  })

  let experienceNugget = 'create:experience_nugget'
  event.recipes.create.sequenced_assembly([
    Item.of('forbidden_arcanus:xpetrified_orb', 1)
  ], 'create:experience_nugget', [
  event.recipes.create.pressing(experienceNugget, [experienceNugget]),
  event.recipes.create.deploying(experienceNugget, [experienceNugget, 'forbidden_arcanus:arcane_crystal_dust'])
]).transitionalItem(experienceNugget).loops(10)

let incompleteTectonicShard = 'kubejs:incomplete_tectonic_shard'
event.recipes.create.sequenced_assembly([
  Item.of('alexscaves:tectonic_shard', 1)
], 'forbidden_arcanus:dark_rune', [
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)]),
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)]),
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)]),
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)]),
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)]),
  event.recipes.create.filling(incompleteTectonicShard, [incompleteTectonicShard, Fluid.of('minecraft:lava', 500)])
]).transitionalItem(incompleteTectonicShard).loops(2)

event.remove('tfmg:crafting/steel_tank')
event.shaped('tfmg:steel_fluid_tank', [
  ' X ',
  'XAX',
  ' X '
], {
  X: '#forge:ingots/steel',
  A: 'create:fluid_tank'
})

event.shaped(Item.of('create:belt_connector', 2), [
  'XXX',
  'XXX'
], {
  X: ['garnished:dried_dulse_kelp', 'garnished:dried_vermilion_kelp']
})

event.shaped(Item.of('create:belt_connector', 4), [
  'XXX',
  'XXX'
], {
  X: 'thermal:cured_rubber'
})

event.remove('waystones:warp_stone')
event.shaped('waystones:warp_stone', [
  'XAX',
  'ABA',
  'XAX'
], {
  X: 'minecraft:amethyst_shard',
  A: 'minecraft:ender_pearl',
  B: 'create_dd:abstruse_mechanism'
})

event.recipes.create.sandpaper_polishing('kubejs:polished_azure_neodymium', 'alexscaves:raw_azure_neodymium')
event.recipes.create.sandpaper_polishing('kubejs:polished_scarlet_neodymium', 'alexscaves:raw_scarlet_neodymium')

event.recipes.thermal.insolator([Item.of('alexscaves:pine_nuts', 2), Item.of('alexscaves:pine_nuts', 1).withChance(0.25)], 'alexscaves:pine_nuts')
event.recipes.thermal.insolator([Item.of('alexscaves:pewen_sapling', 1), Item.of('alexscaves:pewen_log', 6), Item.of('alexscaves:pewen_branch', 5), Item.of('alexscaves:pewen_pines', 1).withChance(0.45)], 'alexscaves:pewen_sapling')
event.recipes.thermal.insolator([Item.of('alexscaves:curly_fern', 2), Item.of('alexscaves:curly_fern', 1).withChance(0.35)], 'alexscaves:curly_fern')
event.recipes.thermal.insolator([Item.of('alexscaves:pewen_pines', 2), Item.of('alexscaves:pewen_pines', 1).withChance(0.15)], 'alexscaves:pewen_pines')
event.recipes.thermal.insolator([Item.of('alexscaves:fiddlehead', 2), Item.of('alexscaves:fiddlehead', 1).withChance(0.25)], 'alexscaves:fiddlehead')
event.recipes.thermal.insolator([Item.of('alexscaves:flytrap', 2), Item.of('alexscaves:flytrap', 1).withChance(0.15)], 'alexscaves:flytrap')
event.recipes.thermal.insolator([Item.of('alexscaves:archaic_vine', 2), Item.of('alexscaves:archaic_vine', 1).withChance(0.35)], 'alexscaves:archaic_vine')
event.recipes.thermal.insolator([Item.of('alexscaves:ancient_sapling', 1), Item.of('minecraft:jungle_log', 6), Item.of('alexscaves:tree_star', 2), Item.of('alexscaves:tree_star', 2).withChance(0.35)], 'alexscaves:ancient_sapling')
event.recipes.thermal.insolator([Item.of('alexscaves:cycad', 3)], 'alexscaves:cycad')
event.recipes.thermal.insolator([Item.of('alexscaves:thornwood_sapling', 1), Item.of('alexscaves:thornwood_log', 6), Item.of('alexscaves:thornwood_branch', 3).withChance(0.65)], 'alexscaves:thornwood_sapling')
event.recipes.thermal.insolator([Item.of('alexscaves:underweeed', 2)], 'alexscaves:underweed')
event.recipes.thermal.insolator([Item.of('alexscaves:dusk_anemone', 2)], 'alexscaves:dusk_anemone')
event.recipes.thermal.insolator([Item.of('alexscaves:midnight_anemone', 2)], 'alexscaves:midnight_anemone')
event.recipes.thermal.insolator([Item.of('alexscaves:twilight_anemone', 2)], 'alexscaves:twilight_anemone')
event.recipes.thermal.insolator([Item.of('alexscaves:ping_pong_sponge', 2)], 'alexscaves:ping_pong_sponge')
event.recipes.thermal.insolator([Item.of('alexscaves:mussel', 2)], 'alexscaves:mussel')

event.recipes.create.crushing([Item.of('alexscaves:raw_scarlet_neodymium', 2), Item.of('alexscaves:raw_scarlet_neodymium', 3).withChance(0.65)], 'alexscaves:scarlet_neodymium_node')
event.recipes.create.crushing([Item.of('alexscaves:raw_azure_neodymium', 2), Item.of('alexscaves:raw_azure_neodymium', 3).withChance(0.65)], 'alexscaves:azure_neodymium_node')

event.recipes.create.deploying('alexscaves:depth_glass', ['#forge:glass', Item.of('alexscaves:sea_glass_shards')])

let incompleteTelecore = 'kubejs:incomplete_telecore'
event.recipes.create.sequenced_assembly([
  Item.of('alexscaves:telecore', 1)
], 'alexscaves:depth_glass', [
  event.recipes.create.pressing(incompleteTelecore, [incompleteTelecore]),
  event.recipes.create.deploying(incompleteTelecore, [incompleteTelecore, 'kubejs:polished_azure_neodymium']),
  event.recipes.create.deploying(incompleteTelecore, [incompleteTelecore, 'kubejs:polished_scarlet_neodymium'])
]).transitionalItem(incompleteTelecore).loops(2)

event.recipes.create.splashing([Item.of('alexscaves:metal_swarf', 1), Item.of('minecraft:iron_nugget', 2).withChance(0.35)], 'alexscaves:galena')

event.remove('thermal:machine_crucible')
event.shaped('thermal:machine_crucible', [
  ' X ',
  'ABA',
  'CDC'
], {
  X: '#forge:glass',
  A: 'minecraft:nether_bricks',
  B: 'thermal:machine_frame',
  C: '#forge:gears/invar',
  D: 'create_dd:infernal_mechanism'
})

event.remove('functionalstorage:linking_tool')
event.remove('functionalstorage:configuration_tool')
event.shaped('functionalstorage:linking_tool', [
  'AAX',
  'ABC',
  'ADA'
], {
  A: 'minecraft:paper',
  B: '#functionalstorage:drawer',
  C: 'create_dd:integrated_mechanism',
  D: 'minecraft:diamond',
  X: 'minecraft:gold_ingot'
})
event.shaped('functionalstorage:configuration_tool', [
  'AAX',
  'ABC',
  'ADA'
], {
  A: 'minecraft:paper',
  B: '#functionalstorage:drawer',
  C: 'create:precision_mechanism',
  D: 'minecraft:emerald',
  X: 'minecraft:gold_ingot'
})

event.remove('refinedstorage:machine_casing')
event.remove('refinedstorage:controller')
event.remove('refinedstorage:grid')
event.remove('refinedstorage:crafting_grid')
event.remove('refinedstorage:wireless_grid')
event.remove('refinedstorageaddons:wireless_crafting_grid')
event.shaped('refinedstorage:machine_casing', [
  'BXB',
  'XAX',
  'BXB'
], {
  X: 'refinedstorage:quartz_enriched_iron',
  A: 'create_dd:sealed_mechanism',
  B: '#forge:ingots/brass'
})
event.shaped('refinedstorage:controller', [
  'XAX',
  'BCB',
  'XDX'
], {
  X: 'refinedstorage:quartz_enriched_iron',
  A: 'refinedstorage:advanced_processor',
  B: 'refinedstorage:silicon',
  C: 'refinedstorage:machine_casing',
  D: 'create_dd:integrated_mechanism'
})
event.shaped('refinedstorage:grid', [
  'XAB',
  'CDB',
  'XEB'
], {
  X: 'refinedstorage:improved_processor',
  A: 'refinedstorage:construction_core',
  B: '#forge:glass',
  C: 'create:precision_mechanism',
  D: 'refinedstorage:machine_casing',
  E: 'refinedstorage:destruction_core'
})
event.shaped('refinedstorage:crafting_grid', [
  'XA',
  'BC'
], {
  X: 'refinedstorage:grid',
  A: 'refinedstorage:advanced_processor',
  B: 'minecraft:crafting_table',
  C: 'create_dd:integrated_mechanism'
})
event.shaped('refinedstorage:wireless_grid', [
  'XAX',
  'XBX',
  'XCX'
], {
  X: 'refinedstorage:quartz_enriched_iron',
  A: 'create_dd:infernal_mechanism',
  B: '#refinedstorage:grid',
  C: 'refinedstorage:advanced_processor'
})
event.shaped('refinedstorageaddons:wireless_crafting_grid', [
  'XAX',
  'XBX',
  'XCX'
], {
  X: 'refinedstorage:quartz_enriched_iron',
  A: 'create_dd:sealed_mechanism',
  B: '#refinedstorage:crafting_grid',
  C: 'refinedstorage:advanced_processor'
})
event.remove('refinedstorage:storage_housing')
event.remove('refinedstorage:1k_storage_disk')
event.remove('refinedstorage:4k_storage_disk')
event.remove('refinedstorage:16k_storage_disk')
event.remove('refinedstorage:64k_storage_disk')
event.shaped('refinedstorage:storage_housing', [
  'XAX',
  'B B',
  'CCC'
], {
  X: '#forge:glass',
  A: 'minecraft:redstone',
  B: '#forge:plates/brass',
  C: 'refinedstorage:quartz_enriched_iron'
})
event.shaped('refinedstorage:1k_storage_disk', [
  'XAX',
  'BCB',
  'DDD'
], {
  X: '#forge:glass',
  A: 'minecraft:redstone',
  B: '#forge:plates/brass',
  C: 'refinedstorage:1k_storage_part',
  D: 'refinedstorage:quartz_enriched_iron'
})
event.shaped('refinedstorage:4k_storage_disk', [
  'XAX',
  'BCB',
  'DDD'
], {
  X: '#forge:glass',
  A: 'minecraft:redstone',
  B: '#forge:plates/brass',
  C: 'refinedstorage:4k_storage_part',
  D: 'refinedstorage:quartz_enriched_iron'
})
event.shaped('refinedstorage:16k_storage_disk', [
  'XAX',
  'BCB',
  'DDD'
], {
  X: '#forge:glass',
  A: 'minecraft:redstone',
  B: '#forge:plates/brass',
  C: 'refinedstorage:16k_storage_part',
  D: 'refinedstorage:quartz_enriched_iron'
})
event.shaped('refinedstorage:64k_storage_disk', [
  'XAX',
  'BCB',
  'DDD'
], {
  X: '#forge:glass',
  A: 'minecraft:redstone',
  B: '#forge:plates/brass',
  C: 'refinedstorage:64k_storage_part',
  D: 'refinedstorage:quartz_enriched_iron'
})

event.recipes.thermal.insolator([Item.of('deeperdarker:gloomy_grass', 2)], 'deeperdarker:gloomy_grass')
event.recipes.thermal.insolator([Item.of('deeperdarker:gloomy_cactus', 2)], 'deeperdarker:gloomy_cactus')
event.recipes.thermal.insolator([Item.of('deeperdarker:sculk_tendrils', 2)], 'deeperdarker:sculk_tendrils')
event.recipes.thermal.insolator([Item.of('deeperdarker:sculk_vines', 2)], 'deeperdarker:sculk_vines')
event.recipes.thermal.insolator([Item.of('deeperdarker:echo_log', 6), Item.of('deeperdarker:echo_sapling'), Item.of('deeperdarker:sculk_gleam', 3)], 'deeperdarker:echo_sapling')

event.recipes.thermal.insolator([Item.of('create_dd:rubber_log', 6), Item.of('create_dd:rubber_sapling')], 'create_dd:rubber_sapling')

event.remove('sophisticatedbackpacks:backpack')
event.remove('sophisticatedbackpacks:copper_backpack')
event.remove('sophisticatedbackpacks:iron_backpack')
event.remove('sophisticatedbackpacks:gold_backpack')
event.remove('sophisticatedbackpacks:diamond_backpack')
event.remove('sophisticatedbackpacks:netherite_backpack')
event.shaped('sophisticatedbackpacks:backpack', [
  'XAX',
  'XBX',
  'ACA'
], {
  X: 'minecraft:string',
  A: '#forge:leather',
  B: '#forge:chests',
  C: 'create_dd:inductive_mechanism'
})
event.shaped('sophisticatedbackpacks:copper_backpack', [
  'XXX',
  'XAX',
  'XBX'
], {
  X: 'minecraft:copper_ingot',
  A: 'sophisticatedbackpacks:backpack',
  B: 'create_dd:calculation_mechanism'
})
event.shaped('sophisticatedbackpacks:iron_backpack', [
  'XXX',
  'XAX',
  'XBX'
], {
  X: 'minecraft:iron_ingot',
  A: 'sophisticatedbackpacks:backpack',
  B: 'create:precision_mechanism'
})
event.shaped('sophisticatedbackpacks:gold_backpack', [
  'XXX',
  'XAX',
  'XBX'
], {
  X: 'minecraft:gold_ingot',
  A: 'sophisticatedbackpacks:iron_backpack',
  B: 'create_dd:integrated_mechanism'
})
event.shaped('sophisticatedbackpacks:diamond_backpack', [
  'XXX',
  'XAX',
  'XBX'
], {
  X: 'minecraft:diamond',
  A: 'sophisticatedbackpacks:gold_backpack',
  B: 'create_dd:sealed_mechanism'
})
event.smithing('sophisticatedbackpacks:netherite_backpack', 'kubejs:abstruse_upgrade_smithing_template', 
'sophisticatedbackpacks:diamond_backpack', 'create_dd:abstruse_mechanism')

event.remove('functionalstorage:netherite_upgrade')
event.remove('functionalstorage:void_upgrade')
event.smithing('functionalstorage:netherite_upgrade', 'kubejs:abstruse_upgrade_smithing_template',
'functionalstorage:diamond_upgrade', 'create_dd:abstruse_mechanism')
event.smithing('functionalstorage:void_upgrade', 'kubejs:abstruse_upgrade_smithing_template',
'functionalstorage:collector_upgrade', 'create_dd:abstruse_mechanism')

event.recipes.create.emptying([Fluid.of('kubejs:spiritual_energy', 250), 'forbidden_arcanus:soul'], 'forbidden_arcanus:corrupt_soul')
event.recipes.create.emptying([Fluid.of('kubejs:spiritual_energy', 50)], 'forbidden_arcanus:soul')
event.shaped('2x kubejs:abstruse_upgrade_smithing_template', [
  'XAX',
  'XBX',
  'XXX'
], {
  X: 'minecraft:diamond',
  A: 'kubejs:abstruse_upgrade_smithing_template',
  B: 'garnished:abyssal_stone'
})
let incompleteAbstruseUpgradeTemplate = 'kubejs:incomplete_abstruse_upgrade_smithing_template'
event.recipes.create.sequenced_assembly([
  Item.of('kubejs:abstruse_upgrade_smithing_template', 1)
], 'garnished:void_dust', [
  event.recipes.create.pressing(incompleteAbstruseUpgradeTemplate, [incompleteAbstruseUpgradeTemplate]),
  event.recipes.create.filling(incompleteAbstruseUpgradeTemplate, [incompleteAbstruseUpgradeTemplate, Fluid.of('kubejs:spiritual_energy', 250)]),
  event.recipes.create.deploying(incompleteAbstruseUpgradeTemplate, [incompleteAbstruseUpgradeTemplate, 'create_dd:refined_radiance_sheet'])
]).transitionalItem(incompleteAbstruseUpgradeTemplate).loops(2)

event.remove('thermal:signalum_dust_4')
event.remove('thermal:fire_charge/signalum_ingot_4')
event.shaped('4x thermal:signalum_dust', [
  'XXX',
  'ABB',
  'BB '
], {
  X: 'thermal:copper_dust',
  A: 'thermal:silver_dust',
  B: 'forbidden_arcanus:mundabitur_dust'
})
event.shaped('4x thermal:signalum_ingot', [
  'XXX',
  'ABB',
  'BBC'
], {
  X: ['thermal:copper_dust', 'minecraft:copper_ingot'],
  A: ['thermal:silver_dust', 'thermal:silver_ingot'],
  B: 'forbidden_arcanus:mundabitur_dust',
  C: 'minecraft:fire_charge'
})
event.recipes.create.pressing('kubejs:signalum_sheet', 'thermal:signalum_ingot')

event.recipes.create.crushing([Item.of('create:crushed_raw_silver', 1).withChance(0.40), Item.of('thermal:silver_nugget', 1).withChance(0.40)], 'minecraft:end_stone')

event.recipes.create.item_application('design_decor:limestone_crushing_wheel', [Item.of('#design_decor:crushing_wheels'), Item.of('alexscaves:limestone')]).id('kubejs:limestone_crushing_wheels_from_alexscaves_limestone')
event.recipes.create.item_application('design_decor:limestone_crushing_wheel', [Item.of('#design_decor:crushing_wheels'), Item.of('quark:limestone')]).id('kubejs:limestone_crushing_wheels_from_quark_limestone')

event.recipes.create.item_application('design_decor:limestone_millstone', [Item.of('#design_decor:crushing_wheels'), Item.of('alexscaves:limestone')]).id('kubejs:limestone_millstone_from_alexscaves_limestone')
event.recipes.create.item_application('design_decor:limestone_millstone', [Item.of('#design_decor:crushing_wheels'), Item.of('quark:limestone')]).id('kubejs:limestone_millstone_from_quark_limestone')

event.remove('create_dd:mixing/bronze_ingot')
event.recipes.create.mixing('create_dd:bronze_ingot', [Item.of('minecraft:copper_ingot', 3), Item.of('create:zinc_ingot'), '#forge:ingots/tin'])

event.remove('thermal:fluid_cell')
event.shaped('thermal:fluid_cell', [
  'XAX',
  'BCB',
  'XDX'
], {
  X: ['create_dd:bronze_ingot', 'thermal:bronze_ingot'],
  A: '#forge:glass',
  B: 'thermal:invar_ingot',
  C: 'thermal:fluid_cell_frame',
  D: 'create_dd:sealed_mechanism'
})
event.remove('thermal:fluid_cell_frame')
event.shaped('thermal:fluid_cell_frame', [
  'XAX',
  'ABA',
  'XAX'
], {
  X: 'minecraft:copper_ingot',
  A: '#forge:glass',
  B: 'thermal:invar_gear'
})

    // Igneous Extruder Recipe
    let extruderRecipe = (result, adj) => {
        event.custom({
          type: 'thermal:rock_gen',
          adjacent: adj,
          result: {
            item: result
          }
        })
      }
      let extruder2Recipe = (result, below, adj) => {
        event.custom({
          type: 'thermal:rock_gen',
          adjacent: adj,
          below: below,
          result: {
            item: result
          }
        })
      }

      // Magma Crucible Recipe
      let crucibleRecipe = (result, resultAmount, energy, input) => {
        event.custom({
          type: 'thermal:crucible',
          ingredient: {
            item: input
          },
          result: [
            {
              fluid: result,
              amount: resultAmount
            }
          ],
          energy: energy
        })
      }

      // Crystallizer Recipe
      let crystallizerRecipe = (result, liquidInput, liquidAmount, input) => {
        event.custom({
          type: 'thermal:crystallizer',
          ingredients: [
            {
              fluid: liquidInput,
              amount: liquidAmount
            },
            {
              item: input
            }
          ],
          result: [
            {
              item: result
            }
          ]
        })
      }

      crucibleRecipe('kubejs:molten_soul_steel', 900, 72000, 'sons_of_sins:soul_steel_block')
      crucibleRecipe('kubejs:molten_soul_steel', 100, 8000, 'sons_of_sins:soul_steel')

      crystallizerRecipe('alexscaves:scarlet_neodymium_node', 'minecraft:water', 500, 'alexscaves:raw_scarlet_neodymium')
      crystallizerRecipe('alexscaves:azure_neodymium_node', 'minecraft:water', 500, 'alexscaves:raw_azure_neodymium')

      // Sons of Sins Mod Rock Gen
      //extruder2Recipe('minecraft:netherrack', 'minecraft:obsidian', 'sons_of_sins:blood')
    
      // Create Mod Rock Gen
      extruderRecipe('create:limestone', 'create:honey')
      extruderRecipe('create:scoria', 'create:chocolate')
      
      // Garnished Mod Rock Gen
      extruderRecipe('create:ochrum', 'garnished:apple_cider')
      extruderRecipe('minecraft:dripstone_block', 'garnished:peanut_oil')
      extruderRecipe('minecraft:calcite', 'garnished:garnish')
      extruderRecipe('minecraft:end_stone', 'garnished:cashew_mixture')

      extruderRecipe('minecraft:tuff', 'garnished:mastic_resin')
      extruderRecipe('create:crimsite', 'garnished:red_mastic_resin')
      extruderRecipe('garnished:ritualistic_stone', 'garnished:orange_mastic_resin')
      extruderRecipe('garnished:carnotite', 'garnished:yellow_mastic_resin')
      extruderRecipe('create:veridium', 'garnished:green_mastic_resin')
      extruderRecipe('create:asurine', 'garnished:blue_mastic_resin')
      extruderRecipe('garnished:abyssal_stone', 'garnished:purple_mastic_resin')

      // Create: Dreams & Desires Rock Gen
      extruderRecipe('minecraft:calcite', 'create_dd:condense_milk')
      extruderRecipe('create_dd:asurine_cobble', 'create_dd:cream')
      extruderRecipe('minecraft:deepslate', 'create_dd:vanilla')
      extruderRecipe('create_dd:potassic_cobble', 'create_dd:vanilla_milkshake')
      extruderRecipe('create_dd:gabbro', 'create_dd:strawberry')
      extruderRecipe('create_dd:crimsite_cobble', 'create_dd:strawberry_milkshake')
      extruderRecipe('minecraft:dripstone_block', 'create_dd:glowberry')
      extruderRecipe('create_dd:ochrum_cobble', 'create_dd:glowberry_milkshake')
      extruderRecipe('minecraft:blackstone', 'create_dd:caramel')
      extruderRecipe('create_dd:veridium_cobble', 'create_dd:caramel_milkshake')
      extruderRecipe('create:scorchia', 'create_dd:hot_chocolate')
      extruderRecipe('create:scoria', 'create_dd:chocolate_milkshake')
      extruderRecipe('minecraft:crying_obsidian', 'create_dd:chromatic_waste')
      extruderRecipe('minecraft:basalt', 'create_dd:sap')
      extruderRecipe('create_dd:aethersite', 'create_dd:shimmer')
      extruderRecipe('create:scoria', 'create_dd:chocolate_milkshake')

      // Etheric Blood Imbibation
      let ethericBloodImbibation = (input, result, count) => {
        event.custom({
          type: 'sons_of_sins:etheric_blood_imbibation',
          ingredients: [
            {
              item: input
            }
          ],
          output: {
            item: result,
            count: count
          }
        })
      }

      // Garnished Blood Imbibation
      ethericBloodImbibation('forbidden_arcanus:corrupti_dust', 'garnished:crushed_ender_pearl', 2)

      // (Garnished) Freezing Recipe
      let garnishedFreezingRecipe = (input, result, count) => {
        event.custom({
          type: 'garnished:freezing',
          ingredients: [
            {
              item: input
            }
          ],
          results: [
            {
              item: result,
              count: count
            }
          ]
        })
      }

      garnishedFreezingRecipe('create:powdered_obsidian', 'minecraft:obsidian', 1)

      event.custom({
        type: 'garnished:freezing',
        ingredients: [
          [
            {
              item: 'alexscaves:dusk_anemone'
            },
            {
              item: 'alexscaves:midnight_anemone'
            },
            {
              item: 'alexscaves:twilight_anemone'
            }
          ]
        ],
        results: [
          {
            item: 'alexscaves:sea_glass_shards',
            count: 2
          },
          {
            item: 'alexscaves:sea_glass_shards',
            count: 1,
            chance: 0.65
          },
          {
            item: 'alexscaves:bioluminesscence',
            count: 1,
            chance: 0.05
          }
        ]
      })

      let vintagePolishingRecipe = (speed, input, result, count, processingTime) => {
        event.custom({
          type: 'vintageimprovements:polishing',
          speed_limits: speed,
          ingredients: [
            {
              item: input
            }
          ],
          results: [
            {
              item: result,
              count: count
            }
          ],
          processingTime: processingTime
        })
      }

      vintagePolishingRecipe(2, 'alexscaves:raw_azure_neodymium', 'kubejs:polished_azure_neodymium', 1, 20)
      vintagePolishingRecipe(2, 'alexscaves:raw_scarlet_neodymium', 'kubejs:polished_scarlet_neodymium', 1, 20)

      let biomancyDigestingRecipe = (input, cost, time, count, output, recipeName) => {
        event.custom({
          type: 'biomancy:digesting',
          ingredient: {
            item: input
          },
          nutrientsCost: cost,
          processingTime: time,
          result: {
            count: count,
            item: output
          }
        }).id(recipeName)
      }

      biomancyDigestingRecipe('create_dd:abstruse_mechanism', 1, 996, 128, 'garnished:void_dust', 'kubejs:biomancy/digesting/no_one_will_use_this')

})