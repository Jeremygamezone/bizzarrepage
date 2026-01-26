import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

const PARALLAX_FACTOR = -0.1;

interface ApplyParallaxProps {
    ref: RefObject<HTMLDivElement>;
    scrollY: number;
    show?: boolean;
}
function applyParallax({ ref, scrollY, show = false }: ApplyParallaxProps) {
    if (ref.current == null) return;
    const { current } = ref;
    current.style.backgroundPosition = 'center ' + scrollY * PARALLAX_FACTOR + 'px';
    if (show) current.style.opacity = '1';
}

type Props = {
    bgClassName: string;
    fadeIn?: boolean;
    className?: string;
};

const fadeInClassNames = 'opacity-0 transition-opacity';

export default function ParallaxBanner({ bgClassName, fadeIn = true, className = '', ...props }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { scrollY } = window;
        applyParallax({ ref, scrollY, show: true });
        window.addEventListener('scroll', () => {
            const { scrollY } = window;
            applyParallax({ ref, scrollY });
        });
    }, []);

    return (
        <div
            className={
                'w-full bg-cover bg-no-repeat bg-fixed ' +
                (fadeIn ? fadeInClassNames : '') +
                ' ' +
                bgClassName +
                ' ' +
                className
            }
            ref={ref}
            {...props}
        />
    );
}
