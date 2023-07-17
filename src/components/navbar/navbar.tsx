'use client'

import React, { Fragment, FC, HTMLAttributes, ReactNode } from 'react'
import { navbar } from './navbar.variant'
import { type VariantProps } from 'class-variance-authority'
import { Button } from '../button'
import Link from 'next/link'
import styles from './navbar.module.scss'

export type BadgeProps = HTMLAttributes<HTMLElement> & VariantProps<typeof navbar> & {
    logo: ReactNode,
    isShowFilter?: boolean,
    menu: { href: string, title: string }[],
    onFilterClick?: () => void,
}

const Badge: FC<BadgeProps> = (props) => {
    const {
        className,
        logo,
        children,
        isShowFilter,
        menu,
        onFilterClick,
        ...rest
    } = props

    const menus: JSX.Element[] = []

    menu.map((val, index) => {
        menus.push(<li key={`menu_${index}`}>
            <Link href={val.href} title={val.title} className={styles.link}>{val.title}</Link>
        </li>)
    })

    return (
        <Fragment>
            <nav className={navbar({ className })} {...rest}>
                <div className={styles.container}>
                    <div><Link href={'/'}>{logo}</Link></div>
                    <div>
                        <ul>
                            {menus}
                            {isShowFilter && (<li><Button onClick={onFilterClick} intent="primary" dimension="small" className={!isShowFilter ? styles.d_hidden : undefined}>Filter</Button></li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Badge
