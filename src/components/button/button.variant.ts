/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './button.module.scss'

export const button = cva(styles.btn, {
    variants: {
        intent: {
            default: styles.i_default,
            primary: styles.i_primary,
        },
        dimension: {
            small: styles.d_small,
            normal: styles.d_normal,
            bigger: styles.d_bigger,
        },
        shadow: {
            true: styles.s_md,
            false: styles.s_none
        },
        width: {
            standard: styles.w_standard,
            full: styles.w_full,
        },
        rounded: {
            standard: styles.r_standard,
            full: styles.r_full,
            none: styles.r_none
        }
    },
    compoundVariants: [],
    defaultVariants: {
        intent: 'primary',
        dimension: 'normal',
        shadow: false,
        width: 'standard',
        rounded: 'full'
    },
})
