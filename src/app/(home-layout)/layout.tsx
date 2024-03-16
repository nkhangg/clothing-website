import { HomeLayout as Layout } from '@/layouts';
import React, { ReactNode } from 'react';

export interface IHomeLayoutProps {
    children: ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
    return <Layout>{children}</Layout>;
}
