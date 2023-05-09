
import styled from 'styled-components'

export const Select = styled.select`
  display: block;
  width: 70%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1a0000;
  background-color: #00bfff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
  }
`

export const ComboBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
`
