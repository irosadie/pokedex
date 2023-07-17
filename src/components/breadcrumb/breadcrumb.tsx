'use client'

import React, { Fragment, FC } from 'react'
import { breadcrumb } from './breadcrumb.variant'
import { type VariantProps } from 'class-variance-authority'
import styles from './breadcrumb.module.scss'

type BreadcrumbDataProps = {
    title: string,
}

type BreadcrumbDefaultProps = {
    data: BreadcrumbDataProps[]
}

export type BreadcrumbProps = BreadcrumbDefaultProps & VariantProps<typeof breadcrumb>

const Breadcrumb: FC<BreadcrumbProps> = ({ data }) => {

    const breadcrumb: JSX.Element[] = []

    data.map((value, index) => {

        let breadcrumbElement = <li key={`breadcrumb_${index}`}>{value.title} <span>/</span></li>

        if (index === data.length - 1) {

            breadcrumbElement = <li key={`breadcrumb_${index}`}>{value.title}</li>
        }

        breadcrumb.push(breadcrumbElement)

    })

    return (
        <Fragment>
            <div>
                <ul className={styles.breadcrumb}>{breadcrumb}</ul>
            </div>
        </Fragment>
    )
}

export default Breadcrumb
