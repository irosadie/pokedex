interface FlavorText {
  flavorText: string;
}

interface AbilityText {
  id: number;
  shortEffect: string;
}

interface Ability {
  id: number;
  name: string;
  abilityText: AbilityText[];
}

interface StatName {
  name: string;
}

interface Stat {
  name: string;
  statName: StatName[];
}

interface Type {
  id: number;
  name: PokeColorProps;
}

interface TypeData {
  type: Type;
}

interface Pokemon {
  name: string;
  id: number;
  weight: number;
  height: number;
  abilities: Ability[];
  stats: Stats[];
  types: TypeData[];
}

interface Stats {
  baseStat: number
  stat: Stat
}

interface Evolution {
  evolvesFromSpeciesId: number | null;
  name: string;
  id: number;
  pokemons: Pokemon[];
}

interface Species {
  name: string;
  id: number;
  flavorText: FlavorText[];
  pokemons: Pokemon[];
  evolutions: {species:Evolution[]};
}

export interface DetailPokemon {
  species: Species[];
}