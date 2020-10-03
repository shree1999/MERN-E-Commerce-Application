import React from "react";
import Card from "react-bootstrap/Card";

import Rating from "./Rating";

const Product = ({ item }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${item._id}`}>
        <Card.Img src={item.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${item._id}`}>
          <Card.Title>
            <strong>{item.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={item.rating} text={`${item.numReviews} reviews`} />
          </div>
        </Card.Text>

        <Card.Text as="h3">Price: ${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
