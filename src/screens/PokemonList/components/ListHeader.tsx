import * as React from 'react';
import styled from 'styled-components/native';

import { PokedexLogo } from './PokedexLogo';
import SearchInput from './SearchInput';

const ListHeaderWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ListHeader = ({ setFilterValue }: { setFilterValue: (text: string) => void }): JSX.Element => {
  return (
    <ListHeaderWrapper>
      <PokedexLogo />
      <SearchInput updateFilter={setFilterValue} />
    </ListHeaderWrapper>
  );
};
