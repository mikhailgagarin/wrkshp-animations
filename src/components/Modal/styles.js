import styled, { keyframes } from 'styled-components';
import { font, color, easing } from 'assets/theme';
import { X } from 'react-feather';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50%) translateX(-50%) translateZ(0);
    }
    to {
        opacity: 1;
        transform: translateY(-50%) translateX(-50%) translateZ(0);
    }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 6;
  animation: ${fadeIn} 0.19s ease-out forwards;
`;

export const Modal = styled.div`
  position: absolute;
  min-width: 300px;
  max-width: 50%;
  min-height: 250px;
  background: ${color('white')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  animation: ${slideIn} 0.33s ${easing('in')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid ${color('grey')};
  padding: 0 1rem;
  position: relative;
`;

export const Title = styled.h3`
  font: ${font('text')};
  font-size: 1.25rem;
  color: ${color('font')};
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const Close = styled(X)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${color('dark')};
`;
