"use client"
import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { ContentSection } from "$/sections/favorites/content"
import { Main } from "$/components/main"
import { TitleSection } from "$/sections/general/title"
import { Wrapper } from "$/components/wrapper"
import favoritesStore from "$/stores/favorites"

const BREADCRUMB = [{ title: "Home" }, { title: "Favorites" }]

const FavoritePage = () => {

  const [favorites] = useRecoilState(favoritesStore)
  const [renderStatus, setRenderStatus] = useState<Exclude<RenderStatusProps, "NET_ERROR">>("LOADING")

  useEffect(() => {
    setTimeout(() => {
      if (favorites.length > 0) return setRenderStatus("CONTENT")
      return setRenderStatus("NO_CONTENT")
    }, 500)
  }, [])

  return (
    <Main>
      <Wrapper>
        <TitleSection breadcrumb={BREADCRUMB} title={<><strong>Pokemon</strong> Favorites</>} />
        <ContentSection
          data={favorites}
          renderStatus={renderStatus}
        />
      </Wrapper>
    </Main>
  )
}

export default FavoritePage
