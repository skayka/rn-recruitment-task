import { PokemonListResponse, PokemonResponse } from '../domains/api/api.interface';
import { Pokemon } from '../domains/pokemon/models';

export const pokemonResponseTransform = (rawResult: PokemonResponse) => {
  const parsedStats = rawResult.stats.map(pokeStat => {
    return { name: pokeStat.stat.name, value: pokeStat.base_stat };
  });

  const parsedTypes = rawResult.types.map(pokeType => {
    return pokeType.type.name;
  });

  const parsedPokemon: Pokemon = {
    id: rawResult.id,
    base_exprerience: rawResult.base_experience,
    height: rawResult.height,
    name: rawResult.name,
    weight: rawResult.weight,
    stats: parsedStats,
    types: parsedTypes,
  };

  return parsedPokemon;
};

export const pokemonListResponseTransform = (rawResult: PokemonListResponse) => {
  return rawResult.results;
};
