import { useEffect } from 'react';

function useSparklingCursor({
                                colorPalette =  ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0']
                                ,
                                symbol = '+',
                                size = '14px',
                                duration = 2000,
                                count = 5,
                                glowEnabled = false,
                                glowColor = '#fff4c3'
                            } = {}) {
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
    }, [colorPalette, symbol, size, duration, count, glowEnabled, glowColor]);
}

export default useSparklingCursor;
