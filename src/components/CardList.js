import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const UlCard = ({ diameter, climate, terrain}) => {
  return (
    <ListGroup >
      <ListGroup.Item className="list text-white fs-6">Diámetro: {diameter}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Clima: {climate}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Terreno: {terrain}</ListGroup.Item>
    </ListGroup>
  );
}

export default UlCard;
