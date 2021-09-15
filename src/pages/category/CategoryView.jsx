import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardGroup, Container, Spinner, Button } from "react-bootstrap";
import { ListProductView } from "../../components/categoryviews/ListProductView";

function CategoryView({ match }) {
  const [singleCategory, setSingleCategory] = useState();

  useEffect(() => {
    requestCategoryInfo();
  }, []);

  const requestCategoryInfo = () => {
    const id = match.params.id;
    const url = `http://localhost:8000/category/${id}`;
    axios.get(url).then((res) => {
      console.log(res.data);
      setSingleCategory(res.data);
      console.log("Category Info Recieved to Render on Page");
    });
  };

  function deleteCategory() {
    const id = match.params.id
    const url = `http://localhost:8000/category/${id}`
    axios.delete(url)
    .then((window.location = 'http://localhost:3000/categories'))

  }

  if (!singleCategory) return <Spinner animation="border" />;
  return (
    <div>
      <Container>
        <h1>Single Category View</h1>
        <CardGroup>
          <Card className='text-center position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light'>
            <Card.Title>
              {singleCategory.name}
            </Card.Title>
            <Card.Body> 

            <Card.Text>
              {singleCategory.description}
            </Card.Text>
            <Button variant='secondary' href={`/category/edit/${singleCategory.id}`}  >Edit Category</Button>
            <Button variant='danger' onClick={deleteCategory}  >Delete</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <Button className='m-3' href='/add/product' > New Product </Button>
        {singleCategory.products.map((product) => (
          <ListProductView product = {product} />
        ))}
     </Container>
    </div>
  );
}

export default CategoryView;
