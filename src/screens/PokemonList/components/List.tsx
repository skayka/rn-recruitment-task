import * as React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PokemonList, PokemonListItem } from '../../../domains/pokemon/models';
import { ListHeader } from './ListHeader';
import PokemonRow from './PokemonRow';

const PokemonListWrapper = styled.View`
  margin-top: 30px;
  padding: 20px;
`;

const List = ({
  pokemonList,
  handleNavigation,
}: {
  pokemonList: PokemonList;
  handleNavigation: (e: string) => void;
}): JSX.Element => {
  const [filterValue, setFilterValue] = React.useState('');
  const filteredPokemonList = [...pokemonList].filter(value => value.name.indexOf(filterValue.toLowerCase()) > -1);

  return (
    <PokemonListWrapper>
      <FlatList
        ListHeaderComponent={<ListHeader setFilterValue={setFilterValue} />}
        data={filteredPokemonList}
        renderItem={({ item }: { item: PokemonListItem }) => (
          <PokemonRow pokemonListItem={item} handleNavigateToPokemonDetails={handleNavigation} />
        )}
      />
    </PokemonListWrapper>
  );
};

export default List;
