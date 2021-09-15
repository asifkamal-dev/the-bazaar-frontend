import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";

function Header() {
  const [category, setCategory] = useState();

  useEffect(() => {
    requestCategoryInfo();
  }, []);

  const requestCategoryInfo = () => {
    const url = "http://localhost:8000/categories/";
    axios.get(url).then((res) => {
      console.log(res.data);
      setCategory(res.data);
      console.log("Category Details Recieved in Header");
    });
  };
  if (!category) return "Loading Data...."
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">The Bazaar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/categories"> View All </NavDropdown.Item>
            {category.map((category)=> (
              <NavDropdown.Item href={`/category/${category.id}`}>{category.name} </NavDropdown.Item>
              ))}
              </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="signin">Sign in</Nav.Link>
            <Nav.Link href="signin">Basket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar bg='dark'  variant="dark">
    //   <Container >
    //     <Navbar.Brand href="/">The Bazaar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="/home">Home</Nav.Link>
    //       <Nav.Link href="/categories">Categories</Nav.Link>
    //       <Nav.Link href="#">Sign Out</Nav.Link>
    //     </Nav>
    //     <Form>
    //       <Form.Check type='switch' label='turn on user front'  />
    //     </Form>
    //   </Container>
    // </Navbar>
  );
}

export default Header;
