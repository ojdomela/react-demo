import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../utils/displayReducer'
import { logout } from '../../utils/firebase'

export default function Navbar() {
  const dispatch = useDispatch()
 
  return (
    <Container>
      <div onClick={() => logout()}>Logo goes here. It logs out for now.</div>
      <div onClick={() => dispatch(toggleModal())}>Nav links go here? It toggles the modal for now</div>
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