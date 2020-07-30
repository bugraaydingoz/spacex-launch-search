import React from 'react'

// Styles
import { LaunchListContainer, Heading5 } from './styles'

export function LaunchList({ children, loading, length }) {
  const text = loading ? 'Fetching launches' : `${length} launches found`
  return (
    <LaunchListContainer>
      <Heading5>{text}</Heading5>
      {children}
    </LaunchListContainer>
  )
}
