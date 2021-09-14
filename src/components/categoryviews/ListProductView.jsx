import {useEffect, useState} from "react";
import axios from 'axios'
import { Card, Button, Spinner } from "react-bootstrap";


export const ListProductView = ({ product }) => {
  const [productDetail, setProductDetail] = useState('')
  
  useEffect(() => {
    reqProductDetail();
  }, []);
// console.log(product);
  const reqProductDetail = () => {
    axios.get(product).then((res) => {
      // console.log(res.data);
      setProductDetail(res.data);
      console.log("Product Info Recieved to Render on Page");
    });
  };
  console.log(productDetail);
if (!productDetail) return <Spinner animation="border" />;
  return (
    <div>
      <Card key={productDetail.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productDetail.image} />
        <Card.Body>
          <Card.Title>{productDetail.name}</Card.Title>
          <Card.Subtitle>Created by: {productDetail.created_by}</Card.Subtitle>
          <Card.Text>
            Description:{"\n"} {productDetail.description}
          </Card.Text>
          <Button href={`/product/${productDetail.id}`} variant="primary">
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
