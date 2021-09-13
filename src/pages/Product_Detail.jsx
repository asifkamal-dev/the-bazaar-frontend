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
        // checking the data recieved
        // console.log("Unique Product Data recieved on productdetailpage.jsx");
        // console.log(res.data.category);
        const promise = res.data.category;
        // console.log(promise);
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

  // function requestProduct() {
  //   const id = props.match.params.id;
  //   const url = `http://localhost:8000/product/${id}`;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       // checking the data recieved
  //       console.log("Unique Product Data recieved on productdetailpage.jsx");
  //       console.log(res.data);
  //       setProduct(res.data);
  //       return res.data
  //     })
  //     .catch(() => {
  //       console.log("error reterving product data on prod-detail");
  //     })
  // }
  // async function requestData() {
  //     await requestProduct()
  //   axios
  //     .get(`http://localhost:8000/category/${product.category}`)
  //     .then((res) => {
  //       console.log("category axios hit");
  //       console.log(res.data);
  //       setCategory(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       console.log("error recieved reteriving data");
  //     });
  // }

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
            <Button variant="success">Update</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ProductDetail;
