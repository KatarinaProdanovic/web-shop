import FormInput from '../../components/forms/form.component'
import { FormContainer, FormRow, FormInputLabel, FormContainer1 } from '../../components/forms/form.styled'
import { useState, React } from 'react'
import { SpanForForm, TitleOrders } from './details.styled'
import useHttp from '../../requests/useHttp'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const defaultFormFields = {
  name: '',
  surname: '',
  email: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  phoneNumber: '',
  quantity: ''
}

function requestOrders (quantity, productCode, UserId, LoggedUserId) {
  const requestConfigForExternalOrders = {
    url: 'https://localhost:7157/api/orders/addOrder',
    method: 'POST',
    body: JSON.stringify({
      Quantity: parseFloat(quantity),
      ProductCode: productCode,
      UserId,
      LoggedUserId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return requestConfigForExternalOrders
}
function Order () {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, surname, email, address, city, country, postalCode, phoneNumber, quantity } = formFields
  const { sendRequest } = useHttp()

  const { id } = useParams() // Parametri iz URL-a
  const user = useSelector(state => state.user)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  async function submitHandlerExternalUser (event) {
    event.preventDefault()
    try {
      const requestConfigForExternalUser = {
        url: 'https://localhost:7157/api/users/addUser',
        method: 'POST',
        body: JSON.stringify({
          Name: formFields.name,
          Surname: formFields.surname,
          Email: formFields.email,
          Address: formFields.address,
          City: formFields.city,
          Country: formFields.country,
          PostalCode: formFields.postalCode,
          PhoneNumber: formFields.phoneNumber
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      resetFormFields()
      const dataExternalUser = await sendRequest(requestConfigForExternalUser)

      const requestConfigForExternalOrders = requestOrders(formFields.quantity, id, dataExternalUser.result.id, null)
      const dataExternalOrder = await sendRequest(requestConfigForExternalOrders)
      if (dataExternalOrder !== null) {
        toast.success('Vasa porudzbina je evidentirana...', {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (error) {
      console.log('failed', error)
    }
  };

  async function submitHandlerLoggedUser (event) {
    event.preventDefault()
    try {
      resetFormFields()
      const requestConfigForLoggedUser = requestOrders(formFields.quantity, id, null, user.user.id)
      const dataLoggedUser = await sendRequest(requestConfigForLoggedUser)

      if (dataLoggedUser !== null) {
        toast.success('Vasa porudzbina je evidentirana...', {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (error) {
      console.log('failed', error)
    }
  };
  const handleChange = (event) => { // ovde ce da cuva unete vrednosti za svako polje
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
      <SpanForForm>
         <TitleOrders>Poruci proizvod</TitleOrders><br/><br/>
        {(localStorage.getItem('logged') === 'false') && (
        <FormContainer onSubmit={submitHandlerExternalUser}>
        <FormRow>
        <FormInputLabel>Ime</FormInputLabel>
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Prezime</FormInputLabel>
        <FormInput
          label='Surname'
          type='text'
          required
          onChange={handleChange}
          name='surname'
          value={surname}
        />
        </FormRow>
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
        <FormInputLabel>Adresa</FormInputLabel>
         <FormInput
          label='Address'
          type='text'
          required
          onChange={handleChange}
          name='address'
          value={address}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Grad</FormInputLabel>
         <FormInput
          label='City'
          type='text'
          required
          onChange={handleChange}
          name='city'
          value={city}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Drzava</FormInputLabel>
         <FormInput
          label='Country'
          type='text'
          required
          onChange={handleChange}
          name='country'
          value={country}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Postanski kod</FormInputLabel>
        <FormInput
          label='PostalCode'
          type='text'
          required
          onChange={handleChange}
          name='postalCode'
          value={postalCode}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Broj telefona</FormInputLabel>
         <FormInput
          label='PhoneNumber'
          type='text'
          required
          onChange={handleChange}
          name='phoneNumber'
          value={phoneNumber}
        />
        </FormRow>
        <FormRow>
         <FormInputLabel>Kolicina</FormInputLabel>
          <FormInput
          label='Quantity'
          type='number'
          required
          onChange={handleChange}
          name='quantity'
          value={quantity}
        />
          </FormRow>
           <Button variant="contained" type='submit'>Posalji</Button>
     </FormContainer>
        )}
      {(localStorage.getItem('logged') === 'true') && (
        <FormContainer1 onSubmit={submitHandlerLoggedUser}>
        <FormRow>
         <FormInputLabel>Kolicina</FormInputLabel>
          <FormInput
          label='Quantity'
          type='number'
          required
          onChange={handleChange}
          name='quantity'
          value={quantity}
        />
          </FormRow>
        <Button variant="contained" type='submit'>Posalji</Button>

       </FormContainer1>
      )}
     <ToastContainer />
   </SpanForForm>
  )
}
export default Order
