/* eslint-disable @next/next/no-img-element */
import styles from './styles/header.module.css';
import { headersFN } from '@/constants/data/common/headers';
import React, { useMemo } from 'react';
import Drawer from 'react-modern-drawer';
import { ButtonIcon } from '..';
import { AiOutlineClose } from '@meronex/icons/ai';
import classNames from 'classnames';
import Link from 'next/link';

export interface IDrawerNavProps {
    toggleDrawer: () => void;
    open: boolean;
}

export default function DrawerNav({ open, toggleDrawer }: IDrawerNavProps) {
    const headers = useMemo(() => {
        return headersFN({});
    }, []);
    return (
        <Drawer open={open} onClose={toggleDrawer} style={{ width: 'auto' }} direction="left">
            <section className="w-[100vw] md:w-[500px]">
                <header className="flex items-center justify-center h-[65px] w-full bg-ancesst8 p-4 sticky top-0 z-10 border border-ancesst6">
                    <div
                        style={{
                            aspectRatio: 'auto 70 / 70',
                        }}
                        className="w-[70px] h-[70px] flex items-center justify-center"
                    >
                        <img className="object-contain text-transparent" src="/images/LOGO.svg" alt="logo" />
                    </div>

                    <div className="absolute h-full right-0 top-0 flex items-center justify-center px-5">
                        <ButtonIcon onClick={toggleDrawer}>
                            <AiOutlineClose />
                        </ButtonIcon>
                    </div>
                </header>

                <ul className="p-4 flex flex-col gap-4">
                    {headers.map((item) => {
                        return (
                            <li
                                className={classNames(
                                    "text-[1rem] w-fit transition-all ease-linear cursor-pointer uppercase relative after:content-[''] after:absolute after:bottom-0 after:bg-ancesst1 after:w-0 after:h-[1px] after:left-0",
                                    {
                                        [styles['header-item']]: true,
                                    },
                                )}
                                key={item.title}
                            >
                                {!item.funtion && <Link href={item.link}>{item.title}</Link>}
                                {item.funtion && <span>{item.title}</span>}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Drawer>
    );
}
