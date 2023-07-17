/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './wrapper.module.scss'

export const wrapper = cva(styles.wrapper, {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
})
