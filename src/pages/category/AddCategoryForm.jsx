import { React, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function AddCategoryForm() {
  console.log("add category form hit");
  //     const [categoryForm, setCategoryForm] = useState(initialState)
  //    const initialState={
  //         name: '',
  //         description:''
  //     }
  //     const handleChange = (e) => {
  //         console.log(e.target.checked);
  //         const { name, value } = e.target;
  //         setCategoryForm((oldData) => {
  //           return {
  //             ...oldData,
  //             [name]: value,
  //           };
  //         });
  //       };

  //     const handleSumbit = (e) => {
  //         e.preventDefault()
  //         const url = 'http://localhost:8000/categories/'
  //     }

  return (
    <div>
      <Container>
        <h1>Category Add Form Hit</h1>
      </Container>
    </div>
  );
}

export default AddCategoryForm;
