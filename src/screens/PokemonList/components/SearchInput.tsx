import * as React from 'react';
import { StyledInput } from '../../../components';

const SearchInput = ({ updateFilter }: { updateFilter: (value: string) => void }): JSX.Element => {
  const handleTextInput = (text: string) => {
    updateFilter(text);
  };

  return <StyledInput onChangeText={handleTextInput} placeholder={'Search'} />;
};

export default SearchInput;
