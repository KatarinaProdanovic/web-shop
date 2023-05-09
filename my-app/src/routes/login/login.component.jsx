
import FormInput from '../../components/forms/form.component'
import { FormRow, FormInputLabel, FormContainer1 } from '../../components/forms/form.styled'
import { useState, React } from 'react'
// import useHttp from '../../requests/useHttp'
import { TitleOrders, SpanForForm } from '../shop/details.styled'
import { setLogged, setToken, setUser } from '../../store/users/users.action'

import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CenteredContent, CenteredDiv } from './login.styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const defaultFormFields = {
  email: '',
  password: ''
}

function LoginPage () {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  // const { sendRequest } = useHttp()
  const dispatch = useDispatch()

  const resetFormFields = () => { // da isprazni vrednosti iz forme na prikazu
    setFormFields(defaultFormFields)
  }
  async function submitHandler (event) {
    event.preventDefault()
    try {
    // lazno logovanje
      if (process.env.STORYBOOK === 'true') {
        if (formFields.email === 'katarina.prodanovic20@gmail.com' && formFields.password === '123') {
          const mockData = {
            success: true,
            token: 'fakeToken',
            user: {
              id: 123,
              name: 'John Doe',
              email: 'johndoe@example.com'
            }
          }
          dispatch(setToken(mockData.token))
          dispatch(setUser(mockData.user))
          dispatch(setLogged(true))
          alert(user.user)
          toast.success('uspesno ste se ulogovali', {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        } else {
          const mockData = {
            success: false,
            token: null,
            user: {
            }
          }
          dispatch(setToken(mockData.token))
          dispatch(setUser(mockData.user))
          dispatch(setLogged(false))
          toast.error('pokusajte ponovo', {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }
      } else {
        /* const requestConfig = {
          url: 'https://localhost:7157/api/login/loginUser',
          method: 'POST',
          body: JSON.stringify({
            Email: formFields.email,
            Password: formFields.password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        } */

        resetFormFields()
        const data = { email: 'kaca@gmail.com', id: 1, password: '1234', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODM2NjYxNjcsImlzcyI6IidodHRwczovL2xvY2FsaG9zdDo3MTU3In0.H45p' }
        // const data = await sendRequest(requestConfig)
        console.log(data)
        // ovde cu slati post zahtev

        dispatch(setToken(data.token))
        // console.log(data)
        if (data !== null) {
          dispatch(setUser(data))

          localStorage.setItem('logged', true)
          dispatch(setLogged(true))
          navigate('/')
        }
      }
    } catch (error) {
      console.log('failed', error)
      toast.warning('Uneli ste neispravne podatke! Pokusajte ponovo', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  };
  const handleChange = (event) => { // ovde ce da cuva unete vrednosti za svako polje
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (

      <CenteredDiv >
        <CenteredContent id = "my-componentt">
       <SpanForForm>
       <TitleOrders>Ulogujte se</TitleOrders><br/><br/>

      <FormContainer1 onSubmit={submitHandler}>
      <FormRow>
      <FormInputLabel>Email</FormInputLabel>
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />
      </FormRow>
      <FormRow>
       <FormInputLabel>Lozinka</FormInputLabel>
      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
        </FormRow>
        <Button variant="contained"

          type='submit'>Uloguj se

         </Button>
     </FormContainer1>
     <ToastContainer />

    </SpanForForm>
    </CenteredContent>
    </CenteredDiv>

  )
}

export default LoginPage
