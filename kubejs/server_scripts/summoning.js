ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar("minecraft:gold_ingot")
    .mobOutput('ars_nouveau:starbuncle')
    .input('minecraft:gold_block')
    .input('botania:rune_greed')
    .input('ars_nouveau:earth_essence')

    event.recipes.summoningrituals
    .altar("minecraft:diamond")
    .mobOutput('ars_nouveau:wixie')
    .input('minecraft:diamond_block')
    .input('botania:rune_mana')
    .input('ars_nouveau:abjuration_essence')

    event.recipes.summoningrituals
    .altar("minecraft:quartz_block")
    .mobOutput('ars_nouveau:drygmy')
    .input('minecraft:quartz')
    .input('botania:rune_pride')
    .input('ars_nouveau:conjuration_essence')

    event.recipes.summoningrituals
    .altar("#minecraft:saplings")
    .mobOutput('ars_nouveau:whirlisprig')
    .input('ars_nouveau:magebloom_crop')
    .input('botania:rune_sloth')
    .input('ars_nouveau:earth_essence')

    event.recipes.summoningrituals
    .altar('create:brass_ingot')
    .itemOutput('ae2:logic_processor')
    .sacrifice('ars_nouveau:starbuncle')
    .input('minecraft:redstone_block')
    .input('kubejs:rune_logic')
    .input('kubejs:runic_flux_circuit')
    
    event.recipes.summoningrituals
    .altar('thermal:steel_ingot')
    .itemOutput('ae2:engineering_processor')
    .sacrifice('ars_nouveau:wixie')
    .input('minecraft:redstone_block')
    .input('kubejs:rune_engineering')
    .input('kubejs:runic_flux_circuit')

    event.recipes.summoningrituals
    .altar('ae2:certus_quartz_crystal')
    .itemOutput('ae2:calculation_processor')
    .sacrifice('ars_nouveau:drygmy')
    .input('minecraft:redstone_block')
    .input('kubejs:rune_calculation')
    .input('kubejs:runic_flux_circuit')

    event.recipes.summoningrituals
    .altar('botania:blacker_lotus')
    .itemOutput('ae2:fluix_crystal')
    .sacrifice('ars_nouveau:drygmy')
    .input('quark:soul_bead')
    .input('quark:soul_bead')
    .input('ae2:quartz_block')
    .input('ae2:charged_certus_quartz_crystal')

    event.recipes.summoningrituals
    .altar("ars_nouveau:manipulation_essence")
    .blockBelow('botania:alchemy_catalyst')
    .mobOutput('quark:toretoise')
    .sacrifice('minecraft:turtle')
    .input('botania:rune_earth')
    .input('botania:rune_sloth')

    event.recipes.summoningrituals
    .altar("quark:soul_bead")
    .mobOutput('minecraft:slime')
    .input('minecraft:slime_block')
    .input('botania:rune_earth')
})