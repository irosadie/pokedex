import React, { FC } from "react"
import { getArtwork } from "$/utils"
import { Card } from "$/components/card"
import { GetPokemon } from "$/types"

type ContentSectionProps = {
  data: GetPokemon["pokemonts"]
  renderStatus: Exclude<RenderStatusProps, "NET_ERROR">
}

const ContentSection: FC<ContentSectionProps> = (props) => {

  const { data, renderStatus } = props

  const pokemonCards: JSX.Element[] = []

  data.map((value, index) => {
    const types2 = [...value.short_detail[0].types.map(({ type }) => type)]
    pokemonCards.push(
      <Card
        key={`card_${index}`}
        identity={value.id}
        name={value.name}
        avatar={getArtwork(value.id)}
        types={[]}
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

  return <div className="grid grid-cols-3 gap-8 mt-4 max-w-5xl m-auto px-4 mb-8 animate-pulse">{skeleton}</div>
}

const NoContent = () => {
  return (
    <div>no favorite</div>
  )
}

export default ContentSection
