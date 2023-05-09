/* eslint-disable no-lone-blocks */
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import { SpanContainer, ArticleTitle } from './article.styles'
import { ContainerDetails, InnerDiv1, Label, LabelText } from './details.styled'
import Order from './order-product.component'
function useComponentById (id) {
  {
    const items1 = useSelector(state => state.items1)
    console.log(items1.items1)
    return items1.items1.find(component => parseInt(component.sifArtID) === parseInt(id))
  }
}
function Details () {
  // const items1 = useSelector(state => state.items1);
  const navigate = useNavigate()
  const orderProduct = () => {
    navigate('/shop')
  }
  const { id } = useParams() // Parametri iz URL-a
  console.log(id)
  const component = useComponentById(id) // Funkcija za dohvatanje detalja

  return (

<div>
      <SpanContainer>
      <ContainerDetails>

      <InnerDiv1 >
      <IconButton onClick={orderProduct}>
  <KeyboardBackspace />
</IconButton>
         <ArticleTitle>

         {component.nazivGrupe}
         </ArticleTitle>
         <Label><LabelText>Kataloska oznaka: </LabelText> {component.kataloskaOznaka}</Label> <br/>
         <Label ><LabelText> Stanje: </LabelText> {}
         {component.stanje} </Label> <br/>
         <br/>
         <Label > <LabelText> Sifra: </LabelText> {}
         {component.sifArtID} </Label><br/>

         <Label > <LabelText> Proizvodjac: </LabelText> {}
         {component.proizvodjac} </Label><br/>

         <Label ><LabelText> Kategorija: </LabelText> {}
         {component.kategorija} </Label><br/>

         <Label > <LabelText> Cena: </LabelText> {}
         {component.cena} </Label><br/>

         <Label > <LabelText> Tezina: </LabelText> {}
         {component.tezina} </Label><br/>

         <Label > <LabelText> Bar-kod: </LabelText>: {}
         {component.barCode} </Label><br/>

      </InnerDiv1>
    <InnerDiv1>
    <Order/>
    </InnerDiv1>

  </ContainerDetails>

   </SpanContainer>

   </div>

  )
}

export default Details
