'use client';
import React, { useMemo, useState } from 'react';
import { Button } from '..';
import Image from 'next/image';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { breakpoints } from '@/constants/theme';

export interface IConllectionProps {}

export default function Conllection(props: IConllectionProps) {
    const data = [
        {
            id: 1,
            title: 'Fashion clothing',
            action: {
                label: 'shop now',
                path: '',
            },
            image: 'http://zwin.io/react/stoon/assets/img/collection/4.png',
        },
        {
            id: 2,
            title: 'Accessories',
            action: {
                label: 'shop now',
                path: '',
            },
            image: 'http://zwin.io/react/stoon/assets/img/collection/5.png',
        },
        {
            id: 1,
            title: 'Fashion clothing',
            action: {
                label: 'shop now',
                path: '',
            },
            image: 'http://zwin.io/react/stoon/assets/img/collection/4.png',
        },
        {
            id: 2,
            title: 'Accessories',
            action: {
                label: 'shop now',
                path: '',
            },
            image: 'http://zwin.io/react/stoon/assets/img/collection/5.png',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setIsLoading(true);
        },
        slides: {
            spacing: 10,
            perView: 1.15,
        },
        breakpoints: {
            [breakpoints['smartphone-min']]: {
                slides: {
                    spacing: 30,
                    perView: 2,
                },
            },
        },
    });

    const renderSlides = useMemo(
        () =>
            data?.map((value, index) => (
                <div key={index} className="keen-slider__slide h-[300px] md:h-[500px] relative">
                    <div className="absolute inset-0 flex items-center justify-center z-[3]">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="font-medium text-[1.5rem] text-ancesst1">{value.title}</h3>
                            <Button title={value.action.label} />
                        </div>
                    </div>
                    <figure className="w-full h-full">
                        <Image src={value.image} alt={value.title} fill />
                    </figure>
                </div>
            )),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const renderDots = useMemo(
        () =>
            isLoading &&
            [...Array((instanceRef?.current?.track.details.slides.length || 2) - 1 || 0).fill(2)].map((_, index) => (
                <div
                    className={classNames('h-[5px] border border-black', {
                        [index == (currentSlide.toFixed(0) || 0) ? 'w-[40px] bg-black' : 'w-[30px]']: true,
                    })}
                    key={index}
                    onClick={() => instanceRef.current?.moveToIdx(index)}
                />
            )),
        [currentSlide, instanceRef, isLoading],
    );
    return (
        <div className="w-full h-[400px] max-w-[800px] md:max-w-[1320px] ">
            <div ref={sliderRef} className="keen-slider mt-16">
                {renderSlides}
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center mt-8 gap-4 ">{renderDots}</div>
            </div>
        </div>
    );
}
