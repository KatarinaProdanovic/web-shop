import styled from 'styled-components'

export const BaseButton = styled.button`
  min-width: 100px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #00bfff;
  color: black;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #919191;
    color: white;
    border: 1px solid black;
  }
  
`
