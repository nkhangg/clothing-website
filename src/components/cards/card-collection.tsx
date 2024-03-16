import * as React from 'react';
import styles from './style.module.css';
import classNames from 'classnames';
import Image from 'next/image';

export interface ICardConllectionProps {
    data: {
        image: string;
        collectionType: string;
    };
}

export default function CardConllection({ data }: ICardConllectionProps) {
    return (
        <div className="w-[20rem] md:w-[25rem] aspect-video py-7 px-10 flex items-center justify-center cursor-pointer relative">
            <Image fill className="absolute inset-0 w-full h-full" src={data.image} alt={data.image} />
            <div
                className={classNames('w-full h-full fle border border-ancesst0 z-[3] hover:border-ancesst8 p-8 flex justify-center flex-col transition-all ease-linear', {
                    [styles['card-conllection']]: true,
                })}
            >
                <strong
                    className={classNames('text-xl font-medium text-ancesst8 w-max transition-all ease-linear', {
                        [styles['card-conllection-item']]: true,
                    })}
                >
                    {data.collectionType}
                </strong>
                <span className="text-ancesst1 text-sm">Collection</span>
            </div>
        </div>
    );
}
