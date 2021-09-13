import axios from "axios";
import { React, useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddProductForm() {
  const initialState = {
    category: null,
    created_by: null,
    name: "",
    description: "",
    price: null,
    in_stock: false,
  };

  const [productForm, setProductForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  console.log(productForm);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thought i needed headers, I didn't for submission
    // const headers = { "Content-Type": "application/json" };
    console.log(productForm);

    const newProduct = {
      name: productForm.name,
      description: productForm.description,
      category: parseInt(productForm.category),
      created_by: 1,
      price: productForm.price,
      in_stock: true,
    };
    console.log(newProduct);
    // Submission through backend
    const url = "http://localhost:8000/products/";
    axios
      .post(url, newProduct)
      .then((res) => console.log(res.data))
      // .then((window.location = "http://localhost:3000/home"));
    setProductForm(initialState);
  };

  return (
    <div>
      <Container>
        <h1>Product Add Form Page</h1>
        <Form noValidate validate={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              name="name"
              // value={setProductForm.name}
              onChange={handleChange}
              type="text"
              placeholder="Something like a Vase"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              name="description"
              onChange={handleChange}
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Provide a description here"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label controlID="category">Select Category </Form.Label>
            <Form.Select
              name="category"
              value={setProductForm.category}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="7">Pottery</option>
              <option value="8">Arts</option>
              <option value="9">Crafts</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              name="price"
              // value={setProductForm.name}
              onChange={handleChange}
              type="number"
              placeholder="20.99"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              controlID="in_stock"
              label="In Stock"
              name="in_stock"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {" "}
            Submit{" "}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddProductForm;
