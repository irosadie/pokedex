'use client'

import React, { Fragment, FC, ButtonHTMLAttributes } from 'react'
import { button } from './button.variant'
import { type VariantProps } from 'class-variance-authority'

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    icon?: 'plus' | 'trash' | 'more',
    iconPosition?: 'left' | 'right'
}

const Button: FC<ButtonProps> = (props) => {
    const {
        intent,
        dimension,
        className,
        children,
        shadow,
        width,
        rounded,
        icon,
        iconPosition = 'left',
        ...rest
    } = props

    return (
        <Fragment>
            <button
                className={button({ intent, dimension, rounded, width, shadow, className })}
                {...rest}
            >
                <div className={iconPosition === 'left' ? 'flex gap-2' : 'flex gap-2 flex-row-reverse'}>
                    {icon && (
                        <div className='flex items-center'>
                            {icon === 'plus' && <>icon</>}
                        </div>
                    )}
                    {children && children}
                </div>
            </button>
        </Fragment>
    )
}

export default Button
