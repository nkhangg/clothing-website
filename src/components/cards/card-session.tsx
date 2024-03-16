import React, { ReactNode } from 'react';

export interface ICardSessionProps {
    title: string;
    children: ReactNode;
}

export default function CardSession({ title, children }: ICardSessionProps) {
    return (
        <div className="w-full flex flex-col items-center my-16">
            <h2 className="text-[2rem] uppercase text-ancesst1 text-center ">{title}</h2>
            <div className="w-[200px] h-[1px] bg-black flex items-center justify-center relative mt-8">
                <div className="w-[15px] h-[15px] border border-ancesst1 rotate-45 bg-ancesst8"></div>
            </div>
            {children}
        </div>
    );
}
