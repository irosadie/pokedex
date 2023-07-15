'use client'

import React, { Fragment, FC, HTMLAttributes, memo } from 'react'
import { circleTag } from './circle-tag.variant'
import { type VariantProps } from 'class-variance-authority'

export type CircleTagProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof circleTag>

const CircleTag: FC<CircleTagProps> = (props) => {
    const {
        intent,
        className,
        children,
        ...rest
    } = props

    return (
        <Fragment>
            <div className={circleTag({ intent, className })} {...rest}>{children}</div>
        </Fragment>
    )
}

export default CircleTag
