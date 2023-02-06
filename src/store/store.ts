import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { pokemonApi } from '../api';
export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: { pokemonApi: pokemonApi.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware),
    ...options,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
