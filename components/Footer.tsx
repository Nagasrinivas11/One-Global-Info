import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const scrollToAbout = () => {
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
        <footer className="text-black mx-auto  py-12 w-[98vw]">
            <div className="px-6  mx-auto  ">
                <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-1">
                        <Image
                            src="/d_logo.jpeg"
                            alt="logo"
                            height={100}
                            width={100}
                        />
                        <p className="text-gray-400">
                            Let&apos;s build your career
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/brynztech/"
                                className="text-gray-400 hover:text-gray-700"
                                target="_blank"
                            >
                                <IconBrandLinkedin />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-700"
                            >
                                <IconBrandTwitter />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-700"
                            >
                                <IconBrandInstagram />
                            </a>
                        </div>
                    </div>
                    {/* Column 2: Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-gray-400 hover:text-gray-700"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={scrollToAbout}
                                            className="text-gray-400 hover:text-gray-700"
                                        >
                                            About Us
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={scrollToCar}
                                            className="text-gray-400 hover:text-gray-700"
                                        >
                                            Careers
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-4 md:col-span-1 col-span-2">
                        <h4 className="text-lg font-semibold">
                            Subscribe to our newsletter
                        </h4>
                        <p className="text-gray-400">
                            Stay updated with the latest news and updates.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-2 rounded-l-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-[#303d6c] text-white px-4 py-2 rounded-r-md hover:bg-[#262f59] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
                    <p className="text-gray-700">
                        &copy; {new Date().getFullYear()} ONE GLOBAL. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
