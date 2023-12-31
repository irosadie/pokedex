interface PokemonType {
  type: {
    id: number;
    name: PokeColorProps
  }
}

interface PokemonShortDetail {
  types: PokemonType[]; 
}

interface Pokemon {
  id: number;
  name: string;
  short_detail: PokemonShortDetail[];
}

interface PokemonAggregate {
  count: number;
}

export interface GetPokemon {
  pokemon_aggregate: {
    aggregate: PokemonAggregate;
  };
  pokemonts: Pokemon[];
}