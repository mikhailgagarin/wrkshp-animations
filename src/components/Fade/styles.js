import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
   }

    to {
        opacity: 1;
   }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
   }

    to {
        opacity: 0;
   }
`;

function getAnimation({isShown}) {
    return isShown ? fadeIn : fadeOut;
}

export const Fade = styled.div`
    animation: ${getAnimation} 1s forwards;
`;
