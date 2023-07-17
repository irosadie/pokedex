'use client'

import React, { FC, HtmlHTMLAttributes } from 'react'
import { main } from './main.variant'
import { type VariantProps } from 'class-variance-authority'

export type MainProps = HtmlHTMLAttributes<HTMLElement> & VariantProps<typeof main>

const Main: FC<MainProps> = (props) => {
    const {
        className,
        children,
        ...rest
    } = props

    return (<main className={main({ className })} {...rest}>{children}</main>)
}

export default Main
