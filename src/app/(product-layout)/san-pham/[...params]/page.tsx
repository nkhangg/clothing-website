'use client';
import { Button, ProductDetailSlide } from '@/components';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { AiTwotoneHeart } from '@meronex/icons/ai';
import { BsFillHeartFill } from '@meronex/icons/bs';
import { IosArrowDown, IosArrowUp } from '@meronex/icons/ios';
import Infomation from '@/layouts/product/product-detail/infomation';
export interface IProductDetailPageProps {
    params: { params: string[] };
}

export default function ProductDetailPage({ params }: IProductDetailPageProps) {
    const [id, name] = params.params;

    const data = {
        id: '1',
        isNew: false,
        isSoldOut: false,
        promotion: {
            value: 0.23,
            end_date: '2023-03-32T18:10:54.463Z',
        },
        description:
            'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
        brand: 'shoes',
        rate: 3,
        name: 'Faxon Canvas Low-Top Sneaker',
        price: 400,
        sizes: [
            {
                id: 1,
                label: 'S',
                colors: [
                    {
                        id: 1,
                        color: '#005B96',
                        repositories: 1,
                    },
                    {
                        id: 2,
                        color: '#ED1B4C',
                        repositories: 1,
                    },
                    // {
                    //     id: 3,
                    //     color: '#2AB7CA',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 4,
                    //     color: '#FED766',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 5,
                    //     color: '#E6E6EA',
                    //     repositories: 1,
                    // },
                ],
            },
            {
                id: 2,
                label: 'M',
                colors: [
                    // {
                    //     id: 1,
                    //     color: '#005B96',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 2,
                    //     color: '#ED1B4C',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 3,
                    //     color: '#2AB7CA',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 4,
                    //     color: '#FED766',
                    //     repositories: 1,
                    // },
                    // {
                    //     id: 5,
                    //     color: '#E6E6EA',
                    //     repositories: 1,
                    // },
                ],
            },
            {
                id: 3,
                label: 'G',
                colors: [
                    {
                        id: 1,
                        color: '#005B96',
                        repositories: 1,
                    },
                    {
                        id: 2,
                        color: '#ED1B4C',
                        repositories: 1,
                    },
                    {
                        id: 3,
                        color: '#2AB7CA',
                        repositories: 1,
                    },
                    {
                        id: 4,
                        color: '#FED766',
                        repositories: 1,
                    },
                    {
                        id: 5,
                        color: '#E6E6EA',
                        repositories: 1,
                    },
                ],
            },
        ],
        colors: [
            {
                id: 1,
                color: '#005B96',
                repositories: 1,
            },
            {
                id: 2,
                color: '#ED1B4C',
                repositories: 1,
            },
            {
                id: 3,
                color: '#2AB7CA',
                repositories: 1,
            },
            {
                id: 4,
                color: '#FED766',
                repositories: 1,
            },
            {
                id: 5,
                color: '#E6E6EA',
                repositories: 1,
            },
        ],

        images: [
            'http://zwin.io/react/stoon/assets/img/arrival/1.png',
            'http://zwin.io/react/stoon/assets/img/arrival/1.png',
            'http://zwin.io/react/stoon/assets/img/arrival/1.png',
        ],
    } as IProductDetail;

    return (
        <div className="py-8 w-full m-auto flex items-center justify-center">
            <div className="w-full max-w-[800px] md:max-w-[1320px]">
                <div className="grid lg:grid-cols-col-product-detail-des gap-10">
                    <ProductDetailSlide data={data.images} />
                    <Infomation data={data} />
                </div>
            </div>
        </div>
    );
}
