'use client'

import React, { FC, HtmlHTMLAttributes } from 'react'
import { wrapper } from './wrapper.variant'
import { cx, type VariantProps } from 'class-variance-authority'
import styles from './wrapper.module.scss'
export type WrapperProps = HtmlHTMLAttributes<HTMLElement> & VariantProps<typeof wrapper>

const Wrapper: FC<WrapperProps> = (props) => {
    const {
        className,
        children,
        ...rest
    } = props

    return (
        <div className={cx(wrapper({ className }))}>
            <div className={styles.blanket}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper
