import React from 'react'
import { BaseButton } from './button.styles'
// eslint-disable-next-line react/prop-types
const Button = ({ children, buttonType, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>
}

export default Button
// https://dev.to/carloscne/creating-responsive-and-adaptive-layouts-with-react-and-styled-components-1ghi
// https://www.youtube.com/watch?v=53i9EHsJGxw
// https://mui.com/material-ui/react-list/
