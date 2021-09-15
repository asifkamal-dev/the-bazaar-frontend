import { React, useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

function AddCategoryForm() {
  console.log("add category form hit");
  const initialState = {
    name: "",
    description: "",
  };
  const [categoryForm, setCategoryForm] = useState(initialState);
  const handleChange = (e) => {
    console.log(categoryForm);
    const { name, value } = e.target;
    setCategoryForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/categories/";
    console.log(categoryForm);
    axios.post(url, categoryForm)
    .then((res)=> console.log(res.data))
    .then((window.location = 'http://localhost:3000/categories'))
    setCategoryForm(initialState)
  };

  return (
    <div>
      <Container>
        <h1>Category Add Form Hit</h1>
        <Form noValidate onSubmit={handleSumbit}>
          <Form.Group controlId='name' >
            <Form.Label>Category Name</Form.Label>
            <Form.Control required name='name' onChange={handleChange} type='text' placeholder='New category like Fashion' />
          </Form.Group>
          <Form.Group controlId='description' >
            <Form.Label>Description</Form.Label>
            <Form.Control required name='description' onChange={handleChange} as='textarea' style={{height:'100px'}} placeholder='Describe the category here ...' />
          </Form.Group>
          <Button varient='primary' type='submit' >Submit</Button>

        </Form>
      </Container>
    </div>
  );
}

export default AddCategoryForm;
