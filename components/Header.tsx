'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };
    const scrollToTabs = () => {
        const tabsElement = document.getElementById('abtt');
        if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToCar = () => {
        const tabsElement = document.getElementById('careers');
        if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <nav className="bg-white h-20  ">
            <div className="max-w-screen-2xl px-4  flex flex-wrap items-center justify-between mx-auto py-2">
                <Link href="/" passHref>
                    <Image
                        src="/d_logo.jpeg"
                        alt="logo"
                        height={100}
                        width={100}
                    />
                </Link>
                <button
                    type="button"
                    onClick={toggleNavbar}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isNavbarOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isNavbarOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto md:px-12 z-50`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col b items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 0 rounded md:bg-transparent  md:p-0  md:dark:bg-transparent"
                                aria-current="page"
                                onClick={closeNavbar}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <button
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#303d6c] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                onClick={() => {
                                    closeNavbar();
                                    scrollToTabs();
                                }}
                            >
                                About Us
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#303d6c] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                onClick={() => {
                                    closeNavbar();
                                    scrollToCar();
                                }}
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#303d6c] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                onClick={() => {
                                    closeNavbar();
                                }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
