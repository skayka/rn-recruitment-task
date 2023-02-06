import { config } from '../../../../config';
import { Fetcher, AxiosFetcher } from '../../../../core/services/fetcher';
import { PokemonListResponse, PokemonResponse } from '../../../api/api.interface';
import { PokemonList, Pokemon } from '../pokemon.interface';
import { IPokemonFetcher } from './pokemon-fetcher.interface';

class PokemonFetcher implements IPokemonFetcher {
  private _fetcher: Fetcher;
  constructor(fetcher: Fetcher) {
    this._fetcher = fetcher;
  }

  fetchPokemonList = async (): Promise<PokemonList> => {
    const fetchUrl = `${config.apiUrl}/pokemon?limit=${config.pokemonMaxIndex}`;
    const data = await this._fetcher.get<PokemonListResponse>(fetchUrl);
    console.log(data.results);

    return data.results;
  };

  fetchPokemon = async (url: string): Promise<Pokemon> => {
    const data = await this._fetcher.get<PokemonResponse>(url);

    const parsedStats = data.stats.map(pokeStat => {
      return { name: pokeStat.stat.name, value: pokeStat.base_stat };
    });

    const parsedTypes = data.types.map(pokeType => {
      return pokeType.type.name;
    });

    const parsedPokemon: Pokemon = {
      id: data.id,
      base_exprerience: data.base_experience,
      height: data.height,
      name: data.name,
      weight: data.weight,
      stats: parsedStats,
      types: parsedTypes,
    };

    return parsedPokemon;
  };
}

const pokemonFetcher = new PokemonFetcher(new AxiosFetcher());

export { pokemonFetcher };
