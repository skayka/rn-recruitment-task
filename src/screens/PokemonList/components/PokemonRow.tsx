import * as React from 'react';
import { Pressable } from 'react-native';
import { InlineWrapper, SText } from '../../../components';
import { pokemonImageCollection } from '../../../core/static-images/image-collections';
import { capitalize } from '../../../core/utils/string-utils';
import { PokemonListItem } from '../../../domains/pokemon/models';
import { PokemonRowImage } from './PokemonRowImage';

const PokemonRow = ({
  pokemonListItem,
  handleNavigateToPokemonDetails,
}: {
  pokemonListItem: PokemonListItem;
  handleNavigateToPokemonDetails: (url: string) => void;
}): JSX.Element => {
  const { name, url } = pokemonListItem;
  const pokemonId = parseInt(url.replace('https://pokeapi.co/api/v2/pokemon/', ''), 10);

  const handlePress = () => {
    handleNavigateToPokemonDetails(url);
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
