import React from 'react'

// Styles
import { Button as StyledButton } from './styles'

export function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
