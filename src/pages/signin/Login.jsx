import React, {useState} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import axiosInstance from '../../components/axios-api-jwt/Axios-Api'
import { useHistory } from 'react-router-dom'

function Login() {
    console.log("register page rendering");
  const history = useHistory();
  const initialState = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post("token/", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token');
        history.push('/');
        console.log(res.data);
      })
      .catch((err) => console.log(err))
  };


  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((oldData) => {
      return {
        ...oldData,
        [name]: value.trim(),
      };
    });
  };
    
    return (
        <div>
      <Container>
        <h1>Sign in</h1>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="unique password here"
            />
          </Form.Group>
          <Button varient="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
        </div>
    )
}

export default Login