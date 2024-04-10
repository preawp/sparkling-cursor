import { useEffect } from 'react';

/* const gold  =  ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'] */
function useSparklingCursor({ colorPalette = ['#ab75d5', '#92d7d2', '#95d987', '#edd46b', '#FFFAF0'], symbol = '✦', size = '12px', duration = 2000, count = 5 } = {}) {
    useEffect(() => {
        const handleMouseMove = event => {
            for (let i = 0; i < count; i++) {
                const sparkle = document.createElement('div');
                sparkle.textContent = '+';
                sparkle.style.position = 'absolute';
                sparkle.style.left = `${event.pageX + Math.random() * 20 - 10}px`;
                sparkle.style.top = `${event.pageY + Math.random() * 20 - 10}px`;
                sparkle.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                sparkle.style.fontSize = size;
                sparkle.style.opacity = 1;
               /*sparkle.style.textShadow = '0 0 8px #ffffcc';*/
                sparkle.style.transition = `opacity ${duration / 500}s ease-out, transform ${duration / 1000}s ease-out`;
                sparkle.style.transform = 'scale(1)';
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
    }, [colorPalette, symbol, size, duration, count]);
}

export default useSparklingCursor;
