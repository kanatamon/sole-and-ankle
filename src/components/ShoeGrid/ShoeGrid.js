import React from 'react'
import styled from 'styled-components/macro'

import SHOES from '../../data'
import ShoeCard from '../ShoeCard'

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* With modern solution we can use gap, but there is a alternative solution
  using position margin on the child and negative margin on this wrapper, which
  resulting the same visual */
  gap: 32px;
  /* margin: -16px; */
`
const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;

  /* margin: 16px; */
`

export default ShoeGrid
