'use client'

import React, { Fragment, FC, HTMLAttributes, MouseEvent, useState, useEffect, memo } from 'react'
import { card } from './card.variant'
import { cx, type VariantProps } from 'class-variance-authority'
import { StarFilled } from '../icons'
import { Tag } from '../tag'
import { Badge } from '../badge'
import Link from 'next/link'
import styles from './card.module.scss'

const COLOR = {
    DEFAULT: '#F2F2F2',
    IS_FAVORITE: '#C5312A',
}

type typeProps = PokeColorProps

export interface CardProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
    name: string,
    identity: number,
    avatar: string,
    types: Array<typeProps>,
    hasFavoriteBtn?: boolean
    isFavorite?: boolean,
    onFavoriteClick?: (status: boolean) => void
}

const Card: FC<CardProps> = (props) => {
    const {
        intent,
        className,
        children,
        identity,
        name,
        avatar,
        types = ['unknown'],
        isFavorite,
        onFavoriteClick,
        hasFavoriteBtn,
        ...rest
    } = props

    const [isFavoriteCard, setIsFavoriteCard] = useState(false)

    useEffect(() => {
        if (isFavorite) setIsFavoriteCard(isFavorite)
    }, [isFavorite])

    const pokeTypes: JSX.Element[] = []
    let firstIntent: typeProps = 'normal'

    types.map((val, index) => {
        if (index === 0) firstIntent = val
        pokeTypes.push(<li key={`type_${index}`}><Badge intent={val}>{val}</Badge></li>)
    })

    const handleOnFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsFavoriteCard((val) => !val)
        if (onFavoriteClick) onFavoriteClick(isFavoriteCard)
    }

    return (
        <Fragment>
            <div className={cx(styles.container, className)} {...rest}>
                {
                    hasFavoriteBtn && (<button onClick={handleOnFavoriteClick} className={styles.favorite_btn}>
                        <StarFilled color={isFavoriteCard ? COLOR.DEFAULT : COLOR.IS_FAVORITE} />
                    </button>)
                }
                <Link href={`/${name}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <div className={styles.wording}>
                                <h3>{name}</h3>
                                <Tag intent={firstIntent} children={identity} />
                                <div>
                                    <ul>{pokeTypes}</ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bg_white} />
                        <div className={cx(card({ intent: firstIntent }), styles.bg_image, 'bg-custom bg-size-default img')} style={{ backgroundImage: `url(${avatar})` }} />
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default memo(Card)