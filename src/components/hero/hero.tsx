'use client'

import React, { Fragment, FC, HTMLAttributes, useState, useEffect, MouseEvent } from 'react'
import { hero } from './hero.variant'
import { cx, type VariantProps } from 'class-variance-authority'
import { StarFilled } from '../icons'
import { Badge } from '../badge'
import Image from 'next/image'
import styles from './hero.module.scss'

export type HeroProps = HTMLAttributes<HTMLElement> & Omit<VariantProps<typeof hero>, 'thick'> & {
    name: string
    description: string
    avatar: string
    types: Array<PokeColorProps>,
    isFavorite: boolean,
    onFavoriteClick: (status: boolean) => void
}

const COLOR = {
    DEFAULT: '#F2F2F2',
    IS_FAVORITE: '#C5312A',
}

const Hero: FC<HeroProps> = (props) => {
    const {
        intent,
        bordered,
        className,
        children,
        shadow,
        dimension,
        name,
        description,
        avatar,
        types,
        isFavorite,
        onFavoriteClick,
        ...rest
    } = props

    const [isFavoriteHero, setIsFavoriteHero] = useState(false)

    useEffect(() => {
        setIsFavoriteHero(isFavorite)
    }, [isFavorite])

    const handleOnFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsFavoriteHero((val) => !val)
        if (onFavoriteClick) onFavoriteClick(isFavoriteHero)
    }

    const badgeTypes: JSX.Element[] = []

    types.map((val, index) => badgeTypes.push(<li key={`badge_${index}`}><Badge dimension="big" intent={val}>{val}</Badge></li>))

    return (
        <Fragment>
            <div className={cx(hero({ intent, className }), styles.container)} {...rest}>
                <div className={styles.wrapper}>
                    <div className='w-1/2 flex flex-col justify-center relative'>
                        <div className='space-y-3 pl-6 text-right'>
                            <h1 className='text-5xl leading-[64px] font-extrabold capitalize'>{name ?? ''}</h1>
                            <div>
                                <span className='text-lg'>{description ?? ''}</span>
                            </div>
                            {
                                <div className='pt-3 relative'>
                                    {
                                        badgeTypes.length ? (
                                            <ul className='flex justify-end space-x-4'>{badgeTypes}</ul>
                                        ) : null
                                    }
                                    <button onClick={handleOnFavoriteClick} className='scale-[145%] absolute right-0 -bottom-14'>
                                        <StarFilled color={isFavoriteHero ? COLOR.DEFAULT : COLOR.IS_FAVORITE} />
                                    </button>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='w-1/2 flex mt-24 justify-center relative animate-bounce-custom'>
                        <Image src={avatar} width={1000} height={1000} className='w-[80%] absolute -bottom-3' alt={name} />
                        <div className={cx(hero({ intent, thick: true }), 'rounded-3xl h-[280px] w-[380px] shadow-xl')} />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Hero
