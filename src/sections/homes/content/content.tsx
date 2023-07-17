import { ClassAttributes, FC, Fragment, LegacyRef, forwardRef } from "react"
import { Button } from "$/components/button"
import { Card } from "$/components/card"
import { GetPokemon } from "$/types"
import { getArtwork } from "$/utils"
import InfiniteScroll from "react-infinite-scroll-component"

type ContentSectionProps = {
  data: GetPokemon['pokemonts'],
  dataTotal: number,
  hasMore: boolean,
  isFilterOnNav: boolean,
  refProps: ClassAttributes<HTMLDivElement>['ref'] | LegacyRef<HTMLDivElement>,
  fetchNextPage: () => void,
  checkIsFavorite: (id: number) => boolean,
  onFavoriteClick: ({ status, data }: { status: boolean, data: ContentSectionProps['data'][number] }) => void,
}

const ContentSection: FC<ContentSectionProps> = forwardRef((props, ref) => {

  const {
    data,
    hasMore,
    isFilterOnNav,
    dataTotal,
    checkIsFavorite,
    onFavoriteClick,
    fetchNextPage,
  } = props

  const pokemonCards: JSX.Element[] = []

  data.map((v, i) => {
    const types = [...v.short_detail[0].types.map(({ type }) => type.name)]
    pokemonCards.push(
      <Card
        key={`card_${i}`}
        identity={v.id}
        name={v.name}
        avatar={getArtwork(v.id)}
        types={types}
        hasFavoriteBtn
        isFavorite={checkIsFavorite(v.id)}
        onFavoriteClick={(status) => onFavoriteClick({ status, data: v })}
        className="card"
      />
    )
  })

  return (
    <Fragment>
      <section>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<LoadingCardComponent />}
          scrollThreshold={0.97}
          endMessage={<EndDataComponent />}
        >
          <div className="max-w-5xl m-auto p-4 mt-6">
            <div className="flex justify-between" ref={ref}>
              <div>
                <h2 className="text-4xl font-normal">{dataTotal} <strong>Pokemons</strong> for you to choose your favorite</h2>
              </div>
              <div className="flex flex-1 justify-end">
                <Button intent="primary" dimension="small" className={isFilterOnNav ? 'hidden' : undefined}>Filter</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">{pokemonCards}</div>
          </div>
        </InfiniteScroll>
      </section>
    </Fragment >
  )
})

const LoadingCardComponent = () => {
  const skeleton: JSX.Element[] = [];

  [...new Array(3)].map((v, i) => {
    skeleton.push(<div className="h-[160px] flex relative rounded-lg border-x border-t border-t-[#F6F7F9] bg-[#e1e1e1] border-x-[#F6F7F9] shadow-lg" key={i} />)
  })

  return <div className="grid grid-cols-3 gap-8 mt-4 max-w-5xl m-auto px-4 mb-8 animate-pulse">{skeleton}</div>
}

const EndDataComponent = () => {
  return (
    <div className="h-10 mt-4 mb-12 m-auto max-w-5xl">
      <div className="bg-red-400 mx-4 rounded-lg p-4 text-right text-xl font-bold text-white">Yey, You have seen All Pokemon 🎉🎉</div>
    </div>
  )
}

export default ContentSection