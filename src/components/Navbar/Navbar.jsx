import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { useSelector } from 'react-redux/es/exports'

export default function Navbar() {
  
  const favorite = useSelector(state => state.student)
  return (
    <Container>
      <div>{favorite.name}</div>
      <div>Nav links go here?</div>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.primary};
`