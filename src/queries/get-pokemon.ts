export const GET_POKEMONS = `query pokemonList(
  $limit: Int = 5
  $offset: Int = 0
  $filter: [Int]
) {
  pokemon_aggregate: pokemon_v2_pokemonspecies_aggregate {
    aggregate {
      count
    }
  }
  pokemonts: pokemon_v2_pokemonspecies(offset: $offset, limit: $limit, order_by: {id: asc}, where: {
    pokemon_v2_pokemons: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: {
            id: {
              _in: null
            }
          }
        }
      },
  }) {
    id
    name
    short_detail: pokemon_v2_pokemons {
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
}
`
