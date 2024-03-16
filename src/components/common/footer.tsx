import { footers } from '@/constants/data/common/footers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <footer
            style={{
                marginTop: '14%',
                padding: '4rem 1rem',
            }}
            className="bg-ancesst7"
        >
            <div className="max-w-[800px] md:max-w-[1320px] m-auto h-[100px]">
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
            <div className="max-w-[800px] md:max-w-[1320px] m-auto">
                <div className="flex justify-between md:flex-row flex-col gap-8">
                    {footers.map((item) => {
                        return (
                            <div key={item.title} className="flex gap-4 flex-col">
                                <h2 className="text-ancesst1 text-[1.1rem] font-medium">{item.title}</h2>
                                <ul className="flex flex-col gap-2 text-ancesst5 text-[1rem]">
                                    {item.children.map((item) => {
                                        return (
                                            <li className="hover:underline hover:text-ancesst1 transition-all ease-linear" key={item.title}>
                                                <Link href={item.link} dangerouslySetInnerHTML={{ __html: item.title }}></Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
