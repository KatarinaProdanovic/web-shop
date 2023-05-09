import React from 'react'
import { InputField } from './form.styled'
// eslint-disable-next-line react/prop-types
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <InputField {...otherProps} />
</div>
  )
}

export default FormInput
