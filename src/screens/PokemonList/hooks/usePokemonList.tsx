import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../core/hooks';
import { pokemonListSliceActions } from '../../../domains/pokemon/slices/PokemonListSlice';

export const usePokemonList = () => {
  const { pokemonList, pending, error } = useAppSelector(state => state.pokemonList);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(pokemonListSliceActions.fetchPokemonList());
  }, [dispatch]);

  return { pokemonList, pending, error };
};
