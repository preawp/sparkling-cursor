import { useEffect } from 'react';

const useSparklingCursor = ({ colorPalette = ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'],
                                size = '14px',
                                glowEnabled = false,
                                glowColor = '#fff4c3'
                            } = {}) => {
    const count = 4;
    const duration = 2000;
    const symbol = '+';

    useEffect(() => {
        const handleMouseMove = event => {
            for (let i = 0; i < count; i++) {
                const sparkle = document.createElement('div');
                sparkle.textContent = symbol;
                sparkle.style.position = 'absolute';
                sparkle.style.left = `${event.pageX + Math.random() * 20 - 10}px`;
                sparkle.style.top = `${event.pageY + Math.random() * 20 - 10}px`;
                sparkle.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                sparkle.style.fontSize = size;
                sparkle.style.opacity = Math.random() * 0.5 + 0.5;
                sparkle.style.pointerEvents = 'none';
                if (glowEnabled) {
                    sparkle.style.textShadow = `0 0 8px ${glowColor}`;
                }
                sparkle.style.transition = `opacity ${duration / 1000}s ease-out, transform ${duration / 1000}s ease-out`;
                sparkle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
                document.body.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.style.opacity = 0;
                    sparkle.style.transform = 'scale(0)';
                }, 10);

                setTimeout(() => {
                    document.body.removeChild(sparkle);
                }, duration);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [colorPalette, symbol, size, glowEnabled, glowColor]);

    return null;
};

export default useSparklingCursor;
