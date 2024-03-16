import classNames from 'classnames';
import React from 'react';

export interface IButtonProps {
    title: string;
    variants?: 'auto' | 'full';
}

export default function Button({ title, variants = 'auto' }: IButtonProps) {
    return (
        <button
            className={classNames(
                'bg-black py-[0.7rem] px-[1.4rem] border-2 border-transparent uppercase tracking-[.05rem] flex items-center justify-center transition-all ease-linear rounded text-nowrap h-[3.125rem] active:bg-ancesst4 active:border-black  hover:bg-ancesst4 hover:border-black',
                {
                    ['w-full']: variants === 'full',
                },
            )}
        >
            <span className="text-ancesst8 font-medium text-xs">{title}</span>
        </button>
    );
}
