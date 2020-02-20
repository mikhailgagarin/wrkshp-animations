import styled from 'styled-components';

import { color } from 'assets/theme';

const Base = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 10rem;
  outline: none;
  transition: box-shadow 0.25s ease 0.15s, color 0.25s ease,
    border-color 0.25s ease, background-color 0.3s ease-in-out;

  &:disabled {
    pointer-events: none;
    cursor: no-drop;
    opacity: 0.75;
  }

  &:active {
    box-shadow: none;
    filter: brightness(0.85);
  }
`;

export const Primary = styled(Base)`
  background-color: ${color('primary')};
  color: ${color('white')};
  border-width: 3px;
  border-color: ${color('primary')};
  font-weight: 600;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.1rem ${color('white')},
      0 0 0 0.15rem ${color('primary')};
  }
`;

export const Secondary = styled(Base)`
  background-color: ${color('white')};
  color: ${color('dark')};
  border-color: ${color('dark')};

  &:hover,
  &:focus {
    background-color: ${color('dark')};
    color: ${color('white')};
    box-shadow: 0 0 0 0.1rem ${color('white')}, 0 0 0 0.15rem ${color('dark')};
  }
`;

export const Optional = styled(Base)`
  background-color: transparent;
  color: ${color('grey')};

  &:hover,
  &:focus {
    background-color: ${color('greyLight')};
    color: ${color('dark')};
    box-shadow: 0 0 0 0.1rem ${color('white')}, 0 0 0 0.15rem ${color('grey')};
  }
`;

export const Danger = styled(Base)`
  background-color: ${color('white')};
  color: ${color('red')};
  border-color: ${color('red')};

  &:hover,
  &:focus {
    background-color: ${color('red')};
    color: ${color('white')};
    box-shadow: 0 0 0 0.1rem ${color('white')}, 0 0 0 0.15rem ${color('red')};
  }
`;
