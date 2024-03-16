/* eslint-disable @next/next/no-img-element */
'use client';
import { useMemo } from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { breakpoints } from '@/constants/theme';
import { useState } from 'react';
import { Button } from '..';
import classNames from 'classnames';

export default function AboveFold() {
    const data = [
        {
            title: 'Favorite clothing',
            sub_title: '30% OFF',
            image: 'http://zwin.io/react/stoon/assets/img/banner/11.png',
            action: {
                label: 'get collection',
                path: '',
            },
        },
        {
            title: 'Favorite clothing',
            sub_title: '30% OFF',
            image: 'http://zwin.io/react/stoon/assets/img/banner/1.png',
            action: {
                label: 'get collection',
                path: '',
            },
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
        },
        [
            (slider) => {
                let timeout: any;

                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ],
    );

    const renderDots = data.map((_, index) => (
        <div
            className={classNames('h-[5px] border border-black', {
                [index == (currentSlide.toFixed(0) || 0) ? 'w-[40px] bg-black' : 'w-[30px]']: true,
            })}
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
        />
    ));

    const renderSlides = useMemo(
        () =>
            data.map((value, index) => (
                <figure className="keen-slider__slide relative flex items-center justify-center" key={index}>
                    <Image fill style={{ objectFit: 'cover' }} className="" src={value.image} alt={value.image} />

                    <div className="absolute top-0 z-[2] h-full bg-transparent flex items-center p-4 w-full max-w-[800px] md:max-w-[1240px]">
                        <div className="">
                            <h2 className="text-[3.5rem] text-ancesst8">{value.sub_title}</h2>
                            <h2 className="font-semibold text-[4rem] text-ancesst1">{value.title}</h2>
                            <Button title="Get conllection" />
                        </div>
                    </div>
                </figure>
                // eslint-disable-next-line react-hooks/exhaustive-deps
            )),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    if (!data) return null;

    return (
        <div
            style={{
                height: 'calc(-65px + 100vh)',
            }}
        >
            <div ref={sliderRef} className="keen-slider w-full h-full relative" style={{ flex: 1 }}>
                {renderSlides}
            </div>
            <div className="absolute bottom-[2rem] gap-4 w-full flex items-center justify-center">{renderDots}</div>
        </div>
    );
}
