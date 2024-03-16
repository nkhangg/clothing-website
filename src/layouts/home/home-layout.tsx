import Footer from '@/components/common/footer';
import React, { ReactNode } from 'react';

export interface IHomeLayoutProps {
    children: ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
}
