/* eslint-disable @next/next/no-img-element */
import styles from './styles/header.module.css';
import { headersFN } from '@/constants/data/common/headers';
import React, { useMemo } from 'react';
import Drawer from 'react-modern-drawer';
import { Button, ButtonIcon, ProductCart } from '..';
import { AiOutlineClose } from '@meronex/icons/ai';
import classNames from 'classnames';
import Link from 'next/link';

export interface IDarwerCartProps {
    toggleDrawer: () => void;
    open: boolean;
}

export default function DarwerCart({ open, toggleDrawer }: IDarwerCartProps) {
    return (
        <Drawer open={open} onClose={toggleDrawer} style={{ width: 'auto' }} direction="right">
            <section className="w-[100vw] md:w-[500px] h-full flex flex-col justify-between ">
                <header className="flex items-center justify-between h-[65px] w-full bg-ancesst8 p-4 sticky top-0 z-10 border border-ancesst6">
                    <div className="text-[1.2rem] text-ancesst1 font-medium">
                        <h2>Giỏ hàng</h2>
                    </div>

                    <div className=" h-full right-0 top-0 flex items-center justify-center">
                        <ButtonIcon onClick={toggleDrawer}>
                            <AiOutlineClose />
                        </ButtonIcon>
                    </div>
                </header>

                <main className="flex-1 h-full w-full p-4 flex flex-col gap-4 overflow-y-auto scroll">
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                </main>

                <footer className="flex flex-col w-full">
                    <div className=" bg-ancesst7 flex items-center justify-between my-4 py-8 px-4">
                        <span className="text-[1rem] text-ancesst1 font-medium">Tạm tính</span>
                        <p className="text-[1rem]">200.000 VND</p>
                    </div>
                    <div className="p-4">
                        <Button variants="full" title="Mua" />
                    </div>
                </footer>
            </section>
        </Drawer>
    );
}
