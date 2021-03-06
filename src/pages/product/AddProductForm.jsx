import axios from "axios";
import { React, useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddProductForm() {
  // bringing in the categories for this form
  const [categorys, setCategorys] = useState();

  useEffect(() => {
    requestCategoryInfo();
  }, []);

  const requestCategoryInfo = () => {
    const url = "/categories/";
    axios.get(url).then((res) => {
      console.log(res.data);
      setCategorys(res.data);
      console.log("Category Details Recieved in Header");
    });
  };

  const initialState = {
    category: null,
    created_by: null,
    name: "",
    description: "",
    image: "",
    price: null,
    in_stock: false,
  };

  const [productForm, setProductForm] = useState(initialState);
  const [checkBox, setCheckBox] = useState();

  const handleChange = (e) => {
    console.log(e.target.checked);
    const { name, value } = e.target;
    setProductForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const handleCheckBoxChange = (e) => {
    console.log(e.target.checked);
    setCheckBox({
      in_stock: e.target.checked,
    });
  };

  console.log(productForm);

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
      image: productForm.image,
      price: productForm.price,
      in_stock: true,
    };

    console.log(newProduct);
    // Submission through backend
    const url = "/products/";
    console.log(newProduct);
    axios
      .post(url, newProduct)
      .then((res) => console.log(res.data))
      .then((window.location = "/home"));
    setProductForm(initialState);
  };
  if (!categorys) return "Loading Data....";
  return (
    <div>
      <Container>
        <h1>Product Add Form Page</h1>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              name="name"
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
              {categorys.map((category)=> (
                <option value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              required
              name="image"
              onChange={handleChange}
              type="text"
              placeholder="http:// ... something.jpg"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
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
            {/* <Form.Control.Feedback>Looks Good!</Form.Control.Feedback> */}
          </Form.Group>
          {/* <Form.Group>
            <Form.Check
              type="checkbox"
              controlID="in_stock"
              label="In Stock"
              name="in_stock"
              onChange={handleCheckBoxChange}
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddProductForm;
