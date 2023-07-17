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

  const handleMouseEnter = (event: Event) => {
    const element = event.target as HTMLElement
    element.querySelector(".img")?.classList.add("bg-size-oncursor");
  };

  const handleMouseLeave = (event: Event) => {
    const element = event.target as HTMLElement
    element.querySelector(".img")?.classList.remove("bg-size-oncursor");
  };

  useEffect(() => {
    setTimeout(() => {
      if (favorites.length > 0) return setRenderStatus("CONTENT")
      return setRenderStatus("NO_CONTENT")
    }, 500)
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  });

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
