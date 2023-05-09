import { useEffect, useState, React } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// import { ComboBoxWrapper } from './category.styles'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, updateItems } from '../../store/articles/articles.action'
import useHttp from '../../requests/useHttp'
const Category = () => {
  const [data1, setData1] = useState([])

  const dispatch = useDispatch()
  const { sendRequest } = useHttp()
  const items1 = useSelector(state => state.items1) // items sam azurirala u article komponenti,

  const selectedCategory = useSelector(state => state.selectedCategory)
  useEffect(() => {
    const cachedItems1 = localStorage.getItem('categories')
    // vconsole.log(cachedItems1)
    fetchItems()
    if (cachedItems1) {
      setData1(JSON.parse(cachedItems1))
    } else {
      fetchItems()
    }
    /*
       if(isChecked === false){
        fetch('/api/Kategorije')
        .then((response) => response.json())
        .then((actualData) => setData1(actualData));
        setChe(true)
          } */
  }, [])

  async function fetchItems () {
    /* fetch('/api/Kategorije')
      .then((response) => response.json())
      .then((actualData) => { setData1(actualData); localStorage.setItem('categories', JSON.stringify(actualData)) }) */
    const requestConfig = {
      url: 'https://localhost:7157/api/categories/allCategories',
      method: 'GET',
      body: null,
      headers: {}
    }
    const data = await sendRequest(requestConfig)
    console.log(data)
    setData1(data)
    localStorage.setItem('categories', JSON.stringify(data))
  }
  const handleChange = (event) => {
    dispatch(setCategory(event.target.value)) // tek kad izadje iz te fje azurirace stanja ta

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
         <FormControl size='18px'>
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
