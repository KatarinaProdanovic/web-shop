import React from 'react'
import { BaseButton } from './button.styles'
// eslint-disable-next-line react/prop-types
const Button = ({ children, buttonType, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>
}

export default Button
