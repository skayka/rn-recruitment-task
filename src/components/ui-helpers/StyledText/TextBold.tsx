import styled from 'styled-components/native';

interface StyledTextBoldProps {
  size?: number;
}

const TextBold = styled.Text<StyledTextBoldProps>`
  font-weight: bold;
  font-size: ${props => (props.size ? props.size.toString() + 'px' : '14px')};
`;

export { TextBold };
