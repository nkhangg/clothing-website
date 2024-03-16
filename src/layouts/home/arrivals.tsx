'use client';
import { Product } from '@/components';
import { breakpoints } from '@/constants/theme';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import * as React from 'react';

export interface IArrivalsProps {}

export default function Arrivals(props: IArrivalsProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            spacing: 10,
            perView: 1.15,
        },
        breakpoints: {
            [breakpoints['smartphone-min']]: {
                slides: {
                    spacing: 10,
                    perView: 2.6,
                },
            },
            [breakpoints['laptops-min']]: {
                slides: {
                    spacing: 20,
                    perView: 4.2,
                },
            },
        },
    });

    const renderSlides = Array.from({ length: 10 }).map((value, index) => (
        <div className="keen-slider__slide" key={index}>
            <Product
                data={{
                    id: index + '',
                    thumnail: `https://zwin.io/react/stoon/assets/img/arrival/${index + 1}.png`,
                }}
            />
        </div>
    ));

    return (
        <div className="w-full flex flex-col items-center my-16">
            <h2 className="text-[2rem] uppercase text-ancesst1 text-center">NEW ARRIVALS</h2>
            <div className="w-[200px] h-[1px] bg-black flex items-center justify-center relative mt-8">
                <div className="w-[15px] h-[15px] border border-ancesst1 rotate-45 bg-ancesst8"></div>
            </div>
            <div ref={sliderRef} className="keen-slider my-[4rem] px-5">
                {renderSlides}
            </div>
        </div>
    );
}
