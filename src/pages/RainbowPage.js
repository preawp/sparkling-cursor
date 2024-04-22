
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useSparklingCursor from '../useSparklingCursor/useSparklingCursor';

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #3b3b3b;
    font-size: 24px;
    font-family: "Quicksand", sans-serif;
`;

const MagicButton = styled.button`
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    background-color: #e5e5e5;
    color: #282c34;
    cursor: pointer; 
`;


export default function RainbowPage() {
    const navigate = useNavigate();
    useSparklingCursor({
        colorPalette: ['#FF4500', '#FF8C00', '#FFD700', '#32CD32', '#4169E1', '#6A5ACD', '#9932CC'],
        size: '16px',
        glowEnabled: false,
    });

    return (
        <StyledContainer>
            <h1>Welcome to the Sparkling Cursor Experience</h1>
            <p>Move your cursor around to see the magic happen!</p>
            <MagicButton onClick={() => navigate('/pastel')}>Next</MagicButton>
        </StyledContainer>
    );
}