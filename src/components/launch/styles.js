import styled from 'styled-components'

export const LaunchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px auto;
  width: 660px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const LaunchContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  height: 210px;
  background-color: var(--elevation-color);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const Image = styled.img`
  display: flex;
  background-color: #1f1f1f;
  width: 220px;
  height: 100%;

  @media (max-width: 768px) {
    height: 100px;
    align-self: center;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 440px;
  padding: 20px 30px;
`

export const Heading3 = styled.h3`
  margin: 0 15px 20px 0;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`

export const Heading5 = styled.h5`
  margin: 0 0 10px 0;
  font-weight: normal;
  font-size: 20px;
  color: var(--secondary-text);
`

export const Paragraph = styled.p`
  margin: 0 0 40px 0;
  font-weight: normal;
  font-size: 18px;
  color: #fff;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Dot = styled.div`
  display: flex;
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background-color: #fff;
`
export const Text = styled.span`
  display: inline-flex;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`

export const DetailText = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0 5px 0;
  font-weight: normal;
  font-size: 16px;
  color: var(--secondary-text);
`
