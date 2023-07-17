/* eslint-disable check-file/filename-naming-convention */
import { cva } from 'class-variance-authority'
import styles from './hero.module.scss'

export const hero = cva(styles.hero, {
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
        shadow: {
            true: styles.s_shadow,
            false: null,
        },
        bordered: {
            true: styles.b_bordered,
            false: null,
        },
        dimension: {
            normal: styles.d_normal,
            big: styles.d_big,
        },
        thick: {
            true: null,
            false: null,
        },
    },
    compoundVariants: [
        {intent: 'white', thick: true, className: [styles.i_white_thick]},
        {intent: 'primary', thick: true, className: [styles.i_primary_thick]},
        {intent: 'light', thick: true, className: [styles.i_light_thick]},
        {intent: 'normal', thick: true, className: [styles.i_normal_thick]},
        {intent: 'fire', thick: true, className: [styles.i_fire_thick]},
        {intent: 'water', thick: true, className: [styles.i_water_thick] },
        {intent: 'electric', thick: true, className: [styles.i_electric_thick]},
        {intent: 'grass', thick: true, className: [styles.i_grass_thick]},
        {intent: 'ice', thick: true, className: [styles.i_ice_thick]},
        {intent: 'fighting', thick: true, className: [styles.i_fighting_thick]},
        {intent: 'poison', thick: true, className: [styles.i_poison_thick]},
        {intent: 'ground', thick: true, className: [styles.i_ground_thick]},
        {intent: 'flying', thick: true, className: [styles.i_flying_thick]},
        {intent: 'psychic', thick: true, className: [styles.i_psychic_thick]},
        {intent: 'bug', thick: true, className: [styles.i_bug_thick]},
        {intent: 'rock', thick: true, className: [styles.i_rock_thick]},
        {intent: 'ghost', thick: true, className: [styles.i_ghost_thick]},
        {intent: 'dragon', thick: true, className: [styles.i_dragon_thick]},
        {intent: 'dark', thick: true, className: [styles.i_dark_thick]},
        {intent: 'steel', thick: true, className: [styles.i_steel_thick]},
        {intent: 'fairy', thick: true, className: [styles.i_fairy_thick]},
        {intent: 'unknown', thick: true, className: [styles.i_unknown_thick]}
        
    ],
    defaultVariants: {
        intent: 'primary',
        dimension: 'normal',
        thick: false,
        shadow: false,
        bordered: false,
    },
})
