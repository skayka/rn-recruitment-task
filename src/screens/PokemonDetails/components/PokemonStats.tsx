import * as React from 'react';
import { SText } from '../../../components/ui-helpers';
import { PokemonStat } from '../../../domains/pokemon/model';

const PokemonStats = ({ stats }: { stats: PokemonStat[] }): JSX.Element => {
  return (
    <>
      <SText.Bold>Stats:</SText.Bold>
      {Object.values(stats).map(stat => (
        <SText.Normal key={`${stat.name}${stat.value}`}>
          {stat.name.toUpperCase()}: {stat.value}
        </SText.Normal>
      ))}
    </>
  );
};
export default PokemonStats;
