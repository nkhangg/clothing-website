/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useMemo, useState } from 'react';
import { BsBag, BsSearch } from '@meronex/icons/bs';
import { CgMenuLeft } from '@meronex/icons/cg';
import { AiOutlineClose, AiTwotoneHeart } from '@meronex/icons/ai';
import { ButtonIcon } from '..';
import DrawerNav from './drawer-nav';
import DarwerCart from './darwer-cart';
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
    const [openNav, setOpenNav] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const toggleDrawerNav = () => {
        setOpenNav((prevState) => !prevState);
    };
    const toggleDrawerCart = () => {
        setOpenCart((prevState) => !prevState);
    };

    return (
        <>
            <header className="flex items-center justify-between h-[65px] w-full bg-ancesst8 p-4 sticky top-0 z-10 border border-ancesst6">
                <div className="flex items-center gap-2">
                    <ButtonIcon onClick={toggleDrawerNav} classNames={{ icon: 'text-[22px] cursor-pointer' }}>
                        <CgMenuLeft />
                    </ButtonIcon>
                    <ButtonIcon classNames={{ icon: 'text-[16px] cursor-pointer' }}>
                        <BsSearch />
                    </ButtonIcon>
                </div>
                <div
                    style={{
                        aspectRatio: 'auto 70 / 70',
                    }}
                    className="w-[70px] h-[70px] flex items-center justify-center"
                >
                    <img className="object-contain text-transparent" src="/images/LOGO.svg" alt="logo" />
                </div>
                <div className="flex items-center gap-2">
                    <ButtonIcon>
                        <AiTwotoneHeart />
                    </ButtonIcon>
                    <ButtonIcon onClick={toggleDrawerCart} bag={10}>
                        <BsBag />
                    </ButtonIcon>
                </div>
            </header>

            <DrawerNav open={openNav} toggleDrawer={toggleDrawerNav} />
            <DarwerCart open={openCart} toggleDrawer={toggleDrawerCart} />
        </>
    );
}
