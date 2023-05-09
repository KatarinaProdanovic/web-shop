import Category from './category.component'
import { TitleWrapper, Title } from './shop.styles'
import Article from './article.component'
import React from 'react'
import { useSelector } from 'react-redux'
const Shop = () => {
  const items1 = useSelector(state => state.items1)
  return (
    <div>
      <TitleWrapper>
      <Title>Dostupni artikli</Title>
    </TitleWrapper>
    <Category/>
    <Article components={items1.items1} />

   </div>
  )
}

export default Shop
