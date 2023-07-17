import React, { FC } from "react"
import { getArtwork } from "$/utils"
import { Card } from "$/components/card"
import { GetPokemon } from "$/types"
import { PokemonHero } from "$/components/illustrations"
import { Button } from "$/components/button"
import Link from "next/link"

type ContentSectionProps = {
  data: GetPokemon["pokemonts"]
  renderStatus: Exclude<RenderStatusProps, "NET_ERROR">
}

const ContentSection: FC<ContentSectionProps> = (props) => {

  const { data, renderStatus } = props

  const pokemonCards: JSX.Element[] = []

  data.map((value, index) => {
    const types = [...value.short_detail[0].types.map(({ type }) => type.name)]
    pokemonCards.push(
      <Card
        key={`card_${index}`}
        identity={value.id}
        name={value.name}
        avatar={getArtwork(value.id)}
        types={types}
        className="card"
      />
    )
  })

  return (
    <section>
      {{
        "LOADING": <LoadingCard />,
        "NO_CONTENT": <NoContent />,
        "CONTENT": <div className="grid grid-cols-3 gap-8 mt-5">{pokemonCards}</div>,
      }[renderStatus]}
    </section>
  )
}

const LoadingCard = () => {
  const skeleton: JSX.Element[] = [];

  [...new Array(3)].map((v, i) => {
    skeleton.push(<div className="h-[160px] flex relative rounded-lg border-x border-t border-t-[#F6F7F9] bg-[#e1e1e1] border-x-[#F6F7F9] shadow-lg" key={i} />)
  })

  return <div className="grid grid-cols-3 gap-8 mt-4 max-w-5xl m-auto px-2 mb-8 animate-pulse">{skeleton}</div>
}

const NoContent = () => {
  return (
    <div className="w-full h-[50vh] bg-gradient-to-bl from-poke-electric to-white rounded-lg p-12 relative">
      <div className="scale-[0.5] absolute -bottom-[120px] -left-14">
        <PokemonHero />
      </div>
      <div className="absolute right-[180px] top-28 max-w-[340px] text-left">
        <h3 className="text-4xl text-white font-extrabold">You don't have any favorites list yet</h3>
        <Link href="/"><Button intent="primary" dimension="small" shadow className="mt-6">Go Home</Button></Link>
      </div>
    </div>
  )
}

export default ContentSection
