// onEvent('item.registry, event => {

Platform.mods.kubejs.name = "Create: Back to The Kitchen"

StartupEvents.registry('item', event => {
    event.create('necromatic_ashes').displayName('§eNecromatic Ashes').texture('kubejs:item/necromatic_ashes')
    event.create('arcane_ashes').displayName('§eArcane Ashes').texture('kubejs:item/arcane_ashes')

    event.create('twinkling_void_dust').displayName('§eTwinkling Void Dust').texture('kubejs:item/twinkling_void_dust')

    event.create('tattered_page').displayName('Tattered Page')

    event.create('incomplete_tectonic_shard').displayName('Cooled Tectonic Shard')
    event.create('incomplete_telecore').displayName('Incomplete Telecore')

    event.create('polished_azure_neodymium').displayName('Polished Azure Neodymium')
    event.create('polished_scarlet_neodymium').displayName('Polished Scarlet Neodymium')

    event.create('abstruse_upgrade_smithing_template').displayName('Smithing Template')
    event.create('incomplete_abstruse_upgrade_smithing_template').displayName('Incomplete Smithing Template')

    event.create('signalum_sheet').displayName('Signalum Sheet')

    event.create('bowl_of_lava').displayName('Bowl of Lava').texture('kubejs:item/lava_bowl')
    event.create('bowl_of_ghast_tears').displayName('Bowl of Ghast Tears').texture('kubejs:item/ghast_tear_bowl')
    event.create('bowl_of_spiritual_energy').displayName('Bowl of Spiritual Energy').texture('kubejs:item/spiritual_energy_bowl')
    event.create('bowl_of_senile_dust').displayName('Bowl of Senile Dust').texture('kubejs:item/senile_dust_bowl')

    event.create('bowl_of_void_dust').displayName('Bowl of Void Dust').texture('kubejs:item/void_dust_bowl')
    event.create('bowl_of_cosmic_powder').displayName('Bowl of Cosmic Powder').texture('kubejs:item/cosmic_powder_bowl')
    event.create('bowl_of_resonant_tears').displayName('Bowl of Resonant Tears').texture('kubejs:item/resonant_tears_bowl')

    event.create('incomplete_soul_khana').displayName('Incomplete Soul Khana').texture('garnished:item/incomplete_soul_khana')
    event.create('incomplete_grim_stew').displayName('Incomplete Grim Stew').texture('garnished:item/incomplete_grim_stew')
    event.create('incomplete_spirited_concoction').displayName('Incomplete Spirited Concoction').texture('garnished:item/incomplete_spirited_concoction')
    event.create('incomplete_blazing_delight').displayName('Incomplete Blazing Delight').texture('garnished:item/incomplete_blazing_delight')
    event.create('incomplete_weeping_tangle').displayName('Incomplete Weeping Tangle').texture('garnished:item/incomplete_weeping_tangle')

    event.create('incomplete_desolate_stew').displayName('Incomplete Desolate Stew').texture('garnished:item/incomplete_desolate_stew')
    event.create('incomplete_void_mixture').displayName('Incomplete Void Mixture').texture('garnished:item/incomplete_void_mixture')
    event.create('incomplete_ethereal_concoction').displayName('Incomplete Ethereal Concoction').texture('garnished:item/incomplete_ethereal_concoction')
    event.create('incomplete_cosmic_brew').displayName('Incomplete Cosmic Brew').texture('garnished:item/incomplete_cosmic_brew')
    event.create('incomplete_chorus_bowl').displayName('Incomplete Chorus Bowl').texture('garnished:item/incomplete_chorus_bowl')

    event.create('magma_soul').displayName('Magma Cube Soul').texture('kubejs:item/magma_soul')

    event.create('compact_cinder_flour').displayName('Compact Cinder Flour')
    
    event.create('tainted_ghast_tear').displayName('Tainted Ghast Tear')

    // event.create('necromatic_alloy').displayName('Necromatic Alloy').texture('kubejs:item/necromatic_alloy')
})

StartupEvents.registry('fluid', event => {
    event.create('molten_soul_steel')
    .thickTexture(0x6E6E6C).bucketColor(0x6E6E6C)
    .displayName('Molten Soul Steel')
    event.create("spiritual_energy")
    .displayName("Liquid Spiritual Energy")
    .thickTexture(0xB8BBD5).bucketColor(0xB8BBD5)
    .luminosity(15)
    event.create("ghast_tears")
    .displayName("Ghast Tears")
    .thinTexture(0xCFF1F1).bucketColor(0xCFF1F1)
    .luminosity(15)
    event.create("tainted_ghast_tears")
    .displayName("Tainted Ghast Tears")
    .thinTexture(0xBFDFEF).bucketColor(0xBFDFEF)
    .luminosity(15)
    event.create("blazing_blood")
    .displayName("Blazing Blood")
    .thickTexture(0xCBA75C).bucketColor(0xCBA75C)
    .luminosity(15)
    event.create("resonant_tears")
    .displayName("Resonant Tears")
    .thickTexture(0x72FFA6).bucketColor(0x72FFA6)
    .luminosity(15)
    event.create("ender_jelly")
    .displayName("Ender Jelly")
    .thickTexture(0x105E51).bucketColor(0x105E51)
    .luminosity(15)
})

ItemEvents.modification(event => {
    event.modify('createaddition:diamond_grit_sandpaper', item => {
        item.maxDamage = 16
    })
})