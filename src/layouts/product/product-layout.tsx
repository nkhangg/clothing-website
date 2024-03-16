import React, { ReactNode } from 'react';

export interface IProductLayoutProps {
    children: ReactNode;
}

export default function ProductLayout({ children }: IProductLayoutProps) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
