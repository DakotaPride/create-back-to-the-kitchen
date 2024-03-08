BlockEvents.rightClicked(event =>{
  if (event.block.id == 'minecraft:soul_sand' && event.item.id == 'forbidden_arcanus:soul_extractor') {
      event.block.set('forbidden_arcanus:soulless_sand')
      event.block.popItemFromFace("forbidden_arcanus:soul", "up")
  }
})

ItemEvents.entityInteracted('sons_of_sins:sickle_of_struggle', event => {
  if (event.getTarget().getType() == 'sons_of_sins:guzzler') {
    event.getTarget().attack(event.entity.damageSources().generic(), 0)

    event.getTarget().block.popItemFromFace('sons_of_sins:flesh_of_demise', 'up')
    event.player.addItemCooldown('sons_of_sins:sickle_of_struggle', 100)
  }
})