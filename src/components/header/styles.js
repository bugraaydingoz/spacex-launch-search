import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;
  text-align: center;
`

export const Heading1 = styled.h1`
  display: flex;
  margin: 0 0 20px 0;
  font-weight: bold;
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`

export const Heading2 = styled.h2`
  display: flex;
  margin: 0;
  font-weight: normal;
  font-size: 24px;
`
