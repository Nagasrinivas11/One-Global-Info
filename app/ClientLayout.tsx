'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Steps from '@/components/Step';
import AboutUs from '@/components/Abt';
import { Fetss } from '@/components/Fets';
import { Read } from '@/components/Read';
import ForFounders from '@/components/Sec1';

export default function ClientLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    // Define the page where you want to exclude certain components
    const isContactPage = pathname === '/contact'; // Check if the current page is /contact

    return (
        <>
            {/* <Header /> */}
            
            {children}

            {!isContactPage && (
                <>
                    <div className="flex md:h-[80vh] w-full mt-4 md:mt-44 flex-col">
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
                            Achievements
                        </h2>
                        <Read />
                    </div>
                    <div className="flex md:h-[80vh] mt-4 md:mt-64 flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                            Our Approach
                        </h2>
                        <Steps />
                    </div>
                    <div className="flex md:h-[80vh] w-full mt-4 md:mt-44 flex-col">
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
                            What We Do
                        </h2>
                        <Fetss />
                    </div>
                    <AboutUs />
                    <ForFounders />
                </>
            )}

            <Footer />
        </>
    );
}
