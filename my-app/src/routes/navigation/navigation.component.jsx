import { useState, useEffect, React } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setLogged } from '../../store/users/users.action'
// import Container from '@mui/material/Container'
// import { Box } from '@mui/material/Box'
import {
  NavLink

} from './navigation.styles'

const Navigation = () => {
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const [logg, setLogg] = useState(true)
  // const dispatch = useDispatch();
  // kad ima as to je samo dugme, nista se ne desi na promenu
  // ako ima to onda je stranica
  const dispatch = useDispatch()
  const handleClick = (event) => {
    event.preventDefault()

    dispatch(setLogged(false))
    localStorage.setItem('logged', false)
    setLogg(localStorage.getItem('logged'))
    navigate('/')
  // ovde dodajte kod za izvršavanje željene akcije
  }
  useEffect(() => {
    const data = localStorage.getItem('logged')
    if (!data) {
      localStorage.setItem('logged', false)
    }
    setLogg(localStorage.getItem('logged'))
  }, [logg, handleClick])

  return (
    <Grid container justifyContent="center">
    <Box sx={{
      pb: 2,
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      typography: 'body1',
      '& > :not(style) + :not(style)': {
        ml: 2,
        mt: 1 // razmak izmedju elemenata u box elementu
      }
    }}>
      <Grid item xs={12} sm={4} md={3}> {/* postavljanje medija upita */}
        <NavLink to='/' id="my-component">
          Pocetna stranica
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={4} md={3}> {/* postavljanje medija upita */}
        <NavLink to='/shop' id="my-component1">
          Prodavnica
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={4} md={3}> {/* postavljanje medija upita */}
        {(logg === 'false') && (
          <NavLink to='/login' id="my-component2">
            Uloguj se
          </NavLink>
        ) }
        {(logg === 'true') && (
          <NavLink onClick={handleClick}>
            Izloguj se
          </NavLink>
        )}
      </Grid>
    </Box>
  </Grid>
  )
}

export default Navigation
