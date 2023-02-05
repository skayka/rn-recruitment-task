import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../navigation';
import { usePokemonByUrl } from './hooks/usePokemonByUrl';
import PokemonCard from './components/PokemonCard';
import { PendingCentered, ErrorCentered } from '../../components';

type PokemonDetailsProps = NativeStackScreenProps<StackNavigatorParamList, 'PokemonDetails'>;

const PokemonDetailsScreen = ({ route }: PokemonDetailsProps): JSX.Element => {
  const { url } = route.params;
  const { error, pending, pokemon } = usePokemonByUrl(url);

  if (error) {
    return <ErrorCentered error={error} />;
  }

  if (pending || typeof pokemon === 'undefined') {
    return <PendingCentered />;
  }

  return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetailsScreen;
