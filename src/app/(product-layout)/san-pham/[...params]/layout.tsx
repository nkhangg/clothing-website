import { ProductLayout as Layout } from '@/layouts';
import React, { ReactNode } from 'react';

export interface IProductLayoutProps {
    children: ReactNode;
}

export default function ProductLayouta({ children }: IProductLayoutProps) {
    return <Layout>{children}</Layout>;
}
