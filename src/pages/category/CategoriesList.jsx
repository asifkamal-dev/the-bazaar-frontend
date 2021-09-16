import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";

function CategoryList() {
  const [categoryInfo, setCategoryInfo] = useState();

  useEffect(() => {
    requestCategoryInfo();
  }, []);

  const requestCategoryInfo = () => {
    const url = "/categories/";
    axios.get(url).then((res) => {
      console.log(res.data);
      setCategoryInfo(res.data);
      console.log("Category Info Recieved to Render on Page");
    });
  };
  if (!categoryInfo) return "Loading Data ... ";
  return (
    <div>
      <Container>
        <h1>Category List Page Hit</h1>
        {categoryInfo.map((category) => (
          <CardGroup>
            <Card className="text-center">
              <Card.Header></Card.Header>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Button href={`/category/${category.id}`} variant="primary">Check It Out</Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </CardGroup>
        ))}
      </Container>
    </div>
  );
}

export default CategoryList;
