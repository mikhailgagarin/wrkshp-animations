import styled from 'styled-components';
import {animated} from 'react-spring';

export const Page = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    padding: 3rem 1rem;
    will-change: transform, opacity;
`;
