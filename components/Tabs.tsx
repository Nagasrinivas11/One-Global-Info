'use client';
import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
interface TabItems {
    id: number;
    name: string;
    src: string;
}

const Tabs = ({ tabs }: { tabs: TabItems[] }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile if <= 768px
        };

        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const isExpandable = tabs.length > 5;
    const isFullyExpanded = visibleCount >= tabs.length;

    return (
        <div
            id="tabs-section"
            className="w-full md:mt-16 flex justify-center flex-col items-center"
        >
            <h1 className="mb-8 md:mb-12 z-10 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white text-center">
                Services We Offer
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-x-4 md:gap-4 gap-y-2 w-3/4 md:w-full max-w-6xl">
                {tabs
                    .slice(0, isMobile ? visibleCount : tabs.length)
                    .map((x) => (
                        <Rounder src={x.src} text={x.name} key={x.id} />
                    ))}
            </div>

            {isMobile && isExpandable && (
                <div className="my-6">
                    {isFullyExpanded ? (
                        <button
                            className="bg-gradient-to-r from-white to-transparent border-2 border-gray-200 text-gray-600 hover:bg-white hover:text-[#303d6c] hover:border-transparent hover:border-[#303d6c] font-semibold rounded-full text-sm px-5 py-2.5 text-center transition duration-400 ease-in-out"
                            onClick={() => setVisibleCount(5)}
                        >
                            View Less
                        </button>
                    ) : (
                        <button
                            className="bg-gradient-to-r from-white to-transparent border-2 border-gray-200 text-gray-600 hover:bg-white hover:text-[#303d6c] hover:border-transparent hover:border-[#303d6c] font-semibold rounded-full text-sm px-5 py-2.5 text-center transition duration-400 ease-in-out"
                            onClick={() => setVisibleCount(tabs.length)}
                        >
                            View More
                        </button>
                    )}{' '}
                </div>
            )}
        </div>
    );
};

export default Tabs;

const Rounder = ({ text, src }: { text: string; src: string }) => {
    return (
        <div className="border-2 flex items-center gap-x-3 border-gray-200 text-gray-600 px-6 py-2 rounded-3xl font-medium text-sm md:text-md transition-all duration-300 hover:border-gray-400 hover:shadow-md">
            <Image
                src={src}
                alt={text}
                height={20}
                width={20}
                className="w-6 h-6 md:w-7 md:h-7"
            />
            <span>{text}</span>
        </div>
    );
};
