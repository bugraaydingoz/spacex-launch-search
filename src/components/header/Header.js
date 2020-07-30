import React from 'react'

// Styles
import { HeaderContainer, Heading1, Heading2 } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Heading1>SpaceX Monitoring</Heading1>
      <Heading2>
        An application that lists all SpaceX launches and launch details.
      </Heading2>
    </HeaderContainer>
  )
}
