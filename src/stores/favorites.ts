/* eslint-disable camelcase */
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type FavoritesProps = {
  favorites: []
};

const initFavoritesState: FavoritesProps = {
  favorites: [],
}

const favoritesStore = atom<FavoritesProps>({
  key: 'favorites',
  default: initFavoritesState,
  effects_UNSTABLE: [persistAtom],
})

export default favoritesStore


