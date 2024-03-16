import { links } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IProductProps {
    data: IProduct;
}

export default function Product({ data }: IProductProps) {
    return (
        <Link href={links.product.show(data.id, 'abc')} className="cursor-pointer">
            <div className=" w-[300px] md:w-[400px] aspect-square relative">
                <div className="absolute top-[10px] left-[10px] flex flex-col gap-4 z-10">
                    <div className="bg-green-primary pt-1 px-2 pb-[2px] text-ancesst8 text-[0.6rem] w-fit uppercase">NEW</div>
                    <div className="bg-violet-primary pt-1 px-2 pb-[2px] text-ancesst8 text-[0.6rem] w-fit uppercase">sale 12%</div>
                </div>
                <Image fill style={{ objectFit: 'cover' }} src={data.thumnail} alt={data.thumnail} />
            </div>

            <div className="py-4 flex flex-col gap-2">
                <span className="text-[0.875rem] text-ancesst4 font-medium">3 cores</span>
                <strong className="font-normal text-[1rem] text-ancesst1 hover:underline">Faxon Canvas Low-Top Sneaker</strong>
                <span className="line-through text-ancesst4">200.000 VND</span>
                <span className="font-medium text-[1rem] text-ancesst0">500.000 VND</span>
            </div>
        </Link>
    );
}
