import styled from 'styled-components';

import {color, font} from 'assets/theme';

export const ErrorCode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    line-height: 0;
    color: ${color('font')};
    font: ${font('pageHeading')};
    letter-spacing: 0.75rem;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: ${color('font')};
    margin-bottom: 2rem;
`;
