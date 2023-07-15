export const DETAIL_POKEMON = `query detailPokemon($name: String!) {
  species: pokemon_v2_pokemonspecies(limit: 1, where: {name: {_eq: $name}}) {
    name
    id
    flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
      flavorText: flavor_text
    }
    pokemons: pokemon_v2_pokemons {
      name
      id
      weight
      height
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          id
          name
          abilityText: pokemon_v2_abilityeffecttexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            id
            shortEffect: short_effect
          }
        }
      }
      stats: pokemon_v2_pokemonstats {
        baseStat: base_stat
        stat: pokemon_v2_stat {
          name
          statName: pokemon_v2_statnames(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
            name
          }
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
    evolutions: pokemon_v2_evolutionchain {
      species: pokemon_v2_pokemonspecies {
        evolvesFromSpeciesId: evolves_from_species_id
        name
        id
        pokemons: pokemon_v2_pokemons {
          name
          id
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              id
              name
            }
          }
        }
      }
    }
  }
}
`
