import * as React from 'react';
import { SText } from '../../../../components/ui-helpers';
import { InlineWrapper } from '../../../../components';
import { mapArrayWithCommas } from '../../../../utils';
import { HeaderTextWrapper, HeaderWrapper } from '../Wrappers';
import { PokemonImage } from './PokemonImage';
import { capitalize } from '../../../../utils/string-utils';
import { pokemonImageCollection } from '../../../../assets/managers/image-collections';

export const PokemonCardHeader = ({ name, id, types }: { name: string; id: string; types: string[] }) => {
  return (
    <HeaderWrapper>
      <PokemonImage source={pokemonImageCollection[id]} />
      <HeaderTextWrapper>
        <SText.Bold>{capitalize(name)}</SText.Bold>
        <InlineWrapper>
          <SText.Bold>Id: </SText.Bold>
          <SText.Normal>{id}</SText.Normal>
        </InlineWrapper>
        <InlineWrapper>
          <SText.Bold>Types: </SText.Bold>
          <SText.Normal size={12}>{mapArrayWithCommas(types)}</SText.Normal>
        </InlineWrapper>
      </HeaderTextWrapper>
    </HeaderWrapper>
  );
};
