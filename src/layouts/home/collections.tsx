import { CardConllection } from '@/components';
import React from 'react';

export interface ICollectionSessionProps {}

export default function CollectionSession(props: ICollectionSessionProps) {
    const data = [
        {
            image: '/images/collections/collection-1.png',
            collectionType: 'woman',
        },
        {
            image: '/images/collections/collection-2.png',
            collectionType: 'man',
        },
        {
            image: '/images/collections/collection-3.png',
            collectionType: 'kids',
        },
    ];
    return (
        <div className="w-full my-[4rem]">
            <div className="w-full py-[4rem] flex items-center justify-center">
                <div className="w-full max-w-[800px] md:max-w-[1320px] m-auto">
                    <div style={{ flexWrap: 'wrap' }} className="flex w-full gap-4 justify-center">
                        {data.map((item) => {
                            return <CardConllection data={item} key={item.image} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
