import styled from 'styled-components'

export const LaunchesContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1020px;
  margin: 60px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 60x 20px;
  }
`
