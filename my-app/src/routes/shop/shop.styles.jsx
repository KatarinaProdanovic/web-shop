import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  @media (max-width: 768px) {
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
`
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  
`
