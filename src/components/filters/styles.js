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

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    margin: 0 0 60px 0;
    width: 100%;
  }
`

export const Link = styled.a`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%);
`
