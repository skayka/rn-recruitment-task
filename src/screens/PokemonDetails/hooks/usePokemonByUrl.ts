import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../core/hooks';
import { pokemonsSliceActions } from '../../../domains/pokemon/slices/PokemonsSlice';

export const usePokemonByUrl = (url: string) => {
  const { pokemons, pending, error } = useAppSelector(state => state.pokemons);
  const dispatch = useAppDispatch();
  const pokemon = pokemons[url];
  React.useEffect(() => {
    if (url in pokemons) {
      return;
    }
    dispatch(pokemonsSliceActions.fetchPokemonByUrl({ url: url }));
  }, [dispatch, url, pokemons]);

  return { pokemon, pending, error };
};
