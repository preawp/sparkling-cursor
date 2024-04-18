//
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    background-color: #262626;
    color: white;
`;

const MagicButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    background-color: #e5e5e5;
    color: #272727;
    cursor: pointer; 
`;

export default function Home() {
    const navigate = useNavigate();
    useSparklingCursor({
        colorPalette: ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'],
        size: '16px',
        glowEnabled: true,
        glowColor: '#bcb29b'
    });

    return (
        <StyledContainer>
            <h1>Welcome to the Sparkling Cursor Experience</h1>
            <p>Move your cursor around to see the magic happen!</p>
            <MagicButton onClick={() => navigate('/rainbow')}>Next</MagicButton>
        </StyledContainer>
    );
}

