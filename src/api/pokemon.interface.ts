import { EntityEndpoint } from './data-interfaces/pokeapi.interface';

export interface Pokemon {
  id: string;
  name: string;
  types: string[];
  height: string;
  weight: string;
  base_exprerience: string;
  stats: PokemonStat[];
}

export interface PokemonStat {
  name: string;
  value: string;
}

export type PokemonListItem = EntityEndpoint;
export type PokemonList = PokemonListItem[];
