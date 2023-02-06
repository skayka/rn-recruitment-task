import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PokemonList } from '../model/pokemon.interface';
import { pokemonManager } from '../services/pokemon-manager';

interface PokemonListInitialState {
  pending: boolean;
  error?: string;
  pokemonList: PokemonList;
}
const initialState: PokemonListInitialState = { pending: false, pokemonList: [] };

export const fetchPokemonList = createAsyncThunk<PokemonList>(
  'pokemonList/fetchPokemonList',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const fetchedPokemonList = await pokemonManager.fetchPokemonList();
      return fulfillWithValue(fetchedPokemonList);
    } catch (e) {
      return rejectWithValue('Something went wrong while fetching pokemons');
    }
  },
);

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemonList.pending, state => {
        state.pending = true;
        state.error = undefined;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.pending = false;
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemonList.rejected, state => {
        state.pending = false;
        state.error = 'Something went wrong while fetching pokemon list. Please check your internet connection.';
      });
  },
});

export const pokemonListSliceActions = { fetchPokemonList: fetchPokemonList };
export default pokemonListSlice.reducer;
