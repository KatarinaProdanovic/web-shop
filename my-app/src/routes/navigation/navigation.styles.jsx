import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font: inherit;
  background: #D6DBDF ;
  border: 1px solid #282626;
  padding: 0.5rem 1.5rem;
  color: #282626;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  text-decoration:none;   
  
`
export const Button = styled.button`
  padding: 10px 15px;
  font: inherit;
  background: #919191;
  border: 1px solid #282626;
  padding: 0.5rem 1.5rem;
  color: #282626;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  text-decoration:none;
  
  
`
