import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: rgba(0, 0, 0, 0);
  border: var(--border);

  &:after {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    content: '';
    left: 5px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
