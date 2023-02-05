import styled from 'styled-components/native';

interface Spacer {
  size?: number;
}

const VerticalSpacer = styled.View<Spacer>`
  height: ${props => (props.size ? props.size.toString() + 'px' : '14px')};
`;

export { VerticalSpacer };
