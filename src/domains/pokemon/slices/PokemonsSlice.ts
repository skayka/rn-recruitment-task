import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Pokemon } from '../model';
import { pokemonManager } from '../services/pokemon-manager';

export interface PokemonsSliceStore {
  pending: boolean;
  error?: string;
  pokemons: Record<string, Pokemon>;
}

const pokemonsSliceInitialState: PokemonsSliceStore = {
  pending: false,
  pokemons: {},
};

const fetchPokemonByUrl = createAsyncThunk<{ url: string; pokemon: Pokemon }, { url: string }>(
  'pokemons/fetchPokemonByUrl',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { url } = payload;
      const fetchedPokemon = await pokemonManager.fetchPokemon(url);
      return fulfillWithValue({ url: url, pokemon: fetchedPokemon });
    } catch (e) {
      return rejectWithValue('Something went wrong while fetching pokemon by link');
    }
  },
);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsSliceInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemonByUrl.pending, state => {
        state.pending = true;
        state.error = undefined;
      })
      .addCase(fetchPokemonByUrl.fulfilled, (state, action) => {
        state.pending = false;
        state.pokemons[action.payload.url] = action.payload.pokemon;
      })
      .addCase(fetchPokemonByUrl.rejected, state => {
        state.pending = false;
        state.error =
          'Something went wrong while retrieving pokemon details. Please check your internet connection or contact our support.';
      });
  },
});

export const pokemonsSliceActions = { fetchPokemonByUrl: fetchPokemonByUrl };
export default pokemonsSlice.reducer;
