import styled from 'styled-components'
import backButtonImage from '../../components/images/back.png'

export const Group = styled.div`
  position: relative;
  margin: 10px 0;

  input[type='password'] {
    letter-spacing: 5em;
  }
`
export const SpanForForm = styled.span`
  
  justify-content: center;
  align-items: center;
  
  
`
export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 500;
 
  
 
  
`
export const InnerDiv1 = styled.div`
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  height: 100vh;
  width: 150vh;
  border: 1px solid #00bfff
 
 
  
  
 
`
export const InnerDiv2 = styled.div`
background-color: #eee;
 
  padding: 10px;
  margin: 10px;
  height: 100vh;
  width: 150;
 
 
  
  
 
`
export const BackButton = styled.button`
background-image: url(${backButtonImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 30px;
height: 30px;
border-radius: 50%;
&:hover::before {
  content: "Nazad";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1;
}

}
`

export const Label = styled.label`
  margin-bottom: 200px;
  font-size: 16px;
`
export const LabelText = styled.span`
  font-weight: bold;
`
export const TitleOrders = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  
`
