import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import ClientLayout from './ClientLayout';

const circularStd = localFont({
    src: [
        {
            path: '../public/fonts/crc.ttf',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-circularstd'
});

export const metadata: Metadata = {
    title: 'One Global',
    description: 'One Global'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/Oneglobal.ico" sizes="32x32" />
            </head>
            <body className={circularStd.className}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
