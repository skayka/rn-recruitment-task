import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../navigation';
import List from './components/List';
import { PendingCentered, ErrorCentered } from '../../components';
import { useGetPokemonListQuery } from '../../api';

type PokemonListProps = NativeStackScreenProps<StackNavigatorParamList, 'PokemonList'>;

const PokemonListScreen = ({ navigation }: PokemonListProps): JSX.Element => {
  const { isFetching, isError, data, error } = useGetPokemonListQuery(undefined);

  const handleNavigation = (id: string) => {
    navigation.navigate('PokemonDetails', { id: id });
  };

  if (isError) {
    return <ErrorCentered error={JSON.stringify(error)} />;
  }

  if (isFetching || typeof data === 'undefined') {
    return <PendingCentered />;
  }

  return <List pokemonList={data} handleNavigation={handleNavigation} />;
};

export default PokemonListScreen;
