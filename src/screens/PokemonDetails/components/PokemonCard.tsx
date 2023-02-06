import * as React from 'react';
import { Spacer } from '../../../components/ui-helpers';
import { Pokemon } from '../../../domains/pokemon/model';
import PokemonBaseData from './PokemonBaseData';
import { PokemonCardHeader } from './PokemonCardHeader/PokemonCardHeader';
import PokemonStats from './PokemonStats';
import { PokemonCardInfoWrapper, PokemonCardWrapper } from './Wrappers';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }): JSX.Element => {
  const { base_exprerience, height, id, name, stats, types, weight } = pokemon;

  return (
    <PokemonCardWrapper>
      <PokemonCardHeader id={id} name={name} types={types} />
      <PokemonCardInfoWrapper>
        <PokemonBaseData height={height} weight={weight} baseExperience={base_exprerience} />
        <Spacer.Vertical size={20} />
        <PokemonStats stats={stats} />
      </PokemonCardInfoWrapper>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
