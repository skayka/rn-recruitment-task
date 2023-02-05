import { PokemonList, Pokemon } from '../pokemon.interface';

export interface IPokemonFetcher {
  fetchPokemonList: () => Promise<PokemonList>;
  fetchPokemon: (url: string) => Promise<Pokemon>;
}
