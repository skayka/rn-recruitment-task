import * as React from 'react';

import styled from 'styled-components/native';

const PokedexLogoText = styled.Text`
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

export const PokedexLogo = (): JSX.Element => {
  return <PokedexLogoText>Pokédex</PokedexLogoText>;
};
