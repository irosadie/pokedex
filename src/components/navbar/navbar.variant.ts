/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './navbar.module.scss'

export const navbar = cva(styles.navbar, {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
})
