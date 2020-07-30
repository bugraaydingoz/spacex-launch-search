import styled from 'styled-components'

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 14px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 999px;
  border: ${({ type }) => `2px solid var(--${type}-color)`};
  color: ${({ type }) => `var(--${type}-color)`};
`
