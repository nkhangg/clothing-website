import React, { MouseEventHandler, ReactNode } from 'react';

import cls from 'classnames';

export interface IButtonIconProps {
    children: ReactNode;
    classNames?: {
        icon?: string;
    };
    bag?: number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonIcon({ children, bag, classNames, onClick }: IButtonIconProps) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer w-[30px] h-[30px] border border-transparent flex items-center justify-center active:border-ancesst1 rounded-full relative"
        >
            <span
                className={cls('flex items-center justify-center text-[rgb(33,32,37)]', {
                    [classNames?.icon || 'text-[20px]']: true,
                })}
            >
                {children}
            </span>
            {bag && (
                <span className="absolute  bottom-0 right-0 text-[0.5rem] min-h-[15px] min-w-[15px] rounded-full bg-black text-white flex items-center justify-center">
                    <p>{bag}</p>
                </span>
            )}
        </button>
    );
}
