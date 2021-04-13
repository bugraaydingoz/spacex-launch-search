import React from 'react'

// Styles
import { Input } from './styles'

export function Search({ value, onChange }) {
  return (
    <Input
      type="text"
      placeholder="Search a launch"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
