import axios from "axios";
import { React, useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";

function EditProductForm({ match }) {
  const [productForm, setProductForm] = useState();
  const [categorys, setCategorys] = useState();


  useEffect(() => {
    getProductData()
  }, []);


  const getProductData = () => {
    const id = match.params.id;
    console.log(id);
    const url = `/product/${id}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProductForm(res.data);
        const url =  "/categories/"
        axios.get(url).then((res)=> {
          console.log(res.data)
          setCategorys(res.data)
          console.log('Category details received in EditProductForm');
        })
      })
      .catch((e) => {
        console.log(e);
      });
  }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productForm);

    const editedProduct = {
        name: productForm.name,
        description: productForm.description,
        category: parseInt(productForm.category),
        created_by: 1,
        price: productForm.price,
        in_stock: true,
    }
    console.log(editedProduct);
    const id = match.params.id
    const url = `/product/${id}`;
    axios.put(url, editedProduct)
    .then((res) => {
        console.log(res.data);
    })
    .then((window.location = '/home'))
    .catch((err) => console.log(err.data))

  };
  if (!categorys) return "Loading Data...";
  return (
    <div>
      <Container>
        <h1>Edit Product Form Hit</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              name="name"
              value={productForm.name}
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
              value={productForm.description}
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
              value={productForm.category}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              {categorys.map((category)=> (
                <option value={category.id}>{category.name}</option>
              ))}
              {/* <option value="7">Pottery</option>
              <option value="8">Arts</option>
              <option value="9">Crafts</option> */}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              required
              name="image"
              value={productForm.image}
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
              value={productForm.price}
              onChange={handleChange}
              type="number"
              placeholder="20.99"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              controlID="in_stock"
              label="In Stock"
              name="in_stock"
              value={productForm.in_stock ? 'on' : "off"}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditProductForm;
