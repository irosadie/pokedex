import React, { FC, useState } from 'react'
import { getArtwork } from '$/utils'
import { DetailPokemon } from '$/types'
import { Card } from '$/components/card'

type ContentTabSection = {
  stats: DetailPokemon['species'][0]['pokemons'][0]['stats'],
  species: DetailPokemon['species'][0]['evolutions']['species']
}

const ContentTabSection: FC<ContentTabSection> = (props) => {

  const { stats, species } = props

  const [tabActive, setTabActive] = useState<'statistic' | 'evolution'>('statistic')

  return (
    <section>
      <div className='pt-6'>
        <div className='h-fit bg-gradient-to-br from-slate-100 to-white rounded-lg pb-12'>
          <div className='px-7'>
            <ul className='flex text-xl font-bold space-x-8'>
              <li onClick={() => setTabActive('statistic')} className={tabActive === 'statistic' ? 'border-b-4 border-gray-400 py-5 pb-3 cursor-pointer' : 'py-5 pb-3 cursor-pointer'}>Statistik</li>
              <li onClick={() => setTabActive('evolution')} className={tabActive === 'evolution' ? 'border-b-4 border-gray-400 py-5 pb-3 cursor-pointer' : 'py-5 pb-3 cursor-pointer'}>Evolution</li>
            </ul>
          </div>
          <div className='px-7 border-t-2 border-gray-200 -mt-0.5 min-h-[300px]'>
            {{
              'statistic': <Statistic data={stats} />,
              'evolution': <Evolution data={species} />,
            }[tabActive]}
          </div>
        </div>
      </div>
    </section>
  )
}

type StatisticProps = {
  data?: DetailPokemon['species'][number]['pokemons'][number]['stats']
}

const Statistic: FC<StatisticProps> = ({ data = [] }) => {

  const statistics: JSX.Element[] = []

  data.map((val, index) => {
    statistics.push(
      <li key={`statistic_${index}`} className='space-y-1'>
        <label className='font-bold'>{val.stat.statName[0].name}</label>
        <div>
          <div className="w-full bg-poke-fire-smooth rounded-lg">
            <div className={val.baseStat > 100 ? "bg-poke-fighting text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-lg" : "bg-poke-fire text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-lg"} style={{ width: `${val.baseStat > 100 ? 100 : val.baseStat}%` }}> {val.baseStat}%</div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className='mt-8'>
      <ul className='space-y-4 text-main-black'>{statistics}</ul>
    </div>
  )
}

type EvolutionProps = {
  data?: DetailPokemon['species'][number]['evolutions']['species']
}

const Evolution: FC<EvolutionProps> = ({ data = [] }) => {

  const evolutions: JSX.Element[] = []

  data.map((val, index) => {
    evolutions.push(
      <Card name={val.name} identity={val.id} avatar={getArtwork(val.id)} types={[...val.pokemons[0].types.map(v => v.type.name)]} />
    )
  })

  return (<div className='grid grid-cols-2 gap-8 my-8'>{evolutions}</div>)
}

export default ContentTabSection
