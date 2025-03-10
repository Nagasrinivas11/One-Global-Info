'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className
}: {
    items: {
        name: string;
        url: string;
    }[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s'
                );
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s'
                );
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative  w-full overflow-hidden',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-4  py-2 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-sate:paused]'
                )}
            >
                {items.map((item) => (
                    <p
                        key={item.name}
                        className=" flex gap-x-3 items-center text-gray-700 px-8 py-1 rounded-3xl font-semibold text-md"
                    >
                        <Image
                            src={item.url}
                            alt={item.name}
                            height={40}
                            width={200}
                            className="rounded-md   h-20 "
                        />
                    </p>
                ))}
            </ul>
        </div>
    );
};

// <Image
//     key={item.name}
//     src={item.url}
//     height={120}
//     width={120}
//     alt={item.name}
//     className='ml-28'
// />
