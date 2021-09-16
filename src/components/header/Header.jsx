import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";

function Header() {
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
  if (!categorys) return "Loading Data....";
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
              {categorys.map((category) => (
                <NavDropdown.Item href={`/category/${category.id}`}>
                  {category.name}{" "}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/basket">Basket</Nav.Link>
            <Nav.Link href="/signin">Store Front</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            {/* <Form>
              <Form.Check type="switch" label="turn on user signin" />
            </Form> */}
      </Container>
    </Navbar>
  );
}

export default Header;
