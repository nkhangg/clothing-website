import type { Metadata } from 'next';
import { PrimaryLayout } from '@/layouts';
import './globals.css';

export const metadata: Metadata = {
    title: 'Clothing Shop',
    description: 'Buy anything',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <PrimaryLayout>{children}</PrimaryLayout>
            </body>
        </html>
    );
}
