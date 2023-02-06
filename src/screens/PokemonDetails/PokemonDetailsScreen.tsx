import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../navigation';
import PokemonCard from './components/PokemonCard';
import { PendingCentered, ErrorCentered } from '../../components';
import { useGetPokemonByIdQuery } from '../../api';

type PokemonDetailsProps = NativeStackScreenProps<StackNavigatorParamList, 'PokemonDetails'>;

const PokemonDetailsScreen = ({ route }: PokemonDetailsProps): JSX.Element => {
  const { id } = route.params;
  //const { error, pending, pokemon } = usePokemonByUrl(url);

  const { isError, isFetching, data, error } = useGetPokemonByIdQuery(id);

  if (isError) {
    return <ErrorCentered error={JSON.stringify(error)} />;
  }

  if (isFetching || typeof data === 'undefined') {
    return <PendingCentered />;
  }

  return <PokemonCard pokemon={data} />;
};

export default PokemonDetailsScreen;
