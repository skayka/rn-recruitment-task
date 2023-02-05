import styled from 'styled-components/native';

interface InlineWrapperProps {
  alignItems?: 'baseline' | 'center';
}

const InlineWrapper = styled.View<InlineWrapperProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${props => (props.alignItems ? props.alignItems : 'baseline')};
`;

export { InlineWrapper };
