//priority: 1000

console.info('Tagging all the things (100% Legally)')

onEvent('tags.blocks', e => {
  e.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
})

onEvent('tags.items', e => {
  e.add('projectvibrantjourneys:twig', '#forge:rods/wooden')

  e.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
  e.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')

  e.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
  e.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])

  e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');

  e.add('forge:melons','minecraft:melon_slice')
 
  // fix raw block crafting for other mods
  e.add('forge:raw_ores/zinc', 'create:raw_zinc')
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))
  immersiveMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `immersiveengineering:raw_${metal}`))

  e.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  e.add('forge:rods/all_metal', '#forge:rods/metal');

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
})
onEvent('tags.blocks', e => {
  e.add('minecraft:climbable', ['minecraft:chain'])
})
onEvent('tags.entity_types', e => {
  e.add('industrialforegoing:mob_duplicator_blacklist',['artifacts:mimic','botania:doppleganger',])
})

/*
onEvent("rei.group", (event) => {
  // This event allows you to add custom entry groups to REI, which can be used to clean up the entry list significantly.
  // As a simple example, we can add a "Swords" group which will contain all (vanilla) swords
  // Note that each group will need an id (ResourceLocation) and a display name (Component / String)
  event.groupItems("kubejs:rei_groups/swords", "Swords", [
      "minecraft:wooden_sword",
      "minecraft:stone_sword",
      "minecraft:iron_sword",
      "minecraft:diamond_sword",
      "minecraft:golden_sword",
      "minecraft:netherite_sword",
  ]);

  // An easy use case for grouping stuff together could be using tags:
  // In this case, we want all the Hanging Signs and Sign Posts from Supplementaries to be grouped together
  event.groupItemsByTag("supplementaries:rei_groups/hanging_signs", "Hanging Signs", "supplementaries:hanging_signs");
  event.groupItemsByTag("supplementaries:rei_groups/sign_posts", "Sign Posts", "supplementaries:sign_posts");

  // Another example: We want all of these items to be grouped together ignoring NBT,
  // so you don't have a bajillion potions and enchanted books cluttering up REI anymore
  const useNbt = ["potion", "enchanted_book", "splash_potion", "tipped_arrow", "lingering_potion"];

  useNbt.forEach((id) => {
      const item = Item.of(id);
      const { namespace, path } = Utils.id(item.id);
      event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getName(), item);
  });

  // Items can also be grouped using anything that can be expressed as an IngredientJS,
  // including for example regular expressions or lists of ingredients
  event.groupItems("kubejs:rei_groups/spawn_eggs", "Spawn Eggs", [
      /spawn_egg/,
      "supplementaries:red_merchant_spawn_egg",
  ]);

  // you can even use custom predicates for grouping, like so:
  event.groupItemsIf("kubejs:rei_groups/looting_stuff", "Stuff with Looting I", (item) =>
      // this would group together all items that have the Looting I enchantment on them
      item.hasEnchantment("minecraft:looting", 1)
  );

  // you can also group fluids in much the same way as you can group items, for instance:
  event.groupFluidsByTag("kubejs:rei_groups/fluid_tagged_as_water", `"Water" (yeah right lmao)`, "minecraft:water");
});
*/
