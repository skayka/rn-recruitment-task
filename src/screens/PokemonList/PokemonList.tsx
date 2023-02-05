import * as React from 'react';
import { usePokemonList } from './hooks/usePokemonList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../navigation';
import List from './components/List';
import { PendingCentered, ErrorCentered } from '../../components';

type PokemonListProps = NativeStackScreenProps<StackNavigatorParamList, 'PokemonList'>;

const PokemonListScreen = ({ navigation }: PokemonListProps): JSX.Element => {
  const { pokemonList, pending, error } = usePokemonList();

  const handleNavigation = (url: string) => {
    navigation.navigate('PokemonDetails', { url: url });
  };

  if (error) {
    return <ErrorCentered error={error} />;
  }

  if (pending) {
    return <PendingCentered />;
  }

  return <List pokemonList={pokemonList} handleNavigation={handleNavigation} />;
};

export default PokemonListScreen;
