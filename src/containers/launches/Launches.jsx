import React from 'react'
import { useQuery } from 'react-query'

// Components
import { Filters } from '../../components/filters'
import { Launch, LaunchList, LaunchLoading } from '../../components/launch'

// Styles
import { LaunchesContainer } from './styles'

// Hooks
import { useFilters } from '../../hooks/filter'

// Show all launches by default
const defaultFilters = {
  query: '',
  success: true,
  failure: true,
  future: true,
}

export function Launches() {
  const { isLoading, error, data: launches } = useQuery('launches', () =>
    fetch('https://api.spacexdata.com/v4/launches').then((res) => res.json())
  )

  const { data: rockets } = useQuery('rockets', () =>
    fetch('https://api.spacexdata.com/v4/rockets').then((res) => res.json())
  )

  if (error) {
    console.error('An error has occurred: ' + error.message)
  }

  const { setFilters, filteredLaunches } = useFilters(launches, defaultFilters)
  const showLaunches = !isLoading && launches.length > 0

  function rocketName(id) {
    const rocket = rockets?.find((r) => r.id === id)
    if (rocket) {
      return rocket.name
    }
    return ''
  }

  return (
    <LaunchesContainer>
      <Filters
        defaultFilters={defaultFilters}
        onSubmit={(e) => setFilters(e)}
      />
      <LaunchList length={filteredLaunches?.length} loading={isLoading}>
        {/* Show loading data */}
        {isLoading &&
          new Array(3).fill(0).map((el, i) => <LaunchLoading key={i} />)}

        {/* Show launches */}
        {showLaunches &&
          filteredLaunches.map((launch) => (
            <Launch
              key={launch.name}
              rocketName={rocketName(launch.rocket)}
              {...launch}
            />
          ))}
      </LaunchList>
    </LaunchesContainer>
  )
}
