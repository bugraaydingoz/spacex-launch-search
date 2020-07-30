import styled from 'styled-components'

export const FiltersContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
  margin: 0 60px 20px 0px;
  padding: 30px;
  width: 300px;
  background: var(--elevation-color);
`

export const Link = styled.a`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%);
`
