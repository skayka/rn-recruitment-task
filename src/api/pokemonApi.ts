import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../config';
import { Pokemon, PokemonList } from '../domains/pokemon/models';
import { pokemonResponseTransform, pokemonListResponseTransform } from './pokemonApiTransforms';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: builder => ({
    getPokemonList: builder.query<PokemonList, undefined>({
      query: () => `/pokemon?limit=${config.pokemonMaxIndex}`,
      transformResponse: pokemonListResponseTransform,
    }),
    getPokemonById: builder.query<Pokemon, string>({
      query: id => `pokemon/${id}`,
      transformResponse: pokemonResponseTransform,
    }),
  }),
});

export const { useGetPokemonByIdQuery, useGetPokemonListQuery } = pokemonApi;
