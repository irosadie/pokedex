'use client'

import React, { Fragment, FC, HTMLAttributes } from 'react'
import { badge } from './badge.variant'
import { type VariantProps } from 'class-variance-authority'

export type BadgeProps = HTMLAttributes<HTMLElement> & VariantProps<typeof badge>

const Badge: FC<BadgeProps> = (props) => {
    const {
        intent,
        bordered,
        className,
        children,
        shadow,
        dimension,
        ...rest
    } = props

    return (
        <Fragment>
            <span className={badge({ intent, bordered, shadow, dimension, className })} {...rest}>{children}</span>
        </Fragment>
    )
}

export default Badge
