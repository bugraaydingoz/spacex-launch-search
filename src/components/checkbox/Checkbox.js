import React from 'react'

// Styles
import { Container, Input, Checkmark } from './styles'

export function Checkbox({ checked, label, onChange }) {
  return (
    <Container>
      {label}
      <Input
        type="checkbox"
        onChange={() => onChange(!checked)}
        checked={checked}
      />
      <Checkmark checked={checked} />
    </Container>
  )
}
