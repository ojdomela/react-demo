import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

export default function Footer() {
  return (
    <Container>
      <div>Footer links go here</div>
      <div>Social links go here</div>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  position: absolute;
  bottom: 0;
`