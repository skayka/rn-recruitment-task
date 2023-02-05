import { configureStore } from '@reduxjs/toolkit';
import pokemonListSlice from '../../domains/pokemon/slices/PokemonListSlice';
import pokemonsSlice from '../../domains/pokemon/slices/PokemonsSlice';
export const store = configureStore({ reducer: { pokemonList: pokemonListSlice, pokemons: pokemonsSlice } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
