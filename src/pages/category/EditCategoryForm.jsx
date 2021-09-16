import axios from 'axios'
import {React, useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function EditCategoryForm({match}) {
    const [categoryForm, setCategoryForm] = useState()

    useEffect(() => {
        const id = match.params.id
        const url = `/category/${id}`
        axios.get(url)
        .then((res)=> {
            console.log(res.data)
            setCategoryForm(res.data)
            console.log('data received from edit category page');
        })
        .catch((e)=> console.log(e))
        
    }, [])
    
    console.log(categoryForm);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryForm((oldData) => {
          return {
            ...oldData,
            [name]: value,
          };
        });
        console.log(categoryForm);
      };

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(categoryForm)
        const id = match.params.id
        const url = `/category/${id}`
        axios.put(url, categoryForm)
        .then((res)=> console.log(res))
        .then((window.location = '/categories'))
        .catch((err)=> console.log(err))
    }

    if (!categoryForm) return 'Loading Data ...'
    return (
        <div>
            <Container>
            <h1>Edit Category Form</h1>
            <Form noValidate onSubmit={handleSumbit}>
          <Form.Group controlId='name' >
            <Form.Label>Category Name</Form.Label>
            <Form.Control required name='name' value={categoryForm.name} onChange={handleChange} type='text' placeholder='New category like Fashion' />
          </Form.Group>
          <Form.Group controlId='description' >
            <Form.Label>Description</Form.Label>
            <Form.Control required name='description' value={categoryForm.description} onChange={handleChange} as='textarea' style={{height:'100px'}} placeholder='Describe the category here ...' />
          </Form.Group>
          <Button varient='primary' type='submit' >Submit</Button>

        </Form>

            </Container>
        </div>
    )
}

export default EditCategoryForm
