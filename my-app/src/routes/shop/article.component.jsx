import { useEffect, useState, React } from 'react'
import useHttp from '../../requests/useHttp'
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

  const { sendRequest } = useHttp()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const items1 = useSelector(state => state.items1)
  useEffect(() => {
    const cachedItems = localStorage.getItem('articles1')
    // const json = JSON.parse(cachedItems)
    // console.log(json[0].id)
    // console.log(items1)
    // const niz = cachedItems.split('{')
    // fetchItems()
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
    const requestConfig = {
      url: 'https://localhost:7157/api/articles/allArticles',
      method: 'GET',
      body: null,
      headers: {}
    }
    const data = await sendRequest(requestConfig)
    dispatch(updateItems(data))
    dispatch(updateItems1(data))
    localStorage.setItem('articles1', JSON.stringify(data))
    setChe(true)
    // console.log(data.length)
  }
  console.log('evo ih nizovi')

  if (items1.items1 !== undefined && items1.items1.length > 0 && items.items !== undefined && items.items.length > 0) {
    return (

          <SpanContainer>
         <Container>
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
