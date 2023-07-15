/* eslint-disable camelcase */
import { PokemonData } from '$/types';
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type FavoritesProps = PokemonData['pokemonts']

const initFavoritesState: FavoritesProps = []

const favoritesStore = atom<FavoritesProps>({
  key: 'favorites',
  default: initFavoritesState,
  effects_UNSTABLE: [persistAtom],
})

export default favoritesStore


