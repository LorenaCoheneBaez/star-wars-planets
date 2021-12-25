import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = ({ diameter, climate, terrain}) => {
  return (
    <ListGroup>
      <ListGroup.Item>Diámetro: {diameter}</ListGroup.Item>
      <ListGroup.Item>Clima: {climate}</ListGroup.Item>
      <ListGroup.Item>Terreno: {terrain}</ListGroup.Item>
    </ListGroup>
  );
}

export default CardList;
