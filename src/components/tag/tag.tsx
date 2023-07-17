'use client'

import React, { Fragment, FC, HTMLAttributes, memo } from 'react'
import { tag } from './tag.variant'
import { type VariantProps } from 'class-variance-authority'

export type TagProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof tag>

const Tag: FC<TagProps> = (props) => {
    const {
        intent,
        className,
        children,
        ...rest
    } = props

    return (
        <Fragment>
            <div className={tag({ intent, className })} {...rest}>{children}</div>
        </Fragment>
    )
}

export default Tag
