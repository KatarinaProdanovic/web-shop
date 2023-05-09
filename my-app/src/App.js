import { React } from 'react'
import Shop from './routes/shop/shop.component'
import Details from './routes/shop/details.component'
import { Routes, Route } from 'react-router-dom'
// import MainHeader from './routes/navigation/main.component'
// import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import LoginPage from './routes/login/login.component'
import { Grid } from '@mui/material'
import DrawerAppBar from './routes/navigation/nav.component'
const App = () => {
  // const dispatch = useDispatch();

  const is = localStorage.getItem('logged')
  if (!is) {
    localStorage.setItem('logged', false)
  }
  console.log(is)
  const is1 = localStorage.getItem('logged')

  return (
    <Grid container spacing={6}>
       <Grid item xs={12} sm={12} md={12}> {/* postavljanje medija upita */}
       <DrawerAppBar/>
      </Grid>
      <Grid item xs={12} sm={12} md={12}> {/* postavljanje medija upita */}
      <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/shop' element={<Shop />}/>
     <Route path="/details/:id" element={<Details />} />
     <Route path="/login" element={ (is1 === 'false') ? <LoginPage /> : <Home/>} />

    </Routes>
      </Grid>
   </Grid>
  )
}

export default App
