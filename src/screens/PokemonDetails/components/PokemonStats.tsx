import * as React from 'react';
import { PokemonStat } from '../../../api';
import { SText } from '../../../components/ui-helpers';

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
