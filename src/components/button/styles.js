import styled from 'styled-components'

export const Button = styled.button`
  align-self: flex-start;
  padding: 0 15px;
  min-width: 100px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0);
  border: var(--border);
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`
