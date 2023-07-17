/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { GET_POKEMONS } from "$/queries"
import { CONSTANS } from "$/constans"
import { queryData } from "$/services"
import { GetPokemon } from "$/types"
import { LandingSection } from "$/sections/homes/landing"
import { ContentSection } from "$/sections/homes/content"
import { ModalFilter } from "$/sections/homes/modal-filter"
import { Main } from "$/components/main"
import { Container } from "$/components/container"
import favoritesStore from "$/stores/favorites"
import { toast } from 'react-toastify'

const MIN_SCROLL = 5
const NAV_HEIGHT = 80

let totalPokemon = 0

const HomePage = () => {

  const [pokemontList, setPokemontList] = useState<GetPokemon["pokemonts"]>([])
  const [hasMore, setHasMore] = useState(true)
  const [hasChecked, setHasChecked] = useState(false)
  const [isFilterOnNav, setIsFilterOnNav] = useState(false)
  const [favorites, setFavorites] = useRecoilState(favoritesStore)
  const divRef = useRef<HTMLDivElement>(null)

  type FavoriteProps = {
    status: boolean,
    data: GetPokemon["pokemonts"][number],
  }

  const handleOnFavoriteClick = (args: FavoriteProps) => {
    const findId = favorites.findIndex(item => item.id === args.data.id)
    if (findId !== -1) {
      setFavorites(favorites.filter((item) => item.id !== args.data.id))
      return
    }
    setFavorites([...favorites, { ...args.data, name: args.data.name }])
    return
  }

  const checkIsFavorite = (id: number) => {
    const findId = favorites.findIndex(item => item.id === id)
    return findId !== -1 ? false : true
  }

  const handleScroll = () => {
    const height = window.pageYOffset || document.documentElement.scrollTop
    if (height > MIN_SCROLL && !hasChecked) {
      const headerEl = document.querySelector(".header")
      headerEl?.classList.add("shadow-md", "animate-fadeIn")
      headerEl?.classList.remove("animate-fadeOut");
      setHasChecked(true)
    }
    if (height < MIN_SCROLL) {
      const headerEl = document.querySelector(".header");
      headerEl?.classList.add("animate-fadeOut");
      headerEl?.classList.remove("shadow-md", "animate-fadeIn");
      setHasChecked(false)
    }
    if (divRef.current) {
      const divElement = divRef.current;
      const elementRect = divElement.getBoundingClientRect();
      const elementTopOffset = elementRect.top;

      if (elementTopOffset <= NAV_HEIGHT) {
        setIsFilterOnNav(true)
      }
      if (elementTopOffset >= NAV_HEIGHT) {
        setIsFilterOnNav(false)
      }
    }
  }

  const handleMouseEnter = (event: Event) => {
    const element = event.target as HTMLElement
    element.querySelector(".img")?.classList.add("bg-size-oncursor");
  };

  const handleMouseLeave = (event: Event) => {
    const element = event.target as HTMLElement
    element.querySelector(".img")?.classList.remove("bg-size-oncursor");
  };

  const { fetchNextPage, data: pokemons } = useInfiniteQuery<GetPokemon, AxiosError>({
    queryKey: ["getPokemons"],
    enabled: true,
    queryFn: async ({ pageParam }) => {
      return await queryData({
        payload: {
          query: GET_POKEMONS,
          variables: {
            offset: pageParam,
            limit: CONSTANS.PAGE_SIZE
          }
        }
      })
    },
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length * CONSTANS.PAGE_SIZE
      return nextPage;
    },
    retry: false,
    onError: (error) => {
      toast(error.message)
    },
  })

  useEffect(() => {
    if (pokemons) {
      totalPokemon = pokemons.pages[0].pokemon_aggregate.aggregate.count
      setPokemontList((oldValue) => [...oldValue, ...pokemons.pages[pokemons.pages.length - 1].pokemonts])

      if (pokemontList.length >= totalPokemon) {
        setHasMore(false)
        return
      }
      setHasMore(true)
    }
  }, [pokemons])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    }
  })

  return (
    <Container>
      <LandingSection
        isShowFilter={isFilterOnNav}
        onFilterClick={() => null}
      />
      <Main>
        <ContentSection
          checkIsFavorite={checkIsFavorite}
          data={pokemontList}
          dataTotal={pokemontList.length}
          fetchNextPage={fetchNextPage}
          onFavoriteClick={handleOnFavoriteClick}
          hasMore={hasMore}
          isFilterOnNav={isFilterOnNav}
          ref={divRef}
        />
        <ModalFilter />
      </Main>
    </Container >
  )
}

export default HomePage
