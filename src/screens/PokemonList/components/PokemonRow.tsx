import * as React from 'react';
import { Pressable } from 'react-native';
import { InlineWrapper, SText } from '../../../components';
import { pokemonImageCollection } from '../../../assets/managers/image-collections';
import { capitalize } from '../../../utils/string-utils';
import { PokemonRowImage } from './PokemonRowImage';
import { PokemonListItem } from '../../../api';

const PokemonRow = ({
  pokemonListItem,
  handleNavigateToPokemonDetails,
}: {
  pokemonListItem: PokemonListItem;
  handleNavigateToPokemonDetails: (id: string) => void;
}): JSX.Element => {
  const { name, url } = pokemonListItem;
  const pokemonId = parseInt(url.replace('https://pokeapi.co/api/v2/pokemon/', ''), 10);

  const handlePress = () => {
    handleNavigateToPokemonDetails(pokemonId.toString());
  };

  return (
    <Pressable onPress={handlePress}>
      <InlineWrapper alignItems="center">
        <PokemonRowImage source={pokemonImageCollection[pokemonId]} />
        <SText.Normal>
          {pokemonId}. {capitalize(name)}
        </SText.Normal>
      </InlineWrapper>
    </Pressable>
  );
};

export default PokemonRow;
