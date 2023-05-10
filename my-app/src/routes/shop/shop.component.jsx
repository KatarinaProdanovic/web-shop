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
        <div>
      <Title>Dostupni artikli</Title>
      <Category/>
      </div>
    </TitleWrapper>
    <Article components={items1.items1}/>
   </div>
  )
}

export default Shop
