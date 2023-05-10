import { useEffect, useState, React } from 'react'
// import useHttp from '../../requests/useHttp'
import { SpanContainer, InnerDiv, Container, ArticleTitle } from './article.styles'
// import Button from '../../components/button/button.component'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateItems, updateItems1 } from '../../store/articles/articles.action'
import Button from '@mui/material/Button'
// eslint-disable-next-line react/prop-types
const Article = ({ components }) => {
  const [isChecked, setChe] = useState(false)
  const navigate = useNavigate()

  // const { sendRequest } = useHttp()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const items1 = useSelector(state => state.items1)
  useEffect(() => {
    const cachedItems = localStorage.getItem('articles1')
    if (isChecked === false) {
      if (cachedItems) {
        dispatch(updateItems(JSON.parse(cachedItems)))
        dispatch(updateItems1(JSON.parse(cachedItems)))
      } else {
        fetchItems()
      }
      /*
      fetch('/api/Artikli')
      .then((response) => response.json())
      .then((actualData) => {dispatch(updateItems(actualData)); dispatch(updateItems1(actualData))});

      setChe(true) */
    }
  }, [])

  async function fetchItems () {
    /* const requestConfig = {
      url: 'https://localhost:7157/api/articles/allArticles',
      method: 'GET',
      body: null,
      headers: {}
    } */
    // const data = await sendRequest(requestConfig)
    const mockData = [{
      barCode: '12212',
      category: null,
      categoryId: 1,
      cena: 159,
      id: 1,
      kataloskaOznaka: '123',
      kategorija: 'Kategorija1',
      nazivGrupe: 'Artikal1',
      proizvodjac: 'Neki1',
      sifArtID: '11',
      stanje: 3,
      tezina: 125
    }, {
      barCode: '54757',
      category: null,
      categoryId: 2,
      cena: 675,
      id: 3,
      kataloskaOznaka: '1234',
      kategorija: 'Kategorija2',
      nazivGrupe: 'Artikal2',
      proizvodjac: 'Neki2',
      sifArtID: '464',
      stanje: 4,
      tezina: 200
    }, {
      barCode: '4633',
      category: null,
      categoryId: 2,
      cena: 675,
      id: 3,
      kataloskaOznaka: '12345',
      kategorija: 'Kategorija2',
      nazivGrupe: 'Artikal3',
      proizvodjac: 'Neki3',
      sifArtID: '8678',
      stanje: 4,
      tezina: 200
    }]
    dispatch(updateItems(mockData))
    dispatch(updateItems1(mockData))
    localStorage.setItem('articles1', JSON.stringify(mockData))
    setChe(true)
  }

  if (items1.items1 !== undefined && items1.items1.length > 0 && items.items !== undefined && items.items.length > 0) {
    return (

          <SpanContainer>
         <Container id="my-componentt">
            {items.items.map(option => (

         <InnerDiv key = {option.sifArtID}>
            <ArticleTitle key={option.Id} value={option.nazivGrupe}>
            {option.nazivGrupe}
            </ArticleTitle>
            <h4 key={option.sifArtID} value={option.stanje}> Stanje: {}
                {option.stanje}

            </h4>
         <Button variant="contained" onClick={() => navigate(`/details/${parseInt(option.sifArtID)}`)}> Detalji </Button>

         </InnerDiv>

            ))}
     </Container>

      </SpanContainer>

    )
  }
}
export default Article
