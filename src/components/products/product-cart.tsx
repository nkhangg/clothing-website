import { AiOutlineClose } from '@meronex/icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ButtonIcon } from '..';

export interface IProductCartProps {}

export default function ProductCart(props: IProductCartProps) {
    return (
        <div className="flex items-center justify-between gap-6 w-full">
            <div className="relative w-[40%] aspect-square inset-0">
                <Image fill style={{ objectFit: 'cover' }} className="inset-0" src={'https://zwin.io/react/stoon/assets/img/arrival/1.png'} alt="abc" />
            </div>
            <div className="flex-1 max-w-[60%] flex flex-col gap-2 justify-between h-full py-4">
                <div className="flex items-start justify-between">
                    <Link href={''} className="w-full text-[0.9rem] md:text-[1.1rem] flex-1 text-wrap hover:underline font-medium truncate text-ancesst1 line-clamp-2">
                        FPlaid Cotton Oxford Shirt gewhgwkhjeghweghwekjghjk
                    </Link>
                    <span className="p-2 cursor-pointer">
                        <ButtonIcon classNames={{ icon: 'text-[16px]' }}>
                            <AiOutlineClose />
                        </ButtonIcon>
                    </span>
                </div>
                <span className=" text-[0.875rem] md:text-[1rem] text-ancesst1 font-medium">100.000 VND</span>
                <span className=" text-[0.875rem] md:text-[1rem] text-ancesst1">Size: M</span>
                <span className=" text-[0.875rem] md:text-[1rem] text-ancesst1">Số lượng: 10</span>
            </div>
        </div>
    );
}
