import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { Header } from '@/components/common';

import 'react-modern-drawer/dist/index.css';

export interface IPrimayLayoutProps {
    children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default function PrimayLayout({ children }: IPrimayLayoutProps) {
    return (
        <section className={inter.className}>
            <Header />
            {children}
        </section>
    );
}
