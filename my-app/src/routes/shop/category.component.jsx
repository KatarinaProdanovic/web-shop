import { useEffect, useState, React } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// import { ComboBoxWrapper } from './category.styles'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, updateItems } from '../../store/articles/articles.action'
// import useHttp from '../../requests/useHttp'
const Category = () => {
  const [data1, setData1] = useState([])

  const dispatch = useDispatch()
  // const { sendRequest } = useHttp()
  const items1 = useSelector(state => state.items1)

  const selectedCategory = useSelector(state => state.selectedCategory)
  useEffect(() => {
    const cachedItems1 = localStorage.getItem('categories')
    if (cachedItems1) {
      setData1(JSON.parse(cachedItems1))
    } else {
      fetchItems()
    }
  }, [])

  async function fetchItems () {
    /* fetch('/api/Kategorije')
      .then((response) => response.json())
      .then((actualData) => { setData1(actualData); localStorage.setItem('categories', JSON.stringify(actualData)) }) */
    /* const requestConfig = {
      url: 'https://localhost:7157/api/categories/allCategories',
      method: 'GET',
      body: null,
      headers: {}
    } */
    //  const data = await sendRequest(requestConfig)
    // console.log(data)
    //  setData1(data)
    const mockData = [{ id: 1, name: 'Kategorija1', articles: null },
      { id: 2, name: 'Kategorija2', articles: null },

      { id: 3, name: 'Kategorija3', articles: null },

      { id: 4, name: 'Kategorija4', articles: null }]
    localStorage.setItem('categories', JSON.stringify(mockData))
    setData1(mockData)
  }
  const handleChange = (event) => {
    dispatch(setCategory(event.target.value))

    const countryToSearch = event.target.value
    const br = Number(countryToSearch)

    if (countryToSearch === '-1') {
      dispatch(updateItems(items1.items1))
    } else {
      console.log(items1.items1)
      const filteredItems = items1.items1.filter((item) => item.categoryId === br)

      dispatch(updateItems(filteredItems))
    }
  }
  if (data1 !== undefined && data1.length > 0) {
    return (
    /*
          <ComboBoxWrapper>
           <Select value={selectedCategory.selectedCategory} onChange={handleChange}>
           <option value= '-1'> Odaberite kategoriju </option>
           {data1.map((option, index) => (
             <option key={index} value={option.id}>
               {option.name}
             </option>
           ))}
         </Select>
         </ComboBoxWrapper>
         */
         <Box sx={{ minWidth: 200 }}>
         <FormControl size='20px'>
           <InputLabel id="demo-simple-select-label">Kategorija</InputLabel>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={selectedCategory.selectedCategory}
             label="Odaberite kategoriju"
             onChange={handleChange}
           >
            <MenuItem value="-1"><em>Sve kategorije</em></MenuItem>
            {data1.map((option, index) => (
              <MenuItem key = {index} value={option.id}>{option.name}</MenuItem>
            ))}
            </Select>
         </FormControl>
       </Box>

    )
  }
}

export default Category
