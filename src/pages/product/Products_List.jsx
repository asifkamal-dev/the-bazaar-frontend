import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Container, CardGroup } from "react-bootstrap";
// import Card from "react-bootstrap/card";
// import Button from "react-bootstrap/Button";
// import { Container } from "react-bootstrap";

function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await requestProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  const requestProducts = () => {
    const url = "http://localhost:8000/products/";
    axios
      .get(url)
      .then((res) => {
        // checking the data recieved
        console.log(res.data);
        setProducts(res.data);
        console.log("Product Data recieved on product-view.jsx");
      })
      .catch(() => {
        console.log("error reterving product data on prod-view");
      });
  };

  // ALTERNATIVE WAY OF DOING AXIOS AWAIT REQUEST
  // const requestProducts = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8000/products/")
  //     console.log(res.data);
  //     setProducts(res.data)
  //   } catch (err){
  //     console.error(err)
  //   }
  // };

  // function getEventData() {
  //   const url = "http://localhost:8000/products/";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);
  //       setEventData(data);
  //       console.log("data has been received");
  //     })
  //     .catch(() => {
  //       console.log("error retreiving data");
  //     });
  // }

  //statement to wait for products to load before loading data.
  if (!products) return "Loading Data...";
  // console.log(products);
  // console.log(products[1].category_id);

  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Punny headline</h1>
          <p className="lead fw-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="/">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <Container>
        
        <CardGroup>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
              <Col>
                <Card key={product.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>Category: {product.category}</Card.Subtitle>
                    <Card.Subtitle>
                      Created by: {product.created_by}
                    </Card.Subtitle>
                    <Card.Subtitle>Product id: {product.id}</Card.Subtitle>
                    <Card.Text>Description:{'\n'} {product.description}</Card.Text>
                    <Button href={`/product/${product.id}`} variant="primary">
                      View
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
}

export default ProductsList;
