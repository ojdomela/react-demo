import React from 'react'
import styled from 'styled-components'
import data from '../../data'

export default function ProductOverview() {
  console.log(data)
  return (
    <Container>
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  )
}

const ProductCard = ({ name, price, description, image, id }) => {
  return (
    <Card>
      <h2>{name}</h2>
      <ImagePlaceholder/>
      <p>{description}</p>
      <p>{price}</p>
      <Wrapper>
        <button>+</button>
        <p>Amount: </p>
        <button>-</button>
      </Wrapper>
    </Card>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
`

const Card = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background-color: grey;
  border-radius: 50%;
`

const Wrapper = styled.div`
  display: flex;
  `