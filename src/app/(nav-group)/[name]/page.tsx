'use client'
import React, { FC, useState } from 'react'
import { DETAIL_POKEMON } from '$/queries'
import { queryData } from '$/services'
import { getArtwork } from '$/utils'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify';
import { DetailPokemon, GetPokemon } from '$/types'
import { Main } from '$/components/main'
import { Wrapper } from '$/components/wrapper'
import { Hero } from '$/components/hero'
import { TitleSection } from '$/sections/general/title'
import { ContentTabSection } from '$/sections/details/content-tab'
import { notFound } from 'next/navigation'
import { useRecoilState } from 'recoil'
import favoritesStore from '$/stores/favorites'

type DetailPageProps = {
  params: { name: string }
}

const DetailPage: FC<DetailPageProps> = ({ params }) => {

  const { name } = params
  const [isNotFound, setIsNotFound] = useState(false)
  const [favorites, setFavorites] = useRecoilState(favoritesStore)

  const { isLoading, data: pokemon } = useQuery<DetailPokemon, AxiosError>({
    enabled: true,
    queryKey: ['detailPokemons'],
    queryFn: async () => {
      return await queryData({
        payload: {
          query: DETAIL_POKEMON,
          variables: {
            name: name,
          }
        }
      })
    },
    retry: false,
    onError: (error) => {
      toast(error.message)
    },
    onSuccess: (data) => {
      if (data.species.length <= 0) {
        setIsNotFound(true)
      }
    }
  })

  type FavoriteProps = {
    status: boolean,
    id: number,
    name: string,
    types: any
  }

  const handleOnFavoriteClick = (args: FavoriteProps) => {

    const data: GetPokemon["pokemonts"][number] = {
      id: args.id,
      name: args.name,
      short_detail: [{ types: args.types }]
    };

    const findId = favorites.findIndex(item => item.id === args.id)
    if (findId !== -1) {
      setFavorites(favorites.filter((item) => item.id !== args.id))
      return;
    }
    setFavorites([...favorites, data])
    return;
  }

  const checkIsFavorite = (id: number) => {
    const findId = favorites.findIndex(item => item.id === id)
    return findId !== -1 ? false : true
  }


  if (isNotFound) return notFound()

  return (
    <Main>
      <Wrapper>
        <TitleSection breadcrumb={[{ title: 'Home' }, { title: name }]} title={<><strong>Pokemon</strong> Details</>} />
        <Hero
          avatar={getArtwork(pokemon?.species[0].id ?? 1)}
          name={pokemon?.species[0].name ?? ''}
          description={pokemon?.species[0].flavorText[0].flavorText ?? ''}
          types={pokemon ? [...pokemon.species[0].pokemons[0].types.map(({ type }) => type.name)] : []}
          intent={pokemon ? [...pokemon.species[0].pokemons[0].types.map(({ type }) => type.name)][0] : 'unknown'}
          isFavorite={checkIsFavorite(pokemon?.species[0].id ?? 1)}
          onFavoriteClick={(status) => handleOnFavoriteClick({ status, id: pokemon?.species[0].id ?? 1, name: pokemon?.species[0].name ?? '', types: pokemon?.species[0].pokemons[0].types })}
        />

        <ContentTabSection
          stats={pokemon?.species[0].pokemons[0].stats || []}
          species={pokemon?.species[0].evolutions.species || []}
        />

      </Wrapper>
    </Main>
  )
}

export default DetailPage
