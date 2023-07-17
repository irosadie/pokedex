/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './main.module.scss'

export const main = cva(styles.main, {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
})
