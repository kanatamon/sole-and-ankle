import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Side />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};
  height: 72px;
  display: flex;

  /*
  This make logo text and list of categories positioned on the same baseline.
   */
  align-items: baseline;

  /*
  The vertical padding make both logo-text and list of categories vertically
  positioned aling center manually, in this case we know exactly what content
  to be rendered(height & width). So instead of perfect alignment using
  more complicated solution eg.
  - adding another flex-container to wrap this component with align-items: center
  - and etc...
  With this solution, mannually set the vertical padding is more make sense
   */
  padding: 18px 32px;
`

const Nav = styled.nav`
  --gap-size: 48px;
  display: flex;
  gap: var(--gap-size);
  margin: 0 var(--gap-size);
  flex: 1;
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
