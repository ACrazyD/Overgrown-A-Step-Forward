// priority: 1
onEvent('recipes', e => {
    e.shapeless(TS('rock_stone'),PV('rocks'))
    e.shapeless(PV('rocks'),PV('mossy_rocks'))

	// Change recipes here
})