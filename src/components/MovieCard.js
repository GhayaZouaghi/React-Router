import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

import "./MovieCard.css";

import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="Crd">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Link
            to={{
              pathname: `/Movie/${movie.id}`,
              state: movie,
            }}
          >
            <Card.Title>{movie.title}</Card.Title>
          </Link>
          <Card.Text>{movie.description}</Card.Text>
          <Rate disabled defaultValue={movie.Rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
