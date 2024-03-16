import { Button } from '@/components';
import Image from 'next/image';
import * as React from 'react';

export interface ISalesProps {}

export default function Sales(props: ISalesProps) {
    return (
        <div className="w-full h-[400px] max-w-[800px] md:max-w-[1320px] flex items-center justify-center m-auto">
            <div className="relative w-full h-full">
                <figure className="relative w-full h-full">
                    <Image style={{ objectFit: 'cover' }} fill src={'/images/sales/sales.png'} alt="/images/sales/sales.png" />
                </figure>
                <div className="absolute z-[3] flex flex-col gap-2 inset-0 items-center justify-center">
                    <h2 className="text-ancesst8 text-[3.3rem]">spring sale</h2>
                    <p className="text-ancesst8 text-[1.4rem] md:text-[2rem] leading-5 text-center">30% off on selected items</p>

                    <div className="mt-8">
                        <Button title="shop the sale" />
                    </div>
                </div>
            </div>
        </div>
    );
}
