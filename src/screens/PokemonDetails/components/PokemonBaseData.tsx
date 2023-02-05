import * as React from 'react';
import { SText } from '../../../components/ui-helpers';
import { InlineWrapper } from '../../../components';

const PokemonBaseData = ({
  height,
  weight,
  baseExperience,
}: {
  height: string;
  weight: string;
  baseExperience: string;
}): JSX.Element => {
  return (
    <>
      <InlineWrapper>
        <SText.Bold>Height: </SText.Bold>
        <SText.Normal>{height}</SText.Normal>
      </InlineWrapper>
      <InlineWrapper>
        <SText.Bold>Weight: </SText.Bold>
        <SText.Normal>{weight}</SText.Normal>
      </InlineWrapper>
      <InlineWrapper>
        <SText.Bold>Base exp: </SText.Bold>
        <SText.Normal>{baseExperience}</SText.Normal>
      </InlineWrapper>
    </>
  );
};
export default PokemonBaseData;
