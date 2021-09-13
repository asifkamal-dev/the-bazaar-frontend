import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";

function ProductDetail(props) {
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    console.log("running useEffect");
    getProdDetails();
  }, []);

  async function getProdDetails() {
    console.log("running product details function");
    const id = props.match.params.id;
    const url = `http://localhost:8000/product/${id}`;
    axios
      .get(url)
      .then((res) => {
        const promise = res.data.category;
        const catUrl = `http://localhost:8000/category/${promise}`;
        console.log(catUrl);
        axios.get(catUrl).then((res) => {
          console.log(res.data);
          setCategory(res.data);
        });
        setProduct(res.data);
      })
      .catch(() => {
        console.log("error reterving product data on prod-detail");
      });
  }

  function deleteProduct() {
      const id = props.match.params.id
      const url = `http://localhost:8000/product/${id}`
      axios.delete(url)
      .then((window.location = 'http://localhost:3000/home' ))
  }


  if (!category) return "Loading Data...";
  return (
    <div>
      <Container>
        <h1>Product Detail Page Hit</h1>
        <Card>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>Category:{category.name} </Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button href={`/product/edit/${product.id}`} variant="success">Update</Button>
            <Button onClick={deleteProduct} variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ProductDetail;
