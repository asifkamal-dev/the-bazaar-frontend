import { useState } from "react";
import axiosInstance from "../../components/axios-api-jwt/Axios-Api";
import { useHistory } from "react-router";
import { Container, Form, Button } from "react-bootstrap";

function Register() {
  console.log("register page rendering");
  const history = useHistory();
  const initialState = Object.freeze({
    email: "",
    username: "",
    password: "",
  });
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post("user/register/", {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        console.log(res);
        history.push("/login");
        console.log(res.data);
      });
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
        <h1>Registration Page hit</h1>
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
          <Form.Group controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control
              required
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username goes here"
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
  );
}

export default Register;
