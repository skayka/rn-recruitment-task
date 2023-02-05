import styled from 'styled-components/native';

interface StyledTextNormalProps {
  size?: number;
}

const TextNormal = styled.Text<StyledTextNormalProps>`
  font-size: ${props => (props.size ? props.size.toString() + 'px' : '14px')};
`;

export { TextNormal };
