import React, { useState } from 'react'

// Components
import { Search } from '../search'
import { Checkbox } from '../checkbox'
import { Button } from '../button'

// Styles
import { FiltersContainer, Link } from './styles'

export function Filters({ defaultFilters, onSubmit }) {
  const [filters, setFilters] = useState(defaultFilters)
  return (
    <FiltersContainer>
      <Search
        value={filters.query}
        onChange={(e) => setFilters({ ...filters, query: e })}
      />
      <Checkbox
        label="Success"
        checked={filters.success}
        onChange={(e) => setFilters({ ...filters, success: e })}
      />
      <Checkbox
        label="Failure"
        checked={filters.failure}
        onChange={(e) => setFilters({ ...filters, failure: e })}
      />
      <Checkbox
        label="Future"
        checked={filters.future}
        onChange={(e) => setFilters({ ...filters, future: e })}
      />
      <Button style={{ marginTop: '10px' }} onClick={() => onSubmit(filters)}>
        FILTER
      </Button>

      <Link
        href="https://github.com/bugraaydingoz/spacex-launch-search"
        target="_blank"
      >
        <img src="./icons/github.svg" alt="github" />
      </Link>
    </FiltersContainer>
  )
}
