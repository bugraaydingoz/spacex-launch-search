import React from 'react'

// Styles
import { StatusContainer } from './styles'

export function Status({ type }) {
  return <StatusContainer type={type}>{type.toUpperCase()}</StatusContainer>
}
