'use client';
import Link from 'next/link';
import { ChevronDown, GiftIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
const HeroSection = () => {
    const [isFlexApplied, setIsFlexApplied] = useState(true);
    const scrollToTabs = () => {
        const tabsElement = document.getElementById('tabs-section');
        if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToRead = () => {
        const tabsElement = document.getElementById('read-more');
        if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    useEffect(() => {
        const updateHeight = () => {
            const screenHeight = window.innerHeight;
            if (screenHeight >= 550 && screenHeight <= 680) {
                setIsFlexApplied(false);
            } else {
                setIsFlexApplied(true);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div
            className="w-full  relative   bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
            style={{ minHeight: 'calc(98vh - 80px)' }}
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div
                className={`relative   z-8  py-2 mx-auto text-center mb-8 md:mb-0   md:py-16 h-screen md:h-[98dvh] ${
                    isFlexApplied
                        ? 'lg:flex lg:flex-col lg:items-center lg:justify-center'
                        : ''
                }`}
            >
                <h1 className="mb-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-[#303d6c] dark:text-gray-400 flex flex-col gap-4 leading-tight">
                    Advanced IT Solutions Today <br /> Enduring Partnerships for
                    Tomorrow.
                </h1>

                <h3 className="mb-4  px-4 text-sm md:text-lg md:px-16 leading-[2rem] !font-thin text-gray-900 dark:text-white">
                    One Global Info Systems has over 30 years of IT consulting
                    expertise, delivering cuttinggg-edge enterprise solutions in
                    AI, cloud, RPA, and ERP. Their goal is to drive digital
                    transformation, enhance business efficiency, and provide
                    innovative IT strategies while fostering long-term client
                    partnerships and sustainable technological growth.
                </h3>

                <div className="md:mt-4 flex flex-row items-center justify-center">
                    <button
                        onClick={scrollToRead}
                        type="button"
                        className="text-white bg-gradient-to-r from-[#3b4780] via-[#303d6c] to-[#262f59] hover:bg-gradient-to-t hover:from-white hover:to-transparent border-2 border-transparent hover:bg-white hover:text-[#303d6c] hover:border-2 hover:border-[#303d6c] focus:ring-4 focus:outline-none focus:ring-[#4a568f] font-semibold rounded-full text-sm md:text-md px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out"
                    >
                        Read More
                    </button>
                    <Link
                        href="#"
                        target="_blank"
                        type="button"
                        className="text-white bg-gradient-to-r from-[#3b4780] via-[#303d6c] to-[#262f59] hover:bg-gradient-to-t hover:from-white hover:to-transparent border-2 border-transparent hover:bg-white hover:text-[#303d6c] hover:border-2 hover:border-[#303d6c] focus:ring-4 focus:outline-none focus:ring-[#4a568f] font-semibold rounded-full text-sm md:text-md px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out"
                    >
                        Talk to Expert
                    </Link>
                </div>

                <div className="mt-4 flex flex-wrap justify-center">
                    <button
                        onClick={scrollToTabs}
                        className="flex items-center animate-bounce duration-1000  hover:animate-none   justify-center hover:bg-gradient-to-r  hover:from-[#3b4780] hover:via-[#283871] hover:to-[#262f59] bg-gradient-to-t from-white to-transparent border-2 hover:border-transparent hover:bg-white hover:text-white text-[#303d6c] hover:border-2 border-[#303d6c] hover:border-[#303d6c] focus:ring-4 focus:outline-none focus:ring-[#4a568f] font-semibold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out "
                    >
                        <GiftIcon className="pr-2 " /> What We Offer
                        <ChevronDown className="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
