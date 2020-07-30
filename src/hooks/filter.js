import { useState } from 'react'

function filterByText(q, launch) {
  const { name, details } = launch
  const textFields = [name?.toLowerCase(), details?.toLowerCase()]
  return !textFields.some((t) => t?.includes(q.toLowerCase()))
}

export function useFilters(launches = [], defaultFilters) {
  const [filters, setFilters] = useState(defaultFilters)
  const { query, success, failure, future } = filters

  const filteredLaunches = launches.filter((launch) => {
    if (query && filterByText(query, launch)) {
      return false
    }

    const predicates = []
    if (success) {
      predicates.push(launch.success === true)
    }

    if (failure) {
      predicates.push(launch.success === false)
    }

    if (future) {
      predicates.push(launch.upcoming === true)
    }

    return predicates.length > 0 ? predicates.some((el) => el) : false
  })

  return { setFilters, filteredLaunches }
}
