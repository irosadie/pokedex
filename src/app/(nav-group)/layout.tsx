'use client'
import React, { FC, ReactNode } from 'react'
import { PokemonLogo } from '$/components/illustrations'
import { Navbar } from '$/components/navbar'
import { CONSTANS } from '$/constans'
import { Container } from '$/components/container'

type NavGroupLayoutProps = {
  children: ReactNode
}

const NavGroupLayout: FC<NavGroupLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar
        logo={<PokemonLogo />}
        menu={CONSTANS.MENUS}
        className='header animate-fadeIn shadow-md'
      />
      {children}
    </Container >
  )
}

export default NavGroupLayout
