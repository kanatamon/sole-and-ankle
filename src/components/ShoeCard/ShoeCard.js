import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS } from '../../constants'
import { formatPrice, pluralize, isNewShoe } from '../../utils'
import Spacer from '../Spacer'

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  let FlagComponent = null
  if (variant === 'on-sale') {
    FlagComponent = <SaleFlag>Sale</SaleFlag>
  } else if (variant === 'new-release') {
    FlagComponent = <NewReleasedFlag>Just Released!</NewReleasedFlag>
  }

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {FlagComponent}
          <Image alt='' src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price isSale={variant === 'on-sale'}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' && (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          )}
        </Row>
      </Wrapper>
    </Link>
  )
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Wrapper = styled.article``

const ImageWrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0px 0px;
`

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`

const Price = styled.span`
  text-decoration: ${(p) => (p.isSale ? 'line-through' : 'none')};
  color: ${(p) => (p.isSale ? COLORS.gray[700] : COLORS.gray[900])};
`

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`

const Flag = styled.span`
  position: absolute;
  top: 12px;
  right: -4px;
  color: ${COLORS.white};
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.bold};
  border-radius: 2px;
  padding: 8px;
`

const NewReleasedFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`

export default ShoeCard
