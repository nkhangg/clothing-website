'use client';
import { Button } from '@/components';
import { AiTwotoneHeart } from '@meronex/icons/ai';
import { BsFillHeartFill } from '@meronex/icons/bs';
import { IosArrowDown, IosArrowUp } from '@meronex/icons/ios';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';

export interface IInfomationProps {
    data: IProductDetail;
}

export default function Infomation({ data }: IInfomationProps) {
    const [isLike, setisLike] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const [size, setSize] = useState<null | ISize>(null);

    const handleLike = () => {
        setisLike((prev) => !prev);
    };

    const handleShowDescription = () => {
        setShowDescription((prev) => !prev);
    };

    const handleClickSize = (item: ISize) => {
        setSize(item);
    };

    const colors = useMemo(() => {
        if (!size || size.colors.length <= 0) return data.colors;

        return size.colors;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    return (
        <div className="flex flex-col gap-4 select-none">
            <div className="p-4 flex flex-col gap-4 mb-4">
                <div className=" flex gap-4 ">
                    {data.isNew && <div className="bg-green-primary pt-1 px-2 pb-[2px] text-ancesst8 text-[0.6rem] w-fit uppercase">NEW</div>}
                    {data.promotion && (
                        <div className="bg-violet-primary pt-1 px-2 pb-[2px] text-ancesst8 text-[0.6rem] w-fit uppercase">sale {(data.promotion.value * 100).toFixed(0)}%</div>
                    )}
                    {size && size.colors.length <= 0 && <div className="bg-heart pt-1 px-2 pb-[2px] text-ancesst8 text-[0.6rem] w-fit uppercase">hết hàng</div>}
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="text-ancesst1 text-[1.4rem] font-medium">{data.name}</h2>

                    <span
                        onClick={handleLike}
                        className={classNames('text-[20px] cursor-pointer ', {
                            ['text-heart']: isLike,
                        })}
                    >
                        {isLike ? <BsFillHeartFill /> : <AiTwotoneHeart />}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="line-through text-ancesst4 text-[0.875rem]">200.000 VND</span>
                    <span className="font-medium text-[1.1rem] text-ancesst0">500.000 VND</span>
                </div>
            </div>
            <ul className="p-4 flex items-center gap-4">
                {data.sizes.map((item) => {
                    return (
                        <li
                            onClick={() => handleClickSize(item)}
                            key={item.label}
                            className={classNames('uppercase w-10 h-10 border border-ancesst4 text-ancesst4 text-sm flex items-center justify-center cursor-pointer', {
                                ['bg-black text-ancesst8']: size && item.id === size?.id,
                            })}
                        >
                            <span>{item.label}</span>
                        </li>
                    );
                })}
            </ul>

            <div className="p-4">
                <span className="text-ancesst1 text-[1.1rem]">Màu sắc</span>
                <div className="flex items-center gap-3 mt-4">
                    {colors.map((item) => {
                        return (
                            <button
                                key={item.color}
                                style={{
                                    backgroundColor: item.color,
                                }}
                                className="w-[25px] h-[25px] rounded-full "
                            ></button>
                        );
                    })}
                </div>
            </div>
            <div className="px-4">
                <span className="text-ancesst1 text-[1.1rem]">Mô tả</span>
                <div
                    className={classNames(' overflow-hidden mt-4 relative', {
                        ['h-[3.3125rem]']: !showDescription,
                    })}
                >
                    <span className="text-[0.875rem]">{data.description}</span>
                    {!showDescription && (
                        <div
                            style={{ background: 'linear-gradient(rgba(255, 255, 255, 0) -11.81%, rgba(255, 255, 255, 0.91) 51.43%)' }}
                            className="absolute bottom-0 left-0 w-full h-[35px]"
                        ></div>
                    )}
                </div>
                <div
                    onClick={handleShowDescription}
                    className="flex items-center text-ancesst1 tracking-wider text-[.8rem] justify-center gap-2 pt-[1.2rem] uppercase font-medium text-sm cursor-pointer"
                >
                    <span className="text-[20px]">{!showDescription ? <IosArrowDown /> : <IosArrowUp />}</span>
                    Xem thêm
                </div>
                <div className="w-full flex justify-center items-center mt-4 p-4">
                    <Button variants="full" title="Thêm vào giỏ hàng" />
                </div>
            </div>
        </div>
    );
}
