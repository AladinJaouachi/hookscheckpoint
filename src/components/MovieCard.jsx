
import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ film }) => {
 
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film.stream_img} />
        <Card.Body>
          <Card.Title>{film.stream_name}</Card.Title>
          <Card.Text>
            {film.descrip}
          </Card.Text>
          <Card.Title>{film.rate}</Card.Title>

        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
