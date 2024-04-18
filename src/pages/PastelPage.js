
import React from 'react';
import styled from 'styled-components';
import useSparklingCursor from '../useSparklingCursor/useSparklingCursor';

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    font-family: "Quicksand", sans-serif;
`;
const Title = styled.h1`
    color: #FFC0CB ;
`;

const Subtitle = styled.p`
    color: #A2D2FF;
`;

export default function PastelPage() {
    useSparklingCursor({
        colorPalette: ['#FFC0CB', '#BDB2FF', '#A2D2FF', '#FFC8DD', '#FFAFCC'],
        glowEnabled: false,
        glowColor: '#a8f4ff',
        size: '20px'
    });

    return (
        <StyledContainer>
            <Title>Welcome to the Sparkling Cursor Experience</Title>
            <Subtitle>Move your cursor around to see the magic happen!</Subtitle>
        </StyledContainer>
    );
}