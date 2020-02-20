import styled from 'styled-components';

export const Fade = styled.div`
  animation: ${({ isShown }) => isShown ? 'fadeIn 1s' : 'fadeOut 1s'};
`;
