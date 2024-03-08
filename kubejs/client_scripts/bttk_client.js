//onEvent('client.generate_assets', event => {
ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:necromatic_ashes'], (item, advanced, text) => {
        text.add(1, [
            Text.of("Strong forces draw near, enjoy life while you can...").italic().darkPurple()
        ])
    })
    event.addAdvanced(['kubejs:arcane_ashes'], (item, adavnced, text) => {
        text.add(1, [
            Text.of("Reap what you sow, from dusk till dawn...").italic().darkPurple()
        ])
    })
    event.addAdvanced(['kubejs:abstruse_upgrade_smithing_template'], (item, advanced, text) => {
        text.add(1, [
            Text.of("Abstruse Upgrade").gray()
        ])
        text.add(2, [
            Text.of('')
        ])
        text.add(3, [
            Text.of('Applies to:').gray()
        ])
        text.add(4, [
            Text.of(" Inspecific Items").blue()
        ])
        text.add(5, [
            Text.of("Ingredients:").gray()
        ])
        text.add(6, [
            Text.of(" Abstruse Mechanism").blue()
        ])
    })
})
