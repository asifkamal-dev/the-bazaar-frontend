import React from 'react'
import { Container, Button } from 'react-bootstrap'

function Login() {
    return (
        <div>
            <Container>
            <h1>Store Front </h1>
            <Button className='m-3' href='/add/product' > New Product </Button>
            <Button className='m-3' href='/add/category' > New Category </Button>
            </Container>
        </div>
    )
}

export default Login