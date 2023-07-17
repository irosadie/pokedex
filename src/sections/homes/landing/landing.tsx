import { Button } from "$/components/button"
import { PokemonBall, PokemonHero, PokemonLogo } from "$/components/illustrations"
import { Navbar } from "$/components/navbar"
import { FC, Fragment } from "react"
import { CONSTANS } from "$/constans"


type LandingSectionProps = {
  isShowFilter: boolean
  onFilterClick: () => void
}

const LandingSection: FC<LandingSectionProps> = ({ isShowFilter, onFilterClick }) => {

  return (
    <Fragment>
      <section className="h-screen bg-gradient-to-t from-[#F2B807] to-[#F5DB13]">
        <Navbar
          logo={<PokemonLogo />}
          isShowFilter={isShowFilter}
          onFilterClick={onFilterClick}
          menu={CONSTANS.MENUS}
          className="header animate-fadeOut"
        />
        <div className="flex max-w-5xl m-auto">
          <div className="w-1/2 h-[100vh] flex flex-col justify-center space-y-[64px] px-4">
            <h1 className="text-7xl"><strong>Find</strong> All Your Favorite <strong>Pokemon</strong></h1>
            <p className="text-3xl font-normal">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <Button intent="primary" dimension="bigger" shadow>See Pokemon</Button>
            <span className="absolute bottom-4">Created with ❤️ by <strong>Imron Rosadi</strong> | Thankyou xxx for asset and inspiration</span>
          </div>
          <div className="w-1/2 pt-24 relative">
            <div className="scale-90 absolute -left-10">
              <PokemonHero />
            </div>
            <div className="absolute -right-[208px] top-28 scale-90 animate-bounce">
              <PokemonBall />
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  )
}

export default LandingSection