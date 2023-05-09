import styled from 'styled-components'

export const FormContainer = styled.form`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 600px;
  margin: 0 auto;

`

export const FormContainer1 = styled.form`

  
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  justify-content: flex-end;

`

// stil za input polja
export const InputField = styled.input`
padding: 5px; border: 1px solid #ccc;
border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5px #00bfff;
  }
`

export const SubmitButton = styled.button`
min-width: 80px;
width: 205px;
height: 35px;
letter-spacing: 0.5px;
line-height: 40px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: #00bfff;
color: black;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: #919191;
  color: white;
  border: 1px solid black;
`

export const FormInputLabel = styled.label`
  
font-size: 16px;
margin-bottom: 8px;
 
`
export const FormRow = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
width: calc(50% - 5px);

@media (max-width: 768px) {
  width: 100%;
}
`
