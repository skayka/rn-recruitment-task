import { pokemonFetcher, IPokemonFetcher, Pokemon, PokemonList } from '../model';

class PokemonManager {
  private _fetcher: IPokemonFetcher;
  constructor(fetcher: IPokemonFetcher) {
    this._fetcher = fetcher;
  }

  fetchPokemonList = async (): Promise<PokemonList> => {
    return await this._fetcher.fetchPokemonList();
  };

  fetchPokemon = async (url: string): Promise<Pokemon> => {
    return await this._fetcher.fetchPokemon(url);
  };
}

const pokemonManager = new PokemonManager(pokemonFetcher);

export { pokemonManager };
