/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './badge.module.scss'

export const badge = cva(styles.badge, {
    variants: {
        intent: {
            white: styles.i_white,
            black: styles.i_black,
            primary: styles.i_primary,
            light: styles.i_light,
            normal: styles.i_normal,
            fire: styles.i_fire,
            water: styles.i_water,
            electric: styles.i_electric,
            grass: styles.i_grass,
            ice: styles.i_ice,
            fighting: styles.i_fighting,
            poison: styles.i_poison,
            ground: styles.i_ground,
            flying: styles.i_flying,
            psychic: styles.i_psychic,
            bug: styles.i_bug,
            rock: styles.i_rock,
            ghost: styles.i_ghost,
            dragon: styles.i_dragon,
            dark: styles.i_dark,
            steel: styles.i_steel,
            fairy: styles.i_fairy,
            unknown: styles.i_unknow,
        },
        bordered: {
            true: styles.b_bordered,
            false: null,
        },
        dimension: {
            normal: styles.d_normal,
        }
    },
    compoundVariants: [],
    defaultVariants: {
        intent: 'primary',
        dimension: 'normal',
        bordered: false,
    },
})
