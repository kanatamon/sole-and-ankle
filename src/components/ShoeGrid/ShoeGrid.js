import React from 'react'
import styled from 'styled-components/macro'

import SHOES from '../../data'
import ShoeCard from '../ShoeCard'

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;

  & > * {
    flex: 0 1 344px;
  }
`

export default ShoeGrid
